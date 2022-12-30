import React from 'react'
import { Routes, Route } from "react-router-dom";
import Products from '../front/Products/Products';
import Signup from '../front/Signup/Signup';
import Cart from '../front/Cart/Cart';

const Roteamento = ({ productItems, cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance }) => {
    return (
        <div>
            <Routes>
                <Route path="/products" element={<Products  productItems={productItems} handleAddProduct={handleAddProduct}/>} ></Route>
                <Route path="/signup" element={<Signup />} ></Route>
                <Route path="/cart" element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct}  handleCartClearance={handleCartClearance}/>} ></Route>
            </Routes>
        </div>
    )
}

export default Roteamento