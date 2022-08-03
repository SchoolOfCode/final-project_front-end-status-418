import { useState } from "react";
import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react";

/* 
PLAN:
Create a use state object that takes in Habit name, Description of habit, everyday and frequency of habit
Create different functions that log in the new habit into the database 
Import add button from correct file into AddHabitForm.js 



Functionality:
- Once add button is pressed it should render a form version of the habit panel. 

*/

function AddHabitForm() {
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
    });

    function handleSubmitDescription(e) {
      e.preventDefault();
      const description = e.target.value;
      setHabits({
        ...habits,
        description: description,
      });
    }

    return (
      <Box
        className="Addhabit-panel-parent"
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
        <Box>
          <FormControl>
            <FormLabel>Habit Name</FormLabel>
            <Input type="text" />
          </FormControl>
        </Box>
      </Box>
    );
  }
}
export default AddHabitForm;
