import { createContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const AuthContext = createContext([false, {}]);

const AuthContextProvider = ({ children }) => {
	const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
		useAuth0();

	const [authenticated, setAuthenticated] = useState(false);

	useEffect(() => {
		setAuthenticated(isAuthenticated);
	}, [isAuthenticated]);

	const authContextValues = [authenticated, user];
	console.log("authContextValues", authContextValues);
	return (
		<AuthContext.Provider value={authContextValues}>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthContext, AuthContextProvider };
