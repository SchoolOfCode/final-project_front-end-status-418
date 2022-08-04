import { useState } from "react";
import "./HabitRow.css";

function HabitRow() {
  //   const [status, setStatus] = useState("Incomplete");
  const habitObj = {
    id: "1",
    name: "Running",
    habitItemList: [
      { status: "complete", date: "2022-08-02" },
      { status: "skip", date: "2022-08-03" },
      { status: "miss", date: "2022-08-04" },
      { status: "miss", date: "2022-08-05" },
      { status: "incomplete", date: "2022-08-06" },
    ],
  };

  const [habit, setHabit] = useState(habitObj);

  /* Function which takes in habit state (habitObj), new value of status, id of habitItemList obj to change,
     and returns state with updated status  
  */
  const changeStatus = (state, newStatus, id) => {
    // shallow copy of habitObj
    let newObj = { ...state };
    let itemsList = newObj.habitItemList;
    // index of habitItem we want to change
    let indexOfObject = itemsList.findIndex((element) => element.date === id);
    // changed habitItem
    let updatedObj = { ...itemsList[indexOfObject], status: newStatus };

    // making a duplicate of whole habitItems array before & after position of our Item
    let firstChunk = itemsList.slice(0, indexOfObject);
    let secondChunk = itemsList.slice(indexOfObject + 1);

    // inserting our updated item into duplicate array
    let updatedArr = [...firstChunk, updatedObj, ...secondChunk];

    let updatedHabitObj = { ...state, habitItemList: updatedArr };
    console.log("updatedHabitObj", updatedHabitObj);
    return updatedHabitObj;
  };

  console.log(changeStatus(habit, "Skip", "2022-08-05"));

  /* Function which takes in id and when called checks the value of status for particular 
     habitItem and changes it accordingly
  */
  function toggleState(id) {
    /* defining the index of the specific object in habitItemList that we are toggling */
    let index = habit.habitItemList.findIndex((element) => element.date === id);

    /* defining the status property we want to change using the above index */
    let status = habit.habitItemList[index].status;

    switch (status) {
      case "incomplete":
        setHabit(changeStatus(habit, "completed", id));
        break;
      case "complete":
        setHabit(changeStatus(habit, "", id));
        break;
      case "skip":
        setHabit(changeStatus(habit, "", id));
        break;
      default:
        setHabit(changeStatus(habit, "", id));
        break;
    }
  }

  return (
    <div className="habit-row">
      <div className="habit-name-container">
        <h3 className="habit-name">{habitObj.name}</h3>
      </div>
      <div className="habit-item-container">
        {habitObj.habitItemList.map((habitItem) => {
          return (
            <button
              onClick={() => toggleState}
              className={`habit-item ${habitItem.status}`}
              id={habitItem.date}
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
