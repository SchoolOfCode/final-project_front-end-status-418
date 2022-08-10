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

function App() {
  const [currentHabitDisplayed, setCurrentHabitDisplayed] = useState();
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
