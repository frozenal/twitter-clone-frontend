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
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRegisterMutation } from "../../generated/graphql";
import TwitterIcon from "../svg/TwitterLogo";
import RoundBlueButton from "../UI/RoundBlueButton";
import FirstPageForm from "./FirstPageForm";
import { SecondPageForm } from "./SecondPageForm";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export interface UserData {
  username?: string;
  email?: string;
  password?: string;
  bio?: string;
}

const RegisterModal = (props: Props) => {
  const [page, setPage] = useState(1);

  const [submit, setSubmit] = useState(false);

  const [register] = useRegisterMutation();

  const [userData, setUserData] = useState<UserData>({
    username: "",
    email: "",
    password: "",
    bio: "",
  });

  useEffect(() => {
    if (submit) {
      setSubmit(false);
      registerUser();
    }
  });

  const router = useRouter();

  const handleUserDataChange = (data: UserData, submit: boolean = false) => {
    const newData: UserData = {
      username: data.username ? data.username : userData.username,
      password: data.password ? data.password : userData.password,
      email: data.email ? data.email : userData.email,
      bio: data.bio ? data.bio : userData.bio,
    };
    setUserData(newData);
    if (submit) {
      setSubmit(true);
    } else {
      setPage(2);
    }
  };

  const registerUser = async () => {
    const response = await register({
      variables: {
        email: userData.email!,
        password: userData.password!,
        bio: userData.bio,
        username: userData.username!,
      },
    });

    console.log(response.data?.register);

    if (response.data?.register.errors) {
      alert(
        `There is an error in field ${response.data.register.errors[0].field}: ${response.data.register.errors[0].message}`
      );
      router.reload();
    } else if (response.data?.register.user) {
      router.push("/home");
    }
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
          {page == 2 && (
            <SecondPageForm handleDataChange={handleUserDataChange} />
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default RegisterModal;
