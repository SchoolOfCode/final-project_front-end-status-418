import { useState } from "react";
//prettier-ignore
import { boxProps, addHabitSubmitButtonProps, frIntervalInputProps,	frRepsInputProps, } from "./uploadHabitProps.js";

//prettier-ignore
import { Box, VStack, HStack, Stack, Text, Checkbox, Textarea, Select, Button, Input, FormControl, FormLabel, Center } from "@chakra-ui/react";

//prettier-ignore
import { NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from '@chakra-ui/react'

// component name is AddingHabit but the file is called UploadHabit - make consistent? ✅
// functions are called 'handleSubmits' but they trigger on change - rename? - sort of done ✅
// create a form for the input fields and tie the onSubmit to the form itself rather than the button.
// can we combine some of the handleChange functions into one? ✅
// TODO: Frequency rep input in new habit form is massive, size to be fixed

/* 
PLAN:
Create a use state object that takes in Habit name, Description of habit, everyday and frequency of habit
Create different functions that log in the new habit into the database 
Import add button from correct file into AddHabitForm.js 
Stretch goal: Add input restriction- only accepts numbers

Functionality:
- Once add button is pressed it should render a form version of the habit panel. 

*/

//TODO: add userid to habits state!

function UploadHabit() {
	const [newHabit, setNewHabit] = useState([
		{
			name: "",
			description: "",
			everyday: true,
			frequency: {
				frequency_reps: null,
				frequency_interval: null,
			},
		},
	]);

	function handleChangeInput(e, inputType) {
		e.preventDefault();
		const inputValue = e.target.value;
		console.log(inputValue);

		setNewHabit([{ ...newHabit[0], [inputType]: inputValue }]);
		const updatedHabit = [{ ...newHabit[0] }];
		console.log(updatedHabit);
	}

	function formSubmit(e) {
		//Note that the state 'newHabit' is updated in the handleChangeInput function
		e.preventDefault();
		console.log("Form submitted");
		e.target.reset();
		const createdHabit = [{ ...newHabit[0] }];
		document.getElementById(
			"print-current-state"
		).innerHTML = `Name: ${newHabit[0].name}, Description: ${newHabit[0].description}, Everyday: ${newHabit[0].everyday}, FrReps: ${newHabit[0].frequency.frequency_reps}, FrInterval: ${newHabit[0].frequency.frequency_interval}`;
	}

	return (
		<Box {...boxProps}>
			<form onSubmit={formSubmit}>
				<FormControl>
					<VStack>
						<FormLabel fontWeight="bold">
							Habit Name
							<Input
								type="text"
								onChange={(e) => {
									handleChangeInput(e, "name");
								}}
								required
							/>
						</FormLabel>

						<FormLabel fontWeight="bold">
							Habit Description
							<Textarea
								overflow="auto"
								onChange={(e) => {
									handleChangeInput(e, "description");
								}}
								required
							/>
						</FormLabel>

						<Box className="everyday-checkbox">
							<HStack spacing={5} mt="15px">
								<Text fontWeight="bold"> Once a day </Text>

								<Checkbox
									size="lg"
									borderColor="orange"
									// onChange={handleSubmitEveryday}
									required
									defaultChecked
									isDisabled
								/>
							</HStack>
						</Box>
					</VStack>

					<Box className="frequency">
						<Stack
							spacing={1}
							direction="row"
							align="baseline"
							mt="20px">
							<Text fontWeight="bold"> Frequency</Text>
							<NumberInput
								{...frRepsInputProps}
								// onChange={handleSubmitFrequencyReps}
								isDisabled>
								<NumberInputField />
								<NumberInputStepper>
									<NumberIncrementStepper />
									<NumberDecrementStepper />
								</NumberInputStepper>
							</NumberInput>

							<Text fontWeight="bold">Times</Text>
							<Select
								{...frIntervalInputProps}
								// onChange={handleSubmitFrequencyInterval}
								isDisabled>
								<option>Daily</option>
								<option>Weekly</option>
								<option>Monthly</option>
							</Select>
						</Stack>
					</Box>
					<Center>
						<Button
							type="submit"
							{...addHabitSubmitButtonProps}
							// onClick={handleClick}
						>
							Submit
						</Button>
					</Center>
				</FormControl>
			</form>
			<p id="print-current-state">Nothing here</p>
		</Box>
	);
}
export default UploadHabit;
