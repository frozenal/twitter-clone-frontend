import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import RoundBlueButton from "../components/UI/RoundBlueButton";
import AccountFormField from "../components/welcome/AccountFormField";
import WelcomeAdText from "../components/welcome/WelcomeAdText";

interface Props {}

const welcome = (props: Props) => {
  return (
    <Box h="100vh" w="100vw">
      <Flex
        flexDirection="row"
        width="100%"
        h="90%"
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          flexDir="column"
          w="100%"
          h="100%"
          justifyContent="center"
          alignItems="center"
          bg="blue.400"
        >
          <Flex
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            textAlign="left"
          >
            <WelcomeAdText adText="Follow your interests." />
            <WelcomeAdText adText="Hear what people are talking about." />
            <WelcomeAdText adText="Join the conversation." />
          </Flex>
        </Flex>
        <Box
          w="100%"
          h="100%"
          textAlign="center"
          bg="gray.900"
          textColor="white"
        >
          <Flex
            flexDir="row"
            pos="absolute"
            justifyContent="center"
            top={4}
            px={3}
            w="50%"
            textAlign="center"
          >
            <AccountFormField
              width="52"
              label="Phone, email, or username"
              name="phoneEmailUsername"
              labelId="phoneEmailUsername"
              type="text"
            />
            <AccountFormField
              width="52"
              label="Password"
              name="password"
              labelId="password"
              type="password"
            />
            <RoundBlueButton
              submit={true}
              text="Log in"
              width="auto"
              outline={true}
            />
          </Flex>
        </Box>
      </Flex>
      <Box as="footer" w="100%" bg="gray.900" textColor="white" h="10%">
        Footer
      </Box>
    </Box>
  );
};

export default welcome;
