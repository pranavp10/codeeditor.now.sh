import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { Box, Flex } from '@chakra-ui/core';
import { config } from '../json/config';
import Container from './Container';
import CopyButton from './CopyButton';

const Component = () => (
  <>
    <Container justifyContent>
      <Box>
        <Flex direction="row-reverse" mb={-50} mr={5}>
          <CopyButton />
        </Flex>
        <SyntaxHighlighter language="javascript">{config}</SyntaxHighlighter>
      </Box>
    </Container>
  </>
);
export default Component;
