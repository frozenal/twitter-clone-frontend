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
import React, { useState } from "react";
import TwitterIcon from "../svg/TwitterLogo";
import RoundBlueButton from "../UI/RoundBlueButton";
import FirstPageForm from "./FirstPageForm";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export interface UserData {
  username: string;
  email: string;
  password: string;
  bio: string;
}

const RegisterModal = (props: Props) => {
  const [page, setPage] = useState(1);

  const [userData, setUserData] = useState<UserData>({
    username: "",
    email: "",
    password: "",
    bio: "",
  });

  const handleUserDataChange = (data: UserData) => {
    const newData: UserData = {
      username: data.username ? data.username : "",
      password: data.password ? data.password : "",
      email: data.email ? data.email : "",
      bio: data.bio ? data.bio : "",
    };
    setUserData(newData);
    setPage(2);
  };

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
        </ModalHeader>
        <ModalBody>
          {page == 1 && (
            <FirstPageForm handleDataChange={handleUserDataChange} />
          )}
          {page == 2 && <Box>Confirm email page</Box>}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default RegisterModal;
