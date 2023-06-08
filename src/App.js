import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import styled from "styled-components";

import {
  Home,
  SingleProduct,
  Cart,
  About,
  Checkout,
  PrivateRoute,
  Error,
  Books,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<SingleProduct />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
