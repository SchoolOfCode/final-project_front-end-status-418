import Footer from "../Footer/Footer";
import "./App.css";
import Navbar from "../Navbar/Navbar";
import DetailsPanel from "../DetailsPanel/DetailsPanel";
import { Flex } from "@chakra-ui/react";

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
            width="auto"
            display="flex"
            alignItems="center"
            marginLeft="5em"
            marginBottom="1em"
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
