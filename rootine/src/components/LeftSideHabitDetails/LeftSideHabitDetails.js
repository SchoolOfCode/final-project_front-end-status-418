import UploadHabit from "../UploadHabit/UploadHabit";
import DetailsPanel from "../DetailsPanel/DetailsPanel";
//prettier-ignore
import { Box, Flex,	Container, SimpleGrid, GridItem, Button, VStack } from "@chakra-ui/react";
import { useState } from "react";

export default function LeftSideHabitDetails() {
	//When switchDisplay is true, the habit details panel shows, when false, AddNewHabit panel shows
	//This is temporary!
	const [switchDisplay, setSwitchDisplay] = useState(true);

	function switchDetailsDisplay(e) {
		setSwitchDisplay(!switchDisplay);
	}

	return (
		<Box>
			{/* <SimpleGrid columns={2}> */}
			{/* <Container centerContent> */}

			{/* <GridItem> */}
			<VStack
				className="view-container"
				height="100%"
				width="auto"
				display="flex"
				alignItems="center"
				marginLeft="5em"
				marginBottom="1em">
				<Button
					bgGradient="linear(to-l, #f05d4d, #f8a642 )"
					colorScheme="orange"
					mt={10}
					onClick={switchDetailsDisplay}>
					Switch!
				</Button>
				{switchDisplay ? (
					<DetailsPanel />
				) : (
					<UploadHabit />
					//<Flex className="AddHabit-container"> */}
					///* </Flex> */}
				)}
			</VStack>
			{/* </GridItem> */}
			{/* </Container> */}
			{/* </SimpleGrid> */}
		</Box>
	);
}
