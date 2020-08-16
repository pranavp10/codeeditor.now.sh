import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button } from '@chakra-ui/core';
import { useState } from 'react';
import { config } from '../json/config';

const CopyButton = () => {
  const [copy, setCopy] = useState('copy');
  return (
    <CopyToClipboard
      text={config}
      onCopy={() => {
        setCopy('copied');
        setTimeout(() => {
          setCopy('copy');
        }, 1000);
      }}
    >
      <Button variantColor="orange" size="xs">
        {copy}
      </Button>
    </CopyToClipboard>
  );
};
export default CopyButton;
