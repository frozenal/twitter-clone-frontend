import { Flex, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import HomeIcon from "../svg/HomeCircleIcon";

interface Props {
  text: string;
  children: any;
}

const SidebarTab = (props: Props) => {
  const [selected, setSelected] = useState<boolean>(false);

  return (
    <Flex
      flexDir="row"
      justifyContent="center"
      alignItems="center"
      color={selected ? "blue.400" : "white"}
      py={2}
      px={4}
      borderRadius="16px"
      _hover={{ bg: "rgba(43, 108, 176, 0.20)", color: "blue.400" }}
    >
      {props.children}
      <Heading as="h2" fontSize="1.5rem" fontWeight="800" mx={2}>
        {props.text}
      </Heading>
    </Flex>
  );
};

export default SidebarTab;
