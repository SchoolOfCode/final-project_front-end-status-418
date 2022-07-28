import Footer from "../Footer/Footer";
import "./App.css";
import Navbar from "../Navbar/Navbar";
import DetailsPanel from "../DetailsPanel/DetailsPanel";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <p>Welcome to our amazing habit-tracking app, Rootine 🌳</p>
        <DetailsPanel />
      </main>
      <Footer />
    </div>
  );
}

export default App;
