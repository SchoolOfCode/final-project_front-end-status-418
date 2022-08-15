//❌ DO NOT USE: boxProps for UploadHabit are now imported from DetailsPanel so that the boxes are identical.
// export const boxProps = {
// 	className: "details-panel-parent",
// 	w: "23em",
// 	h: "70%",
// 	minHeight: "550px",
// 	borderWidth: "3px",
// 	borderRadius: "4.5em",
// 	overflow: "hidden",
// 	color: "black",
// 	boxShadow: "md",
// 	m: 20,
// 	p: 10,
// 	pt: 1,
// 	bg: "white",
// };

export const frRepsFieldProps = {
	className: "fr-reps-input-disabled",
	defaultValue: 0,
	min: 0,
	max: 10,
	paddingEnd: 0,
	paddingStart: 0,
	borderRadius: "0.5em",
	borderWidth: "3px",
	borderColor: "orange",
	isDisabled: true,
};

export const frRepsInputProps = {
	marginStart: 3,
	marginEnd: -10,
	paddingStart: 0,
	paddingEnd: 0,
	border: "none",
};

export const frIntervalInputProps = {
	variant: "outline",
	size: "md",
	borderRadius: "0.5em",
	borderWidth: "3px",
	borderColor: "orange",
	isDisabled: true,
};

export const addHabitSubmitButtonProps = {
	className: "submit-button",
	bgRepeat: "repeat",
	colorScheme: "orange",
	bgGradient: "linear(to-l, #f05d4d, #f8a642 )",
	align: "center",
	direction: "row",
	mt: "25px",
};

export const everydayCheckBoxProps = {
	size: "lg",
	borderColor: "orange",
	borderWidth: "3px",
	borderRadius: "4px",
	// onChange:"handleSubmitEveryday"
	required: true,
	defaultChecked: true,
	isDisabled: true,
	opacity: 0.4,
	cursor: "not-allowed",
};
