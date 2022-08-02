import { Box, VStack } from "@chakra-ui/react";
import {FaFire, FaTrophy} from 'react-icons/fa';



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
      <VStack>
        <Box>
          <h1 className="habit-name"> Walk the dog </h1>
        </Box>

        <Box className="current-streak">
          <i className="current-streak-icon"></i>
          <p> <FaFire/> You are currently on a ____ streak </p>
        </Box>
        <Box className="longest-streak">
          <i className="longest-streak-icon"></i>
          <p><FaTrophy/> Your longest streak is ____ days</p>
        </Box>

        <Box className="description">
          <h2> Description </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </Box>

        <Box className="everyday-checkbox">
          <p> Everyday </p>
          <input type="checkbox"></input>
        </Box>

        <Box className="frequency">
          <p>
            {" "}
            Frequency
            <input type="textbox"></input>
            Time
            <input type="dropdown"></input>
          </p>
        </Box>
      </VStack>

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
