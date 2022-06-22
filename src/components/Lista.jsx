import { List } from "@chakra-ui/react";
import Item from "./Item";

const Lista = ({ setList, list, filtro }) => {
  const handleOnclick = (id) => {
    // elimina el elemento//
    setList(list.filter((itemLista) => itemLista.id !== id));
  };
  const changeCompleted = (id) => {
    setList(
      list.map((item) => {
        if (id === item.id) {
          item.isCompleted = !item.isCompleted;
        }
        return item;
      })
    );
  };

  const changeTitle = (value, id) => {
    setList(
      list.map((item) => {
        if (id === item.id) {
          item.item = value;
        }
        return item;
      })
    );
  };

  return (
    <>
      <List w="100%">
        {list
          .filter(
            (item) =>
              (filtro === "incompletos" && !item.isCompleted) ||
              (filtro === "completos" && item.isCompleted) ||
              filtro === "todos"
          )
          .map((item) => (
            <Item
              changeTitle={changeTitle}
              item={item}
              changeCompleted={changeCompleted}
              handleOnclick={handleOnclick}
              key={item.id}
            />
          ))}
      </List>
    </>
  );
};

export default Lista;
