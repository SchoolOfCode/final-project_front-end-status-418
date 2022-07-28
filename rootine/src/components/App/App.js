import Footer from "../Footer/Footer";
import "./App.css";
import Navbar from "../Navbar/Navbar";

function App() {
	return (
		<div className="App">
			<Navbar />
			<main>
				<p>Welcome to our amazing habit-tracking app, Rootine 🌳</p>
			</main>
			<Footer />
		</div>
	);
}

export default App;
