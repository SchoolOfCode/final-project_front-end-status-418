import "./Footer.css";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

const Footer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <footer className="footer">
      {/* 3 links- privacy policy, blog, about */}
      <div className="footer-border"></div>
      <ul>
        <li>
          const {(isOpen, onOpen, onClose)} = useDisclosure()
          <Button onClick={onOpen}>Open Modal</Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Modal Title</ModalHeader>
              <ModalCloseButton />
              <ModalBody>{/* <Lorem count={2} /> */}</ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button variant="ghost">Secondary Action</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </li>
        <li>
          <a href="Blog">Blog</a>
        </li>
        <li>
          <a href="About">About</a>
        </li>
      </ul>
      <p className="copyright">&copy; 2022 Status 418</p>
    </footer>
  );
};

export default Footer;
