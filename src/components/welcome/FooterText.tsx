import { Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  text: string;
}

const FooterText = (props: Props) => {
  return (
    <Text fontSize="sm" textColor="gray.300" opacity="60%" mx={2}>
      {props.text}
    </Text>
  );
};

export default FooterText;
