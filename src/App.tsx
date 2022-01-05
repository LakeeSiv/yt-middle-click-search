import {
  Box,
  HStack,
  Link,
  VStack,
  Text,
  Divider,
  Heading,
} from "@chakra-ui/layout";
import React from "react";
import { AiFillGithub } from "react-icons/ai";

const App = () => {
  return (
    <div className="App">
      <Box w="sm" h="150px" bgColor="gray.900" p={2}>
        <Heading>YouTube Middle Click Search</Heading>
        <Divider></Divider>

        <VStack spacing="auto">
          <Box py={2}>
            <Text fontSize={16}>
              Like the extension? Drop a star on Github!
            </Text>
          </Box>
          <Divider></Divider>
          <HStack spacing={1}>
            <AiFillGithub size={15} />
            <a
              href="https://github.com/LakeeSiv/yt-middle-click-search"
              target="_blank"
            >
              <Link>LakeeSiv/yt-middle-click-search</Link>
            </a>
          </HStack>
        </VStack>
      </Box>
    </div>
  );
};

export default App;
