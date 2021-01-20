import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import AccountFormField from "../UI/AccountFormField";
import { useForm } from "react-hook-form";
import RoundBlueButton from "../UI/RoundBlueButton";
import { UserData } from "./RegisterModal";

interface Props {
  handleDataChange: (data: UserData) => void;
}

interface formData {
  username: string;
  email: string;
  password: string;
}

const FirstPageForm = (props: Props) => {
  const { handleSubmit, register, errors, setError } = useForm<formData>();

  return (
    <form
      onSubmit={handleSubmit((formData) => {
        const { username, password, email } = formData;
        props.handleDataChange({ username, password, email, bio: "" });
      })}
    >
      <Box position="absolute" right={3} top="12.5px" textColor="white">
        <RoundBlueButton submit={true} text="Next" outline={false} />
      </Box>
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
            ref={register()}
          />
        </Box>
        <Box w="100%" mb={8}>
          <AccountFormField
            label="Email"
            width="100%"
            name="email"
            labelId="email"
            inputType="text"
            ref={register()}
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
            ref={register()}
          />
        </Box>
      </Flex>
    </form>
  );
};

export default FirstPageForm;
