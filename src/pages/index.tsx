import React from "react";

import { useRouter } from "next/router";
import { Box } from "@chakra-ui/react";

interface Props {}

const index = (props: Props) => {
  const router = useRouter();

  if (process.browser) {
    router.push("/welcome");
  }

  return <Box h="100vh" w="100vw" bg="gray.900"></Box>;
};

export default index;
