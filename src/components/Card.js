import { Box, Heading, Flex, Avatar, Text, Link, Code } from '@chakra-ui/core';
import PropTypes from 'prop-types';
import { FiExternalLink } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';
import { DiVisualstudio } from 'react-icons/di';

const Card = ({
  name,
  description,
  imgUrl,
  githubLink,
  website,
  marketplace,
  background,
}) => (
  <Flex wrap="wrap" justify="center">
    <Box
      width={['100%', '100%', '100%', '100%']}
      bg="white"
      boxShadow="lg"
      rounded="lg"
      m={5}
    >
      <Box backgroundColor={background} p={10} roundedTop="lg"></Box>
      <Box textAlign="center" rounded="lg" mt={-8}>
        <Avatar src={imgUrl} name={name} size="lg" bg="white" />
      </Box>
      <Heading textAlign="center">{name}</Heading>
      <Box textAlign="center">
        <Text p={2}>{description}</Text>
        <Flex justifyContent="center">
          {website && (
            <Link href={website} target="_blank" rel="noopener noreferrer">
              <Box as={FiExternalLink} size="18px" color="gray.900" m={1} />
            </Link>
          )}
          {githubLink && (
            <Link href={githubLink} target="_blank" rel="noopener noreferrer">
              <Box as={AiFillGithub} size="18px" color="gray.900" m={1} />
            </Link>
          )}
          {marketplace && (
            <Link href={marketplace} target="_blank" rel="noopener noreferrer">
              <Box as={DiVisualstudio} size="18px" color="gray.900" m={1} />
            </Link>
          )}
        </Flex>
      </Box>
    </Box>
  </Flex>
);
Card.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  imgUrl: PropTypes.string,
  githubLink: PropTypes.string,
  website: PropTypes.string,
  marketplace: PropTypes.string,
  background: PropTypes.string,
};
export default Card;
