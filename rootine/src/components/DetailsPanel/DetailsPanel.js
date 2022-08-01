import { Box } from "@chakra-ui/react";

const DetailsPanel = () => {
  return (
    <Box
      className="details-panel-parent"
      maxW="960px"
      width="22em"
      height="65%"
      borderWidth="3px"
      borderRadius="4.5em"
      overflow="hidden"
      color="black"
      boxShadow="md"
      p="6"
      bg="white"
    >
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
