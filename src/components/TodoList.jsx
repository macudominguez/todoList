import {
  Button,
  Flex,
  Heading,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import Buscador from "./Buscador";
import Buttons from "./Button";
import Lista from "./Lista";
import { BsFillMoonStarsFill, BsSun } from "react-icons/bs";

const TodoList = () => {
  const [list, setList] = useState([]);
  const { colorMode, toggleColorMode } = useColorMode();
  const [filtro, setFiltro] = useState("todos");

  return (
    <Flex direction="column" mt="50px" border="2px grey">
      <Flex justify="space-between">
        <Heading mb="18px">ToDo List</Heading>
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <BsFillMoonStarsFill /> : <BsSun />}
        </Button>
      </Flex>
      <Buscador list={list} setList={setList} />
      <Flex
        p="5"
        borderRadius="lg"
        pb="8"
        boxShadow="lg"
        direction="column"
        gap="10px"
        bg={useColorModeValue("white", "gray.700")}
      >
        <Buttons setFiltro={setFiltro} />
        <Lista list={list} setList={setList} filtro={filtro} />
      </Flex>
    </Flex>
  );
};

export default TodoList;
