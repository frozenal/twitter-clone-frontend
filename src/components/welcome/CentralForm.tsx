import { Box, Flex, Link, useDisclosure } from "@chakra-ui/react";
import React from "react";
import RegisterModal from "../register/RegisterModal";
import RoundBlueButton from "../UI/RoundBlueButton";

interface Props {}

const CentralForm = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex flexDir="column">
      <Box mb={3}>
        <RoundBlueButton
          onClick={onOpen}
          outline={false}
          submit={false}
          text="Sign up"
          width="100%"
        />
      </Box>
      <RegisterModal isOpen={isOpen} onClose={onClose} />
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
