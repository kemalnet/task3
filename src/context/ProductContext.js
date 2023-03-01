import React, { createContext, useState } from 'react';
import productsData from '../../data/foxes.json';

export const ProductContext = createContext({
  products: [],
  addProduct: (newProduct) => {},
  updateProduct: (id, name) => {},
});

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(productsData);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const updateProduct = (id, name) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, name } : product
      )
    );
  };

  const productsWithContext = products.map((product) => {
    // I was trying to change image name dynamically but it does'n work.
    // const updatedImage = require(`../../assets/images/${product.image}`);
    let updatedImage = '';
    switch (product.image) {
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

    return { ...product, image: updatedImage };
  });

  return (
    <ProductContext.Provider
      value={{ products: productsWithContext, addProduct, updateProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
