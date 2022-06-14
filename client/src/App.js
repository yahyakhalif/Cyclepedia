import logo from "./logo.svg";
import "./App.css";
import PrivateRoute from "./components/routing/PrivateRoute";

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Checkout from "./pages/Checkout";
import OrderSummary from "./pages/OrderSummary";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Use PrivateRoute for routes to pages you want accessed only by logged in users */}
        {/* <Route exact path="/something" element={ <PrivateRoute/> } >
          <Route exact path='/something' element={ <Cart/> } />
        </Route> */}
        {/* How private route should look */}
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="product/:productId" element={<Product />} />
        <Route path="products" element={<ProductList />} />
        <Route exact path="checkout" element={ <PrivateRoute/> } >
          <Route exact path='checkout' element={ <Checkout/> } />
        </Route>
        {/* <Route path="checkout" element={<OrderSummary />} /> */}
        <Route path="ordersummary" element={<OrderSummary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
