//prettier-ignore
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, ListIcon, ListItem, List, Link, VStack, Heading } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FcSupport } from "react-icons/fc";
import { GrArticle } from "react-icons/gr";
import { footerItemsProps } from "../Footer/footerProps";
import { navMenuItemProps } from "../Navbar/navbarProps";

export const BlogModal = ({ isFooter }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	/* 
    Returns a different-sized button depending on whether the button to open the modal is in the navbar or the footer
	*/
	const buttonStyle = isFooter ? footerItemsProps : navMenuItemProps;

	return (
		<>
			<Button onClick={onOpen} {...buttonStyle}>
				Blog
			</Button>
			<Modal
				isOpen={isOpen}
				onClose={onClose}
				size="2xl"
				isCentered="true">
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>
						<VStack>
							<FcSupport />
							<Heading
								fontFamily={"Quando"}
								size="lg"
								textAlign={["center"]}>
								Our blog is currently under construction
							</Heading>
						</VStack>
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody fontSize="xl">
						<List spacing={6} textAlign={["center"]}>
							<ListItem fontSize="2xl" fontFamily={"Segoe UI"}>
								In the meantime please enjoy some of our
								favourite articles on building habits!
							</ListItem>

							<ListItem>
								<ListIcon as={GrArticle} color="green.500" />
								<Link
									href="https://jamesclear.com/habit-tracker"
									isExternal>
									The Ultimate Habit Tracker Guide: Why and
									How to Track Your Habits - James Clear{" "}
									<ExternalLinkIcon mx="2px" />
								</Link>
							</ListItem>
							<ListItem>
								<ListIcon as={GrArticle} color="green.500" />
								<Link
									href="https://www.livingwellspendingless.com/10-good-habits-will-change-life/"
									isExternal>
									10 Simple Habits That Will Change Your Life
									- Ruth Soukup <ExternalLinkIcon mx="2px" />
								</Link>
							</ListItem>
							<ListItem>
								<ListIcon as={GrArticle} color="green.500" />
								<Link
									href="https://fs.blog/everything-you-need-to-know-about-habits-the-science-of-habit-formation-and-change/#:~:text=The%20process%E2%80%94in%20which%20the,for%20ways%20to%20save%20effort."
									isExternal>
									The Science Of Habit Formation And Change -
									Farnham Street
									<ExternalLinkIcon mx="2px" />
								</Link>
							</ListItem>
						</List>
					</ModalBody>

					<ModalFooter>
						<Button
							colorScheme="orange"
							bgGradient="linear(to-l, #f05d4d, #f8a642)"
							mr={3}
							onClick={onClose}>
							Close
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};
