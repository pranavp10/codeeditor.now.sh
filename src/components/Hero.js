import { Heading, Flex, Box } from '@chakra-ui/core';
import Container from './Container';
import HeroContainer from './HeroContainer';

const Hero = () => (
  <Flex justifyContent="center" flexDirection="column" bg="#0066b8">
    <HeroContainer>
      <Container flexDirection="column" justifyContent>
        <Box maxWidth="600px">
          <Heading
            letterSpacing="tight"
            mb={4}
            as="h1"
            size="2xl"
            fontWeight="bold"
            color="gray.100"
          >
            Edit Code like a
            <br />
            Professional
          </Heading>
          <Box color="gray.100" mb={4} fontSize="lg">
            VS code is my favorite Code Editor of all time because it give me
            the power to customize the whole Editor out of the box
          </Box>
        </Box>
      </Container>
    </HeroContainer>
  </Flex>
);

export default Hero;
