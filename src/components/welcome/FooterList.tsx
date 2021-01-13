import { Flex } from "@chakra-ui/react";
import React from "react";
import FooterText from "./FooterText";

interface Props {
  items: string[];
}

const FooterList = (props: Props) => {
  return (
    <Flex flexDir="row" justifyContent="center" alignItems="center">
      {props.items.map((item) => {
        <FooterText text={item} />;
      })}
    </Flex>
  );
};

export default FooterList;
