import Footer from "../Footer/Footer";
import "./App.css";
import Navbar from "../Navbar/Navbar";
import DetailsPanel from "../DetailsPanel/DetailsPanel";
import { Box, Flex } from "@chakra-ui/react";

function App() {
  const areYouCurrentlyWorkingOnTheLandingPage = false;

  return (
    <div className="App">
      <Navbar />
      <main>
        {areYouCurrentlyWorkingOnTheLandingPage ? (
          <p>
            Replace this <code>p</code> tag with <code>LandingPage</code>{" "}
          </p>
        ) : (
          <Flex
            className="view-container"
            height="100%"
            borderWidth="5px"
            borderColor="black"
            width="100%"
            display="flex"
            alignItems="center"
          >
            <DetailsPanel />
          </Flex>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
