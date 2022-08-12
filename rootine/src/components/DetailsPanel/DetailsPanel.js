import "./detailsPanel.css";
import { FaFire, FaTrophy } from "react-icons/fa";

//prettier-ignore
import { Box, VStack, HStack, Stack, Heading, Text, Checkbox, Editable, EditableInput, EditablePreview, useEditableControls, EditableTextarea,  ButtonGroup, IconButton, Input, Wrap, WrapItem,  Tooltip, Select, Button, Center } from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";

//prettier-ignore
import { boxProps, fieldFrRepsProps, inputFrRepsProps, inputFrIntervalProps, saveButtonProps, editableNameProps } from "./DetailsPanelProps.js";
import { useState } from "react";

const DetailsPanel = ({ currentHabitDisplayed }) => {
	console.log("currentHabitDisplayed: ", currentHabitDisplayed);

	const [name, setName] = useState(currentHabitDisplayed.name);
	const [description, setDescription] = useState(
		currentHabitDisplayed.description
	);

	function EditableControls() {
		const { isEditing, getSubmitButtonProps, getCancelButtonProps } =
			useEditableControls();

		return isEditing ? (
			<ButtonGroup justifyContent="center" size="sm">
				<IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
				<IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
			</ButtonGroup>
		) : null;
	}

	function handleChange(e, inputType) {
		console.log("Handle change running");
		let n = e.target;
		console.log(n);

		if (inputType === "name") {
			setName(n);
		} else if (inputType === "description") {
			setDescription(n);
		} else
			throw new Error("Incorrect input type in handle change function");
	}

	function EditableName() {
		const { isEditing } = useEditableControls();

		// return (
		// 	<div>
		// 		{isEditing ? (
		// 		<Editable
		// 			{...editableNameProps}
		// 			defaultValue={
		// 				currentHabitDisplayed.name !== undefined
		// 					? currentHabitDisplayed.name
		// 					: "Add a new habit to get started"
		// 			}>
		// 			) : (<Editable {...editableNameProps}></Editable>)}
		// 			<Tooltip label="Click to edit">
		// 				<EditablePreview py={2} px={4} />
		// 			</Tooltip>
		// 			<Input py={2} px={4} as={EditableInput} />
		// 			<EditableControls />
		// 		</Editable>
		// 	</div>
		// );

		return isEditing ? (
			<Editable
				{...editableNameProps}
				// onChange={() => {
				// 	handleChange();
				// }}
			>
				<Tooltip label="Click to edit">
					<EditablePreview py={2} px={4} />
				</Tooltip>
				<Input py={2} px={4} as={EditableInput} />
				<EditableControls />
			</Editable>
		) : (
			<Editable
				{...editableNameProps}
				defaultValue={
					currentHabitDisplayed.name !== undefined
						? currentHabitDisplayed.name
						: "Add a new habit to get started"
				}>
				<Tooltip label="Click to edit">
					<EditablePreview py={2} px={4} />
				</Tooltip>
				<Input
					py={2}
					px={4}
					as={EditableInput}
					onChange={() => {
						handleChange("name");
					}}
				/>
				<EditableControls />
			</Editable>
		);
	}

	function EditableDescription() {
		const { isEditing } = useEditableControls();

		return isEditing ? (
			<Box className="description">
				<Heading size="sm" display="inline">
					Description
				</Heading>
				<Editable textAlign="center" isPreviewFocusable={true}>
					<Tooltip label="Click to edit">
						<EditablePreview py={2} px={4} />
					</Tooltip>
					<EditableControls />
					<EditableTextarea rows="4" />
				</Editable>
			</Box>
		) : (
			<Box className="description">
				<Heading size="sm" display="inline">
					Description
				</Heading>
				<Editable
					defaultValue={
						currentHabitDisplayed.description !== undefined
							? currentHabitDisplayed.description
							: ""
					}
					textAlign="center"
					isPreviewFocusable={true}
					// selectAllOnFocus={false}
					onChange={() => {
						handleChange("description");
					}}>
					<Tooltip label="Click to edit">
						<EditablePreview py={2} px={4} />
					</Tooltip>
					<EditableControls />
					<EditableTextarea rows="4" />
				</Editable>
			</Box>
		);
	}

	return (
		<Box {...boxProps}>
			<form id="details-form">
				<VStack>
					<Box>
						<Editable>
							<EditableName />
						</Editable>
					</Box>

					<Box className="current-streak">
						<Wrap spacing="5px">
							<WrapItem alignItems="center">
								<FaFire color="#f05d4d" />
								<Text ml="5px">
									You are currently on a ____ streak
								</Text>
							</WrapItem>
						</Wrap>
					</Box>
					<Box className="longest-streak">
						<Wrap spacing="5px">
							<WrapItem alignItems="center">
								<FaTrophy color="gold" />
								<Text ml="7px">
									Your longest streak is ____ days
								</Text>
							</WrapItem>
						</Wrap>
					</Box>
					<Editable>
						<EditableDescription />
					</Editable>

					<Box className="everyday-checkbox">
						<HStack spacing={5} mb="8px">
							<Text fontWeight="bold"> Once a day </Text>
							<Checkbox
								size="lg"
								borderColor="orange"
								isChecked
								isDisabled></Checkbox>
						</HStack>
					</Box>
				</VStack>

				<Box className="frequency">
					<Stack spacing={1} direction="row" align="baseline">
						<Text fontWeight="bold"> Frequency</Text>
						<Editable
							className="fr-reps-disabled"
							{...fieldFrRepsProps}>
							<Tooltip label="Habits that occur with a specific frequency are not currently supported, please check back soon">
								<EditablePreview
									className="fr-reps-display"
									{...inputFrRepsProps}
								/>
							</Tooltip>
							<EditableInput
								className="fr-reps-display"
								{...inputFrRepsProps}
							/>
						</Editable>
						<Text fontWeight="bold">Times</Text>
						<Tooltip label="Habits that occur with a specific frequency are not currently supported, please check back soon">
							<Select {...inputFrIntervalProps}>
								<option>Daily</option>
								<option>Weekly</option>
								<option>Monthly</option>
							</Select>
						</Tooltip>
					</Stack>
				</Box>
				<Center>
					<Button {...saveButtonProps}>Save</Button>
				</Center>
			</form>
		</Box>
	);
};

export default DetailsPanel;

// {
//   /* Habit Title header , use theme font */
// }
// {
//   /* Current Habit Streak / Icon and p tag */
// }
// {
//   /* Longest Habit Streak / Icon and p tag*/
// }

// {
//   /* Description / p tag */
// }
// {
//   /* Everyday Toggle  / checkbox */
// }
// {
//   /* Frequency / p tag with input field and dropdown */
// }
