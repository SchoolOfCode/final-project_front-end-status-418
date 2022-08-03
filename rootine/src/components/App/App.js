import Footer from "../Footer/Footer";
import "./App.css";
import Navbar from "../Navbar/Navbar";
import DetailsPanel from "../DetailsPanel/DetailsPanel";
import { Box, Flex } from "@chakra-ui/react";
import AddHabitForm from "../AddHabit/AddHabitForm";

import LandingPage from "../LandingPage/LandingPage";

function App() {
  const areYouCurrentlyWorkingOnTheLandingPage = false;

  return (
    <div className="App">
      <Navbar />
      <main>
        {areYouCurrentlyWorkingOnTheLandingPage ? (
          <LandingPage />
        ) : (
          <Box>
            <Flex
              className="view-container"
              height="100%"
              width="auto"
              display="flex"
              alignItems="center"
              marginLeft="5em"
              marginBottom="1em"
            >
              <DetailsPanel />
            </Flex>

            <Flex
              className="AddHabit-container"
              height="100%"
              width="auto"
              display="flex"
              alignItems="center"
              marginLeft="5em"
              marginBottom="1em"
            >
              <AddHabitForm />
            </Flex>
          </Box>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
