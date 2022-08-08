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

  /* Function which takes in habit state (habitObj), new value of status, id of habitItemList obj to change,
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

    //console.log(" updatedArr", updatedArr);
    return updatedArr;
  };

  /* Function which takes in id and when called checks the value of status for particular 
habitItem and changes it accordingly
*/
  function toggleState(id) {
    /* defining the index of the specific object in habitItemList that we are toggling */
    //console.log("toggleState called here.")
    console.log("id", id);
    let habitCopy = [...habitItems];
    console.log("habitCopy", habitCopy);
    let index = habitCopy.findIndex((element) => element.date === id);
    console.log("index", index);
    /* defining the status property we want to change using the above index */
    let status = habitCopy[index].status;
    //console.log("(Before) Status: "+ habit.habitItemList[index].status)

    let updatedState = [];

    switch (status) {
      case "incomplete":
        updatedState = changeStatus(habitItems, "complete", id);
        break;
      case "complete":
        updatedState = changeStatus(habitItems, "skip", id);
        break;
      case "skip":
        updatedState = changeStatus(habitItems, "miss", id);
        break;
      default:
        updatedState = changeStatus(habitItems, "incomplete", id);
        break;
    }
    console.log("(Before) Status: ", habitCopy[index].status);
    console.log(" (After) Status: ", updatedState[index].status);
    setHabitItems(updatedState);
  }

  return (
    <div className="habit-row">
      <div className="habit-name-container">
        <h3 className="habit-name"> {habitName} </h3>
      </div>
      <div className="habit-item-container">
        {section.map((sectionday) => {
          console.log("habitItem", habitItems[0].date);
          console.log("sectiondayformatted", sectionday.format("YYYYMMDD"));
          let displayItem = habitItems.filter(
            (item) => item.date === sectionday.format("YYYYMMDD")
          );
          console.log("displayItem", displayItem);
          return (
            <button
              onClick={() => toggleState(displayItem.date)}
              className={`habit-item ${displayItem.status}`}
              id={displayItem.date}
              key={displayItem.date}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HabitRow;

/*
function HabitItem () => {
    const [status,setStatus] = useState("Incomplete")
    function toggleState () {
        switch (status) {
            case "Incomplete":
                setStatus("Complete")
                break;
            case "Complete":
                setStatus("Skip")
                break;
            case "Skip":
                setStatus("Miss")
                break;
            default:
                setStatus("Incomplete")
                break;
        }
    }
    return (
        <button
            onClick={toggleState}
            className="habit-item"
            id={status}
        />
        )
    }
*/
