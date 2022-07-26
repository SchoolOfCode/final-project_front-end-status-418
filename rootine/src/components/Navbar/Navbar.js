/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Navbar.css";
// import { useColorMode } from "@chakra-ui/react";
// import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useAuth0 } from "@auth0/auth0-react";

//prettier-ignore
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
// import { ExternalLinkIcon } from "@chakra-ui/icons";
// import { FcSupport } from "react-icons/fc";
// import { GrArticle } from "react-icons/gr";

import { BlogModal } from "../Modals/BlogModal.js";
import { AboutModal } from "../Modals/AboutModal";
import { navMenuItemProps } from "./navbarProps";

export default function Navbar() {
	const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

	// console.log("isAuthenticated", isAuthenticated);
	// console.log("user", user);
	//const { colorMode, toggleColorMode } = useColorMode();

	return (
		<header className="header">
			<div className="header-wrapper">
				<div className="header-div-left">
					<img
						className="header-logo"
						src="logos/rootinelogo-XPRNT-lg.png"
						alt="Rootine logo"
					/>
					{/* <img className="header-name" src="" alt="rootine" /> */}
				</div>
				<div className="header-div-right">
					<BlogModal />
					<AboutModal />
					<Menu>
						<MenuButton {...navMenuItemProps}>Menu</MenuButton>
						<MenuList>
							{/* <MenuGroup title="Menu">

                <MenuItem onClick={toggleColorMode}>
                  Toggle {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </MenuItem>
                <MenuItem>Colour blind Mode </MenuItem>
              </MenuGroup> */}
							{/* <MenuDivider /> */}
							{/* <MenuGroup title="Profile"> */}
							{!isAuthenticated ? (
								<MenuItem
									// as="button"
									onClick={() => loginWithRedirect()}>
									Login
								</MenuItem>
							) : (
								<MenuItem
									// as="button"
									onClick={() =>
										logout({
											returnTo: window.location.origin,
										})
									}>
									Logout
								</MenuItem>
							)}
							{/* </MenuGroup> */}
						</MenuList>
					</Menu>
				</div>
			</div>
		</header>
	);
}
