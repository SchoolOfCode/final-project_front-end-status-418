import { useEffect, useState } from "react";
import { Container, Box, Heading, Button } from "@chakra-ui/react";
import { CalendarBar } from "../../CalendarBar/CalendarBar";
import "./Calendar.css";
import HabitRow from "./HabitRow/HabitRow";
import { default as dayjs } from "dayjs";
import { useAuth0 } from "@auth0/auth0-react";

const getCurrentWeekDays = () => {
	const weekStart = dayjs().startOf("week");
	const days = [];
	for (let i = -5; i <= 100; i++) {
		days.push(dayjs(weekStart).add(i, "days"));
	}
	return days;
};

// 🤝 Helper function: fetch habits for the current user
async function retrieveHabits(userIdString) {
	const url = "https://status418-project.herokuapp.com";
	// const url = "http://localhost:3001";
	const fetchUrl = `${url}/habits/?userId=${userIdString}`;
	const result = await fetch(fetchUrl);
	const data = await result.json();
	console.log(data.data);
	return data.data;
}

const Calendar = ({
	displayForm,
	setCurrentHabitDisplayed,
	setIsFormDisplayed,
	isFormDisplayed,
}) => {
	let newHabits = [];
	console.log(typeof newHabits);
	const { user } = useAuth0();
	let name = user ? user.nickname : "Unknown User";
	let userId = user ? user.sub : "Unknown user";

	async function setExistingHabitsOnPageLoad() {
		const newHabits = await retrieveHabits(userId);
		console.log("newHabits", newHabits);
		setHabits(newHabits);

		//Sets the default value for the habits Display Panel
		setCurrentHabitDisplayed(newHabits[0]);
	}

	const [habits, setHabits] = useState(newHabits);
	// eslint-disable-next-line no-unused-vars
	const [daysOfWeek, setDaysOfWeek] = useState(getCurrentWeekDays());
	const [section, setSection] = useState(daysOfWeek.slice(0, 3));

	useEffect(() => {
		setExistingHabitsOnPageLoad();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleClick = (habit) => {
		console.log(`clicked ${habit.name}`);
		if (isFormDisplayed) {
			setIsFormDisplayed(false);
		}
		setCurrentHabitDisplayed(habit);
		console.log("habit", habit);
	};

	return (
		<Container
			className="calendar-view"
			color="black"
			// overflow="hidden"
			p="10"
			maxW="75vw">
			<Box as="div">
				<Heading as="h3" size="lg">
					Welcome, {name}
				</Heading>
				<Box
					className="calendar-bar-container"
					mb="20px"
					justifyContent="flex-end"
					border="2px"
					borderColor="red"
					pl="130px">
					<CalendarBar
						dayList={daysOfWeek}
						section={section}
						setSection={setSection}
					/>
				</Box>
				<Box>
					{habits.length > 0
						? habits.map((habit) => {
								console.log("habit", habit);
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
						: "Error, no habits found"}
				</Box>

				<Button
					bgGradient={["linear(to-l, red.400, orange.300)"]}
					onClick={displayForm}>
					Add +
				</Button>
			</Box>
		</Container>
	);
};

export default Calendar;
