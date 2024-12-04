import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../Config/Api";
import { stat } from "fs";


export const sellerSignup=createAsyncThunk<any,any>("/seller/sellerSignup",
    async(sellerRequest,{rejectWithValue})=>{
        try {
            const response=await api.post("/sellers/create",sellerRequest);
            console.log("signup response .. ",response);
            const jwt=response.data.jwt;
            if(jwt){
                localStorage.setItem("jwt",jwt);
            }    
            return response.data 
        } catch (error) {
            console.log("signup error .. ",error);
        }
    }
)

export const sellerSignin=createAsyncThunk<any,any>("/seller/sellerSignin",
    async(loginRequest,{rejectWithValue})=>{
        try {
            const response=await api.post("/sellers/signin",loginRequest);
            console.log("signin response .. ",response);
            const jwt=response.data.jwt;
            if(jwt){
                localStorage.setItem("jwt",jwt);
            } 
            return response.data    
        } catch (error) {
            console.log("signin error .. ",error);
        }
    }
)

export const sellerLogout=createAsyncThunk<any,any>("/auth/logout",
    async(navigate,{rejectWithValue})=>{
        try {
            localStorage.clear();
            console.log("logout success .. ");
            navigate("/");
        } catch (error) {
            console.log("logout error .. ");
        }
    }
)

export const fetchSellerProfile=createAsyncThunk("/seller/fetchSellerProfile",
    async(jwt:string,{rejectWithValue})=>{
        try {
            const response=await api.get("/api/sellers/profile",{
                headers:{
                    Authorization:`bearer ${jwt}`
                }
            })
            console.log("fetch seller profile  ",response);
            return response.data
        } catch (error) {
            console.log("fetch seller profile error ",error);
        }
    }
)


interface sellerState{
    sellers:any[],
    selectedSeller:any,
    profile:any,
    report:any,
    loading:boolean,
    error:any,
    jwt:string|null
}

const initialState:sellerState={
    sellers:[],
    selectedSeller:null,
    profile:null,
    report:null,
    loading:false,
    error:null,
    jwt:""
}

const sellerSlice=createSlice({
    name:"seller",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchSellerProfile.pending,(state)=>{
            state.loading=true;
        })
        .addCase(fetchSellerProfile.fulfilled,(state,action)=>{
            state.loading=false;
            state.profile=action.payload;
        })
        .addCase(fetchSellerProfile.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        });

        builder.addCase(sellerSignin.pending,(state)=>{
            state.loading=true;
            state.jwt="";
        })
        .addCase(sellerSignin.fulfilled,(state,action)=>{
            state.loading=false;
            state.jwt=action.payload?.jwt;
        })
        .addCase(sellerSignin.rejected,(state,action)=>{
            state.loading=false;
            state.jwt="";
            state.error=action.payload;
        });

        builder.addCase(sellerSignup.pending,(state)=>{
            state.loading=true;
            state.jwt="";
        })
        .addCase(sellerSignup.fulfilled,(state,action)=>{
            state.loading=false;
            state.jwt=action.payload?.jwt;
        })
        .addCase(sellerSignup.rejected,(state,action)=>{
            state.loading=false;
            state.jwt="";
            state.error=action.payload;
        });

        builder.addCase(sellerLogout.fulfilled,(state)=>{
            state.loading=false;
            state.profile=null;
            state.jwt="";
        });
    }
})

export default sellerSlice.reducer;