import { useState } from "react";
import "./HabitRow.css";

function HabitRow() {
  //   const [status, setStatus] = useState("Incomplete");
  const [habit, setHabit] = useState([habitObj]);
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

  function toggleState() {
    switch (habit.habitItemList.status) {
      case "Incomplete":
        setHabit([
          ...habit,
          {
            ...habit.habitObj,
            habitItemList: [...habit.habitObj.habitItemList],
          },
        ]);
        break;
      case "Complete":
        setHabit();
        break;
      case "Skip":
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
