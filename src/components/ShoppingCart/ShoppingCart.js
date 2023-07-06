import React from 'react';
import { useCart } from '../CartContext';
import "./ShoppingCart.css"
const cartStyles = {
  border: '1px solid #ccc',
  borderRadius: '4px',
  padding: '16px',
  margin: '16px 0',
};

const itemStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '8px',
};

const buttonStyles = {
  marginLeft: '8px',
};

function ShoppingCart() {
  const { cartItems, addItem, removeItem } = useCart();
  const [itemName, setItemName] = React.useState('');
  const [itemPrice, setItemPrice] = React.useState('');
  const [error, setError] = React.useState('');

  const handleAddItem = (e) => {
    e.preventDefault();
    if (itemName.trim() === '' || itemPrice.trim() === '') {
      setError('Item name and price are required');
      return;
    }
    const item = { id: Date.now(), name: itemName, price: parseFloat(itemPrice) };
    addItem(item);
    setItemName('');
    setItemPrice('');
    setError('');
  };

  const handleRemoveItem = (itemId) => {
    removeItem(itemId);
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="shopping-cart" style={cartStyles}>
      <div className="cart-container">
  <h1>Shopping Cart</h1>
  <p>Total Items: {cartItems.length}</p>
  <p>Total Price: ${totalPrice.toFixed(2)}</p>
  <form onSubmit={handleAddItem}>
    <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} placeholder="Enter item name" />
    <input type="number" value={itemPrice} onChange={(e) => setItemPrice(e.target.value)} placeholder="Enter item price" step="0.01" />
    {error && <p className="error">{error}</p>}
    <button type="submit" className="add-item-button">Add Item</button>
  </form>
</div>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} className="cart-item" style={itemStyles}>
            <span>{item.name} - ${item.price.toFixed(2)}</span>
            <button onClick={() => handleRemoveItem(item.id)} style={buttonStyles} className="remove-item-button">
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingCart;
