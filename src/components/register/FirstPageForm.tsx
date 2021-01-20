import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import AccountFormField from "../UI/AccountFormField";

interface Props {}

const FirstPageForm = (props: Props) => {
  return (
    <form>
      <Flex
        flexDir="column"
        w="100%"
        justifyContent="center"
        alignItems="center"
      >
        <Heading
          as="h2"
          size="md"
          fontWeight="800"
          textColor="white"
          textAlign="left"
          w="100%"
          mb={6}
        >
          Create your account
        </Heading>
        <Box w="100%" mb={6}>
          <AccountFormField
            label="Name"
            width="100%"
            name="username"
            labelId="username"
            inputType="text"
          />
        </Box>
        <Box w="100%" mb={8}>
          <AccountFormField
            label="Email"
            width="100%"
            name="email"
            labelId="email"
            inputType="text"
          />
        </Box>
        <Box w="100%" mb={24}>
          <Heading
            as="h2"
            size="md"
            fontWeight="700"
            textColor="white"
            textAlign="left"
            w="100%"
          >
            Password
          </Heading>
          <Text textColor="gray.500" mb={2}>
            Make this secure! We'd recommend using a mix of characters, numbers,
            and symbols. Password must be above 8 characters long.
          </Text>
          <AccountFormField
            label="Password"
            name="password"
            labelId="password"
            width="100%"
            inputType="password"
          />
        </Box>
      </Flex>
    </form>
  );
};

export default FirstPageForm;
