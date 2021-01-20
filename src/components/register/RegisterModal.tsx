import {
  Box,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";
import TwitterIcon from "../svg/TwitterLogo";
import RoundBlueButton from "../UI/RoundBlueButton";
import FirstPageForm from "./FirstPageForm";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const RegisterModal = (props: Props) => {
  return (
    <Modal
      isOpen={props.isOpen}
      onClose={props.onClose}
      isCentered
      motionPreset="none"
      size="2xl"
    >
      <ModalOverlay />
      <ModalContent bg="gray.900">
        <ModalHeader>
          <Flex
            flexDir="row"
            w="100%"
            justifyContent="center"
            alignItems="center"
            textColor="white"
          >
            <TwitterIcon height={35} width={35} />
          </Flex>
          <Box position="absolute" right={3} top="12.5px" textColor="white">
            <RoundBlueButton submit={false} text="Next" outline={false} />
          </Box>
        </ModalHeader>
        <ModalBody>
          <FirstPageForm />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default RegisterModal;
