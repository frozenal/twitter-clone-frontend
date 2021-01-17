import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import AccountFormField from "../UI/AccountFormField";
import RoundBlueButton from "../UI/RoundBlueButton";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface Props {}

interface LoginFormData {
  phoneEmailOrUsername: string;
  password: string;
}

const LoginForm = (props: Props) => {
  const { handleSubmit, register, errors, setError } = useForm<LoginFormData>();

  return (
    <Box w="35rem" h="auto">
      <form
        onSubmit={handleSubmit(async (formData) => {
          console.log(formData);
          console.log(errors);
        })}
      >
        <Flex flexDir="column" alignItems="center" justifyContent="center">
          <Box py={3} px={2} w="100%">
            <AccountFormField
              width="100%"
              label="Phone, email, or username"
              name="phoneEmailOrUsername"
              labelId="phoneEmailOrUsername"
              type="text"
              ref={register({ required: true })}
              errors={
                errors.phoneEmailOrUsername &&
                "Phone, email, or username required."
              }
            />
          </Box>
          <Box mt={2} py={3} px={2} w="100%">
            <AccountFormField
              width="100%"
              label="Password"
              name="password"
              labelId="password"
              type="password"
              ref={register({ required: true })}
              errors={errors.password && "Password required."}
            />
          </Box>
          <Box mt={2} py={3} px={2} w="100%">
            <RoundBlueButton
              submit={true}
              text="Log in"
              outline={false}
              width="100%"
            />
          </Box>
        </Flex>
      </form>
    </Box>
  );
};

export default LoginForm;
