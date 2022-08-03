import { useState } from "react";
import "./HabitRow.css";

function HabitRow ( {habitName, } ) {
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
        <div className="habit-row">
            <div className="habit-name-container">
                <h3 className="habit-name">{habitName}</h3>
            </div>
            <div className="habit-item-container">
                <button 
                    onClick={toggleState}
                    className="habit-item"
                    id={status}
                >
                </button>
            </div>
        </div>
    )
}
export default HabitRow;