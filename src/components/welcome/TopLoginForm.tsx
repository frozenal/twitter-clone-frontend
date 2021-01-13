import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import RoundBlueButton from "../UI/RoundBlueButton";
import AccountFormField from "./AccountFormField";

interface Props {}

const TopLoginForm = (props: Props) => {
  return (
    <Flex flexDir="row" justifyContent="center" textAlign="center">
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
  );
};

export default TopLoginForm;
