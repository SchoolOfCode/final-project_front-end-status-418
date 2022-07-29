import { extendTheme } from "@chakra-ui/react";
import "./components/App/App.css";

const theme = extendTheme({
	fonts: {
		heading: `var(--headings)`,
		body: `var(--body)`,
	},
	config: {
		initialColorMode: 'light',
		useSystemColorMode: false,
	  }
});

export default theme;
