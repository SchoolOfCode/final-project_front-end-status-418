import { useContext } from "react";
// import react from "react";
import Footer from "../Footer/Footer";
import "./App.css";
import Navbar from "../Navbar/Navbar";
// import DetailsPanel from "../DetailsPanel/DetailsPanel";

import LandingPage from "../LandingPage/LandingPage";
import LeftSideHabitDetails from "../LeftSideHabitDetails/LeftSideHabitDetails";
import Calendar from "./Calendar/Calendar";

//prettier-ignore
import { Flex } from "@chakra-ui/react"
// import { useAuth0 } from "@auth0/auth0-react";
import { flexProps } from "./appProps.js";

import { AuthContext, AuthContextProvider } from "../../AuthContext.js";

// ❌ realisation: Auth0Provider might give us this stuff anyway???
//		stuck on how to isAuthenticated and user can be access by deeper level compoennts
//		tried creating a context wrapper but I don't think that's quite right.

function App() {
	// const AuthContext = react.createContext([false, {}]);
	// const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
	// 	useAuth0();
	// const authContextValues = [isAuthenticated, user];
	// console.log("authContextValues", authContextValues);
	// const areYouCurrentlyWorkingOnTheLandingPage = true;
	const [isAuthenticated, user] = useContext(AuthContext);
	console.log("app isAuth", isAuthenticated);
	console.log("app user", user);
	return (
		<AuthContextProvider>
			<div className="App">
				<Navbar />
				<p>Authenticated? {isAuthenticated ? isAuthenticated : "no"}</p>
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
		</AuthContextProvider>
	);
}

export default App;
