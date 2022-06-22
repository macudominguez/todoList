import { Button, ButtonGroup, useColorModeValue } from "@chakra-ui/react";

const Buttons = ({ setFiltro }) => {
  return (
    <ButtonGroup variant="outline" spacing="6">
      <Button
        onClick={() => setFiltro("todos")}
        bg={useColorModeValue("purple.100", "gray.700")}
      >
        {" "}
        Todos
      </Button>
      <Button
        onClick={() => setFiltro("completos")}
        bg={useColorModeValue("purple.100", "gray.700")}
      >
        {" "}
        Completos
      </Button>
      <Button
        onClick={() => setFiltro("incompletos")}
        bg={useColorModeValue("purple.100", "gray.700")}
      >
        {" "}
        Incompletos
      </Button>
    </ButtonGroup>
  );
};

export default Buttons;
