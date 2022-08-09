import { Button } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import { buttonStyles } from "../landingPageButtonsStyle";

function LoginButton() {
	const { loginWithRedirect } = useAuth0();

	return (
		<Button
			{...buttonStyles}
			className="landing-page-login-button"
			onClick={() => loginWithRedirect()}>
			Log in
		</Button>
	);
}
export default LoginButton;
