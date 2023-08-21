import React from 'react'
import './App.css';
import Header from './Header';
import Home from './Home.js' ; 
import Checkout from './Checkout.js' ; 
import {BrowserRouter as Router, Switch, Route} from "react-router-dom" ; 
import { useState } from 'react';
function App() {
  
  const [cartItems, setCartItems] = useState([]) ; 
  const [cartCount, setCartCount] = useState(0) ; 

  const addToCart = (product) =>{
    setCartItems([...cartItems, product]) ; 
    setCartCount(cartCount + 1) ; 
  } ; 

  const removeFromCart = (itemToRemove) => {
    const updatedCartItems = cartItems.filter(item => item !== itemToRemove) ; 
    setCartItems(updatedCartItems) ; 
    setCartCount(cartCount-1) ; 
  }

  return (
    <Router>
    <div className="App">
      <Header cartCount= {cartCount}/>
      <Switch>
        <Route path = "/checkout">
          <Checkout cartItems={cartItems} removeFromCart={removeFromCart} />
        </Route>
        <Route path = "/">
          <Home addToCart={addToCart} />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
