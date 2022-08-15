/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Navbar.css";
// import { useColorMode } from "@chakra-ui/react";
// import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useAuth0 } from "@auth0/auth0-react";

//prettier-ignore
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  ListIcon,
  ListItem,
  List,
  Link,
  HStack,
  VStack,
  Text,
  Heading,
  Center
  
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FcSupport } from "react-icons/fc";
import { GrArticle } from "react-icons/gr";

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

      <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered="">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Center>
              <img
                className="about-modal-logo"
                src="logos/rootinelogo-med.png"
                alt="Rootine logo"
              />
            </Center>
            <VStack mt="3">
              <Text as="p" fontSize="3xl">
                🌱 <i>Plant the seeds of good habits</i> 🌱
              </Text>
              <Text as="p" fontSize="2xl">
                “Sure, it’s easy to start a new habit, but how do you make it
                stick?”
              </Text>
            </VStack>
            <Text mt="3" fontSize="lg">
              Rootine is an easy-to-use app that allows you to define daily
              habits that you’d like to start (or keep!). To get started, create
              a login using your email address, which will allow you to save
              your habits and your tracking calendar, and access them from any
              device. At the moment, Rootine is optimised for desktop devices.
            </Text>
            <Heading mt="5" fontSize="2xl">
              Create a new habit
            </Heading>
            <Text mt="3" fontSize="lg">
              To create a new habit, click the orange ‘Add+’ button, and add a
              name for your habit as well as a description.
            </Text>
            <Text mt="3" fontSize="lg">
              To help increase the chance of success with your new habit, try to
              think of an ‘anchor’ for your habit that will make it easier to
              complete the new habit, or remind you to do it. For example, if
              you're planning to start going to the gym before work, your
              description might be ‘I will pack my gym bag the night before and
              leave it by the front door’. If your goal is to do ten minutes of
              language practice per day, you might anchor this to something you
              do every single day, like ‘After eating dinner I will practice
              French for ten minutes’.
            </Text>
            <Heading mt="5" fontSize="2xl">
              Tracking your habit
            </Heading>
            <Text fontSize="lg">
              Rootine provides you with three options for tracking your habit:
              Complete ✓ , Skip ⏸︎, and Miss ⨯. The white boxes indicate
              ‘Incomplete’, for future dates and days you don't intend to
              complete your habit. Here’s how to best use these options:
              <HStack mt="3">
                <img
                  src="buttons/complete.png"
                  alt="The icon for the ‘complete’ status is green with a check mark"
                />
                <span>
                  <b>Complete:</b> Use this status when you’ve successfully
                  completed your habit that day!
                </span>
              </HStack>
              <HStack mt="3">
                <img
                  src="buttons/skip.png"
                  alt="The icon for the ‘complete’ status is green with a check mark"
                />
                <span>
                  <b>Skip:</b> Set your tracker to ’Skip’ to indicate that you
                  couldn’t achieve your habit that day for circumstances out of
                  your control. For example, your boss made you work late and
                  you missed your spin class, or you were sick that day. Use
                  these sparingly to ensure that you keep yourself accountable!
                </span>
              </HStack>
              <HStack mt="3">
                <img
                  src="buttons/miss.png"
                  alt="The icon for the ‘complete’ status is green with a check mark"
                />
                <span>
                  <b>Miss:</b> Apply a status of ‘Miss’ to show that you didn’t
                  complete your habit that day. Try to keep in mind that missing
                  one day doesn’t affect your ability to give it a go the next
                  day! Just try again tomorrow!
                </span>
              </HStack>
              <HStack mt="3">
                <img
                  src="buttons/incomplete.png"
                  alt="The icon for the ‘complete’ status is green with a check mark"
                />
                <span>
                  <b>Incomplete:</b> This status is set by the app as default,
                  for example for future dates. If you mis-click, you can set a
                  date back to Incomplete, but ensure you don’t leave behind any
                  white squares from the past! Tracking your habit everyday,
                  even if you’ve missed your goal, will help keep you
                  accountable to yourself and, hopefully, inspire you to keep at
                  it.
                </span>
              </HStack>
            </Text>
            <Heading mt="5" fontSize="2xl">
              Editing a habit
            </Heading>
            <Text mt="3" fontSize="lg">
              To edit the name or description of a habit, click on the
              corresponding habit in the calendar view. The details panel at
              left will update to show the habit you select. You can then click
              on the name or description to edit the fields. Be sure to press
              'Save' to ensure that your changes are saved. Your updated details
              will immediately be visible in the app.
            </Text>
            <Heading mt="5" fontSize="2xl">
              Deleting a habit
            </Heading>
            <Text mt="3" fontSize="lg">
              To delete a habit, click on the corresponding habit in the
              calendar view. The details panel at left will update to show the
              habit you select. You can then click on the red ‘Delete this
              habit’ button, which will bring up a confirmation box. If you’re
              sure you wish to permanently remove the habit and all its data
              from your account, press ‘Delete’ again. Do note that this action
              cannot be undone.
            </Text>
            <Heading mt="5" fontSize="2xl">
              Frequency of a habit
            </Heading>
            <Text mt="3" fontSize="lg">
              At the moment, the app will only allow you to set habits with a
              recurring frequency of ‘everyday’. Our team is hard at work on
              giving you the ability to set habits that occur a number of times
              per day or per week, such as going to the gym three times a week
              or drinking eight glasses of water per day. Check back soon for
              this functionality! In the meantime, you can leave days that you
              do not intend to perform your habit as ‘Incomplete’ without any
              problem.
            </Text>
          </ModalBody>
          ;
          <ModalFooter>
            <Button
              colorScheme="orange"
              bgGradient="linear(to-l, #f05d4d, #f8a642)"
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>
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
        Blog
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="2xl" isCentered="true">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <VStack>
              <FcSupport />

              <Heading fontFamily={"Quando"} size="lg" textAlign={["center"]}>
                Our blog is currently under construction
              </Heading>
            </VStack>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody fontSize="xl">
            <List spacing={6} textAlign={["center"]}>
              <ListItem fontSize="2xl" fontFamily={"Segoe UI"}>
                In the meantime please enjoy some of our favourite articles on
                building habits!
              </ListItem>

              <ListItem>
                <ListIcon as={GrArticle} color="green.500" />
                <Link href="https://jamesclear.com/habit-tracker" isExternal>
                  The Ultimate Habit Tracker Guide: Why and How to Track Your
                  Habits - James Clear <ExternalLinkIcon mx="2px" />
                </Link>
              </ListItem>
              <ListItem>
                <ListIcon as={GrArticle} color="green.500" />
                <Link
                  href="https://www.livingwellspendingless.com/10-good-habits-will-change-life/"
                  isExternal
                >
                  10 Simple Habits That Will Change Your Life - Ruth Soukup{" "}
                  <ExternalLinkIcon mx="2px" />
                </Link>
              </ListItem>
              <ListItem>
                <ListIcon as={GrArticle} color="green.500" />
                <Link
                  href="https://fs.blog/everything-you-need-to-know-about-habits-the-science-of-habit-formation-and-change/#:~:text=The%20process%E2%80%94in%20which%20the,for%20ways%20to%20save%20effort."
                  isExternal
                >
                  The Science Of Habit Formation And Change - Farnham Street
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
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
