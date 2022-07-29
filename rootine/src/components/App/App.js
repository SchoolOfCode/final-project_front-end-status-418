import Footer from "../Footer/Footer";
import "./App.css";
import Navbar from "../Navbar/Navbar";
import LandingPage from "../LandingPage/LandingPage";

function App() {
	const areYouCurrentlyWorkingOnTheLandingPage = false;

	return (
		<div className="App">
			<Navbar />
			<main>

				{areYouCurrentlyWorkingOnTheLandingPage ? (
					<LandingPage/>
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
