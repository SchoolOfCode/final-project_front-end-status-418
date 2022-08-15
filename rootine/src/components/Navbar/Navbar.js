/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Navbar.css";
import { useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

import { useAuth0 } from "@auth0/auth0-react";

//prettier-ignore
import { Menu, MenuButton, MenuList, MenuItem, MenuGroup, MenuDivider, Button } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

export default function Navbar() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  // console.log("isAuthenticated", isAuthenticated);
  // console.log("user", user);

  const { colorMode, toggleColorMode } = useColorMode();
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
          <Button
            fontFamily={"Quando"}
            fontWeight={50}
            fontSize={25}
            as={Button}
            colorScheme="#f8a642"
            color="#22553f"
            _hover={{ color: "#f05d4d", backgroundColor: "transparent" }}
            backgroundColor="transparent"
          >
            Blog
          </Button>
          <AboutModal />
          <Menu>
            <MenuButton
              fontFamily={"Quando"}
              fontWeight={50}
              fontSize={25}
              as={Button}
              colorScheme="#f8a642"
              color="#22553f"
              _hover={{ color: "#f05d4d" }}
            >
              Menu
            </MenuButton>
            <MenuList>
              {/* <MenuGroup title="Menu">
                <MenuItem onClick={toggleColorMode}>
                  Toggle {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </MenuItem>
                <MenuItem>Colour blind Mode </MenuItem>
              </MenuGroup> */}
              <MenuDivider />
              {/* <MenuGroup title="Profile"> */}
              {!isAuthenticated ? (
                <MenuItem
                  // as="button"
                  onClick={() => loginWithRedirect()}
                >
                  Login
                </MenuItem>
              ) : (
                <MenuItem
                  // as="button"
                  onClick={() =>
                    logout({
                      returnTo: window.location.origin,
                    })
                  }
                >
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

const AboutModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        fontFamily={"Quando"}
        fontWeight={50}
        fontSize={25}
        as={Button}
        colorScheme="#f8a642"
        color="#22553f"
        _hover={{ color: "#f05d4d", backgroundColor: "transparent" }}
        backgroundColor="transparent"
      >
        About
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>some filler text for the moment</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

const BlogModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>some filler text for the moments</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
