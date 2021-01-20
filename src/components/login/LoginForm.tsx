import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import AccountFormField from "../UI/AccountFormField";
import RoundBlueButton from "../UI/RoundBlueButton";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useLoginMutation } from "../../generated/graphql";
import { useRouter } from "next/router";

interface Props {}

interface LoginFormData {
  handleOrEmail: string;
  password: string;
}

const LoginForm = (props: Props) => {
  const { handleSubmit, register, errors, setError } = useForm<LoginFormData>();

  const router = useRouter();

  const [login] = useLoginMutation();

  return (
    <Box w="35rem" h="auto">
      <form
        onSubmit={handleSubmit(async (formData) => {
          const response = await login({
            variables: {
              handleOrEmail: formData.handleOrEmail,
              password: formData.password,
            },
          });
          if (response.data?.login.errors) {
            console.log(response.data.login.errors);
            setError(
              response.data.login.errors[0].field as
                | "handleOrEmail"
                | "password",
              {
                type: "manual",
                message: response.data.login.errors[0].message,
              }
            );
            console.log(errors);
          } else if (response.data?.login.user) {
            router.push("/home");
          }
        })}
      >
        <Flex flexDir="column" alignItems="center" justifyContent="center">
          <Box py={3} px={2} w="100%">
            <AccountFormField
              width="100%"
              label="Email or username"
              name="handleOrEmail"
              labelId="handleOrEmail"
              inputType="text"
              ref={register({ required: true })}
              errors={errors.handleOrEmail && errors.handleOrEmail.message}
            />
          </Box>
          <Box mt={2} py={3} px={2} w="100%">
            <AccountFormField
              width="100%"
              label="Password"
              name="password"
              labelId="password"
              inputType="password"
              ref={register({ required: true })}
              errors={errors.password && errors.password.message}
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
