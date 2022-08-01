import { Box } from "@chakra-ui/react";

const DetailsPanel = () => {
  return (
    <Box
      className="details-panel-parent"
      maxW="960px"
      width="22em"
      height="70%"
      borderWidth="3px"
      borderRadius="4.5em"
      overflow="hidden"
      color="black"
      boxShadow="md"
      p="6"
      bg="white"
    >
      <h1 className="habit-name"> Walk the dog </h1>
      <li className="current-streak">
        <i className="current-streak-icon"></i>
        <p> You are currently on a ____ streak</p>
      </li>
      <li className="longest-streak">
        <i className="longest-streak-icon"></i>
        <p> Your longest streak is ____ days</p>
      </li>

      <li className="description">
        <h2> Description </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </li>

      <li className="everyday-checkbox">
        <p> Everyday </p>
        <input type="checkbox"></input>
      </li>

      <li className="frequency">
        <p>
          {" "}
          Frequency
          <input type="textbox"></input>
          Time
          <input type="dropdown"></input>
        </p>
      </li>

      {/* Habit Title header , use theme font */}
      {/* Current Habit Streak / Icon and p tag */}
      {/* Longest Habit Streak / Icon and p tag*/}

      {/* Description / p tag */}
      {/* Everyday Toggle  / checkbox */}
      {/* Frequency / p tag with input field and dropdown */}
    </Box>
  );
};

export default DetailsPanel;
