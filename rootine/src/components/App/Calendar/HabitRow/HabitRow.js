import { useEffect, useState } from "react";
import { Heading, Center } from "@chakra-ui/react";
// import { IoPause, IoClose, IoCheckmark } from "@chakra-ui/icons";
import { IoClose, IoCheckmark, IoPauseOutline } from "react-icons/io5";

import "./HabitRow.css";

function HabitRow({ onClick, habitName, habitid, section }) {
	// console.log("habitid", habitid);
	// console.log("habitName", habitName);
	// console.log("section", section);
	let initialiseHabits = [];
	const [habitItems, setHabitItems] = useState(initialiseHabits);

	async function retrieveHabitsByHabitId(hId) {
		// const url = "http://localhost:3001";
		const url = "https://status418-project.herokuapp.com";
		const fetchUrl = `${url}/calendar/${hId}`;
		// console.log(fetchUrl);
		const result = await fetch(fetchUrl);
		const payload = await result.json();
		const data = payload.payload;
		const habitsfromDatabase = convertBackEndDataToFrontEnd(data);
		// console.log("h", habitsfromDatabase);
		if (habitsfromDatabase.length > 1) {
			setHabitItems(habitsfromDatabase);
		} else {
			throw new Error("no habits found for user (retrievehabitsbyid)");
		}
	}

	function convertBackEndDataToFrontEnd(data) {
		let h = data.map((ob) => ({
			habit_id: ob.id,
			date: ob.date,
			status: ob.status,
		}));
		return h;
	}

	useEffect(
		() => {
			retrieveHabitsByHabitId(habitid);
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
	);

	/** Function that takes in habit state (habitObj), new value of status, id of habitItemList obj to change,
     and returns state with updated status  
  */
	const changeStatus = (state, newStatus, id) => {
		// shallow copy of habitObj
		let newArr = [...state];

		// index of habitItem we want to change
		let indexOfObject = newArr.findIndex((element) => element.date === id);
		// changed habitItem
		let updatedObj = { ...newArr[indexOfObject], status: newStatus };

		// making a duplicate of whole habitItems array before & after position of our Item
		let firstChunk = newArr.slice(0, indexOfObject);
		let secondChunk = newArr.slice(indexOfObject + 1);

		// inserting our updated item into duplicate array
		let updatedArr = [...firstChunk, updatedObj, ...secondChunk];

		return updatedArr;
	};

	/** Function that takes in id and when called checks the value of status for particular 
habitItem and changes it accordingly
*/
	function toggleState(currentDate) {
		/* defining the index of the specific object in habitItemList that we are toggling */
		// console.log("currentDate", habitid, currentDate, typeof currentDate);
		let habitCopy = [...habitItems];
		// console.log("habitCopy", habitCopy);
		let index = habitCopy.findIndex(
			(element) => element.date === currentDate
		);

		if (index === -1) {
			//define new data
			const newHabitCalItem = {
				habit_id: habitid,
				date: currentDate,
				status: "complete",
			};
			habitCopy.push(newHabitCalItem);
			setHabitItems(habitCopy);
			postNewCalendarData(newHabitCalItem);
		} else {
			/* defining the status property we want to change using the above index */
			let status = habitCopy[index].status;
			// console.log("status", habitid, currentDate, status);
			let updatedState = [];

			switch (status) {
				case "incomplete":
					updatedState = changeStatus(
						habitItems,
						"complete",
						currentDate
					);
					break;
				case "complete":
					updatedState = changeStatus(
						habitItems,
						"skip",
						currentDate
					);
					break;
				case "skip":
					updatedState = changeStatus(
						habitItems,
						"miss",
						currentDate
					);
					break;
				default:
					updatedState = changeStatus(
						habitItems,
						"incomplete",
						currentDate
					);
					break;
			}
			// console.log("updatedState", updatedState);
			setHabitItems(updatedState);
			// console.log("updatedState", updatedState);
			// console.log("updatedState index", updatedState[index]);
			// console.log(habitid);
			patchNewCalendarData(updatedState[index]);
		}
	}

	async function postNewCalendarData(body) {
		// const url = "http://localhost:3001";
		const url = "https://status418-project.herokuapp.com";
		const fetchUrl = `${url}/calendar`;
		console.log(fetchUrl);

		const result = await fetch(url + "/calendar", {
			method: "POST",
			headers: { "Content-type": "application/json" },
			body: JSON.stringify(body),
		});
		const data = await result.json();
		return data.success;
	}

	async function patchNewCalendarData(item) {
		try {
			// const url = "http://localhost:3001";
			const url = "https://status418-project.herokuapp.com";
			const patchUrl = `${url}/calendar/${habitid}?date=${item.date}`;
			// console.log(patchUrl);
			// console.log("patchCal item", item);

			const result = await fetch(patchUrl, {
				method: "PATCH",
				headers: {
					"Content-type": "application/json",
					"Access-Control-Allow-Origin": "*",
				},
				body: JSON.stringify({ status: item.status }),
			});
			const data = await result.json();
			return data.success;
		} catch (error) {
			console.log(error);
		}
		return;
	}

	try {
		return (
			<div className="habit-row-grid">
				<div className="habit-name-container">
					<Heading
						as="h3"
						size="sm"
						className="habit-name"
						onClick={onClick}>
						{habitName}
					</Heading>
				</div>
				<div className="habit-item-container">
					{section.map((sectionday) => {
						const ymd = sectionday.format("YYYYMMDD");
						let displayItem = habitItems.filter(
							(item) => item.date === ymd
						);

						if (displayItem.length < 1) {
							displayItem = [
								{
									status: "incomplete",
									date: ymd,
									habit_id: habitid,
								},
							];
						}
						return (

							<Center key={ymd + "_" + habitid}>
								{/* <p>
									{ymd}, {displayItem[0].date}, status:{" "}
									{displayItem[0].status}, id:{" "}
									{displayItem[0].habit_id}
								</p> */}
								<button
									onClick={() =>
										toggleState(displayItem[0].date)
									}
									className={`habit-item ${displayItem[0].status}`}
									id={ymd}
									key={ymd}>
									<HabitRowIcon
										status={displayItem[0].status}
									/>
								</button>
							</Center>
						);
					})}
				</div>
			</div>
		);
	} catch (error) {
		console.log(error);
	}
}

/** HabitRowIcon is a component that lives inside each habit row button, and shows a different icon depending on the status of the habit for that day. Accessibility feature for people with colourblindess */
function HabitRowIcon({ status }) {
	switch (status) {
		case "complete":
			return <IoCheckmark />;
		case "skip":
			return <IoPauseOutline />;
		case "miss":
			return <IoClose />;
		case "incomplete":
			return;
		default:
			return;
	}
}

export default HabitRow;
