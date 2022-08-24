import React, { useState, useEffect } from "react";
// import Ticker from "react-ticker";
// import PageVisibility from "react-page-visibility";
import { tickertapeAdvice } from "./libs";
//prettier-ignore
import { tickertapeProps, tickerContentProps, tooltipProps, } from "./tickertapeProps";
import { Center, Tooltip } from "@chakra-ui/react";

// 📝 NOTE: Unable to get 'react-ticker' package working, causing infinite rerenders and idk why... Instead, it fetches a new piece of advice on pageload and displays it.

//test
// function TickertapeContent1() {
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

// function TickertapeContent2() {
// 	// let randIndex = Math.floor(Math.random() * tickertapeAdvice.length);
// 	// console.log("randIndex", randIndex);
// 	// console.log(tickertapeAdvice[randIndex]);

// 	const [advice, setAdvice] = useState("");

// 	useEffect(() => {
// 		function retrieveContent() {
// 			setAdvice(tickertapeAdvice);
// 		}
// 		retrieveContent();
// 	}, []);

// 	return advice ? (
// 		<p>{advice.join(" ... ")} ... </p>
// 	) : (
// 		<p style={{ visibility: "hidden" }}>Placeholder</p>
// 	);
// }

// function TickertapeContent() {}

export default function Tickertape() {
	//Tickertape only runs when page is being looked at
	// const [pageIsVisible, setPageIsVisible] = useState(true);
	// function handleVisibilityChange(isVisible) {
	// 	setPageIsVisible(isVisible);
	// }
	// const [tickertapeContent, setTickertapeContent] = useState([]);
	// return (
	// 	// <PageVisibility onChange={handleVisibilityChange}>
	// 	// {pageIsVisible && (
	// 	<div style={{ width: "100%", height: "2em" }}>
	// 		<Ticker offset="run-in" mode="smooth">
	// 			{(index) => (
	// 				<h2>
	// 					{
	// 						tickertapeAdvice[
	// 							Math.floor(
	// 								Math.random() *
	// 									(tickertapeAdvice.length - 1)
	// 							)
	// 						]
	// 					}
	// 				</h2>
	// 			)}
	// 		</Ticker>
	// 		{/* <p>Tickertape</p> */}
	// 	</div>
	// 	// )}
	// 	// </PageVisibility>
	// );

	const [advice, setAdvice] = useState("");

	useEffect(() => {
		function fetchRandAdvice() {
			let randIndex = Math.floor(
				Math.random() * (tickertapeAdvice.length - 1)
			);
			// console.log("randIndex", randIndex);
			// console.log(tickertapeAdvice[randIndex]);
			setAdvice(tickertapeAdvice[randIndex]);
		}
		fetchRandAdvice();
	}, []);

	return (
		<div style={{ width: "90vw", margin: "auto" }}>
			<Center {...tickertapeProps}>
				<Tooltip label={`HINT: ${advice}`} {...tooltipProps}>
					<p {...tickerContentProps}>
						<b>HINT: </b>
						{advice}
					</p>
				</Tooltip>
			</Center>
		</div>
	);
}
