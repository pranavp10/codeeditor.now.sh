/* eslint-disable no-sparse-arrays */
import { Box, Flex } from '@chakra-ui/core';
import {
  Hero,
  Footer,
  NewsLetter,
  SEO,
  Extensions,
  ConfigCode,
} from '../components';

const Index = () => (
  <>
    <SEO />
    <Box as="main" bg="#fff" color="black">
      <Hero />
      <Extensions />
      <ConfigCode />
      <Flex justifyContent="center" flexDirection="column">
        <NewsLetter />
        <Footer />
      </Flex>
    </Box>
  </>
);

export default Index;
