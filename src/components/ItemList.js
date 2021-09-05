import { useContext } from "react";
import Item from "./Item";
import { ItemContext } from "./ItemsContext";

const ItemList = () => {
  const [items, setItems] = useContext(ItemContext);
  return (
    <div div className ='container '>
      {items &&
        items.map((item) => {
          return (
            <Item
              name={item.name}
              value={item.value}
              key={item.id}
              changeHandler={(e) =>
                setItems(
                  items.map((newItem) => {
                    if (newItem.id === item.id) {
                      return {
                        ...newItem,
                        value: e.target.value,
                      };
                    } else return newItem;
                  })
                )
              }
            />
          );
        })}
    </div>
  );
};

export default ItemList;
