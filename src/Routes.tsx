import React from 'react';
import {BrowserRouter, Outlet, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductIndex from './views/ProductsIndex';
import Home from './views/Home';
import ShoppingHistory from './views/ShoppingHistory';
import ProductCheckout from './views/checkout/ProductCheckout';
import Bag from './views/checkout/Bag';
import BagCheckout from './views/checkout/BagCheckout';
import CheckoutCompleted from './views/checkout/CheckoutCompleted';
import CategoriesView from './views/CategoriesView';
import Footer from './components/Footer';
import SignIn from './views/SignIn';
import Register from './views/Register';
import Coupons from './views/Coupons';
import Admin from './views/Admin';
import AdminResourceShow from './components/Admin/AdminResourceShow';
import AdminResourceIndex from './components/Admin/AdminResourceIndex';
import AdminResourceEdit from './components/Admin/AdminResourceEdit';

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Outlet/>}>
          <Route path=":id" element={<div>
            Hola
          </div>} />
          <Route path=":id/checkout" element={<ProductCheckout />}/>
          <Route index element={<ProductIndex />} />
        </Route>
        <Route path="/history" element={<ShoppingHistory />} />
        <Route path="/coupons" element={<Coupons />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/checkout" element={<BagCheckout />} />
        <Route path="/checkout-completed" element={<CheckoutCompleted />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />

        <Route path="admin" element={<Outlet/>} >
          <Route index element={<Admin childComponent={(resource) => <AdminResourceIndex resource={resource}/>}/>} />
          <Route path="product-categories" element={<CategoriesView />}> </Route>
          <Route path=":resource/:id/edit" element={<Admin showNavBar={false}
            childComponent={() => <AdminResourceEdit/>} />} />
          <Route path=":resource/:id" element={<Admin showNavBar={false}
            childComponent={() => <AdminResourceShow/>} />} />
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
