import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  Box,
  Flex,
  Heading,
  List,
  ListItem,
  Text,
  Code,
  Link,
} from '@chakra-ui/core';
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { config } from '../json/config';
import CopyButton from './CopyButton';

const Component = () => (
  <Box
    mt={5}
    pl={[5, 50, 80, 250]}
    pr={[5, 50, 100, 250]}
    bg="#FBFBFB"
    pb={50}
    pt={50}
  >
    <Box>
      <Heading textAlign="center">VS Code JSON settings</Heading>
      <br />
      <Text>
        <b>Note:</b>{' '}
        <Code variantColor="blue">
          If you want to use <b>my Code Editor</b> settings then follow the
          steps
        </Code>
      </Text>
      <br />
      <List as="ol" styleType="decimal" mb={50}>
        <ListItem>
          Download the{' '}
          <a href="OperatorMono-BookItalic.otf" download>
            <Code variantColor="blue">Operator Mono</Code>
          </a>{' '}
          font and Installed
        </ListItem>
        <ListItem>
          Download and Installed{' '}
          <Link
            href="https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync"
            isExternal
          >
            <Code variantColor="blue">Settings Sync</Code>
          </Link>{' '}
          extension in you VS Code
        </ListItem>
        <ListItem>
          Open a Drop down by pressing{' '}
          <Code variantColor="blue">Ctrl + Shift + p</Code>
        </ListItem>
        <ListItem>
          Type <Code variantColor="blue"> Open Settings (JSON)</Code> and select
          the Drop option
        </ListItem>
        <ListItem>Copy past the whole below JSON file and save it</ListItem>
        <ListItem>
          Open a Drop down by pressing{' '}
          <Code variantColor="blue">Ctrl + Shift + p</Code>
        </ListItem>
        <ListItem>
          Type <Code variantColor="blue">sync: Download Settings</Code> and
          select the Drop option
        </ListItem>
        <ListItem>After download is done restart the vs code</ListItem>
        <ListItem>You will see the Changes 😎</ListItem>
      </List>
      <Flex direction="row-reverse" mb={-50} mr={5}>
        <CopyButton />
      </Flex>
      <Box maxHeight={500} overflowY="auto">
        <SyntaxHighlighter
          language="javascript"
          style={base16AteliersulphurpoolLight}
          showLineNumbers
          showInlineLineNumbers
        >
          {config}
        </SyntaxHighlighter>
      </Box>
    </Box>
  </Box>
);
export default Component;
