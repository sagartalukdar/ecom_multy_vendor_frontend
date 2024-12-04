import React, { useEffect } from 'react';
import Navbar from './customer/components/Navbar/Navbar';
import { ThemeProvider } from '@mui/material';
import customeTheme from './theme/CustomeTheme';
import Home from './customer/pages/Home/Home';
import Product from './customer/pages/Product/Product';
import ProductDetails from './customer/pages/Product/ProductDetails';
import Review from './customer/pages/Review/Review';
import Cart from './customer/pages/Cart/Cart';
import Checkout from './customer/pages/Checkout/Checkout';
import Account from './customer/pages/Account/Account';
import { Route, Routes, useNavigate } from 'react-router';
import BecomeSeller from './seller/Pages/BecomeSeller/BecomeSeller';
import SellerDashboard from './seller/Pages/SellerDashBoard/SellerDashboard';
import AdminDashboard from './admin/Pages/Dashboard/AdminDashboard';
import { fetchSellerProfile } from './Redux/Seller/SellerSlice';
import { string } from 'yup';
import { useAppDispatch, useAppSelector } from './Redux/Store';
import Auth from './customer/pages/Auth/Auth';
import { fetchCustomerProfile } from './Redux/Customer/CustomerSlice';
import { fetchUserCart } from './Redux/Customer/CartSlice';
import PaymentSuccess from './customer/pages/Checkout/PaymentSuccess';

function App() {
  const dispatch=useAppDispatch();
  const {seller,customer}=useAppSelector(store=>store);
  const navigate=useNavigate();

  useEffect(()=>{
    const jwt=localStorage.getItem("jwt");
    dispatch(fetchSellerProfile(jwt|| ""));
  },[seller.jwt])

  useEffect(()=>{
    if(seller.profile?.email){
      navigate("/seller")
    }
  },[seller.profile])

  useEffect(()=>{
    const jwt=localStorage.getItem("jwt");
    dispatch(fetchCustomerProfile(jwt|| ""));
    dispatch(fetchUserCart(localStorage.getItem("jwt")||""));
  },[customer.jwt])

  // useEffect(()=>{
  //   if(customer.profile?.email){
  //     navigate("/")
  //   }
  // },[customer.profile])

  return (
    <ThemeProvider theme={customeTheme}>
      <div className="">
      <Navbar/>
        <Routes>       
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Auth/>} />
          <Route path='/products/:category' element={<Product/>}/>
          <Route path='/review/:productId' element={<Review/>}/>
          <Route path='/product-details/:categoryId/:name/:productId' element={<ProductDetails/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/payment-success/:orderId' element={<PaymentSuccess/>}/>
          <Route path='/account/*' element={<Account/>}/>
          <Route path='/become-seller' element={<BecomeSeller/>}/>
          <Route path='/seller/*' element={<SellerDashboard/>} />
          <Route path='/admin/*' element={<AdminDashboard/>} />
        </Routes>
  
      </div>
    </ThemeProvider>
  );
}

export default App;
