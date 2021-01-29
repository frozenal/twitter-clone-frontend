import { Box, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import CentralCard from "../components/welcome/CentralCard";
import Footer from "../components/welcome/Footer";
import WelcomeAd from "../components/welcome/WelcomeAd";

interface Props {}

const welcome = (props: Props) => {
  const router = useRouter();

  return (
    <Box h="100vh" w="100vw">
      <Flex
        flexDirection={{ base: "column-reverse", md: "row" }}
        width="100%"
        h="90%"
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          flexDir="column"
          w="100%"
          h="100%"
          justifyContent="center"
          alignItems="center"
          bg="blue.400"
        >
          <WelcomeAd />
        </Flex>
        <Flex
          w="100%"
          h="100%"
          textAlign="center"
          bg="gray.900"
          textColor="white"
          justifyContent="center"
        >
          <CentralCard />
        </Flex>
      </Flex>
      <Footer />
    </Box>
  );
};

export default welcome;
