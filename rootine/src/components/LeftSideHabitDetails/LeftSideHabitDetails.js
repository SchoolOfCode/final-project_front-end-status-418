import UploadHabit from "../UploadHabit/UploadHabit";
import DetailsPanel from "../DetailsPanel/DetailsPanel";
//prettier-ignore
import { Box, Flex,	Container, SimpleGrid, GridItem, Wrap } from "@chakra-ui/react";

export default function LeftSideHabitDetails() {
	return (
		<Box>
			<SimpleGrid columns={2}>
				<Container centerContent>
					<GridItem>
						<Flex
							className="view-container"
							height="100%"
							width="auto"
							display="flex"
							alignItems="center"
							marginLeft="5em"
							marginBottom="1em">
							<DetailsPanel />
						</Flex>
					</GridItem>
				</Container>
				<GridItem colStart={4} colEnd={4}>
					<Flex className="AddHabit-container">
						<UploadHabit />
					</Flex>
				</GridItem>
			</SimpleGrid>
		</Box>
	);
}
