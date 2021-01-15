import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import LoginForm from "../components/login/LoginForm";
import TwitterIcon from "../components/svg/TwitterLogo";

interface Props {}

const login = (props: Props) => {
  return (
    <Box h="100vh" w="100vw" bg="gray.900" textColor="white">
      <Flex flexDir="column" alignItems="center">
        <Box m="10px" textAlign="left">
          <TwitterIcon width={55} height={55} />
        </Box>
        <Heading as="h1" fontSize="2xl" mt={4} mb={6} fontWeight="700">
          Log in to Twitter
        </Heading>
        <LoginForm />
      </Flex>
    </Box>
  );
};

export default login;
