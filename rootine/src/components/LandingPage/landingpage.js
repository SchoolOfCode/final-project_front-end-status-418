import "./LandingPage.css";
import { Flex, Center, Text, Heading, Image, Box } from "@chakra-ui/react";
import { VStack } from "@chakra-ui/react";
import LoginButton from "../Buttons/LoginButton/LoginButton";
import SignupButton from "../Buttons/SignupButton/SignupButton";

export default function LandingPage() {
	return (
		<div className="landing-page-wrapper">
			<Flex color="white" gap="5px" className="landing-page-flex">
				<Center className="landing-page-left" bg="whiteAlpha.100">
					<VStack spacing={10}>
						<Heading as="h2" color="black">
							Plant the seeds of good habits
						</Heading>
						<Box>
							<Image
								className="landing-page-img"
								src="https://images.unsplash.com/photo-1658887240445-f03ce58917b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
								alt="Demonstration images of Rootine Habit tracker"
								borderRadius="base"
							/>
						</Box>
					</VStack>
				</Center>
				<Center className="landing-page-right" bg="white">
					<VStack spacing={10} shouldWrapChildren>
						<Box className="box-right">
							<Text
								className="landing-page-description"
								color="black"
								fontSize="lg">
								A few sentences of context on what the app
								offers, how it will help you maintain your
								habits and thus you should definitely sign up to
								use it
							</Text>
						</Box>
						<LoginButton />
						<SignupButton />
					</VStack>
				</Center>
			</Flex>
		</div>
	);
}
