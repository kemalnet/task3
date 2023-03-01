import React, { createContext, useState } from 'react';
import itemsData from '../../data/foxes.json';

export const ItemContext = createContext({
  items: [],
  addItem: (newItem) => {},
  updateItem: (id, name) => {},
});

const ItemProvider = ({ children }) => {
  const [items, setItems] = useState(itemsData);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const updateItem = (id, name) => {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, name } : item))
    );
  };

  const itemsWithContext = items.map((item) => {
    // I was trying to change image name dynamically for require() func in HomeScreen but it does'n work. So, I used switch here.
    // const updatedImage = require(`../../assets/images/${item.image}`);
    let updatedImage = '';
    switch (item.image) {
      case 'fox0.jpg':
        updatedImage = require('../../assets/images/fox0.jpg');
        break;
      case 'fox1.jpg':
        updatedImage = require('../../assets/images/fox1.jpg');
        break;
      case 'fox2.jpg':
        updatedImage = require('../../assets/images/fox2.jpg');
        break;
      case 'fox3.jpg':
        updatedImage = require('../../assets/images/fox3.jpg');
        break;
      case 'fox4.jpg':
        updatedImage = require('../../assets/images/fox4.jpg');
        break;
      case 'fox5.jpg':
        updatedImage = require('../../assets/images/fox5.jpg');
        break;
      case 'fox6.jpg':
        updatedImage = require('../../assets/images/fox6.jpg');
        break;
      case 'fox7.jpg':
        updatedImage = require('../../assets/images/fox7.jpg');
        break;

      default:
        updatedImage = require('../../assets/images/fox0.jpg');
    }

    return { ...item, image: updatedImage };
  });

  return (
    <ItemContext.Provider
      value={{ items: itemsWithContext, addItem, updateItem }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export default ItemProvider;
