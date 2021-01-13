import { Flex, Link, Box } from "@chakra-ui/react";
import React from "react";
import RoundBlueButton from "../UI/RoundBlueButton";

interface Props {}

const CentralForm = (props: Props) => {
  return (
    <Flex flexDir="column">
      <Link _hover={undefined} href="/signup">
        <Box mb={3}>
          <RoundBlueButton
            outline={false}
            submit={false}
            text="Sign up"
            width="100%"
          />
        </Box>
      </Link>
      <Link _hover={undefined} href="/login">
        <Box mb={3}>
          <RoundBlueButton
            outline={true}
            submit={false}
            text="Log in"
            width="100%"
          />
        </Box>
      </Link>
    </Flex>
  );
};

export default CentralForm;
