
import './App.css';
import { useState } from 'react';

import Header from './components/front/Header/Header';
/* import { BrowserRouter as Router } from "react-router-dom"; */


import Products from './components/front/Products/Products';
import Login from './components/front/Login/css/Login';

import Signup from './components/front/Signup/Signup';
import Cart from './components/front/Cart/Cart';
import Roteamento from './components/Routes/Routes';
import data from './components/back/Data/Data';

function App() {

  const productItems = data;

  const [cartItems, setCartItems] = useState([])

  const handleAddProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist) {
      setCartItems(cartItems.map((item) => item.id === product.id ?
        { ...productExist, quantity: productExist.quantity + 1 } : item)
      );
    }
    else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }

  }

  const handleRemoveProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id))
    } else {
      setCartItems(
        cartItems.map((item) => item.id === product.id ? { ...productExist, quantity: productExist.quantity - 1 } : item)
      )
    }
  }

  const handleCartClearance = () => {
    setCartItems([]);
  }

  return (
    <div className="App">
      <Header  cartItems={cartItems}/>
      <Roteamento
        productItems={productItems}
        cartItems={cartItems}
        handleAddProduct={handleAddProduct}
        handleRemoveProduct={handleRemoveProduct} 
        handleCartClearance={handleCartClearance}
      />
    </div>
  );
}

export default App;
