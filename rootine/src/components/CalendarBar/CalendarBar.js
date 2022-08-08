import { default as dayjs } from "dayjs";
import "../CalendarBar/CalendarBar.css";
import React from "react";

/* Plan 
Edit Menu Item component 
Replace buttons with new functionality 
Remove onselect function and Scroll menu component 
render menu item with new buttons 
*/

export const CalendarBar = ({ dayList, section, setSection }) => {
  /*     const [daysOfweek, setDaysOfWeek] = useState([]);
    const [section, setSection] = useState(daysOfweek.slice(0, 3));
    const currentDay = dayjs().format("DDMM");

    const getCurrentWeekDays = () => {
        const weekStart = dayjs().startOf("week");

        const days = [];
        for (let i = -5; i <= 100; i++) {
            days.push(dayjs(weekStart).add(i, "days"));
        }

        return days;
    };

    useEffect(() => {
        setDaysOfWeek(getCurrentWeekDays());
    }, []); */
  const currentDay = dayjs().format("DDMM");
  console.log("daylist (cb): ", dayList);
  const CalendarItem = ({ title, text, selected, now }) => {
    return (
      <div
        className={`menu-item dayItem ${selected ? "active" : ""} ${
          currentDay === now ? "today" : null
        }`}
      >
        <h5 className="title">{title}</h5>
        <span className="text"> {text}</span>
      </div>
    );
  };

  function LeftArrow() {
    const getPrevSection = () => {
      let firstItem = section[0];
      const dataCopy = [...dayList];
      let indexOfFirstItem = dataCopy.findIndex(
        (element) => element === firstItem
      );

      console.log("dataCopy", dataCopy);
      console.log("indexOfFirstItem", indexOfFirstItem);

      // if there are 3 more items to display
      if (indexOfFirstItem - 3 >= 0) {
        let prevSnapshot = dataCopy.slice(
          indexOfFirstItem - 3,
          indexOfFirstItem
        );
        console.log("nextSnapshot", prevSnapshot);
        setSection(prevSnapshot);
        // if there are two more items to display
      } else if (indexOfFirstItem - 2 >= 0) {
        let prevSnapshot = dataCopy.slice(
          indexOfFirstItem - 2,
          indexOfFirstItem
        );
        console.log("nextSnapshot", prevSnapshot);
        setSection(prevSnapshot);
        // if there is one more item to display
      } else if (indexOfFirstItem - 1 >= 0) {
        let prevSnapshot = dataCopy.slice(
          indexOfFirstItem - 1,
          indexOfFirstItem
        );
        console.log("nextSnapshot", prevSnapshot);
        setSection(prevSnapshot);
      }
    };
    return (
      <button className="left-button" onClick={getPrevSection}>
        Prev
      </button>
    );
  }

  function RightArrow() {
    const getNextSection = () => {
      const dataCopy = [...dayList];
      let lastItem = section[section.length - 1];
      let indexOfLastItem = dataCopy.findIndex(
        (element) => element === lastItem
      );
      let firstItemOfSnapshot = indexOfLastItem + 1;

      console.log("dataCopy", dataCopy);
      console.log("indexOfLastItemy", indexOfLastItem);

      // if there are 3 more items to display
      if (firstItemOfSnapshot + 3 <= dataCopy.length) {
        let nextSnapshot = dataCopy.slice(
          firstItemOfSnapshot,
          firstItemOfSnapshot + 3
        );
        console.log("nextSnapshot", nextSnapshot);

        setSection(nextSnapshot);
        // if there are two more items to display
      } else if (firstItemOfSnapshot + 2 <= dataCopy.length) {
        let nextSnapshot = dataCopy.slice(
          firstItemOfSnapshot,
          firstItemOfSnapshot + 2
        );
        console.log("nextSnapshot", nextSnapshot);

        setSection(nextSnapshot);
        // if there is one more item to display
      } else if (firstItemOfSnapshot + 1 <= dataCopy.length) {
        let nextSnapshot = dataCopy.slice(
          firstItemOfSnapshot,
          firstItemOfSnapshot + 1
        );
        console.log("nextSnapshot", nextSnapshot);

        setSection(nextSnapshot);
      }
    };
    return (
      <button className="right-button" onClick={getNextSection}>
        Next
      </button>
    );
  }
  console.log(dayList);
  return (
    <div className=" calendar-bar-main">
      <LeftArrow />
      <div className="calendar-items-container">
        {section.map((day) => {
          return (
            <CalendarItem
              itemId={day.format("D")}
              title={day.format("MMM")}
              text={day.format("DD")}
              key={day.format("YYYYMMDD")}
              id={day.format("YYYYMMDD")}
              now={day.format("DDMM")}
            />
          );
        })}
      </div>

      <RightArrow />
    </div>
  );
};

/* 

*/
