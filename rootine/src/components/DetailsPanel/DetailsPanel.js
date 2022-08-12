import { useEffect } from "react";
import "./detailsPanel.css";
import { FaFire, FaTrophy } from "react-icons/fa";

//prettier-ignore
import { Box, VStack, HStack, Stack, Heading, Text, Checkbox, Editable, EditableInput, EditablePreview, useEditableControls, EditableTextarea,  ButtonGroup, IconButton, Input, Wrap, WrapItem,  Tooltip, Select, Button, Center } from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";

//prettier-ignore
import { boxProps, fieldFrRepsProps, inputFrRepsProps, inputFrIntervalProps, saveButtonProps, editableNameProps } from "./DetailsPanelProps.js";
import { useState } from "react";

const DetailsPanel = ({
	currentHabitDisplayed,
	pleaseRefresh,
	setPleaseRefresh,
}) => {
	console.log("currentHabitDisplayed: ", currentHabitDisplayed);

	const [name, setName] = useState("Add a new habit");
	const [description, setDescription] = useState("No description found");

	useEffect(() => {
		setNameAndDesc();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentHabitDisplayed]);
	useEffect(() => {
		setNameAndDesc();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	function refreshCalendar() {
		setPleaseRefresh(!pleaseRefresh);
	}

	async function sendPatch() {
		const url = "https://status418-project.herokuapp.com/habits/";
		const fetchUrl = url + currentHabitDisplayed.id;
		console.log(fetchUrl);
		//send patch req to url for both current name and description
		//update the page with new data
		const resultName = await fetch(fetchUrl, {
			method: "PATCH",
			headers: {
				"Content-type": "application/json",
				"Access-Control-Allow-Origin": "*",
			},
			body: JSON.stringify({
				name: name,
			}),
		});
		const nameData = await resultName.json();
		// console.log(nameData);
		const resultDesc = await fetch(fetchUrl, {
			method: "PATCH",
			headers: {
				"Content-type": "application/json",
				"Access-Control-Allow-Origin": "*",
			},
			body: JSON.stringify({
				description: description,
			}),
		});
		const descData = await resultDesc.json();
		// console.log(descData);
		refreshCalendar();
	}

	function setNameAndDesc() {
		setName(currentHabitDisplayed.name);
		setDescription(currentHabitDisplayed.description);
	}

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

	function handleChange(e, input, inputType) {
		if (inputType === "name") {
			setName(input);
		} else if (inputType === "description") {
			setDescription(input);
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
			<Editable>
				<Tooltip label="Click to edit">
					<EditablePreview py={2} px={4} />
				</Tooltip>
				<Input py={2} px={4} as={EditableInput} />
				<EditableControls />
			</Editable>
		) : (
			<Editable
				{...editableNameProps}
				// defaultValue={
				// 	currentHabitDisplayed.name !== undefined
				// 		? currentHabitDisplayed.name
				// 		: "Add a new habit to get started"
				// }
				// defaultValue={currentHabitDisplayed.name}
				defaultValue={name}
				// value={
				// 	name !== undefined ? name : "Add a new habit to get started"
				// }
			>
				<Tooltip label="Click to edit">
					<EditablePreview py={2} px={4} />
				</Tooltip>
				<Input
					py={2}
					px={4}
					as={EditableInput}
					// onChange={(e) => {
					// 	handleChange("name");
					// }}
					onBlur={(e) =>
						handleChange(e, e.currentTarget.value, "name")
					}
					// onChange={(e) => console.log(e.currentTarget.value)}
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
					<EditableTextarea
						rows="4"
						// onChange={() => {
						// 	handleChange("description");
						// }}
					/>
				</Editable>
			</Box>
		) : (
			<Box className="description">
				<Heading size="sm" display="inline">
					Description
				</Heading>
				<Editable
					// defaultValue={
					// 	currentHabitDisplayed.description !== undefined
					// 		? currentHabitDisplayed.description
					// 		: ""
					// }
					defaultValue={description}
					textAlign="center"
					isPreviewFocusable={true}
					// selectAllOnFocus={false}
					// onChange={() => {
					// 	handleChange("description");
					// }}
				>
					<Tooltip label="Click to edit">
						<EditablePreview py={2} px={4} />
					</Tooltip>
					<EditableControls />
					<EditableTextarea
						rows="4"
						// onChange={() => {
						// 	handleChange("description");
						// }}
						onBlur={(e) =>
							handleChange(
								e,
								e.currentTarget.value,
								"description"
							)
						}
					/>
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
					<Button {...saveButtonProps} onClick={sendPatch}>
						Save
					</Button>
				</Center>
			</form>
		</Box>
	);
};

export default DetailsPanel;
