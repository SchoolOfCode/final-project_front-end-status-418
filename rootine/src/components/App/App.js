import { useState } from "react";
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

/**  Dummy Data */
const habits = [
  {
    name: "Walk the dog",
    description: "Every day after work I'll grab the dog's leash",
    userId: "1",
    everyday: true,
    frequency: { fr_reps: null, fr_interval: null },
  },
  {
    name: "Drink water",
    description: "Keep a jug full of water by my desk",
    userId: "2",
    everyday: true,
    frequency: { fr_reps: null, fr_interval: null },
  },
  {
    name: "Go to gym",
    description: "On Mon, Wed and Fri I'll leave my gym bag by the front door",
    userId: "3",
    everyday: true,
    frequency: { fr_reps: null, fr_interval: null },
  },
];
function App() {
  const [currentHabitDisplayed, setCurrentHabitDisplayed] = useState(habits[0]);
  const [isFormDisplayed, setIsFormDisplayed] = useState(false);
  const areYouCurrentlyWorkingOnTheLandingPage = false;

  function displayForm() {
    if (!isFormDisplayed) {
      setIsFormDisplayed(true);
    }
  }

  return (
    <div className="App">
      <Navbar />
      <main>
        {areYouCurrentlyWorkingOnTheLandingPage ? (
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
              habits={habits}
              setCurrentHabitDisplayed={setCurrentHabitDisplayed}
            />
          </Flex>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
