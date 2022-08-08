import { useAuth0 } from "@auth0/auth0-react";
import Footer from "../Footer/Footer";
import "./App.css";
import Navbar from "../Navbar/Navbar";
// import DetailsPanel from "../DetailsPanel/DetailsPanel";

import LandingPage from "../LandingPage/LandingPage";
import LeftSideHabitDetails from "../LeftSideHabitDetails/LeftSideHabitDetails";
import Calendar from "./Calendar/Calendar";

//prettier-ignore
import { Center, Flex } from "@chakra-ui/react"
import { flexProps } from "./appProps.js";

function App() {
	const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
		useAuth0();
	console.log("app isAuth", isAuthenticated);
	console.log("app user", user);

	if (isLoading) {
		return (
			<div
				style={{
					marginTop: "5em",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}>
				<p style={{ fontSize: "1.5em" }}>Page loading...</p>
			</div>
		);
	}

	return (
		<div className="App">
			<Navbar />
			<main>
				<p>Authenticated? {isAuthenticated ? "yes" : "no"}</p>
				<p>{user ? "user = " + user.nickname : "no username info"}</p>
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
	);
}

export default App;
