import {
  Checkbox,
  ListItem,
  Text,
  Button,
  useColorModeValue,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { ImBin } from "react-icons/im";

const Item = ({ item, changeCompleted, handleOnclick, changeTitle }) => {
  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState(item.item);
  const changeEdit = () => {
    setEdit(true);
  };
  const handlePress = (e) => {
    if (e.key === "Enter") {
      changeTitle(input, item.id);
      setEdit(false);
    }
  };

  return (
    <ListItem
      key={item.id}
      w="100%"
      display="flex"
      alignItems="flex-end"
      gap="15px"
    >
      {edit ? (
        <Input
          placeholder="Ingrese su tarea"
          bg={useColorModeValue("purple.100", "gray.700")}
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
          }}
          onKeyPress={handlePress}
        />
      ) : (
        <>
          <Checkbox
            defaultChecked={item.isCompleted}
            onChange={() => changeCompleted(item.id)}
          />
          <Text w="80%" as={item.isCompleted ? "s" : "p"}>
            {item.item}
          </Text>
          <Button onClick={changeEdit}>Editar</Button>
          <Button mt="12px" onClick={() => handleOnclick(item.id)}>
            <ImBin />
          </Button>
        </>
      )}
    </ListItem>
  );
};

export default Item;
