import { Container, Box, Heading, Button } from "@chakra-ui/react";
import { CalendarBar } from "../../CalendarBar/CalendarBar";
import "./Calendar.css";
import HabitRow from "./HabitRow/HabitRow";

const Calendar = ({ habits, displayForm }) => {
  let name = "Robert";
  const handleClick = (e) => {
    // e.preventDefault();
    console.log("clicked me");
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
