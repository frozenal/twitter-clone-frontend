import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import FooterText from "./FooterText";

interface Props {}

const Footer = (props: Props) => {
  return (
    <Box as="footer" w="100%" bg="gray.900" textColor="white" h="10%">
      <Flex
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        h="100%"
      >
        <Flex flexDir="row" justifyContent="center" alignItems="center" mb={3}>
          <FooterText text="About" />
          <FooterText text="Help Center" />
          <FooterText text="Terms Of Service" />
          <FooterText text="Privacy Policy" />
          <FooterText text="Cookie Policy" />
          <FooterText text="Ads info" />
          <FooterText text="Blog" />
          <FooterText text="Status" />
          <FooterText text="Careers" />
          <FooterText text="Brand Resources" />
          <FooterText text="Advertising" />
          <FooterText text="Marketing" />
          <FooterText text="Twitter For Business" />
          <FooterText text="Developers" />
          <FooterText text="Directory" />
          <FooterText text="Settings" />
        </Flex>
        <Flex flexDir="row" justifyContent="center" alignItems="center">
          <FooterText text="© 2021 Twitter, Inc." />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
