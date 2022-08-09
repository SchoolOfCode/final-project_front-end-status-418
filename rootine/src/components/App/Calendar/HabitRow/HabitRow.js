import { useState } from "react";
import "./HabitRow.css";

function HabitRow({ habitName, habitid, section }) {
	/*Mock Data */
	const habitArr = [
		{
			habit_id: 1,
			date: "20220807",
			status: "complete",
		},
		{
			habit_id: 1,
			date: "20220806",
			status: "complete",
		},
		{
			habit_id: 1,
			date: "20220805",
			status: "complete",
		},
		{
			habit_id: 1,
			date: "20220804",
			status: "complete",
		},
		{
			habit_id: 1,
			date: "20220803",
			status: "complete",
		},
		{
			habit_id: 1,
			date: "20220802",
			status: "complete",
		},
		{
			habit_id: 1,
			date: "20220801",
			status: "skip",
		},
		{
			habit_id: 1,
			date: "20220731",
			status: "complete",
		},
		{
			habit_id: 1,
			date: "20220730",
			status: "miss",
		},
	];

	const [habitItems, setHabitItems] = useState(habitArr);

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
		console.log("currentDate", currentDate);
		let habitCopy = [...habitItems];
		// console.log("habitCopy", habitCopy);
		let index = habitCopy.findIndex(
			(element) => element.date === currentDate
		);
		console.log("index", index);

		// 📝 PLAN
		// if index is not found (aka returns -1, aka date does not exist in habitArray)
		// then, send a post request to the db with the new creation
		// then, do not do rest of toggleState function

		if (index === -1) {
			//define new data
			const newHabitCalItem = {
				habit_id: habitid,
				date: currentDate,
				status: "complete",
			};

			//TODO: SEND THIS TO NEW ASYNC Function
			// ❌ NOt working yet :)
			//send post request with data in correct format
			const url = "https://status418-project.herokuapp.com/";
			console.log(url);
			// const result = await fetch(url + "/calendar", {
			// 	method: "POST",
			// 	headers: { "Content-type": "application/json" },
			// 	body: newHabitCalItem,
			// });

			// console.log(result);
		}

		/* defining the status property we want to change using the above index */
		let status = habitCopy[index].status;
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
				updatedState = changeStatus(habitItems, "skip", currentDate);
				break;
			case "skip":
				updatedState = changeStatus(habitItems, "miss", currentDate);
				break;
			default:
				updatedState = changeStatus(
					habitItems,
					"incomplete",
					currentDate
				);
				break;
		}
		// console.log("(Before) Status: ", habitCopy[index].status);
		// console.log(" (After) Status: ", updatedState[index].status);
		setHabitItems(updatedState);
	}

	// 📝 PLAN
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
					<h3 className="habit-name"> {habitName} </h3>
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

						console.log("displayItem", displayItem);
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
