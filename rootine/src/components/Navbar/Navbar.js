import "./Navbar.css";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";

export default function Navbar() {
  return (
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
              Profile
            </MenuButton>
            <MenuList>
              <MenuGroup title="Profile">
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
  );
}
