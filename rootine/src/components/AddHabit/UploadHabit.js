import { useState } from "react";
import { FaFire, FaTrophy } from "react-icons/fa";

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
  FormLabel
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";

/* 
PLAN:
Create a use state object that takes in Habit name, Description of habit, everyday and frequency of habit
Create different functions that log in the new habit into the database 
Import add button from correct file into AddHabitForm.js 

Functionality:
- Once add button is pressed it should render a form version of the habit panel. 

*/



function AddingHabit(){
    const [habits, setHabits] = useState({
        habit_name: "",
        description: "",
        everyday: Boolean,
        fequency: "",
        times: "",
      });

      function handleSubmitName(e) {
        e.preventDefault();
        const name = e.target.value;
        setHabits({
          ...habits,
          habit_name: name,
        })};

        function handleSubmitDescription(e) {
            e.preventDefault();
            const description = e.target.value;
            setHabits({
              ...habits,
              description: description,
            });
          }
    
    
    return( 
      <Box
      className="details-panel-parent"
      //display="table-row"
      // maxW="1000px"
      w="23em"
      h="70%"
      // mr="50%"
      // ml="25%"
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
        <Input type="text"/>
      </FormControl>

      <FormControl>
        <FormLabel fontWeight="bold">Habit Description</FormLabel>
        {/* <Input type="text"/> */}
        <Textarea overflow="auto"/>
      </FormControl>

        <Box className="everyday-checkbox">
          <HStack spacing={5}  mt="15px">
            <Text fontWeight="bold"> Once a day </Text>
            <Checkbox size="lg" borderColor="orange"></Checkbox>
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
            <EditableInput />
          </Editable>

          <Text fontWeight="bold">Times</Text>
          <Select
            variant="outline"
            size="md"
            borderRadius="0.5em"
            borderWidth="3px"
            borderColor="orange"
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
          >
            Submit
          </Button>
        </VStack>
      </Box>
    </Box>
      
      )
}

export default AddingHabit;
