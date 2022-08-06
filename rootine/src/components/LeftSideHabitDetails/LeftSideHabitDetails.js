import UploadHabit from "../UploadHabit/UploadHabit";
import DetailsPanel from "../DetailsPanel/DetailsPanel";
//prettier-ignore
import { Box, Button, VStack } from "@chakra-ui/react";
import { useState } from "react";

export default function LeftSideHabitDetails() {
	//When switchDisplay is true, the habit details panel shows, when false, AddNewHabit panel shows
	//Button added to perform the switch
	// This is temporary!
	const [switchDisplay, setSwitchDisplay] = useState(true);

	const vStackProps = {
		className: "view-container",
		height: "100%",
		width: "auto",
		display: "flex",
		alignItems: "center",
		marginLeft: "5em",
		marginBottom: "1em",
	};

	function switchDetailsDisplay() {
		setSwitchDisplay(!switchDisplay);
	}

	return (
		<Box>
			<VStack {...vStackProps}>
				<Button
					bgGradient="linear(to-l, #f05d4d, #f8a642 )"
					colorScheme="orange"
					mt={10}
					onClick={switchDetailsDisplay}>
					Switch!
				</Button>
				{switchDisplay ? <DetailsPanel /> : <UploadHabit />}
			</VStack>
		</Box>
	);
}
