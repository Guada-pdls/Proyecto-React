import React, { useState } from "react";

const CartContext = React.createContext([]);

const CartProvider = ({ children }) => {
  let [cart, setCart] = useState([]);

  const isInCart = id => cart.some(prod => prod.id === id)

  const addProduct = (quantityAdd, item) => {
    const updateProduct = isInCart(item.id)
    ? [...cart.filter(prod => prod.id !== item.id), { ...item, quantity: quantityAdd } ]
    : [...cart, { ...item, quantity: quantityAdd }];
    setCart(updateProduct);
  };

  const removeProduct = productId => setCart(cart.filter(product => product.id !== productId));

  const clearCart = () => setCart([]);

  const getInitial = id => {
    const productInCart = cart.find(product => product.id === id);
    return productInCart ? productInCart.quantity : 1;
  }

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, clearCart, isInCart, getInitial }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
