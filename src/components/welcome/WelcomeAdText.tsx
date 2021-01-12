import { Box, Heading } from "@chakra-ui/react";
import React from "react";

interface Props {
  adText: string;
}

const WelcomeAdText = (props: Props) => {
  return (
    <Box textColor="white" mb={8} width="full">
      <Heading as="h2" size="md">
        {props.adText}
      </Heading>
    </Box>
    // <div className="text-white text-xl font-bold mb-8 w-full">
    //   {props.adText}
    // </div>
  );
};

export default WelcomeAdText;
