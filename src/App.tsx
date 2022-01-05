import { Box, Divider, Flex, Heading } from "@chakra-ui/react";
import React from "react";

const App = () => {
  return (
    <div className="App">
      <Box w="xs" h="xs" bgColor="gray.900" p={4}>
        <Flex direction="column" h="full" w="full">
          <p>Hi</p>
        </Flex>
      </Box>
    </div>
  );
};

export default App;
