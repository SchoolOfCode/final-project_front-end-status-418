import { Container, Box, Heading, Button } from "@chakra-ui/react";
import { CalendarBar } from "../../CalendarBar/CalendarBar";
import "./Calendar.css";
import HabitRow from "./HabitRow/HabitRow";

const Calendar = () => {
  let name = "Robert";
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
          <CalendarBar />
        </Box>

        <HabitRow />
        <p>This is a container</p>
        <p>This is a container</p>
        <p>This is a container</p>
        <p>This is a container</p>
        <p>This is a container</p>
        <p>This is a container</p>
        <p>This is a container</p>
        <p>This is a container</p>
        <Button bgGradient={["linear(to-l, red.400, orange.300)"]}>
          Add +
        </Button>
      </Box>
    </Container>
  );
};

export default Calendar;
