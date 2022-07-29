import Footer from "../Footer/Footer";
import "./App.css";
import Navbar from "../Navbar/Navbar";

function App() {
	const areYouCurrentlyWorkingOnTheLandingPage = false;

	return (
		<div className="App">
			<Navbar />
			<main>
				{areYouCurrentlyWorkingOnTheLandingPage ? (
					<p>
						Replace this <code>p</code> tag with{" "}
						<code>LandingPage</code>{" "}
					</p>
				) : (
					<p>
						Replace this <code>p</code> tag with{" "}
						<code>HabitComponent</code>{" "}
					</p>
				)}
			</main>
			<Footer />
		</div>
	);
}

export default App;
