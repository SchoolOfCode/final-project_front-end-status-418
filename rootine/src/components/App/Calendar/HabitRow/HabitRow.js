import { useEffect, useState } from "react";
import "./HabitRow.css";

function HabitRow({ habitName, habitid, section }) {
	console.log("habitid", habitid);
	console.log("habitName", habitName);
	console.log("section", section);
	let initialiseHabits = [];
	const [habitItems, setHabitItems] = useState(initialiseHabits);
	// const [habitLength, setHabitLength] = useState(habitItems.length);

	// if (habitsByRowId.length > 1) {
	// } else {
	// 	throw new Error("No habits found for user");
	// }
	// const habitsByRowId = habitArr.filter((i) => i.habit_id === habitid);

	/*Mock Data */
	// const habitArr = [
	// 	{
	// 		habit_id: 1,
	// 		date: "20220807",
	// 		status: "complete",
	// 	},
	// 	{
	// 		habit_id: 1,
	// 		date: "20220806",
	// 		status: "complete",
	// 	},
	// 	{
	// 		habit_id: 1,
	// 		date: "20220805",
	// 		status: "complete",
	// 	},
	// 	{
	// 		habit_id: 1,
	// 		date: "20220804",
	// 		status: "complete",
	// 	},
	// 	{
	// 		habit_id: 1,
	// 		date: "20220803",
	// 		status: "complete",
	// 	},
	// 	{
	// 		habit_id: 1,
	// 		date: "20220802",
	// 		status: "complete",
	// 	},
	// 	{
	// 		habit_id: 1,
	// 		date: "20220801",
	// 		status: "skip",
	// 	},
	// 	{
	// 		habit_id: 1,
	// 		date: "20220731",
	// 		status: "complete",
	// 	},
	// 	{
	// 		habit_id: 1,
	// 		date: "20220730",
	// 		status: "miss",
	// 	},
	// ];

	// let habitArr = [
	// 	{
	// 		habit_id: 4,
	// 		date: "20220802",
	// 		status: "complete",
	// 	},
	// 	{
	// 		habit_id: 4,
	// 		date: "20220803",
	// 		status: "miss",
	// 	},
	// 	{
	// 		habit_id: 4,
	// 		date: "20220804",
	// 		status: "skip",
	// 	},
	// 	{
	// 		habit_id: 5,
	// 		date: "20220802",
	// 		status: "complete",
	// 	},
	// 	{
	// 		habit_id: 5,
	// 		date: "20220803",
	// 		status: "miss",
	// 	},
	// 	{
	// 		habit_id: 6,
	// 		date: "20220804",
	// 		status: "skip",
	// 	},
	// 	{
	// 		habit_id: 6,
	// 		date: "20220803",
	// 		status: "complete",
	// 	},
	// ];
	// 🎉 ALMOST READY TO FETCH the habitArr data from backend by userid!!

	useEffect(() => {
		const habitsfromDatabase = retrieveHabitsByHabitId();
		if (habitsfromDatabase.length > 1) {
			setHabitItems(habitsfromDatabase);
		} else {
			throw new Error("no habits found for user");
		}
	}, []);

	async function retrieveHabitsByHabitId() {
		const url = "http://localhost:3001";
		const fetchUrl = `${url}/calendar/${habitid}`;
		console.log(fetchUrl);
		const result = await fetch(fetchUrl);
		const payload = await result.json();
		const data = payload.payload;
		// console.log(data);
		const habitsfromDatabase = convertBackEndDataToFrontEnd(data);
		console.log("h", habitsfromDatabase);
		return habitsfromDatabase;
	}

	function convertBackEndDataToFrontEnd(data) {
		let h = data.map((ob) => ({
			habit_id: ob.habit_id,
			date: ob.date,
			status: ob.status,
		}));
		return h;
	}

	// console.log("habitsByRowId", habitid, habitsByRowId);

	/** Function that takes in habit state (habitObj), new value of status, id of habitItemList obj to change,
     and returns state with updated status  
  */
	const changeStatus = (state, newStatus, id) => {
		// shallow copy of habitObj
		let newArr = [...state];
		// console.log("newArr", newArr);

		// index of habitItem we want to change
		let indexOfObject = newArr.findIndex((element) => element.date === id);
		// changed habitItem
		let updatedObj = { ...newArr[indexOfObject], status: newStatus };

		// making a duplicate of whole habitItems array before & after position of our Item
		let firstChunk = newArr.slice(0, indexOfObject);
		let secondChunk = newArr.slice(indexOfObject + 1);

		// inserting our updated item into duplicate array
		let updatedArr = [...firstChunk, updatedObj, ...secondChunk];
		// let updatedArr = [updatedObj];
		// console.log("updatedArr", updatedArr);

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
		// console.log("index", index);

		// 📝 PLAN
		// if index IS NOT FOUND (aka returns -1, aka date does not exist in habitArray)
		// then, send a post request to the db with the new creation
		// then, do not do rest of toggleState function

		//else, if index IS FOUND (aka returns != 1, aka date does already exist in habitItems array), then toggle the state
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
			// console.log("updatedState", updatedState);
			// console.log("(Before) Status: ", habitCopy[index].status);
			// console.log(" (After) Status: ", updatedState[index].status);
			setHabitItems(updatedState);
		}
	}

	async function postNewCalendarData(body) {
		const url = "http://localhost:3001";
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
	// 📝 PLAN - now done ✅
	// When habit item doesn't exist, needs to
	// (1) Still display a white box on the page
	// (2) When clicked, create a new entry in the calendar database with status: "complete"
	// (3) Then, it can be interacted with normally because the data will exist.

	// 🙋‍♂️ FIRST: Even if the data doesn't exist in the habitArry, a white square (aka button with className = "incomplete") should still exist
	// 🤞 SECOND: Send a post request when its clicked on

	try {
		return (
			<div className="habit-row">
				<div className="habit-name-container">
					<h3 className="habit-name">{habitName}</h3>
				</div>
				<div className="habit-item-container">
					{section.map((sectionday) => {
						const ymd = sectionday.format("YYYYMMDD");
						/* console.log("habitItem", habitItems[0].date);
						   console.log("sectiondayformatted", ymd); */
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

						/* console.log("displayItem", habitid, ymd, displayItem); */

						return (
							<button
								onClick={() => toggleState(displayItem[0].date)}
								className={`habit-item ${displayItem[0].status}`}
								id={ymd}
								key={ymd}
							/>
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
