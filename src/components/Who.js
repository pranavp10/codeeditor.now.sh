import {
  Heading,
  Box,
  Avatar,
  Text,
  Flex,
  Link,
  Button,
  Code,
} from '@chakra-ui/core';
import { AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import Container from './Container';
import HrefIconLink from './hrefIconLink';

const Who = () => (
  <Flex flexDirection="column">
    <Container flexDirection="column">
      <Box>
        <Heading as="h1" size="2xl" lineHeight={1} color="gray.900" mb={5}>
          Any
          <br />
          Problem?
        </Heading>
        <Box color="gray.700" mb={4} fontSize="lg" maxW={400}>
          Check out my{' '}
          <Link
            href="https://gist.github.com/pranavp10/0f8ef2730499efee297b796b310e9b44"
            isExternal
          >
            <Code variantColor="blue">Github Gist</Code>, if you still face any
            problem downloading the settings?
          </Link>{' '}
        </Box>
        <Box textAlign={['center', 'center', 'left', 'left']}>
          <Link href="mailto:pranavkp.me@outlook.com?subject=issues%20with%20downloading%20vs%20code%20settings&body=Let%20me%20know%20the%20issues%20what%20you%20are%20facing">
            <Button leftIcon="email" variantColor="blue" variant="solid">
              Email Me
            </Button>
          </Link>
        </Box>
      </Box>
      <Box textAlign="center">
        <Box>
          <Avatar size="xl" name="Pranav Patel" src="author.jpeg" m={5} />
          <Text>Meet The Author</Text>
        </Box>
        <Heading color="gray.900">Pranav Patel</Heading>
        <Text color="gray.500" mb={5}>
          Software Engineer
        </Text>
        <Text color="gray.500" mb={5} maxW={300}>
          JavaScript, React, Design Systems, a software engineer by passion,
          loves solving problems. Most loved thing in js is the closure
          property, figuring out life's purpose.
        </Text>
        <Flex justifyContent="center">
          <HrefIconLink
            icon={AiFillLinkedin}
            link="https://www.linkedin.com/in/pranav-p-241914183"
          />
          <HrefIconLink
            icon={AiOutlineTwitter}
            link="https://twitter.com/thatspranav"
          />
        </Flex>
      </Box>
    </Container>
  </Flex>
);
export default Who;
