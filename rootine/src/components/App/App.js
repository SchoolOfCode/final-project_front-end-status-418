import react from "react";
import Footer from "../Footer/Footer";
import "./App.css";
import Navbar from "../Navbar/Navbar";
// import DetailsPanel from "../DetailsPanel/DetailsPanel";

import LandingPage from "../LandingPage/LandingPage";
import LeftSideHabitDetails from "../LeftSideHabitDetails/LeftSideHabitDetails";
import Calendar from "./Calendar/Calendar";

//prettier-ignore
import { Flex } from "@chakra-ui/react"
import { useAuth0 } from "@auth0/auth0-react";

import { flexProps } from "./appProps.js";

const AuthContext = react.createContext();

function App() {
	const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
		useAuth0();
	const authContext = [isAuthenticated, user];
	console.log("authContext", authContext);
	// const areYouCurrentlyWorkingOnTheLandingPage = true;

	return (
		<AuthContext.Provider value={authContext}>
			<div className="App">
				<Navbar />
				<p>{isAuthenticated}</p>
				<main>
					{!isAuthenticated ? (
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
		</AuthContext.Provider>
	);
}

export default App;
