import { Container, Box, Heading, Button, HStack } from "@chakra-ui/react";
import "./Calender.css";

const Calender = () => {
  let name="test"
  return (
    <Container
      className="calender-view"
      w="75vw"
      h="50vh"
      color="black"
      overflow="hidden"
      p="6"
    >
      
      <Box>
        <Heading as='h3' size='lg'>Welcome, {name}</Heading>
        <p>This is a containerfdffdvsdvvvvvvvvvvvvvvvvvvvvvvvvvvvvv</p>
        <p>This is a container</p>
        <p>This is a container</p>
        <p>This is a container</p>
        <p>This is a container</p>
        <p>This is a container</p>
        <p>This is a container</p>
        <p>This is a container</p>
        <p>This is a container</p>
        <Button 
        bgGradient={[
          'linear(to-l, red.400, orange.300)',
        ]}>Add +</Button>
        
      </Box>
     
    </Container>
  );
};

export default Calender;
