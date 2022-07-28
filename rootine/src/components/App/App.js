import "./App.css";
import Navbar from "../Navbar/Navbar";
import LandingPage from "../LandingPage/LandingPage.js";
function App() {

	return (
		<div className="App">
			<Navbar/>
			<main>
				<p>Welcome to our amazing habit-tracking app, Rootine 🌳</p>
                <LandingPage/>
			</main>
		</div>
	);
}

export default App;
