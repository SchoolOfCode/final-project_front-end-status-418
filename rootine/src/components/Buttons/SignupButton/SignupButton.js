import { Button } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import { buttonStyles } from "../landingPageButtonsStyle";

function SignupButton() {
	const { loginWithRedirect } = useAuth0();

	return (
		<Button
			{...buttonStyles}
			className="landing-page-signup-button"
			onClick={() => loginWithRedirect({ screen_hint: "signup" })}>
			Sign up
		</Button>
	);
}
export default SignupButton;
