import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import RoundBlueButton from "../UI/RoundBlueButton";
import AccountFormField from "../UI/AccountFormField";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

interface Props {}

interface LoginFormData {
  username: string;
  password: string;
}

const formSchema = yup.object().shape({
  username: yup
    .string()
    .required("Please enter a valid email address, phone number, or username"),
  password: yup.string().required("Please enter a password"),
});

const TopLoginForm = (props: Props) => {
  const { handleSubmit, register, errors, setError } = useForm<LoginFormData>();

  const router = useRouter();

  return (
    <form
      onSubmit={handleSubmit(async (formData) => {
        console.log(formData);
        formSchema
          .validate(formData)
          .then((value) => {
            console.log("Validation passed, continue login");
          })
          .catch((err) => {
            console.log(err.name);
            console.log(err.errors);
            router.push({
              pathname: "/login",
              query: { error: "incorrect username or password redirect" },
            });
          });
      })}
    >
      <Flex flexDir="row" justifyContent="center" textAlign="center">
        <AccountFormField
          width="52"
          label="Phone, email, or username"
          name="phoneEmailUsername"
          labelId="phoneEmailUsername"
          inputType="text"
          ref={register({})}
        />
        <AccountFormField
          width="52"
          label="Password"
          name="password"
          labelId="password"
          inputType="password"
          ref={register({})}
        />
        <RoundBlueButton
          submit={true}
          text="Log in"
          width="auto"
          outline={true}
        />
      </Flex>
    </form>
  );
};

export default TopLoginForm;
