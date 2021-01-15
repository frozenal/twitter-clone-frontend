import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import AccountFormField from "../UI/AccountFormField";
import RoundBlueButton from "../UI/RoundBlueButton";

interface Props {}

const LoginForm = (props: Props) => {
  return (
    <Box w="35rem" h="auto">
      <Flex flexDir="column" alignItems="center" justifyContent="center">
        <Box py={3} px={2} w="100%">
          <AccountFormField
            width="100%"
            label="Phone, email, or username"
            name="phoneEmailOrUsername"
            labelId="phoneEmailOrUsername"
            type="text"
          />
        </Box>
        <Box py={3} px={2} w="100%">
          <AccountFormField
            width="100%"
            label="Password"
            name="password"
            labelId="password"
            type="password"
          />
        </Box>
        <Box py={3} px={2} w="100%">
          <RoundBlueButton
            submit={true}
            text="Log in"
            outline={false}
            width="100%"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default LoginForm;
