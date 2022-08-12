import { useEffect, useState } from "react";
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
			habit_id: ob.habit_id,
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
		console.log("currentDate", habitid, currentDate, typeof currentDate);
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
			console.log("status", habitid, currentDate, status);
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
			setHabitItems(updatedState);
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

	try {
		return (
			<div className="habit-row">
				<div className="habit-name-container">
					<h3 className="habit-name" onClick={onClick}>
						{habitName}
					</h3>
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
							<div key={ymd + "_" + habitid}>
								{/* <p>
									{ymd}, {displayItem.status}
								</p> */}
								<button
									onClick={() =>
										toggleState(displayItem[0].date)
									}
									className={`habit-item ${displayItem[0].status}`}
									id={ymd}
									key={ymd}
								/>
							</div>
						);
					})}
				</div>
			</div>
		);
	} catch (error) {
		console.log(error);
	}
}

export default HabitRow;
