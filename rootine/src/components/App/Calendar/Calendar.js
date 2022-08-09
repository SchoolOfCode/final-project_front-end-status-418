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

const fakeData = [
	{
		description: "Every day after dinner I'll do 1 min of Italian",
		everyday: true,
		frequency: { fr_reps: null, fr_interval: null },
		id: 4,
		name: "Failed to retrieve habits",
		userId: "auth0|62f1620c224cf98f85441255",
	},
];

const Calendar = () => {
	const { isAuthenticated, user } = useAuth0();
	const [habits, setHabits] = useState(fakeData);
	let name = user ? user.nickname : "Unknown User";
	let userId = user ? user.sub : "unknown user";

	// 🤝 Helper function: fetch habits for the current user
	async function retrieveHabits() {
		// const url = "https://status418-project.herokuapp.com/";
		const url = "http://localhost:3001";
		const fetchUrl = `${url}/habits/?userId=${userId}`;
		const result = await fetch(fetchUrl);
		const data = await result.json();
		// console.log(data.data);
		return data.data;
	}

	useEffect(() => {
		async function setExistingHabitsOnPageLoad() {
			const newHabits = await retrieveHabits();
			setHabits(newHabits);
		}
		setExistingHabitsOnPageLoad();
	}, []);

	const [daysOfWeek, setDaysOfWeek] = useState([]);
	const [section, setSection] = useState(daysOfWeek.slice(0, 3));

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
