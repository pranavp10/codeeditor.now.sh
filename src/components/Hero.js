import { Heading, Flex, Box, Button, Link } from '@chakra-ui/core';
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
            A code editor for Frontend development that improves your
            efficiency.
          </Box>
          <Link
            href="https://code.visualstudio.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variantColor="gray" rightIcon="arrow-forward">
              Download
            </Button>
          </Link>
        </Box>
      </Container>
    </HeroContainer>
  </Flex>
);

export default Hero;
