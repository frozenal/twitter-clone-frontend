import { Button } from "@chakra-ui/react";
import React from "react";

interface Props {
  submit: boolean;
  text: string;
  width?: string;
  outline: boolean;
  onClick?: any;
}

const RoundBlueButton = (props: Props) => {
  const background = props.outline ? "transparent" : "blue.400";
  return (
    <Button
      onClick={props.onClick ? props.onClick : undefined}
      type={props.submit ? "submit" : undefined}
      width={props.width}
      p={5}
      alignSelf="center"
      bg={props.outline ? "transparent" : "blue.400"}
      _hover={{ bg: props.outline ? "blue.900" : "blue.500" }}
      border="1px"
      borderColor="blue.400"
      textColor={props.outline ? "blue.400" : "white"}
      fontWeight="700"
      rounded="full"
    >
      {props.text}
    </Button>
  );
};

export default RoundBlueButton;
