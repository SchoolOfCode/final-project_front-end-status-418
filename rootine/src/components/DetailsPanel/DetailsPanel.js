import { FaFire, FaTrophy } from "react-icons/fa";

import {
  Box,
  VStack,
  HStack,
  Stack,
  Heading,
  Text,
  Checkbox,
  Editable,
  EditableInput,
  EditablePreview,
  useEditableControls,
  EditableTextarea,
  ButtonGroup,
  IconButton,
  Input,
  Wrap,
  WrapItem,
  useColorModeValue,
  Tooltip
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";

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
    ) : null;
  }

  return (
    <Box
      className="details-panel-parent"
      maxW="1000px"
      width="23em"
      height="70%"
      borderWidth="3px"
      borderRadius="4.5em"
      overflow="hidden"
      color="black"
      boxShadow="md"
      m={20}
      pt={1}
      pb={10}
      pl={10}
      pr={10}
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
            <Tooltip label="Click to edit">
          <EditablePreview
            py={2}
            px={4}
            _hover={{
              background: useColorModeValue("gray.100", "gray.700")
            }}
          />
        </Tooltip>
            <Input py={2} px={4} as={EditableInput} />
            <EditableControls />
          </Editable>
        </Box>

        <Box className="current-streak">
          <Wrap spacing="5px">
            <WrapItem alignItems="center" >
              <FaFire color="#f05d4d" />
              <Text ml="5px">You are currently on a ____ streak</Text>
            </WrapItem>
          </Wrap>
        </Box>
        <Box className="longest-streak">
          <Wrap spacing="5px">
            <WrapItem alignItems="center" >
              <FaTrophy color="gold"/>
              <Text ml="7px">Your longest streak is ____ days</Text>
            </WrapItem>
          </Wrap>
        </Box>

        <Box className="description">
          <Heading size="sm" display="inline"> Description </Heading>
          <Editable
            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua"
            textAlign="center"
            isPreviewFocusable={true}
            // selectAllOnFocus={false}
          >
            <Tooltip label="Click to edit">
          <EditablePreview
            py={2}
            px={4}
            _hover={{
              background: useColorModeValue("gray.100", "gray.700")
            }}
          />
        </Tooltip>
            <EditableControls />
            <EditableTextarea
            rows="4" />
          </Editable>
        </Box>

        <Box className="everyday-checkbox">
          <HStack spacing={5}>
            <Text fontWeight="bold"> Everyday </Text>
            <Checkbox size="lg"></Checkbox>
          </HStack>
        </Box>
      </VStack>

      <Box className="frequency">
        <Stack spacing={3} direction="row" align="baseline">
          <Text fontWeight="bold"> Frequency</Text>
          <Editable
            pl={2}
            pr={2}
            borderRadius="0.5em"
            borderWidth="3px"
            defaultValue="1"
          >
            <EditablePreview />
            <EditableInput />
          </Editable>

          <Text fontWeight="bold">Times</Text>
          <select className="frequency-select">
            <option>Weekly</option>
            <option>Monthly</option>
          </select>
        </Stack>
      </Box>

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
