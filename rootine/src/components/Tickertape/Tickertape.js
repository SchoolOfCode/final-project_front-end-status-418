import React, { useState, useEffect } from "react";
import Ticker from "react-ticker";
import PageVisibility from "react-page-visibility";
import { tickertapeAdvice } from "./libs";
// import { Center } from "@chakra-ui/react";

// function TickertapeContent() {
// 	const [tickertapeContent, setTickertapeContent] = useState([]);

// 	// function shuffleTickertapeContent() {
// 	let shuffledAdvice = tickertapeAdvice;
// 	for (let i = tickertapeAdvice.length - 1; i > 0; i--) {
// 		const j = Math.floor(Math.random() * (i + 1));
// 		[shuffledAdvice[i], shuffledAdvice[j]] = [
// 			tickertapeAdvice[j],
// 			tickertapeAdvice[i],
// 		];
// 	}
// 	console.log(shuffledAdvice);
// 	// shuffledAdvice;
// 	// }
// 	setTickertapeContent(shuffledAdvice);

// 	// eslint-disable-next-line react-hooks/exhaustive-deps
// 	// useEffect(() => {
// 	// 	function displayTickerContent() {
// 	// 		// setTickertapeContent(shuffleTickertapeContent());
// 	// 		setTickertapeContent(shuffledAdvice);
// 	// 	}
// 	// 	displayTickerContent();
// 	// }, []);

// 	return tickertapeContent ? (
// 		<p style={{ whiteSpace: "nowrap" }}>
// 			{tickertapeContent.join(" +++ ")} +++{" "}
// 		</p>
// 	) : (
// 		<p style={{ visibility: "hidden" }}>Placeholder</p>
// 	);
// }

const Tickertape = () => {
	//Tickertape only runs when page is being looked at
	// const [pageIsVisible, setPageIsVisible] = useState(true);

	// function handleVisibilityChange(isVisible) {
	// 	setPageIsVisible(isVisible);
	// }

	// const [tickertapeContent, setTickertapeContent] = useState([]);

	return (
		// <PageVisibility onChange={handleVisibilityChange}>
		// {pageIsVisible && (
		<>
			{/* <Ticker offset="run-in" mode="smooth">
				{() => <>"Tickertape content"</>}
			</Ticker> */}
			<p>Tickertape</p>
		</>
		// )}
		// </PageVisibility>
	);
};

export default Tickertape;
