import { Input, Flex, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";

const generateId = () => {
  let id = 0;
  return () => {
    id++;
    return id;
  };
};

const getId = generateId();

const Buscador = ({ setList, list }) => {
  const [input, setInput] = useState("");

  const handlePress = (e) => {
    // envia palabra
    if (e.key === "Enter") {
      const objeto = {
        id: getId(),
        isCompleted: false,
        item: e.target.value,
      };
      setList([...list, objeto]);
      setInput(""); // limpia input //
    }
  };
  return (
    <Flex
      p="8"
      borderRadius="lg"
      mb="20px"
      boxShadow="lg"
      bg={useColorModeValue("white", "gray.700")}
    >
      <Input
        placeholder="Ingrese su tarea"
        bg={useColorModeValue("purple.100", "gray.700")}
        value={input}
        onChange={(event) => {
          setInput(event.target.value);
        }}
        onKeyPress={handlePress}
      />
    </Flex>
  );
};

export default Buscador;
