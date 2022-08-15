import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./UploadHabit.css";

//prettier-ignore
import { addHabitSubmitButtonProps, frIntervalInputProps,	frRepsFieldProps, frRepsInputProps, everydayCheckBoxProps } from "./uploadHabitProps.js";
//📝 NOTE: Imports boxProps from DetailsPanel so that the boxes are the same!
import { boxProps } from "../DetailsPanel/DetailsPanelProps";

//prettier-ignore
import { Box, VStack, HStack, Stack, Text, Checkbox, Textarea, Select, Button, Input, FormControl, FormLabel, Center, Heading, Tooltip, Modal,  ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Alert, AlertIcon } from "@chakra-ui/react";

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

function UploadHabit({ pleaseRefresh, setPleaseRefresh }) {
	// let user = 'testuser'
	const { user } = useAuth0();
	const userId = user.sub.substr(6);
	//📝 Note that the values for everyday, fr_reps and fr_interval are hard-coded, which is MVP behaviour. Should be updated when features added.
	const emptyHabit = [
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
	];
	const [newHabit, setNewHabit] = useState(emptyHabit);
	// const [refreshPage, setRefreshPage] = useState(true);

	//For Add Habit confirmation modal
	const { isOpen, onOpen, onClose } = useDisclosure();

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
		// document.getElementById(
		// 	"print-current-state"
		// ).innerHTML = `Name: ${newHabit[0].name}, Description: ${newHabit[0].description}, Everyday: ${newHabit[0].everyday}, FrReps: ${newHabit[0].frequency.fr_reps}, FrInterval: ${newHabit[0].frequency.fr_interval}, User: ${newHabit[0].userId}`;

		postHabit(createdHabit);
	}

	/** 📩 It Takes the data from the new habit form submission and sends to the database. Note that the back-end currently only expects three values: name, description and userId. The other values are hard-coded (MVP behaviour). */
	async function postHabit(habit) {
		//TODO: Be sure to change this if working on another port or once backend is deployed.
		// console.log("usersub (uploadhabit)", user.sub);
		// const url = "http://localhost:3001/habits";
		const url = `https://status418-project.herokuapp.com/habits`;

		// console.log(`URL set to: ${url}`);
		// console.log(
		// 	"Habit",
		// 	habit[0].name,
		// 	habit[0].description,
		// 	habit[0].userId,
		// 	"sent!"
		// );
		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-type": "application/json",
				"Access-Control-Allow-Origin": "*",
			},
			body: JSON.stringify({
				name: `${habit[0].name}`,
				description: `${habit[0].description}`,
				userId: user.sub.substr(6),
			}),
		});
		const data = await response.json();
		openConfirmModal();
		requestHabitsRefresh();
		return data;
		// TODO: :
		// ✅ PLAN
		//arrange data in expected format
		//send post request to url/habits
		//if receives a success message, provide an alert
		//Should also trigger App.js to update the habits list for display on the right-hand side of the page
	}

	function openConfirmModal() {
		//Opens up confirmation modal
		onOpen();
	}

	function requestHabitsRefresh() {
		// setRefreshPage(!refreshPage);
		// setNewHabit(emptyHabit);
		setPleaseRefresh(!pleaseRefresh);
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
								placeholder="Add habit name here"
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
								placeholder="Add habit description here"
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
			{/* <article
				id="print-current-state"
				style={{ marginTop: "1em", fontSize: "0.8em" }}>
				[...when form is submitted, new habit data will appear here
				(temporary)]
			</article> */}
			<AddHabitConfirmModal
				isOpen={isOpen}
				onClose={onClose}
				habitName={newHabit[0].name ? newHabit[0].name : ""}
			/>
		</Box>
	);
}

function AddHabitConfirmModal({ isOpen, onClose, habitName }) {
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>
					<Text fontFamily="var(--headings)">Success!</Text>
				</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Alert status="success">
						<AlertIcon />
						New habit “{habitName}” successfully created!
					</Alert>
				</ModalBody>
				<ModalFooter>
					<Button
						colorScheme="blue"
						fontWeight="normal"
						className="ok-button-modal"
						onClick={onClose}>
						OK
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
}

export default UploadHabit;
