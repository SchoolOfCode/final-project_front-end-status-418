import { Container, Box, Heading, Button } from "@chakra-ui/react";
import { CalendarBar } from "../../CalenderBar/CalendarBar";
import "./Calender.css";

const Calender = () => {
  let name = "test";
  return (
    <Container
      className="calender-view"
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
        <p>This is a container</p>
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

export default Calender;
