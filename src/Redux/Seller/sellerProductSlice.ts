import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../Config/Api";
import { Product } from "../../Types/ProductType";


export const fetchSellerProducts=createAsyncThunk<Product[],any>("/sellerProduct/fetchSellerProducts",
    async(jwt,{rejectWithValue})=>{
        try {
            const response=await api.get(`/api/sellers/products/`,{
                headers:{
                    Authorization:`Bearer ${jwt}`
                }
            })
            const data=response.data;
            console.log("fetch seller product ",data);
            return data;
        } catch (error) {
            console.log("fetch seller product error ",error);
            throw error;
        }
    }
)


export const createProducts=createAsyncThunk<Product,{request:any,jwt:string|null}>("/sellerProduct/createProducts",
    async(args,{rejectWithValue})=>{
        const {request,jwt}=args;
        try {
            const response=await api.post(`/api/sellers/products/create`,request,{
                headers:{
                    Authorization:`Bearer ${jwt}`
                }
            })
            const data=response.data;
            console.log("create product ",data);
            return data;
        } catch (error) {
            console.log("create products error ",error);
        }
    }
)


interface sellerProductState{
    products:Product[];
    loading:boolean;
    error:string|null|undefined;
}

const initialState:sellerProductState={
    products:[],
    loading:false,
    error:null
}

const sellerProductSlice=createSlice({
    name:"sellerProduct",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchSellerProducts.pending,(state)=>{
            state.loading=true;
        })
        .addCase(fetchSellerProducts.fulfilled,(state,action)=>{
            state.loading=false;
            state.products=action.payload;
        })
        .addCase(fetchSellerProducts.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.error.message;
        })

        .addCase(createProducts.pending,(state)=>{
            state.loading=false;
        })
        .addCase(createProducts.fulfilled,(state,action)=>{
            state.loading=false;
            state.products.push(action.payload)
        })
        .addCase(createProducts.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.error.message;
        })
    }
})

export default sellerProductSlice.reducer;