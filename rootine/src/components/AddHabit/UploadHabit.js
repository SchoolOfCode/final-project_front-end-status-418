import { useState } from "react";

import {
  Box,
  VStack,
  HStack,
  Stack,
  Text,
  Checkbox,
  Editable,
  EditableInput,
  EditablePreview,
  Textarea,
  Select,
  Button,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

/* 
PLAN:
Create a use state object that takes in Habit name, Description of habit, everyday and frequency of habit
Create different functions that log in the new habit into the database 
Import add button from correct file into AddHabitForm.js 
Stretch goal: Add input restriction- only accepts numbers

Functionality:
- Once add button is pressed it should render a form version of the habit panel. 

*/

function AddingHabit({ upload }) {
  const [habits, setHabits] = useState([
    {
      habit_name: "",
      description: "",
      everyday: Boolean,
      frequency: {
        fequency_reps: Number,
        frequency_interval: "",
      },
    },
  ]);

  function handleSubmitName(e) {
    e.preventDefault();
    const name = e.target.value;
    console.log(name);
    setHabits({
      ...habits,
      habit_name: name,
    });
  }

  function handleSubmitDescription(e) {
    e.preventDefault();
    const description = e.target.value;
    console.log(description);
    setHabits({
      ...habits,
      description: description,
    });
  }

  function handleSubmitEveryday(e) {
    e.preventDefault();
    const everyday = e.target.value;
    console.log("this has been checked");
    setHabits({
      ...habits,
      everyday: everyday,
    });
  }
  function handleSubmitFrequencyReps(e) {
    const frequencyreps = e.target.value;
    console.log(frequencyreps);
    setHabits({
      ...habits,
      fequency_reps: frequencyreps,
    });
  }
  function handleSubmitFrequencyInterval(e) {
    e.preventDefault();
    const frequencyinterval = e.target.value;
    console.log(frequencyinterval);
    setHabits({
      ...habits,
      frequency_interval: frequencyinterval,
    });
  }

  function handleClick(e) {
    //e.preventDefault();
    console.log("clicked");
    upload(habits);
    e.target.reset();
  }

  return (
    <Box
      className="details-panel-parent"
      w="23em"
      h="70%"
      borderWidth="3px"
      borderRadius="4.5em"
      overflow="hidden"
      color="black"
      boxShadow="md"
      m={20}
      p={50}
      pt={10}
      pb={10}
      pl={10}
      pr={10}
      bg="white"
    >
      <VStack>
        <FormControl>
          <FormLabel fontWeight="bold">Habit Name</FormLabel>
          <Input type="text" onChange={handleSubmitName} required />
        </FormControl>

        <FormControl>
          <FormLabel fontWeight="bold">Habit Description</FormLabel>
          {/* <Input type="text"/> */}
          <Textarea
            overflow="auto"
            onChange={handleSubmitDescription}
            required
          />
        </FormControl>

        <Box className="everyday-checkbox">
          <HStack spacing={5} mt="15px">
            <Text fontWeight="bold"> Once a day </Text>

            <Checkbox
              size="lg"
              borderColor="orange"
              onChange={handleSubmitEveryday}
              required
            ></Checkbox>
          </HStack>
        </Box>
      </VStack>

      <Box className="frequency">
        <Stack spacing={1} direction="row" align="baseline" mt="20px">
          <Text fontWeight="bold"> Frequency</Text>
          <Editable
            pl={2}
            pr={2}
            borderRadius="0.5em"
            borderWidth="3px"
            defaultValue="1"
            borderColor="orange"
          >
            <EditablePreview />
            <EditableInput onChange={handleSubmitFrequencyReps} />
          </Editable>

          <Text fontWeight="bold">Times</Text>
          <Select
            variant="outline"
            size="md"
            borderRadius="0.5em"
            borderWidth="3px"
            borderColor="orange"
            onChange={handleSubmitFrequencyInterval}
          >
            <option>Daily</option>
            <option>Weekly</option>
            <option>Monthly</option>
          </Select>
        </Stack>
      </Box>
      <Box>
        <VStack>
          <Button
            className="submit-button"
            bgRepeat="repeat"
            colorScheme="orange"
            bgGradient="linear(to-l, #f05d4d, #f8a642 )"
            align="center"
            direction="row"
            mt="25px"
            onClick={handleClick}
          >
            Submit
          </Button>
        </VStack>
      </Box>
    </Box>
  );
}
export default AddingHabit;
