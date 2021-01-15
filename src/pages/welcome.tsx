import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import TwitterIcon from "../components/svg/TwitterLogo";
import RoundBlueButton from "../components/UI/RoundBlueButton";
import AccountFormField from "../components/UI/AccountFormField";
import CentralCard from "../components/welcome/CentralCard";
import CentralForm from "../components/welcome/CentralForm";
import Footer from "../components/welcome/Footer";
import FooterText from "../components/welcome/FooterText";
import TopLoginForm from "../components/welcome/TopLoginForm";
import WelcomeAd from "../components/welcome/WelcomeAd";
import WelcomeAdText from "../components/welcome/WelcomeAdText";

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
          {/* <Box
            visibility={{ base: "hidden", md: "visible" }}
            pos="absolute"
            top={4}
            px={3}
            w="50%"
            textAlign="center"
          >
            <TopLoginForm />
          </Box> */}
          <CentralCard />
        </Flex>
      </Flex>
      <Footer />
    </Box>
  );
};

export default welcome;
