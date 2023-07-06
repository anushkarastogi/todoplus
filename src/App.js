import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ToDoList from './components/ToDo/ToDoList';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Home from './components/Home/Home';
import About from './components/About';
import Contact from './components/Contact';
import { TaskProvider } from './components/TaskContext';
import { CartProvider } from './components/CartContext';
import './components/Navbar.css';

function App() {

  return (
    <Router>
      <div>
        <nav className="nav">
          <a href="/" className="site-title" style={{ textAlign: 'center', fontStyle: 'italic' }}>TodoPlus</a>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/todo">To-Do List</Link>
            </li>
            <li>
              <Link to="/cart">Shopping Cart</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/todo"
            element={
              <TaskProvider>
                <ToDoList />
              </TaskProvider>
            }
          />
          <Route path="/cart" element={<CartProvider><ShoppingCart /></CartProvider>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
