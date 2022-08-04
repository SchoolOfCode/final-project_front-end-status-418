import { useState } from "react";
import { Button, FormControl, FormLabel, Input, Box } from "@chakra-ui/react";

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
        
        <FormControl>
        <FormLabel>Habit Name</FormLabel>
        <Input type="text" />
        <Button>Add habit Name</Button>
      </FormControl>
    
      
      )
}

export default AddingHabit;
