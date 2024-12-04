import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../Config/Api";
import { Cart } from "../../Types/CartTypes";
import { Coupon } from "../../Types/CouponTypes";


export const applyRemoveCoupon=createAsyncThunk<Cart,
{apply:string;
    code:string;
    orderValue:number;
    jwt:string
}>("/coupon/applyRemoveCoupon",
    async({apply,code,orderValue,jwt},{rejectWithValue})=>{
        try {
            const response=await api.post(`/api/coupon/apply`,null,{
                params:{apply,code,orderValue},
                headers:{
                    Authorization:`Bearer ${jwt}`
                }
            });
            const data=response.data;
            console.log("apply coupon ",data);
            return data;
        } catch (error:any) {
            console.log("apply coupon error",error);
            return rejectWithValue(error.response?.data.message || "failed to apply coupon ");
        }
    }
)


export interface CouponState{
    coupons:Coupon[];
    cart:Cart|null;
    loading:boolean;
    error:string|null;
    couponCreated:boolean;
    couponApplied:boolean;
}

const initialState:CouponState={
    coupons:[],
    cart:null,
    loading:false,
    error:null,
    couponCreated:false,
    couponApplied:false,
}

const couponSlice=createSlice({
    name:"coupon",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(applyRemoveCoupon.pending,(state)=>{
            state.loading=true;
            state.error=null;
            state.couponApplied=false;
        })
        .addCase(applyRemoveCoupon.fulfilled,(state,action)=>{
            state.loading=false;
            state.cart=action.payload;
            if(action.meta.arg.apply==="true"){
                state.couponApplied=true;
            }
        })
        .addCase(applyRemoveCoupon.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload as string;
        });

    }    
})

export default couponSlice.reducer;