import { Container, Box, Heading, Button } from "@chakra-ui/react";
import { CalendarBar } from "../../CalendarBar/CalendarBar";
import "./Calendar.css";
import HabitRow from "./HabitRow/HabitRow";
import { useEffect, useState } from "react";
import { default as dayjs } from "dayjs";
import { useAuth0 } from "@auth0/auth0-react";

// let habits = [
// 	{
// 		id: 2,
// 		name: "Drink more water",
// 		description: "Keep a jug full of water by my desk",
// 		userId: "xyz123",
// 		everyday: true,
// 		frequency: {
// 			fr_reps: null,
// 			fr_interval: null,
// 		},
// 	},
// 	{
// 		id: 3,
// 		name: "Dry August",
// 		description: "No alcholic drinks",
// 		userId: "sam123",
// 		everyday: true,
// 		frequency: {
// 			fr_reps: null,
// 			fr_interval: null,
// 		},
// 	},
// 	{
// 		id: 1,
// 		name: "Walk the dog",
// 		description: "Every morning and evening, I'll grab the dog's leash",
// 		userId: "abc123",
// 		everyday: true,
// 		frequency: {
// 			fr_reps: null,
// 			fr_interval: null,
// 		},
// 	},
// ];

//fakedata

// const fakeData = [
// 	{
// 		description: "Failed to retrieve habits",
// 		everyday: true,
// 		frequency: { fr_reps: null, fr_interval: null },
// 		id: 0,
// 		name: "Failed to retrieve habits",
// 		userId: "Unable to retrieve user",
// 	},
// ];

let newHabits = [];

const Calendar = () => {
	const [habits, setHabits] = useState(newHabits);
	const [daysOfWeek, setDaysOfWeek] = useState([]);
	const [section, setSection] = useState(daysOfWeek.slice(0, 3));
	// console.log("section", section);
	async function setExistingHabitsOnPageLoad() {
		const newHabits = await retrieveHabits(userId);
		console.log("newHabits", newHabits);
		// setHabits(newHabits);
	}

	async function retrieveHabits() {
		// const url = "https://status418-project.herokuapp.com/";
		const url = "http://localhost:3001";
		const fetchUrl = `${url}/habits/?userId=${userId}`;
		const result = await fetch(fetchUrl);
		const data = await result.json();
		console.log(data.data);
		return data.data;
	}
	const { isAuthenticated, user } = useAuth0();

	let name = user ? user.nickname : "Unknown User";
	let userId = user ? user.sub : "Unknown user";

	// 🤝 Helper function: fetch habits for the current user

	const getCurrentWeekDays = () => {
		const weekStart = dayjs().startOf("week");
		const days = [];
		for (let i = -5; i <= 100; i++) {
			days.push(dayjs(weekStart).add(i, "days"));
		}
		console.log("days", days);
		return days;
	};

	useEffect(() => {
		setExistingHabitsOnPageLoad();
	}, [section, habits]);

	useEffect(() => {
		// async function setExistingHabitsOnPageLoad() {
		// 	const newHabits = await retrieveHabits();
		// 	console.log("newHabits", newHabits);
		// 	setHabits(newHabits);
		// }
		// setExistingHabitsOnPageLoad();
		setDaysOfWeek(getCurrentWeekDays());
	}, []);

	// console.log("days: ", getCurrentWeekDays());
	//   console.log("DoW: ", daysOfWeek);
	return (
		<Container
			className="calendar-view"
			color="black"
			overflow="hidden"
			p="10"
			maxW="75vw">
			<Box as="div">
				<Heading as="h3" size="lg">
					Welcome, {name}
				</Heading>
				<p>
					Section length: {section.length} and Habits length:{" "}
					{habits.length}
				</p>
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
									<HabitRow
										habitName={habit.name}
										key={habit.id}
										habitid={habit.id}
										section={section}
									/>
								);
						  })
						: "Error, no habits found"}
				</Box>

				<Button bgGradient={["linear(to-l, red.400, orange.300)"]}>
					Add +
				</Button>
			</Box>
		</Container>
	);
};

export default Calendar;
