import React from "react";
import "../CalendarBar/CalendarBar.css";
import { default as dayjs } from "dayjs";
import { Text, Flex, Spacer, Center } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { chevronProps } from "./calendarBarProps.js";

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
	// console.log("daylist (cb): ", dayList);
	const CalendarItem = ({ title, text, selected, now }) => {
		return (
			<div
				className={`menu-item dayItem ${selected ? "active" : ""} ${
					currentDay === now ? "today" : null
				}`}>
				<h5 className="title" style={{ fontWeight: "600" }}>
					{title}
				</h5>
				<span className="text" style={{ fontWeight: "600" }}>
					{text}
				</span>
			</div>
		);
	};

	function LeftArrow() {
		const getPrevSection = () => {
			// let firstItem = section[0];
			// console.log("firstItem", firstItem);

			/*
				Create new previous section by substracting 7 from each element in the current 'section' array
			*/
			const newSection = [];

			for (let i = 0; i < 7; i++) {
				newSection[i] = dayjs(section[i]).subtract(7, "days");
			}

			// console.log(newSection);

			setSection(newSection);

			// const dataCopy = [...dayList];
			// let numberToDisplay = 7;
			//let remainderNumberToDisplay = dataCopy.length % numberToDisplay;
			// let indexFirstItemCurrentSection = dataCopy.findIndex(
			// 	(item) => item === firstItem
			// );

			// console.log("dataCopy", dataCopy);
			// console.log(
			// 	"indexFirstItemCurrentSection",
			// 	indexFirstItemCurrentSection
			// );

			// if there are enough items to display

			// if (indexFirstItemCurrentSection - numberToDisplay >= 0) {
			// 	let prevSection = dataCopy.slice(
			// 		indexFirstItemCurrentSection - numberToDisplay,
			// 		indexFirstItemCurrentSection
			// 	);
			// 	console.log("prevSection", prevSection);
			// 	setSection(prevSection);

			// 	// if there are not enough items to display
			// } else if (
			// 	indexFirstItemCurrentSection - (numberToDisplay - 1) >=
			// 	0
			// ) {
			// 	let prevSection = dataCopy.slice(
			// 		indexFirstItemCurrentSection - (numberToDisplay - 1),
			// 		indexFirstItemCurrentSection
			// 	);
			// 	console.log("prevSection1", prevSection);
			// 	setSection(prevSection);
			// } else if (
			// 	indexFirstItemCurrentSection - (numberToDisplay - 2) >=
			// 	0
			// ) {
			// 	let prevSection = dataCopy.slice(
			// 		indexFirstItemCurrentSection - (numberToDisplay - 2),
			// 		indexFirstItemCurrentSection
			// 	);
			// 	console.log("prevSection2", prevSection);
			// 	setSection(prevSection);
			// } else if (
			// 	indexFirstItemCurrentSection - (numberToDisplay - 3) >=
			// 	0
			// ) {
			// 	let prevSection = dataCopy.slice(
			// 		indexFirstItemCurrentSection - (numberToDisplay - 3),
			// 		indexFirstItemCurrentSection
			// 	);
			// 	console.log("prevSection3", prevSection);
			// 	setSection(prevSection);
			// } else if (
			// 	indexFirstItemCurrentSection - (numberToDisplay - 4) >=
			// 	0
			// ) {
			// 	let prevSection = dataCopy.slice(
			// 		indexFirstItemCurrentSection - (numberToDisplay - 4),
			// 		indexFirstItemCurrentSection
			// 	);
			// 	console.log("prevSection4", prevSection);
			// 	setSection(prevSection);
			// } else if (
			// 	indexFirstItemCurrentSection - (numberToDisplay - 5) >=
			// 	0
			// ) {
			// 	let prevSection = dataCopy.slice(
			// 		indexFirstItemCurrentSection - (numberToDisplay - 5),
			// 		indexFirstItemCurrentSection
			// 	);
			// 	console.log("prevSection5", prevSection);
			// 	setSection(prevSection);
			// } else if (
			// 	indexFirstItemCurrentSection - (numberToDisplay - 6) >=
			// 	0
			// ) {
			// 	let prevSection = dataCopy.slice(
			// 		indexFirstItemCurrentSection - (numberToDisplay - 6),
			// 		indexFirstItemCurrentSection
			// 	);
			// 	console.log("prevSection6", prevSection);
			// 	setSection(prevSection);
			// } else {
			// 	console.log("prevSection", "reached else");
			// 	setSection(section);
			// }
		};
		return (
			<button className="left-button" onClick={getPrevSection}>
				{/* Prev */}
				<ChevronLeftIcon {...chevronProps} />
			</button>
		);
	}

	function RightArrow() {
		const getNextSection = () => {
			/*
				Create next section by adding 7 to each element in the current 'section' array
			*/
			const newSection = [];

			for (let i = 0; i < 7; i++) {
				newSection[i] = dayjs(section[i]).add(7, "days");
			}

			// console.log(newSection);

			setSection(newSection);

			// const dataCopy = [...dayList];
			// let numberToDisplay = 7;
			// //let remainderNumberToDisplay = dataCopy.length % numberToDisplay;
			// let lastItemOfCurrentSection = section[section.length - 1];
			// let indexLastItemOfCurrentSection = dataCopy.findIndex(
			// 	(item) => item === lastItemOfCurrentSection
			// );
			// let indexFirstItemOfNextSection = indexLastItemOfCurrentSection + 1;

			// console.log("dataCopy", dataCopy);
			// console.log("indexOfLastItemy", indexLastItemOfCurrentSection);

			// if there are enough items to display
			// if (
			// 	indexFirstItemOfNextSection + numberToDisplay <=
			// 	dataCopy.length
			// ) {
			// 	let nextSection = dataCopy.slice(
			// 		indexFirstItemOfNextSection,
			// 		indexFirstItemOfNextSection + numberToDisplay
			// 	);
			// 	// console.log("nextSection", nextSection);

			// 	setSection(nextSection);
			// 	// if there are not enough items to display
			// } else if (
			// 	indexFirstItemOfNextSection + (numberToDisplay - 1) <=
			// 	dataCopy.length
			// ) {
			// 	let nextSection = dataCopy.slice(
			// 		indexFirstItemOfNextSection,
			// 		indexFirstItemOfNextSection + (numberToDisplay - 1)
			// 	);
			// 	// console.log("nextSection", nextSection);

			// 	setSection(nextSection);

			// 	// if weve just displayed the last items
			// } else if (
			// 	indexFirstItemOfNextSection + (numberToDisplay - 2) <=
			// 	dataCopy.length
			// ) {
			// 	let nextSection = dataCopy.slice(
			// 		indexFirstItemOfNextSection,
			// 		indexFirstItemOfNextSection + (numberToDisplay - 2)
			// 	);
			// 	// console.log("nextSection", nextSection);

			// 	setSection(nextSection);
			// } else if (
			// 	indexFirstItemOfNextSection + (numberToDisplay - 3) <=
			// 	dataCopy.length
			// ) {
			// 	let nextSection = dataCopy.slice(
			// 		indexFirstItemOfNextSection,
			// 		indexFirstItemOfNextSection + (numberToDisplay - 3)
			// 	);
			// 	// console.log("nextSection", nextSection);

			// 	setSection(nextSection);
			// } else if (
			// 	indexFirstItemOfNextSection + (numberToDisplay - 4) <=
			// 	dataCopy.length
			// ) {
			// 	let nextSection = dataCopy.slice(
			// 		indexFirstItemOfNextSection,
			// 		indexFirstItemOfNextSection + (numberToDisplay - 4)
			// 	);
			// 	// console.log("nextSection", nextSection);

			// 	setSection(nextSection);
			// } else if (
			// 	indexFirstItemOfNextSection + (numberToDisplay - 5) <=
			// 	dataCopy.length
			// ) {
			// 	let nextSection = dataCopy.slice(
			// 		indexFirstItemOfNextSection,
			// 		indexFirstItemOfNextSection + (numberToDisplay - 5)
			// 	);
			// 	// console.log("nextSection", nextSection);

			// 	setSection(nextSection);
			// } else if (
			// 	indexFirstItemOfNextSection + (numberToDisplay - 6) <=
			// 	dataCopy.length
			// ) {
			// 	let nextSection = dataCopy.slice(
			// 		indexFirstItemOfNextSection,
			// 		indexFirstItemOfNextSection + (numberToDisplay - 6)
			// 	);
			// 	// console.log("nextSection", nextSection);

			// 	setSection(nextSection);
			// } else {
			// 	setSection(section);
			// }
		};
		return (
			<button className="right-button" onClick={getNextSection}>
				{/* Next */}
				<ChevronRightIcon {...chevronProps} />
			</button>
		);
	}
	// console.log(dayList);
	return (
		<div className=" calendar-bar-main">
			<Flex>
				<Text ml="185px" fontSize="sm">
					{section[0].format("MMMM YYYY")}
				</Text>
				<Spacer />
				<Text mr="55px" fontSize="sm">
					{section[section.length - 1].format("MMMM YYYY")}
				</Text>
			</Flex>
			<div className="calendar-container-grid">
				<div className="calendar-items-left-region">
					<LeftArrow />
				</div>
				<div className="calendar-items-container">
					{section.map((day) => {
						return (
							<Center>
								<CalendarItem
									itemId={day.format("D")}
									title={day.format("ddd")}
									text={day.format("DD")}
									key={day.format("YYYYMMDD")}
									id={day.format("YYYYMMDD")}
									now={day.format("DDMM")}
								/>
							</Center>
						);
					})}
				</div>
				<div className="calendar-items-right-region">
					<RightArrow />
				</div>
			</div>
		</div>
	);
};
