import { useEffect, useState } from "react";
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

async function fetchAllUsers() {
    let response = await fetch("https://status418-project.herokuapp.com/user");
    let data = await response.json();
    return data.payload;
}
async function retrieveHabits(userIdString) {
    console.log("Retrieving habits for: ",userIdString)
    const url = "https://status418-project.herokuapp.com";
    // const url = "http://localhost:3001";
    const fetchUrl = `${url}/habits?userId=${userIdString}`;
    const result = await fetch(fetchUrl);
    const data = await result.json();
    console.log(data.data);
    return data.data;
}
async function checkIncomingUserId(user) {
    let userlist = await fetchAllUsers();
    for (let i = 0; i < userlist.length; i++) {
        /* console.log("user: ", user)
        console.log("entry: ",i, "checking userSub: ",user.sub.substr(6), "vs user_id: ", userlist[i].user_id ) */
        if (userlist[i].user_id === user.sub.substr(6)) {
            console.log("incoming user ",user.sub.substr(6),"already exists")
            return user.sub.substr(6)
            /* const newHabits = await retrieveHabits(user.sub.substr(6))
                console.log("newHabits: ",newHabits)
                setHabits(newHabits);
                setCurrentHabitDisplayed(newHabits[0]);
            
            return; */
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
    console.log("Creating new user with sub: ",user.sub.substr(6),"and nick: ",user.nickname)
    let response = await fetch("https://status418-project.herokuapp.com/user", {
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
    console.log("Response (App): ",response)
    return response.payload[0].user_id
      
}

function App() {
    //let newHabits = [];
    const [currentHabitDisplayed, setCurrentHabitDisplayed] = useState([]);
    const [isFormDisplayed, setIsFormDisplayed] = useState(false);
    const [habits, setHabits] = useState([]);
    const { user, isAuthenticated, isLoading } = useAuth0();
    let userid=checkIncomingUserId(user);
    function displayForm() {
        if (!isFormDisplayed) {
            setIsFormDisplayed(true);
        }
    }
    useEffect(()=>{
        
    })
    async function setExistingHabitsOnPageLoad () {
        const newHabits = await retrieveHabits(userid);
        console.log("newHabits", newHabits);
        setHabits(newHabits);
        console.log("newHabit0: ", newHabits[0]);
        //Sets the default value for the habits Display Panel
        setCurrentHabitDisplayed(newHabits[0]);
    }

    /* useEffect(()=>{
        
    }) */
    setExistingHabitsOnPageLoad(userid)
    

    if (isLoading) {
        return (
            <div
                style={{
                    marginTop: "5em",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
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
                <p>{user ? "user = " + user.sub.substring(6) : "no id info"}</p>
                {!isAuthenticated ? (
                    <LandingPage />
                ) : (
                    <Flex {...flexProps}>
                        <LeftSideHabitDetails
                            isFormDisplayed={isFormDisplayed}
                            currentHabitDisplayed={currentHabitDisplayed}
                        />
                        <Calendar
                            displayForm={displayForm}
                            setIsFormDisplayed={setIsFormDisplayed}
                            isFormDisplayed={isFormDisplayed}
                            setCurrentHabitDisplayed={setCurrentHabitDisplayed}
                            habits={habits}
                        />
                    </Flex>
                )}
            </main>
            <Footer />
        </div>
    );
}

export default App;
