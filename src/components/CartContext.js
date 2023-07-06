import React from 'react';

const CartContext = React.createContext();

export function useCart() {
  return React.useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = React.useState([]);

  const addItem = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeItem = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemId)
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}
