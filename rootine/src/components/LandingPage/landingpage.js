import "./LandingPage.css";
import { Flex, Center, Text } from "@chakra-ui/react";
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
                <Center
                    className="landing-page-left"
                    flex="1 auto"
                    bg="green.500"
                >
                    <Text>Box 1</Text>
                </Center>
                <Center
                    className="landing-page-right"
                    bg="blue.500"
                    flex="1 auto"
                >
                    <Text>Box 2</Text>
                </Center>
            </Flex>
        </div>
    );
}
