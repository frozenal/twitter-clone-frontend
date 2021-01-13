import { Flex, Box, Heading } from "@chakra-ui/react";
import React from "react";
import TwitterIcon from "../svg/TwitterLogo";
import CentralForm from "./CentralForm";

interface Props {}

const CentralCard = (props: Props) => {
  return (
    <Flex
      flexDir="column"
      alignSelf="center"
      justifySelf="center"
      w="380px"
      h="auto"
    >
      <Box pb="10px" textAlign="left">
        <TwitterIcon width={55} height={55} />
      </Box>
      <Box mt={4} w="100%">
        <Heading as="h1" size="lg" w="100%" textAlign="left" fontWeight="800">
          See what's happening in the world right now
        </Heading>
      </Box>
      <Box mt={16} mb={4} w="100%">
        <Heading as="h3" size="sm" w="100%" textAlign="left">
          Join Twitter today.
        </Heading>
      </Box>
      <CentralForm />
    </Flex>
  );
};

export default CentralCard;
