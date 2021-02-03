import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import HomeIcon from "../svg/HomeCircleIcon";
import SidebarTab from "./SidebarTab";

interface Props {}

const Sidebar = (props: Props) => {
  return (
    <Flex flexDir="column" width="1/3" textColor="white">
      <Box>
        <SidebarTab text="Home">
          <HomeIcon width="2rem" height="2rem" />
        </SidebarTab>
      </Box>
    </Flex>
  );
};

export default Sidebar;
