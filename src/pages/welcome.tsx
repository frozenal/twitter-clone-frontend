import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import TwitterIcon from "../components/svg/TwitterLogo";
import RoundBlueButton from "../components/UI/RoundBlueButton";
import AccountFormField from "../components/welcome/AccountFormField";
import FooterText from "../components/welcome/FooterText";
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
        </Flex>
        <Flex
          w="100%"
          h="100%"
          textAlign="center"
          bg="gray.900"
          textColor="white"
          justifyContent="center"
        >
          <Flex
            visibility={{ base: "hidden", md: "visible" }}
            flexDir="row"
            pos="absolute"
            justifyContent="center"
            top={4}
            px={3}
            w="50%"
            textAlign="center"
          >
            <AccountFormField
              width="52"
              label="Phone, email, or username"
              name="phoneEmailUsername"
              labelId="phoneEmailUsername"
              type="text"
            />
            <AccountFormField
              width="52"
              label="Password"
              name="password"
              labelId="password"
              type="password"
            />
            <RoundBlueButton
              submit={true}
              text="Log in"
              width="auto"
              outline={true}
            />
          </Flex>
          <Flex
            flexDir="column"
            alignSelf="center"
            justifySelf="center"
            w="380px"
            h="auto"
          >
            <Box pb="10px" textAlign="left">
              <TwitterIcon width={55} height={55} />
            </Box>
            <Box mt={4} w="100%">
              <Heading
                as="h1"
                size="lg"
                w="100%"
                textAlign="left"
                fontWeight="800"
              >
                See what's happening in the world right now
              </Heading>
            </Box>
            <Box mt={16} mb={4} w="100%">
              <Heading as="h3" size="sm" w="100%" textAlign="left">
                Join Twitter today.
              </Heading>
            </Box>
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
          </Flex>
        </Flex>
      </Flex>
      <Box as="footer" w="100%" bg="gray.900" textColor="white" h="10%">
        <Flex
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          h="100%"
        >
          <Flex
            flexDir="row"
            justifyContent="center"
            alignItems="center"
            mb={3}
          >
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
    </Box>
  );
};

export default welcome;
