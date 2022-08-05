import { useState } from "react";
import { boxProps } from "./UploadHabitProps";

//prettier-ignore
import { Box, VStack, HStack, Stack, Text, Checkbox, Editable, EditableInput, EditablePreview, Textarea, Select, Button, Input, FormControl, FormLabel, } from "@chakra-ui/react";

//prettier-ignore
import { NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from '@chakra-ui/react'

// component name is AddingHabit but the file is called UploadHabit - make consistent? ✔
// functions are called 'handleSubmits' but they trigger on change - rename?
// create a form for the input fields and tie the onSubmit to the form itself rather than the button.
// can we combine some of the handleChange functions into one?
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

function UploadHabit({ upload }) {
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
		upload(habits);
		e.target.reset();
	}

	return (
		<Box
			{...boxProps}
			// className="details-panel-parent"
			// w="23em"
			// h="70%"
			// borderWidth="3px"
			// borderRadius="4.5em"
			// overflow="hidden"
			// color="black"
			// boxShadow="md"
			// m={20}
			// p={10}
			// pt={10}
			// pb={10}
			// pl={10}
			// pr={10}
			// bg="white"
		>
			<VStack>
				<FormControl>
					<FormLabel fontWeight="bold">Habit Name</FormLabel>
					<Input
						type="text"
						onChange={(e) => {
							handleChangeInput(e, "name");
						}}
						required
					/>
				</FormControl>

				<FormControl>
					<FormLabel fontWeight="bold">Habit Description</FormLabel>
					<Textarea
						overflow="auto"
						onChange={(e) => {
							handleChangeInput(e, "description");
						}}
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
						defaultValue={0}
						min={0}
						max={10}
						pl={2}
						pr={2}
						borderRadius="0.5em"
						borderWidth="3px"
						borderColor="orange"
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
						variant="outline"
						size="md"
						borderRadius="0.5em"
						borderWidth="3px"
						borderColor="orange"
						onChange={handleSubmitFrequencyInterval}
						isDisabled>
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
						onClick={handleClick}>
						Submit
					</Button>
				</VStack>
			</Box>
		</Box>
	);
}
export default UploadHabit;
