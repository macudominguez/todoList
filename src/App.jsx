import { Flex, useColorModeValue } from "@chakra-ui/react";
import TodoList from "./components/TodoList";

function App() {
  return (
    <Flex
      justify="center"
      bg={useColorModeValue("gray.50", "gray.800")}
      minH="100vh"
    >
      <TodoList />
    </Flex>
  );
}

export default App;
