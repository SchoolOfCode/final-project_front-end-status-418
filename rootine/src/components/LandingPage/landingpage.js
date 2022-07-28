import "./LandingPage.css";
import { Flex, Center, Text, Heading, Image, Box } from "@chakra-ui/react";
import { Stack, HStack, VStack } from "@chakra-ui/react";

export default function LandingPage() {
	return (
		<div className="landing-page-wrapper">
			{/* <div className="landing-page-left">
        <h2> Tagline! Tagline! Tagline!</h2>
        <img className="landing-page-image" src="" alt="landing-page-image" />
      </div>
      <div className="landing-page-right">
        <p>
          A few sentences of context on what the app offers, how it will help
          you maintain your habits and thus you should definitely sign up to use
          it
        </p>
        <button className="Login-button"> Login</button>
      </div> */}
			<Flex color="white" gap="5px">
				<Center className="landing-page-left" bg="green.500">
					<VStack spacing={10}>
						<Heading as="h2">Tagline! Tagline! Tagline!</Heading>
						<Box>
							<Image
								className="landing-page-img"
								src="https://images.unsplash.com/photo-1658887240445-f03ce58917b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
								alt="Demonstration images of Rootine Habit tracker"
								borderRadius="base"
								// boxSize="400px"
								// objectFit="cover"
							/>
						</Box>
					</VStack>
				</Center>
				<Center className="landing-page-right" bg="blue.500">
					<Text>Box 2</Text>
				</Center>
			</Flex>
		</div>
	);
}
