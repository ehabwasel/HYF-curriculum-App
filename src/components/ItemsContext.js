import { useState, createContext } from 'react';

export const ItemContext = createContext();

export const ItemProvider = (props) => {
  const [items, setItems] = useState([
    { name: 'HTML/Css', value: 8, id: 1 },
    { name: 'JS1', value: 7, id: 2 },
    { name: 'JS2', value: 6, id: 3 },
    { name: 'JS3', value: 5, id: 4 },
    { name: 'NodeJs', value: 9, id: 5 },
    { name: 'DB', value: 8, id: 6 },
    { name: 'REACT', value: 10, id: 7 },
  ]);
  return (
    <ItemContext.Provider value={[items, setItems]}>
      {props.children}
    </ItemContext.Provider>
  );
};
