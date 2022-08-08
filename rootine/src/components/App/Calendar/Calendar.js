import { Container, Box, Heading, Button } from "@chakra-ui/react";
import { CalendarBar } from "../../CalendarBar/CalendarBar";
import "./Calendar.css";
import HabitRow from "./HabitRow/HabitRow";
import { useEffect, useState } from "react";
import { default as dayjs } from "dayjs";

const habits = [
  {
    id: 2,
    name: "Drink more water",
    description: "Keep a jug full of water by my desk",
    userId: "xyz123",
    everyday: true,
    frequency: {
      fr_reps: null,
      fr_interval: null,
    },
  },
  {
    id: 3,
    name: "Dry August",
    description: "No alcholic drinks",
    userId: "sam123",
    everyday: true,
    frequency: {
      fr_reps: null,
      fr_interval: null,
    },
  },
  {
    id: 1,
    name: "Walk the dog",
    description: "Every morning and evening, I'll grab the dog's leash",
    userId: "abc123",
    everyday: true,
    frequency: {
      fr_reps: null,
      fr_interval: null,
    },
  },
];

const Calendar = () => {
  let name = "Robert";

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

  console.log("days: ", getCurrentWeekDays());
  console.log("DoW: ", daysOfWeek);
  return (
    <Container
      className="calendar-view"
      color="black"
      overflow="hidden"
      p="10"
      maxW="75vw"
    >
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
          pl="130px"
        >
          <CalendarBar
            dayList={daysOfWeek}
            section={section}
            setSection={setSection}
          />
        </Box>
        <Box>
          {habits.map((habit) => {
            return (
              <HabitRow
                habitName={habit.name}
                key={habit.id}
                habitid={habit.id}
                section={section}
              />
            );
          })}
        </Box>

        <Button bgGradient={["linear(to-l, red.400, orange.300)"]}>
          Add +
        </Button>
      </Box>
    </Container>
  );
};

export default Calendar;
