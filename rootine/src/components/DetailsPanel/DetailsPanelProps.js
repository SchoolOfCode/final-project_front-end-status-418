export const editableNameProps = {
	fontSize: "3xl",
	fontWeight: "bold",
	textAlign: "center",
	className: "habit-name",
	fontFamily: "var(--headings)",
};

export const boxProps = {
	className: "details-panel-parent",
	maxW: "1000px",
	width: "23em",
	// height: "70%",
	minHeight: "550px",
	maxHeight: "800px",
	borderWidth: "3px",
	borderRadius: "4.5em",
	// overflow: "hidden",
	color: "black",
	boxShadow: "md",
	ml: 10,
	mr: 10,
	mt: 2,
	mb: 2,
	// mt: "3.8rem",
	p: 10,
	pt: 1,
	bg: "white",
};

export const inputFrRepsProps = {
	minW: "25px",
	maxW: "30px",
	textAlign: "center",
	boxShadow: "unset",
	isDisabled: true,
};

export const fieldFrRepsProps = {
	pl: 1,
	pr: 1,
	borderRadius: "0.5em",
	borderWidth: "3px",
	defaultValue: "1",
	borderColor: "orange",
};

export const inputFrIntervalProps = {
	variant: "outline",
	size: "md",
	borderRadius: "0.5em",
	borderWidth: "3px",
	borderColor: "orange",
	isDisabled: true,
};

export const saveButtonProps = {
	className: "save-button",
	bgRepeat: "repeat",
	colorScheme: "orange",
	bgGradient: "linear(to-l, #f05d4d, #f8a642 )",
	align: "center",
	direction: "row",
	mt: "1em",
	mb: "1em",
};

export const delButtonProps = {
	className: "delete-button",
	// bgColor: "red.600",
	// color: "white",
	colorScheme: "red",
	align: "center",
	size: "sm",
	fontWeight: "normal",
	mr: "1",
};
