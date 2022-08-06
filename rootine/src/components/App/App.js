import Footer from "../Footer/Footer";
import "./App.css";
import Navbar from "../Navbar/Navbar";
// import DetailsPanel from "../DetailsPanel/DetailsPanel";

import LandingPage from "../LandingPage/LandingPage";
import LeftSideHabitDetails from "../LeftSideHabitDetails/LeftSideHabitDetails";
import Calendar from "./Calendar/Calendar";

//prettier-ignore
import { Flex } from "@chakra-ui/react"

import { flexProps } from "./appProps.js";

function App() {
	const areYouCurrentlyWorkingOnTheLandingPage = false;

	return (
		<div className="App">
			<Navbar />
			<main>
				{areYouCurrentlyWorkingOnTheLandingPage ? (
					<LandingPage />
				) : (
					<Flex {...flexProps}>
						<LeftSideHabitDetails />
						<Calendar />
					</Flex>
				)}
			</main>
			<Footer />
		</div>
	);
}

export default App;
