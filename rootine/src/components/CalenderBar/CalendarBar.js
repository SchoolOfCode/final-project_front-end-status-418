import { default as dayjs } from "dayjs";
import { useEffect, useState } from "react";
import "../CalenderBar/CalendarBar.css";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import React from "react";

export const CalendarBar = () => {
  const [daysOfweek, setDaysOfWeek] = useState([]);
  const [selected, setSelected] = useState();
  const currentDay = dayjs().format("DDMM");

  const getCurrentWeekDays = () => {
    const weekStart = dayjs().startOf("week");

    const days = [];
    for (let i = -5; i <= 1000; i++) {
      days.push(dayjs(weekStart).add(i, "days"));
    }

    return days;
  };

  useEffect(() => {
    setDaysOfWeek(getCurrentWeekDays());
  }, []);

  const MenuItem = ({ title, text, selected, now }) => {
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
    const { isFirstItemVisible, scrollPrev } =
      React.useContext(VisibilityContext);

    return (
      <button
        className="left-button"
        disabled={isFirstItemVisible}
        onClick={() => scrollPrev()}
      >
        Left
      </button>
    );
  }
  function RightArrow() {
    const { isLastItemVisible, scrollNext } =
      React.useContext(VisibilityContext);

    return (
      <button
        className="right-button"
        disabled={isLastItemVisible}
        onClick={() => scrollNext()}
      >
        Right
      </button>
    );
  }

  const onSelect = (id) => {
    if (id === selected) {
      setSelected(0);
    } else {
      setSelected(id);
    }
  };

  return (
    <>
      <ScrollMenu
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
        selected={selected}
        onClick={onSelect}
        scrollToSelected={true}
      >
        {daysOfweek.map((day) => {
          return (
            <MenuItem
              itemId={day.format("D")}
              title={day.format("ddd")}
              text={day.format("DD")}
              key={day.format("D")}
              id={day.format("D")}
              selected={selected}
              now={day.format("DDMM")}
            />
          );
        })}
      </ScrollMenu>
    </>
  );
};
