import { Button } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
function LoginButton() {
    const { loginWithRedirect } = useAuth0();
    return (
        <Button
            className="landing-page-login-button"
            colorScheme="green"
            variant="solid"
            height="60px"
            width="200px"
            borderRadius="10px"
            color="white"
            bg="var(--green)"
            onClick={() => loginWithRedirect()}
        >
            Log in (with auth0)
        </Button>
    );
}
export default LoginButton ;
