import { Button } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import { buttonStyles } from "../landingPageButtonsStyle";

function LoginButton() {
	const { loginWithRedirect } = useAuth0();

	const {
		colorScheme,
		variant,
		height,
		width,
		borderRadius,
		color,
		bg,
		marginTop,
		fontFamily,
		fontWeight,
	} = buttonStyles;

	return (
		<Button
			className="landing-page-login-button"
			colorScheme={colorScheme}
			variant={variant}
			height={height}
			width={width}
			borderRadius={borderRadius}
			color={color}
			bg={bg}
			marginTop={marginTop}
			fontFamily={fontFamily}
			fontWeight={fontWeight}
			onClick={() => loginWithRedirect()}>
			Log in
		</Button>
	);
}
export default LoginButton;
