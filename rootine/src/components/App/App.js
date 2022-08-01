import Footer from "../Footer/Footer";
import "./App.css";
import Navbar from "../Navbar/Navbar";
import DetailsPanel from "../DetailsPanel/DetailsPanel";
import { Flex, HStack } from "@chakra-ui/react";

import LandingPage from "../LandingPage/LandingPage";
import Calender from "./Calender/Calender";

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
          >
            <HStack spacing="40px">
            <DetailsPanel />
            <Calender />
            </HStack>
            
            
            
          </Flex>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
