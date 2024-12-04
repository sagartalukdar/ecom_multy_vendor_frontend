// import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
// import { thunk } from "redux-thunk";

import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import sellerSlice from "./Seller/SellerSlice"
import sellerProductSlice from "./Seller/sellerProductSlice";
import productSlice from "./Customer/CustomerProductSlice";
import customerSlice from "./Customer/CustomerSlice";
import authSlice from "./Auth/AuthSlice";
import cartSlice from "./Customer/CartSlice";
import couponSlice from "./Customer/CouponSlice";
import orderSlice from "./Customer/OrderSlice";

// const rootReducers=combineReducers({

// }) 
// export const store=legacy_createStore(rootReducers,applyMiddleware(thunk));


const rootReducers=combineReducers({
   seller:sellerSlice,
   sellerProduct:sellerProductSlice,
   product:productSlice,
   customer:customerSlice,
   auth:authSlice,
   cart:cartSlice,
   coupon:couponSlice,
   customerOrder:orderSlice
})

export const store=configureStore({
    reducer:rootReducers,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(thunk)
})

export type AppDispatch=typeof store.dispatch;
export type RootState=ReturnType<typeof rootReducers>;

export const useAppDispatch=()=>useDispatch<AppDispatch>();
export const useAppSelector:TypedUseSelectorHook<RootState>=useSelector;


