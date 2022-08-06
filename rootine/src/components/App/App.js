import Footer from "../Footer/Footer";
import "./App.css";
import Navbar from "../Navbar/Navbar";
// import DetailsPanel from "../DetailsPanel/DetailsPanel";

import LandingPage from "../LandingPage/LandingPage";
import LeftSideHabitDetails from "../LeftSideHabitDetails/LeftSideHabitDetails";
//import Calendar from "./Calendar/Calendar";

function App() {
	const areYouCurrentlyWorkingOnTheLandingPage = false;

	return (
		<div className="App">
			<Navbar />
			<main>
				{areYouCurrentlyWorkingOnTheLandingPage ? (
					<LandingPage />
				) : (
					<>
						<LeftSideHabitDetails />
						{/* <Calendar /> */}
					</>
				)}
			</main>
			<Footer />
		</div>
	);
}

export default App;
