import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import Footer from "../Footer/Footer";
import "./App.css";
import Navbar from "../Navbar/Navbar";

import LandingPage from "../LandingPage/LandingPage";
import LeftSideHabitDetails from "../LeftSideHabitDetails/LeftSideHabitDetails";
import Calendar from "./Calendar/Calendar";

//prettier-ignore
import { Flex } from "@chakra-ui/react"
import { flexProps } from "./appProps.js";

/* 
    Upon logging in, check whether incoming user_id matches already exists
        If it does, do nothing
        If it doesn't, send post req 
*/

async function fetchAllUsers() {
	let response = await fetch("https://status418-project.herokuapp.com/user");
	let data = await response.json();
	// console.log("datapayload: ", data.payload);
	return data.payload;
}

async function checkIncomingUserid(user) {
	let userlist = await fetchAllUsers();
	for (let i = 0; i < userlist.length; i++) {
		// console.log("entry: ",i, "userSub: ",user.sub.substr(6), "vs user_id: ", userlist[i].user_id )
		if (userlist[i].user_id === user.sub.substr(6)) {
			// console.log("incoming user", user.sub.substr(6), "already exists");
			return;
		}
		/* else {
            console.log("Creating new user with sub: ",user.sub.substr(6),"and nick: ",user.nickname)
            await fetch("https://status418-project.herokuapp.com/user", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify({
                    username: `${user.nickname}`,
                    user_id: `${user.sub.substr(6)}`,
                }),
            });
        } 
        */
		//  The else statement above will run for EVERY entry that doesn't match the case - multiple identical post requests made.
	}
	console.log(
		"Creating new user with sub: ",
		user.sub.substr(6),
		"and nick: ",
		user.nickname
	);
	await fetch("https://status418-project.herokuapp.com/user", {
		method: "POST",
		headers: {
			"Content-type": "application/json",
			"Access-Control-Allow-Origin": "*",
		},
		body: JSON.stringify({
			username: `${user.nickname}`,
			user_id: `${user.sub.substr(6)}`,
		}),
	});
}

function App() {
	const [currentHabitDisplayed, setCurrentHabitDisplayed] = useState([]);
	const [isFormDisplayed, setIsFormDisplayed] = useState(false);
	const [pleaseRefresh, setPleaseRefresh] = useState(true);
	const { user, isAuthenticated, isLoading } = useAuth0();
	checkIncomingUserid(user);
	function displayForm() {
		if (!isFormDisplayed) {
			setIsFormDisplayed(true);
		}
	}

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
				<p>{user ? "user = " + user.sub.substr(6) : "no id info"}</p>
				{!isAuthenticated ? (
					<LandingPage />
				) : (
					<Flex {...flexProps}>
						<LeftSideHabitDetails
							isFormDisplayed={isFormDisplayed}
							currentHabitDisplayed={currentHabitDisplayed}
							pleaseRefresh={pleaseRefresh}
							setPleaseRefresh={setPleaseRefresh}
						/>
						<Calendar
							displayForm={displayForm}
							setIsFormDisplayed={setIsFormDisplayed}
							isFormDisplayed={isFormDisplayed}
							setCurrentHabitDisplayed={setCurrentHabitDisplayed}
							pleaseRefresh={pleaseRefresh}
						/>
					</Flex>
				)}
			</main>
			<Footer />
		</div>
	);
}

export default App;
