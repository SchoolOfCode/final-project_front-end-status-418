import { useState } from "react";
import "./UploadHabit.css";
//prettier-ignore
import { boxProps, addHabitSubmitButtonProps, frIntervalInputProps,	frRepsFieldProps, frRepsInputProps, everydayCheckBoxProps } from "./uploadHabitProps.js";

//prettier-ignore
import { Box, VStack, HStack, Stack, Text, Checkbox, Textarea, Select, Button, Input, FormControl, FormLabel, Center, Heading, Tooltip } from "@chakra-ui/react";

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

function UploadHabit() {
	// TODO: This should be changed to the Auth0 userid once Auth0 implementation is sorted.
	const userId = "hannahtest";

	//📝 Note that the values for everyday, fr_reps and fr_interval are hard-coded, which is MVP behaviour. Should be updated when features added.
	const [newHabit, setNewHabit] = useState([
		{
			name: "",
			description: "",
			everyday: true,
			frequency: {
				fr_reps: null,
				fr_interval: null,
			},
			userId: userId,
		},
	]);

	function handleChangeInput(e, inputType) {
		e.preventDefault();
		const inputValue = e.target.value;
		const updatedHabit = [{ ...newHabit[0], [inputType]: inputValue }];
		setNewHabit(updatedHabit);
	}

	/** Handles the submission of the form: collates data from newHabit state, resets form, and calls the postHabit function that sends the data to the db */
	function formSubmit(e) {
		// 📝 Note that the state 'newHabit' is updated in the handleChangeInput function
		e.preventDefault();
		console.log("Form submitted");
		e.target.reset();
		const createdHabit = [{ ...newHabit[0] }];

		// #️⃣ Temporary: prints data object in the DOM just so we can see that the data have been correctly captured .
		document.getElementById(
			"print-current-state"
		).innerHTML = `Name: ${newHabit[0].name}, Description: ${newHabit[0].description}, Everyday: ${newHabit[0].everyday}, FrReps: ${newHabit[0].frequency.fr_reps}, FrInterval: ${newHabit[0].frequency.fr_interval}, User: ${newHabit[0].userId}`;

		postHabit(createdHabit);
	}

	/** 📩 Takes the data from the new habit form submission and sends to the database. Note that the back-end currently only expects three values: name, description and userId. The other values are hard-coded (MVP behaviour). */
	async function postHabit(habit) {
		//TODO: Be sure to change this if working on another port or once backend is deployed.
		const url = `https://status418-project.herokuapp.com/habits`;
		console.log(`URL set to: ${url}`);
		fetch(url, {
			method: 'POST',
			headers: {
				"Content-type": "application/json",
				'Access-Control-Allow-Origin': '*'
			}, body: {
				name: `${habit.name}`,
				description: `${habit.description}`,
				userId: `${habit.userId}`
			}
		})
		// TODO:
		// ✅ PLAN
		//arrange data in expected format
		//send post request to url/habits
		//if receives a success message, provide an alert
		//Should also trigger App.js to update the habits list for display on the right-hand side of the page
	}

	return (
		<Box {...boxProps}>
			<form onSubmit={formSubmit}>
				<FormControl>
					<VStack>
						<Heading fontSize="3xl" mb="3" pt="4">
							Add a new habit
						</Heading>
						<FormLabel fontWeight="bold">
							Habit name
							<Input
								type="text"
								onChange={(e) => {
									handleChangeInput(e, "name");
								}}
								required
							/>
						</FormLabel>

						<FormLabel fontWeight="bold">
							Habit description
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
								<Tooltip label="Habits that occur with a specific frequency are not currently supported, please check back soon">
									<FormLabel fontWeight="bold">
										<span id="everyday-check-label">
											Once a day
										</span>
										<Checkbox
											{...everydayCheckBoxProps}
											id="everyday-checkbox"
										/>
									</FormLabel>
								</Tooltip>
							</HStack>
						</Box>
					</VStack>

					<Box className="frequency">
						<Stack
							spacing={1}
							direction="row"
							align="center"
							mt="20px">
							TODO: NumberInput field is very large... needs
							fixing! TODO: V faint shadow of input field box
							visible on screen, 1px!
							<Text fontWeight="bold">Frequency</Text>
							<Tooltip label="Habits that occur with a specific frequency are not currently supported, please check back soon">
								<NumberInput
									{...frRepsFieldProps}
									// onChange={handleSubmitFrequencyReps}
								>
									<NumberInputField {...frRepsInputProps} />
									<NumberInputStepper>
										<NumberIncrementStepper />
										<NumberDecrementStepper />
									</NumberInputStepper>
								</NumberInput>
							</Tooltip>
							<Text fontWeight="bold">Times</Text>
							<Tooltip label="Habits that occur with a specific frequency are not currently supported, please check back soon">
								<Select
									{...frIntervalInputProps}
									// onChange={handleSubmitFrequencyInterval}
								>
									<option>Daily</option>
									<option>Weekly</option>
									<option>Monthly</option>
								</Select>
							</Tooltip>
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
			<p
				id="print-current-state"
				style={{ marginTop: "1em", fontSize: "0.8em" }}>
				[...when form is submitted, new habit data will appear here
				(temporary)]
			</p>
		</Box>
	);
}
export default UploadHabit;
