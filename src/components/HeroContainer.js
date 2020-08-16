import React from 'react';
import { Flex, Box } from '@chakra-ui/core';
import { DiVisualstudio } from 'react-icons/di';
import PropTypes from 'prop-types';

const HeroContainer = ({ children }) => (
  <>
    <Box bg="#0066b8">
      <Flex
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="1000px"
        width="100%"
        as="nav"
        p={8}
        mt={[0, 0, 8]}
        mb={[0, 0, 8]}
        mx="auto"
      >
        <Box as={DiVisualstudio} size="42px" color="white" />
      </Flex>
    </Box>
    {children}
  </>
);
HeroContainer.propTypes = {
  children: PropTypes.node,
};
export default HeroContainer;
