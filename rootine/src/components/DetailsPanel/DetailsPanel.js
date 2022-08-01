import {
  Box,
  VStack,
  Heading,
  Text,
  Checkbox,
  Editable,
  EditableInput,
  EditablePreview,
  useEditableControls,
  EditableTextarea,
} from "@chakra-ui/react";

const DetailsPanel = () => {
  // // const {
  // //   isEditing,
  // //   getSubmitButtonProps,
  // //   getCancelButtonProps,
  // //   getEditButtonProps,
  // // } = useEditableControls();

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
          <Editable
            fontSize="3xl"
            fontWeight="bold"
            textAlign="center"
            className="habit-name"
            defaultValue="Walk the dog"
          >
            <EditablePreview />
            <EditableInput />
          </Editable>
        </Box>

        <Box className="current-streak">
          <i className="current-streak-icon"></i>
          <Text> You are currently on a ____ streak</Text>
        </Box>
        <Box className="longest-streak">
          <i className="longest-streak-icon"></i>
          <Text> Your longest streak is ____ days</Text>
        </Box>

        <Box className="description">
          <Heading size="sm"> Description </Heading>
          <Editable
            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut 
            labore et dolore magna aliqua"
            textAlign="center"
          >
            <EditablePreview />
            <EditableTextarea />
          </Editable>
        </Box>

        <Box className="everyday-checkbox">
          <Text> Everyday </Text>
          <Checkbox></Checkbox>
        </Box>

        <Box className="frequency">
          <Text>
            {" "}
            Frequency
            <Editable defaultValue="1">
              <EditablePreview />
              <EditableInput />
            </Editable>
            Times
            <select className="frequency-select">
              <option>Weekly</option>
              <option>Monthly</option>
            </select>
          </Text>
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
