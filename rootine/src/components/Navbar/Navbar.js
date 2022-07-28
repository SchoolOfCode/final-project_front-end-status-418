import "./Navbar.css";
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
//import "@fontsource/quando/500.css";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";

const theme = extendTheme({
    fonts:{
        heading: `'Quando'`
    },
})



export default function Navbar() {
  return (
    <ChakraProvider theme={theme}>
    <header className="header">
      <div className="header-wrapper">
        <div className="header-div-left">
          <img className="header-logo" src="" alt="Rootine logo" />
          <img className="header-name" src="" alt="Rootine" />
        </div>
        <div className="header-div-right">
          <a className="blogs" href="#">
            Blogs
          </a>
          <a className="about" href="#">
            About
          </a>
          <Menu>
            <MenuButton
              fontFamily={"Quando Regular"}
              fontSize={25}
              as={Button}
              colorScheme="dark green"
            >
              Menu
            </MenuButton>
            <MenuList>
              <MenuGroup title="Menu">
                <MenuItem>My Account</MenuItem>
                <MenuItem>Payments </MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup title="Help">
                <MenuItem>Docs</MenuItem>
                <MenuItem>FAQ</MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        </div>
      </div>
    </header>
    </ChakraProvider>
  );
}
