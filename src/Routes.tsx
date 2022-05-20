import React from 'react';
import {BrowserRouter, Outlet, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductIndex from './views/ProductsIndex';
import Home from './views/Home';
import OrderIndex from './views/OrdersIndex';
import ProductCheckout from './views/checkout/ProductCheckout';
import Bag from './views/checkout/Bag';
import BagCheckout from './views/checkout/BagCheckout';
import CheckoutCompleted from './views/checkout/CheckoutCompleted';
import CategoriesView from './views/CategoriesView';
import Footer from './components/Footer';
import SignIn from './views/SignIn';

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="categories" element={<CategoriesView />}> </Route>
        <Route path="products" element={<Outlet/>}>
          <Route path=":id" element={<div>
            Hola
          </div>} />
          <Route path=":id/checkout" element={<ProductCheckout />}/>
          <Route index element={<ProductIndex />} />
        </Route>
        <Route path="/orders" element={<OrderIndex />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/checkout" element={<BagCheckout />} />
        <Route path="/checkout-completed" element={<CheckoutCompleted />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
