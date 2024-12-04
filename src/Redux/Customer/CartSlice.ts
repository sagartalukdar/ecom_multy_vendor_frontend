import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../Config/Api";
import { Cart, cartItem,  } from "../../Types/CartTypes";
import { applyRemoveCoupon } from "./CouponSlice";


export const fetchUserCart=createAsyncThunk<Cart,string>("/cart/fetchUserCart",
    async(jwt:string,{rejectWithValue})=>{
        try {
            const response=await api.get(`/api/cart/`,{
                headers:{
                    Authorization:`Bearer ${jwt}`
                }
            });
            const data=response.data;
            console.log("fetch user cart ",data);
            return data;
        } catch (error:any) {
            console.log("fetch user cart error",error);
            return rejectWithValue(error.message)
        }
    }
)

interface AddItemRequest{
    size:string;
    quantity:number;
    productId:number|undefined;
}


export const addItemtoCart=createAsyncThunk<cartItem,{jwt:string|null;request:any}>("/cart/addItemtoCart",
    async({jwt,request},{rejectWithValue})=>{
        try {
            const response=await api.put(`/api/cart/add`,request,{
                headers:{
                    Authorization:`Bearer ${jwt}`
                }
            });
            const data=response.data;
            console.log("cartItem added ",data);
            return data;
        } catch (error:any) {
            console.log("cartItem added error",error);
            return rejectWithValue(error.message)
        }
    }
)


export const deleteCartItem=createAsyncThunk<any,{jwt:string|null;cartItemId:number|undefined}>("/cart/deleteCartItem",
    async({jwt,cartItemId},{rejectWithValue})=>{
        try {
            const response=await api.delete(`/api/cart/cartItem/${cartItemId}`,{
                headers:{
                    Authorization:`Bearer ${jwt}`
                }
            });
            const data=response.data;
            console.log("cartItem deleted ",data);
            return data;
        } catch (error:any) {
            console.log("cartItem deleted error",error);
            return rejectWithValue(error.response.data.message) || "failed to delete cart item"
        }
    }
)

export const updateCartItem=createAsyncThunk<any,{jwt:string|null;cartItemId:number|undefined;cartItem:any}>("/cart/updateCartItem",
    async({jwt,cartItemId,cartItem},{rejectWithValue})=>{
        try {
            const response=await api.put(`/api/cart/cartItem/${cartItemId}`,cartItem,{
                headers:{
                    Authorization:`Bearer ${jwt}`
                }
            });
            const data=response.data;
            console.log("cartItem updated ",data);
            return data;
        } catch (error:any) {
            console.log("cartItem updated error",error);
            return rejectWithValue(error.response.data.message) || "failed to updated cart item"
        }
    }
)



interface cartState{
    cart:Cart|null
    loading:boolean;
    error:string|null;
}

const initialState:cartState={
    cart:null,
    loading:false,
    error:null,
}

const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        resetCartState:(state)=>{
            state.cart=null;
            state.loading=false;
            state.error=null;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchUserCart.pending,(state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(fetchUserCart.fulfilled,(state,action:PayloadAction<Cart>)=>{
            state.loading=false;
            state.cart=action.payload;
        })
        .addCase(fetchUserCart.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload as string;
        });

        builder.addCase(addItemtoCart.pending,(state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(addItemtoCart.fulfilled,(state,action:PayloadAction<cartItem>)=>{
            state.loading=false;
            state.error=null;
            if(state.cart){
                state.cart.cartItems.push(action.payload)
            }
        })
        .addCase(addItemtoCart.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload as string;
        });

        builder.addCase(deleteCartItem.pending,(state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(deleteCartItem.fulfilled,(state,action)=>{
            state.loading=false;
            state.error=null;
            if(state.cart){
                state.cart.cartItems=state.cart.cartItems.filter(
                    (item:cartItem)=>item.id !== action.meta.arg.cartItemId
                );
            }
        })
        .addCase(deleteCartItem.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload as string;
        });

        builder.addCase(updateCartItem.pending,(state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(updateCartItem.fulfilled,(state,action)=>{
            state.loading=false;
            state.error=null;
            if(state.cart){
                state.cart.cartItems=state.cart.cartItems.map(
                    (item:cartItem)=>item.id !== action.payload?.id ?item :action.payload
                );
            }
        })
        .addCase(updateCartItem.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload as string;
        });

        builder.addCase(applyRemoveCoupon.fulfilled,(state,action)=>{
            state.loading=true;
            state.cart=action.payload;
        });
    }    
})

export default cartSlice.reducer;