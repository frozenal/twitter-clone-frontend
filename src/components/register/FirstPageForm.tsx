import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import AccountFormField from "../UI/AccountFormField";
import { useForm } from "react-hook-form";
import RoundBlueButton from "../UI/RoundBlueButton";
import { UserData } from "./RegisterModal";

interface Props {
  handleDataChange: (data: UserData, submit: boolean) => void;
}

interface formData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const FirstPageForm = (props: Props) => {
  const { handleSubmit, register, errors, setError } = useForm<formData>();

  return (
    <form
      onSubmit={handleSubmit((formData) => {
        console.log(formData);
        if (formData.confirmPassword != formData.password) {
          setError("confirmPassword", {
            message: "The passwords do not match. ",
          });
        } else {
          const { username, password, email } = formData;
          props.handleDataChange({ username, password, email, bio: "" }, false);
        }
      })}
    >
      <Box position="absolute" right={3} top="12.5px" textColor="white">
        <RoundBlueButton submit={true} text="Next" outline={false} />
      </Box>
      <Box position="absolute" left={3} top="12.5px" textColor="white">
        <Heading as="h3" size="md">
          Page 1 of 2
        </Heading>
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
            fieldType="text"
            ref={register({ required: "Please enter your username. " })}
            errors={errors.username?.message}
          />
        </Box>
        <Box w="100%" mb={8}>
          <AccountFormField
            label="Email"
            width="100%"
            name="email"
            labelId="email"
            inputType="text"
            fieldType="text"
            ref={register({ required: "Please enter your email. " })}
            errors={errors.email?.message}
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
          <Box mb={6}>
            <AccountFormField
              label="Password"
              name="password"
              labelId="password"
              width="100%"
              inputType="password"
              fieldType="text"
              ref={register({
                required: "Please enter your password. ",
                minLength: {
                  value: 8,
                  message: "Password must be longer than 8 characters.",
                },
              })}
              errors={errors.password?.message}
            />
          </Box>

          <AccountFormField
            label="Confirm Password"
            name="confirmPassword"
            labelId="confirmPassword"
            width="100%"
            inputType="password"
            fieldType="text"
            ref={register({
              required: "Please confirm your password. ",
              minLength: {
                value: 8,
                message: "Password must be longer than 8 characters.",
              },
            })}
            errors={errors.confirmPassword?.message}
          />
        </Box>
      </Flex>
    </form>
  );
};

export default FirstPageForm;
