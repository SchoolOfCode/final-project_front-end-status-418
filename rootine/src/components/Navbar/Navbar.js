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
              colorScheme=" dark green"
            >
              Profile
            </MenuButton>
            <MenuList>
              <MenuGroup title="Menu">
                <MenuItem>Dark Mode</MenuItem>
                <MenuItem>Colour Blind Mode </MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup title="Profile">
                <MenuItem>Login</MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        </div>
      </div>
    </header>
  );
}
