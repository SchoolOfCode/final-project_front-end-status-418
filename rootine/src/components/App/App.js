import Footer from "../Footer/Footer";
import "./App.css";
import Navbar from "../Navbar/Navbar";
import DetailsPanel from "../DetailsPanel/DetailsPanel";
import { Flex } from "@chakra-ui/react";

import LandingPage from "../LandingPage/LandingPage";
import Calendar from "./Calendar/Calendar";

function App() {
  const areYouCurrentlyWorkingOnTheLandingPage = false;

  return (
    <div className="App">
      <Navbar />
      <main>
        {areYouCurrentlyWorkingOnTheLandingPage ? (
          <LandingPage />
        ) : (
          <Flex
            className="view-container"
            height="100%"
            width="auto"
            display="flex"
            alignItems="center"
            marginLeft="5em"
            marginRight="5em"
            marginBottom="1em"
            gap="20"
          >
            <DetailsPanel />
            <Calendar />
          </Flex>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
