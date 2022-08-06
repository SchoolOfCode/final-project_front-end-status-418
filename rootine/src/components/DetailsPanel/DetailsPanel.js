import { FaFire, FaTrophy } from "react-icons/fa";

//prettier-ignore
import { Box, VStack, HStack, Stack, Heading, Text, Checkbox, Editable, EditableInput, EditablePreview, useEditableControls, EditableTextarea,  ButtonGroup, IconButton, Input, Wrap, WrapItem, useColorModeValue,  Tooltip, Select, Button } from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";

import { boxProps } from "./DetailsPanelProps.js";

const DetailsPanel = () => {
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

	return (
		<Box {...boxProps}>
			<VStack>
				<Box>
					<Editable
						fontSize="3xl"
						fontWeight="bold"
						textAlign="center"
						className="habit-name"
						defaultValue="Walk the dog">
						<Tooltip label="Click to edit">
							<EditablePreview
								py={2}
								px={4}
								_hover={{
									background: useColorModeValue(
										"gray.100",
										"gray.700"
									),
								}}
							/>
						</Tooltip>
						<Input py={2} px={4} as={EditableInput} />
						<EditableControls />
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

				<Box className="description">
					<Heading size="sm" display="inline">
						{" "}
						Description{" "}
					</Heading>
					<Editable
						defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua"
						textAlign="center"
						isPreviewFocusable={true}
						// selectAllOnFocus={false}
					>
						<Tooltip label="Click to edit">
							<EditablePreview
								py={2}
								px={4}
								_hover={{
									background: useColorModeValue(
										"gray.100",
										"gray.700"
									),
								}}
							/>
						</Tooltip>
						<EditableControls />
						<EditableTextarea rows="4" />
					</Editable>
				</Box>

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
					TODO: In MVP behaviour, the Frequency Reps input here should
					not be editable
					<Editable
						pl={2}
						pr={2}
						borderRadius="0.5em"
						borderWidth="3px"
						defaultValue="1"
						borderColor="orange">
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
						className="save-button"
						bgRepeat="repeat"
						colorScheme="orange"
						bgGradient="linear(to-l, #f05d4d, #f8a642 )"
						align="center"
						direction="row"
						mt="10px">
						Save
					</Button>
				</VStack>
			</Box>
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
