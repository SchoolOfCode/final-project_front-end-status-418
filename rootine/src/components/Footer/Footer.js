import "./Footer.css";
import Policy from "../../Policy.js";

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
import { BlogModal } from "../Modals/BlogModal";
import { AboutModal } from "../Modals/AboutModal";
import { footerItemsProps } from "./footerProps";

const Footer = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<footer className="footer">
			{/* 3 links- privacy policy, blog, about */}
			<div className="footer-border"></div>
			<ul>
				<li>
					<Button onClick={onOpen} {...footerItemsProps}>
						Privacy Policy
					</Button>
					<PrivacyModal isOpen={isOpen} onClose={onClose} />
				</li>
				<li>
					{/* <a href="Blog">Blog</a> */}
					<BlogModal isFooter={true} />
				</li>
				<li>
					{/* <a href="About">About</a> */}
					<AboutModal isFooter={true} />
				</li>
			</ul>
			<p className="copyright">&copy; 2022 Status 418</p>
		</footer>
	);
};

export default Footer;

function PrivacyModal({ isOpen, onClose }) {
	return (
		<Modal isOpen={isOpen} onClose={onClose} size="4xl">
			<ModalOverlay />
			<ModalContent>
				<ModalHeader fontFamily="var(--headings)">
					Privacy Policy
				</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Policy />
				</ModalBody>

				<ModalFooter>
					<Button colorScheme="blue" mr={3} onClick={onClose}>
						Close
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
}
