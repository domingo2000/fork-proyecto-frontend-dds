import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductIndex from './views/ProductsIndex';
import Home from './views/Home';
import OrderIndex from './views/OrdersIndex';
import TricksNew from './views/TricksNew';
import ProductCheckout from './views/checkout/ProductCheckout';
import Bag from './views/checkout/Bag';

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Outlet></Outlet>}>
          <Route path=":id" element={<div>
            Hola
            </div>} />
          <Route path=":id/checkout" element={<ProductCheckout />}/>
          <Route path="new" element={<TricksNew />} />
          <Route index element={<ProductIndex />} />
        </Route>
        <Route path="/orders" element={<OrderIndex />} />
        <Route path="/bag" element={<Bag />} />
      </Routes>
    </BrowserRouter>
  );
}