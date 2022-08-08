// Helper functions for UploadHabits component

// 🛑 Functions are not quite right, need to return a value that be used to setNewHabit.
// The format of the replaced data is not quite right either (exists in an array), should be more like
// const newHabit = [
//     {
//         ...habits[0],
//         everyday: everyday
//     },
// ];
// return newHabit
// 📝 Also note that I might end up changing the name of the state to 'newHabit' rather than 'habits', so if you use these keep that in mind...

// function handleSubmitEveryday(e) {
//     e.preventDefault();
//     const everyday = e.target.value;
//     console.log("this has been checked");
//     setHabits({
//         ...habits,
//         everyday: everyday,
//     });
// }
// function handleSubmitFrequencyReps(e) {
//     const frequencyreps = e.target.value;
//     console.log(frequencyreps);
//     setHabits({
//         ...habits,
//         frequency_reps: frequencyreps,
//     });
// }
// function handleSubmitFrequencyInterval(e) {
//     e.preventDefault();
//     const frequencyinterval = e.target.value;
//     console.log(frequencyinterval);
//     setHabits({
//         ...habits,
//         frequency_interval: frequencyinterval,
//     });
// }
