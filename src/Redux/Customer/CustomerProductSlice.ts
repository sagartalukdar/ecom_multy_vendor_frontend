import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import { api } from "../Config/Api";
import { Product } from "../../Types/ProductType";

export const fetchProductById=createAsyncThunk<any,any>("/products/fetchProductById",
    async(productId,{rejectWithValue})=>{
        try {
            const response=await api.get(`/products/${productId}`);
            const data=response.data;
            console.log("fetch product by id",data);
            return data;
        } catch (error:any) {
            console.log("fetch product by id error ",error);
            rejectWithValue(error.message)
        }
    }
)

export const fetchAllProducts=createAsyncThunk<any,any>("/products/fetchAllProducts",
    async(params,{rejectWithValue})=>{
        try {
            const response=await api.get(`/products/`,{
              params:{
                ...params,
                pageNumber:params.pageNumber || 0
              }
            });
            const data=response.data;
            console.log("fetch all products",data);
            return data;
        } catch (error:any) {
            console.log("fetch all products error ",error);
            rejectWithValue(error.message)
        }
    }
)

export const searchProduct=createAsyncThunk("/products/searchProduct",
    async(query,{rejectWithValue})=>{
        try {
            const response=await api.get(`/products/search`,{
                params:{
                    query
                }
            });
            const data=response.data;
            console.log("search products",data);
            return data;
        } catch (error:any) {
            console.log("search product error ",error);
            rejectWithValue(error.message)
        }
    }
)


interface ProductState{
    product:Product|null;
    products:Product[];
    totalPages:number;
    loading:boolean;
    error:any;
    searchProduct:Product[];
}

const initialState:ProductState={
    product:null,
    products:[],
    totalPages:1,
    loading:false,
    error:null,
    searchProduct:[],
}


const productSlice=createSlice({
    name:"products",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchProductById.pending,(state)=>{
            state.loading=true;
        })
        .addCase(fetchProductById.fulfilled,(state,action)=>{
            state.loading=false;
            state.product=action.payload;
        })
        .addCase(fetchProductById.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        });

        builder.addCase(fetchAllProducts.pending,(state)=>{
            state.loading=true;
        })
        .addCase(fetchAllProducts.fulfilled,(state,action)=>{
            state.loading=false;
            state.products=action.payload?.content;
        })
        .addCase(fetchAllProducts.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        });

        builder.addCase(searchProduct.pending,(state)=>{
            state.loading=true;
        })
        .addCase(searchProduct.fulfilled,(state,action)=>{
            state.loading=false;
            state.searchProduct=action.payload;
        })
        .addCase(searchProduct.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        });
    }    
})

export default productSlice.reducer;