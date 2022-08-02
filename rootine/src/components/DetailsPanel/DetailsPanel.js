import { FaFire, FaTrophy } from "react-icons/fa";

import {
  Box,
  VStack,
  HStack,
  Heading,
  Text,
  Checkbox,
  Editable,
  EditableInput,
  EditablePreview,
  useEditableControls,
  EditableTextarea,
  Flex,
  ButtonGroup,
  IconButton,
  Input,
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons";

const DetailsPanel = () => {
  function EditableControls() {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls();
    return isEditing ? (
      <ButtonGroup justifyContent="center" size="sm">
        <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
        <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
      </ButtonGroup>
    ) : (
      <Flex justifyContent="center">
        <IconButton size="sm" icon={<EditIcon />} {...getEditButtonProps()} />
      </Flex>
    );
  }

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
            <Input as={EditableInput} />
            <EditableControls />
          </Editable>
        </Box>

        <Box className="current-streak">
          <i className="current-streak-icon"></i>
          <Text>
            <FaFire /> You are currently on a ____ streak
          </Text>
        </Box>
        <Box className="longest-streak">
          <i className="longest-streak-icon"></i>
          <Text>
            <FaTrophy />
            Your longest streak is ____ days
          </Text>
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
            <EditableControls />
          </Editable>
        </Box>

        <Box className="everyday-checkbox">
          <HStack spacing={5}>
            <Text> Everyday </Text>
            <Checkbox></Checkbox>
          </HStack>
        </Box>

        <Box className="frequency">
          Frequency
          <HStack>
            <Editable defaultValue="1">
              <EditablePreview />
              <EditableInput />
            </Editable>
            <Text>Times</Text>
            <select className="frequency-select">
              <option>Weekly</option>
              <option>Monthly</option>
            </select>
          </HStack>
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
