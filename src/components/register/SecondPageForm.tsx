import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import AccountFormField from "../UI/AccountFormField";
import RoundBlueButton from "../UI/RoundBlueButton";
import { UserData } from "./RegisterModal";

interface Props {
  handleDataChange: (data: UserData, submit: boolean) => void;
}

interface FormData {
  bio: string;
}

export const SecondPageForm = (props: Props) => {
  const { handleSubmit, register, errors, setError } = useForm<FormData>();

  return (
    <form
      onSubmit={handleSubmit((formData) => {
        props.handleDataChange({ bio: formData.bio }, true);
      })}
    >
      <Box position="absolute" right={3} top="12.5px" textColor="white">
        <RoundBlueButton submit={true} text="Create account" outline={false} />
      </Box>
      <Box position="absolute" left={3} top="12.5px" textColor="white">
        <Heading as="h3" size="md">
          Page 2 of 2
        </Heading>
      </Box>
      <Flex
        flexDir="column"
        w="100%"
        justifyContent="center"
        alignItems="center"
      >
        <Box w="100%">
          <Heading
            as="h2"
            size="md"
            fontWeight="700"
            textColor="white"
            textAlign="left"
            w="100%"
          >
            Create a bio
          </Heading>
          <Text textColor="gray.500" mb={2}>
            This is not required, but recommended! Create a short, descriptive
            bio that new followers will see. Max 160 characters.
          </Text>
          <Box mb={24}>
            <AccountFormField
              label="Bio"
              width="100%"
              name="bio"
              labelId="bio"
              inputType="text"
              fieldType="textarea"
              ref={register()}
              errors={errors.bio?.message}
            />
          </Box>
        </Box>
      </Flex>
    </form>
  );
};
