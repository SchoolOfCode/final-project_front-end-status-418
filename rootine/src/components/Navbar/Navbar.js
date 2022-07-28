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
          <img className="header-name" src="" alt="rootine" />
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
              fontFamily={"Quando"}
              fontWeight={50}
              fontSize={25}
              as={Button}
              colorScheme="#f8a642"
              color="#22553f"
            >
              Profile
            </MenuButton>
            <MenuList>
              <MenuGroup title="Menu">
                <MenuItem>Dark Mode</MenuItem>
                <MenuItem>Color blind Mode </MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup title="Help">
                <MenuItem>Login</MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        </div>
      </div>
    </header>
  );
}
