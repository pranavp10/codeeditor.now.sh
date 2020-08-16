import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { Box, Flex } from '@chakra-ui/core';
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { config } from '../json/config';
import Container from './Container';
import CopyButton from './CopyButton';

const Component = () => (
  <Box m={5}>
    <Flex direction="row-reverse" mb={-50} mr={5}>
      <CopyButton />
    </Flex>
    <SyntaxHighlighter
      language="javascript"
      style={base16AteliersulphurpoolLight}
      showLineNumbers
      showInlineLineNumbers
    >
      {config}
    </SyntaxHighlighter>
  </Box>
);
export default Component;
