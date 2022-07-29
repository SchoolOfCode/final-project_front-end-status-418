import Footer from "../Footer/Footer";
import "./App.css";
import Navbar from "../Navbar/Navbar";
import DetailsPanel from "../DetailsPanel/DetailsPanel";

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
          <DetailsPanel />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
