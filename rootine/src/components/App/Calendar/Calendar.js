import { useState } from "react";
import { Container, Box, Heading, Button } from "@chakra-ui/react";
import { CalendarBar } from "../../CalendarBar/CalendarBar";
import "./Calendar.css";
import HabitRow from "./HabitRow/HabitRow";

const fakeData = [
  {
    description: "Failed to retrieve habits",
    everyday: true,
    frequency: { fr_reps: null, fr_interval: null },
    id: 0,
    name: "Failed to retrieve habits",
    userId: "Unable to retrieve user",
  },
];

const Calendar = ({
  displayForm,
  setCurrentHabitDisplayed,
  setIsFormDisplayed,
  isFormDisplayed,
}) => {
  let name = "Robert";

  const [habits, setHabits] = useState(fakeData);

  const handleClick = (habit) => {
    // e.preventDefault();
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
      overflow="hidden"
      p="10"
      maxW="75vw"
    >
      <Box as="div">
        <Heading as="h3" size="lg">
          Welcome, {name}
        </Heading>
        <CalendarBar />
        <Box>
          {habits.map((habit) => {
            return (
              <HabitRow
                habitName={habit.name}
                key={habit.id}
                habitid={habit.id}
                onClick={() => handleClick(habit)}
              />
            );
          })}
        </Box>
        <Button
          bgGradient={["linear(to-l, red.400, orange.300)"]}
          onClick={displayForm}
        >
          Add +
        </Button>
      </Box>
    </Container>
  );
};

export default Calendar;
