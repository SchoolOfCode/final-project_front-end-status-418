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

/* async function fetchAllUsers() {
    let response = await fetch("https://status418-project.herokuapp.com/user");
    let data = await response.json();
    return data.payload; // An Array of objects. Each object = user_id, username.
} */


/* async function checkIncomingUserId(auth0User) {
    //let userlist = await fetchAllUsers();
    for (let i = 0; i < userlist.length; i++) {
        if (userlist[i].user_id === auth0User.sub.substr(6)) {
            console.log("incoming user exists in db")
            return auth0User.sub.substr(6) //returns the "auth0|xyz123" without the "auth0|"
            // const newHabits = await retrieveHabits(user.sub.substr(6))
            //     console.log("newHabits: ",newHabits)
            //     setHabits(newHabits);
            //     setCurrentHabitDisplayed(newHabits[0]);
            
            // return;
        } 
        // else {
        //     console.log("Creating new user with sub: ",user.sub.substr(6),"and nick: ",user.nickname)
        //     await fetch("https://status418-project.herokuapp.com/user", {
        //         method: "POST",
        //         headers: {
        //             "Content-type": "application/json",
        //             "Access-Control-Allow-Origin": "*",
        //         },
        //         body: JSON.stringify({
        //             username: `${user.nickname}`,
        //             user_id: `${user.sub.substr(6)}`,
        //         }),
        //     });
        // } 
       
        //  The else statement above will run for EVERY entry that doesn't match the case - multiple identical post requests made.
    }    
    let response = await fetch("https://status418-project.herokuapp.com/user", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
            username: `${auth0User.nickname}`,
            user_id: `${auth0User.sub.substr(6)}`,
        }),
    });
    return response.payload[0].user_id   
} */
/* async function retrieveHabits(userIdString) {
    console.log("Retrieving habits for: ",userIdString)
    const url = "https://status418-project.herokuapp.com";
    const fetchUrl = `${url}/habits?userId=${userIdString}`;
    const result = await fetch(fetchUrl);
    const data = await result.json();
    console.log("data: ",data.data);
    return data.data;
} */


function App() {
    //let newHabits = [];
    const [currentHabitDisplayed, setCurrentHabitDisplayed] = useState();
    const [isFormDisplayed, setIsFormDisplayed] = useState(false);
    const [habits, setHabits] = useState([]);
    const { user, isAuthenticated, isLoading } = useAuth0();

    async function fetchAllUsers() {
        let response = await fetch("https://status418-project.herokuapp.com/user");
        let data = await response.json();
        return data.payload; // An Array of objects. Each object = user_id, username.
    }
    async function checkIncomingUserId(auth0User) {
        //let userlist = await fetchAllUsers();
        for (let i = 0; i < userlist.length; i++) {
            if (userlist[i].user_id === auth0User.sub.substr(6)) {
                console.log("incoming user exists in db")
                return auth0User.sub.substr(6) //returns the "auth0|xyz123" without the "auth0|"
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
        let response = await fetch("https://status418-project.herokuapp.com/user", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                username: `${auth0User.nickname}`,
                user_id: `${auth0User.sub.substr(6)}`,
            }),
        });
        return response.payload[0].user_id
          
    }
    async function retrieveHabits(userIdString) {
        console.log("Retrieving habits for: ",userIdString)
        const url = "https://status418-project.herokuapp.com";
        const fetchUrl = `${url}/habits?userId=${userIdString}`;
        const result = await fetch(fetchUrl);
        const data = await result.json();
        console.log("data: ",data.data);
        return data.data;
    }
    let userlist = fetchAllUsers(); //Fetch all users and store in userList


    let xuser = user
    let xuserId = checkIncomingUserId(xuser)
    let xuserHabits = retrieveHabits(xuserId)
       
    // async function setExistingHabitsOnPageLoad1 () {
        
    // }
    useEffect(()=>{
        setHabits(xuserHabits)
        setCurrentHabitDisplayed(xuserHabits[0])
        // setExistingHabitsOnPageLoad1()
    },[])
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
                }}
            >
                <p style={{ fontSize: "1.5em" }}>Page loading...</p>
            </div>
        );
    }

    /*  
    async function setExistingHabitsOnPageLoad () {
        const newHabits = await retrieveHabits(userid);
        console.log("newHabits", newHabits);
        setHabits(newHabits);
        console.log("newHabit0: ", newHabits[0]);
        //Sets the default value for the habits Display Panel
        setCurrentHabitDisplayed(newHabits[0]);
    }
    setExistingHabitsOnPageLoad(userid)
    */

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
