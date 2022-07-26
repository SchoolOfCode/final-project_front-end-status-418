import { useEffect, useState } from "react";
import { Container, Box, Heading, Button, Text } from "@chakra-ui/react";
import { CalendarBar } from "../../CalendarBar/CalendarBar";
import "./Calendar.css";
import HabitRow from "./HabitRow/HabitRow";
import { default as dayjs } from "dayjs";
import { useAuth0 } from "@auth0/auth0-react";
import { retrieveHabits } from "../AppHelperFunctions";
import { AddIcon } from "@chakra-ui/icons";

//Imports same button styling as the 'Save' button in the Upload new Habit panel for the 'Add' button.
import { addHabitSubmitButtonProps } from "../../UploadHabit/uploadHabitProps.js";

const createAllCalendarDays = () => {
	// const weekStart = dayjs().startOf("week");

	//Change weekStart (now dateStart) to always begin at 1 August 2022
	//Note that months are zero-indexed so August = 7
	const d = new Date(2022, 7, 1);
	const dateStart = dayjs(d);
	// console.log(weekStart);

	const days = [];
	for (let i = 0; i <= 200; i++) {
		days.push(dayjs(dateStart).add(i, "days"));
	}
	// console.log(days);
	return days;
};

const Calendar = ({
	displayForm,
	setCurrentHabitDisplayed,
	setIsFormDisplayed,
	isFormDisplayed,
	pleaseRefresh,
}) => {
	let newHabits = [];
	// console.log(typeof newHabits);
	const { user } = useAuth0();
	let name = user ? user.nickname : "Unknown User";

	// console.log("usersub (calender) SUBSTR: ", user.sub.substr(6));

	async function fetchAllUsers() {
		let response = await fetch(
			"https://status418-project.herokuapp.com/user"
		);
		let data = await response.json();
		return data.payload;
	}

	async function setExistingHabitsOnPageLoad() {
		// eslint-disable-next-line no-unused-vars
		let userId = user ? user.sub.substring(6) : "Unknown user";
		// console.log("userid = user.sub?: ", userId === user.sub.substring(6));

		let userlist = await fetchAllUsers();
		// console.log("Uselist: ", userlist);
		for (let i = 0; i < userlist.length; i++) {
			if (userlist[i].user_id === user.sub.substring(6)) {
				const newHabits = await retrieveHabits(user.sub.substr(6));
				// console.log("newHabits: ", newHabits);
				setHabits(newHabits);
				// setCurrentHabitDisplayed(newHabits[0]);
				setCurrentHabitDisplayed(
					newHabits === []
						? [
								{
									name: "",
									description: "",
									everyday: true,
									frequency: {
										fr_reps: null,
										fr_interval: null,
									},
									userId: userId,
								},
						  ]
						: newHabits[0]
				);
			}
		}

		// for (let i = 0; i < userlist.length; i++) {
		//     console.log("current user being checked(forloop)", i/* userlist[i].user_id */);
		//     if (userlist[i].user_id !== userId) {
		//         console.log(
		//             "Habits doesn't exist for this user in the database"
		//         );
		//         return <p>Nothing found for you</p>;
		//     } if (userlist[i].user_id === userId) {

		//         console.log("userid:", userId);
		//         const newHabits = await retrieveHabits(user.sub.substr(6));
		//         console.log("newHabits", newHabits);
		//         setHabits(newHabits);
		//         console.log("newHabit0: ", newHabits[0]);
		//         //Sets the default value for the habits Display Panel
		//         setCurrentHabitDisplayed(newHabits[0]);
		//     }

		// }
	}
	const [habits, setHabits] = useState(newHabits);
	// eslint-disable-next-line no-unused-vars
	// const [daysOfWeek, setDaysOfWeek] = useState(getCurrentWeekDays());
	const dayList = createAllCalendarDays();

	//Find this week, beginning on Sunday
	const startOfCurrentWeek = dayjs().startOf("week");
	// console.log(displayCurrentWeek);

	const displayCurrentWeek = [];
	for (let i = 0; i < 7; i++) {
		displayCurrentWeek[i] = dayjs(startOfCurrentWeek).add(i, "days");
	}
	// console.log(displayCurrentWeek);

	// const [section, setSection] = useState(daysOfWeek.slice(0, 7));
	// Set 'section' to now be the current week
	const [section, setSection] = useState(displayCurrentWeek);

	useEffect(() => {
		setExistingHabitsOnPageLoad();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	//refresh habits list when 'pleaserefresh' state is changed
	useEffect(() => {
		async function refreshCalendar() {
			const newHabits = await retrieveHabits(user.sub.substr(6));
			// console.log("newHabits: ", newHabits);
			setHabits(newHabits);
			setCurrentHabitDisplayed(newHabits[0]);
		}
		refreshCalendar();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pleaseRefresh]);

	const handleClick = (habit) => {
		// console.log(`clicked ${habit.name}`);
		if (isFormDisplayed) {
			setIsFormDisplayed(false);
		}
		setCurrentHabitDisplayed(habit);
		// console.log("habit", habit);
	};

	return (
		<Container
			className="calendar-view"
			color="black"
			// overflow="hidden"
			// p="10"
			pt="1"
			// m="10"
			maxW="75vw">
			<Box as="div" pr="4" pl="4" pt="2" pb="2">
				<Text display="inline" pr="0.25em" fontSize="xl">
					Welcome,{" "}
				</Text>
				<Heading as="p" size="lg" display="inline" lineHeight="1.5">
					{name}
				</Heading>
				<Box
					className="calendar-bar-container"
					justifyContent="flex-end">
					<CalendarBar
						dayList={dayList}
						section={section}
						setSection={setSection}
					/>
				</Box>
				<div id="calendar-divider"></div>
				<Box>
					{habits.length > 0 ? (
						habits.map((habit) => {
							/* console.log("habit", habit); */
							return (
								<div>
									<HabitRow
										habitName={habit.name}
										key={habit.id}
										habitid={habit.id}
										section={section}
										onClick={() => handleClick(habit)}
									/>
								</div>
							);
						})
					) : (
						<Text
							fontSize="xl"
							mt="25px">{`No habits found, click ‘Add +’ to get started!`}</Text>
					)}
				</Box>

				<Button
					// bgGradient={["linear(to-l, red.400, orange.300)"]}
					{...addHabitSubmitButtonProps}
					size="lg"
					onClick={displayForm}>
					Add <AddIcon ml="2" />
				</Button>
			</Box>
		</Container>
	);
};

export default Calendar;
