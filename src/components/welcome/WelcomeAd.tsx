import { Flex } from "@chakra-ui/react";
import React from "react";
import WelcomeAdText from "./WelcomeAdText";

interface Props {}

const WelcomeAd = (props: Props) => {
  return (
    <Flex
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      textAlign="left"
    >
      <WelcomeAdText adText="Follow your interests." />
      <WelcomeAdText adText="Hear what people are talking about." />
      <WelcomeAdText adText="Join the conversation." />
    </Flex>
  );
};

export default WelcomeAd;
