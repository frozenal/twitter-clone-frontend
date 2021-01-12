import { Button } from "@chakra-ui/react";
import React from "react";

interface Props {
  submit: boolean;
  text: string;
  width?: string;
  outline: boolean;
}

const RoundBlueButton = (props: Props) => {
  return (
    <Button
      width={props.width}
      alignSelf="center"
      bg="transparent"
      _hover={{ bg: "blue.900" }}
      border="1px"
      borderColor="blue.400"
      textColor="blue.400"
      rounded="full"
    >
      {props.text}
    </Button>
  );
};

export default RoundBlueButton;
