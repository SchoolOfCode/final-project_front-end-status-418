// 🤝 Helper function: fetch habits for the current user
export async function retrieveHabits(userIdString) {
	// console.log("SLICER", userIdString.substr(6));
	const url = "https://status418-project.herokuapp.com";
	// const url = "http://localhost:3001";
	const fetchUrl = `${url}/habits?userId=${userIdString}`;
	const result = await fetch(fetchUrl);
	const data = await result.json();
	// console.log(data.data);
	return data.data;
}
