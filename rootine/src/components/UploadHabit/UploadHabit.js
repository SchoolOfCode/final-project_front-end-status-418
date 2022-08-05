import { useState } from "react";
import { boxProps } from "./UploadHabitProps.js";

//prettier-ignore
import { Box, VStack, HStack, Stack, Text, Checkbox, Textarea, Select, Button, Input, FormControl, FormLabel, Center } from "@chakra-ui/react";

//prettier-ignore
import { NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from '@chakra-ui/react'
import {
	addHabitSubmitButtonProps,
	frIntervalInputProps,
	frRepsInputProps,
} from "../DetailsPanel/DetailsPanelProps.js";

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

function UploadHabit() {
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

	function handleChangeInput(e, inputType) {
		e.preventDefault();
		const inputValue = e.target.value;
		console.log(inputValue);
		if (inputType === "name") {
			setHabits({
				...habits,
				habit_name: inputValue,
			});
		} else if (inputType === "description") {
			setHabits({
				...habits,
				description: inputValue,
			});
		}
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
			frequency_reps: frequencyreps,
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
		// upload(habits);
		const currentHabit = { ...habits[0] };
		console.log(currentHabit);
		// e.target.reset();
	}

	return (
		<Box {...boxProps}>
			<VStack>
				<FormControl>
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
				</FormControl>
				<FormControl>
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
				</FormControl>
				<Box className="everyday-checkbox">
					<HStack spacing={5} mt="15px">
						<Text fontWeight="bold"> Once a day </Text>

						<Checkbox
							size="lg"
							borderColor="orange"
							onChange={handleSubmitEveryday}
							required
							defaultChecked
							isDisabled
						/>
					</HStack>
				</Box>
			</VStack>

			<Box className="frequency">
				<Stack spacing={1} direction="row" align="baseline" mt="20px">
					<Text fontWeight="bold"> Frequency</Text>
					<NumberInput
						{...frRepsInputProps}
						onChange={handleSubmitFrequencyReps}
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
						onChange={handleSubmitFrequencyInterval}
						isDisabled>
						<option>Daily</option>
						<option>Weekly</option>
						<option>Monthly</option>
					</Select>
				</Stack>
			</Box>
			<Center>
				<Button {...addHabitSubmitButtonProps} onClick={handleClick}>
					Submit
				</Button>
			</Center>
		</Box>
	);
}
export default UploadHabit;
