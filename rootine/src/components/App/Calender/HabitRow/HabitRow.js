import { useState } from "react";
import "./HabitRow.css";

function HabitRow() {
  //   const [status, setStatus] = useState("Incomplete");
  const habitObj = {
    id: "1",
    name: "Running",
    habitItemList: [
      { status: "Complete", date: "2022-08-02" },
      { status: "Skip", date: "2022-08-03" },
      { status: "Miss", date: "2022-08-04" },
      { status: "Miss", date: "2022-08-05" },
      { status: "Incomplete", date: "2022-08-06" },
    ],
  };

  const [habit, setHabit] = useState(habitObj);

  // Change status of specific obj in Habit Items List
  // make copy habit obj

  // making copy of habit item list
  // copy must contain updated object (changed status)
  // locate object to update with findIndex method
  // spread over existing object , then overwrite existing key value pairs with new value (status)
  // new array =>
  // 1. spread all objs that occur before updated object(use slice to get this)
  // 2. insert updated object
  // 3. add all objs after index (index + 1)
  // return our updated array within the main habit objectFit:
  // spread (inside obj) habit Obj then habitItemlistKey: update array

  const changeStatus = (state, newStatus, id) => {
    let newObj = { ...state };
    let itemsList = newObj.habitItemList;
    let indexOfObject = itemsList.findIndex((element) => element.date === id);

    let updatedObj = { ...itemsList[indexOfObject], status: newStatus };

    let firstChunk = itemsList.slice(0, indexOfObject);

    let secondChunk = itemsList.slice(indexOfObject + 1);

    let updatedArr = [...firstChunk, updatedObj, ...secondChunk];

    let updatedHabitObj = { ...state, habitItemList: updatedArr };
    console.log("updatedHabitObj", updatedHabitObj);
    return updatedHabitObj;
  };

  console.log(changeStatus(habit, "Skip", "2022-08-05"));
  function toggleState(id) {
    switch (habit.habitItemList.status) {
      case "Incomplete":
        setHabit(changeStatus(habit, "completed", id));
        break;
      case "complete":
        setHabit();
        break;
      case "skip":
        setHabit();
        break;
      default:
        setHabit();
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
