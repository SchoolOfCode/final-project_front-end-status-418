import Footer from "../Footer/Footer";
import "./App.css";
import Navbar from "../Navbar/Navbar";
import DetailsPanel from "../DetailsPanel/DetailsPanel";
import {
	Box,
	Flex,
	Container,
	SimpleGrid,
	GridItem,
	Wrap,
} from "@chakra-ui/react";
import UploadHabit from "../AddHabit/UploadHabit";

import LandingPage from "../LandingPage/LandingPage";

function App() {
	const areYouCurrentlyWorkingOnTheLandingPage = false;

	return (
		<div className="App">
			<Navbar />
			<main>
				{areYouCurrentlyWorkingOnTheLandingPage ? (
					<LandingPage />
				) : (
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
								<Flex
									className="AddHabit-container"
									//  height="55%"
									//  width="55%"
									// display="flex"
									//  alignItems="center"
									//  marginLeft="4em"
									//  marginBottom="1em"
								>
									<UploadHabit />
								</Flex>
							</GridItem>
						</SimpleGrid>
					</Box>
				)}
			</main>
			<Footer />
		</div>
	);
}

export default App;
