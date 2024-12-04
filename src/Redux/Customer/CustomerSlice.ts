import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../Config/Api";
import { sendLoginSignupOtp } from "../Auth/AuthSlice";
import { User } from "../../Types/UserTypes";


export const cutomerSignin=createAsyncThunk<any,any>("/customer/cutomerSignin",
    async(loginRequest,{rejectWithValue})=>{
        try {
            const response=await api.post("/auth/signin",loginRequest);
            console.log("signin response .. ",response);
            const jwt=response.data.jwt;
            if(jwt){
                localStorage.setItem("jwt",jwt);
            }  
            return response.data;    
        } catch (error) {
            console.log("signin error .. ",error);
        }
    }
)

export const customerSignup=createAsyncThunk<any,any>("/customer/customerSignup",
    async(signupRequest,{rejectWithValue})=>{
        try {
            const response=await api.post("/auth/signup",signupRequest);
            console.log("signup response .. ",response);
            const jwt=response.data.jwt;
            if(jwt){
                localStorage.setItem("jwt",jwt);
            }    
            return response.data; 
        } catch (error) {
            console.log("signup error .. ",error);
        }
    }
)

export const customerLogout=createAsyncThunk<any,any>("/auth/logout",
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

export const fetchCustomerProfile=createAsyncThunk<User,any>("/customer/fetchCustomerProfile",
    async(jwt:string,{rejectWithValue})=>{
        try {
            const response=await api.get("/api/users/profile",{
                headers:{
                    Authorization:`bearer ${jwt}`
                }
            })
            console.log("fetch customer profile  ",response);
            return response.data
        } catch (error) {
            console.log("fetch customer profile error ",error);
        }
    }
)


interface customerState{
    jwt:string|null;
    profile:User|null;
    loading:boolean;
    error:any;
    signin:any|null;
    signup:any|null;
    isLoggedIn:boolean;
}

const initialState:customerState={
    jwt:"",
    profile:null,
    loading:false,
    error:null,
    signin:null,
    signup:null,
    isLoggedIn:false
}


const customerSlice=createSlice({
    name:"customer",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(cutomerSignin.pending,(state)=>{
            state.loading=true;
            state.jwt="";
        })
        .addCase(cutomerSignin.fulfilled,(state,action)=>{
            state.loading=false;
            state.signin=action.payload;
            state.jwt=action.payload?.jwt;
        })
        .addCase(cutomerSignin.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload;
            state.jwt="";
        });

        builder.addCase(customerSignup.pending,(state)=>{
            state.loading=true;
            state.jwt="";
        })
        .addCase(customerSignup.fulfilled,(state,action)=>{
            state.loading=false;
            state.signup=action.payload;
            state.jwt=action.payload?.jwt;
        })
        .addCase(customerSignup.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload;
            state.jwt="";
        });

        builder.addCase(fetchCustomerProfile.pending,(state)=>{
            state.loading=true;
            state.profile=null;
            state.isLoggedIn=false;
        })
        .addCase(fetchCustomerProfile.fulfilled,(state,action)=>{
            state.loading=false;
            state.profile=action.payload;
            state.isLoggedIn=true;
        })
        .addCase(fetchCustomerProfile.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload;
            state.profile=null;
            state.isLoggedIn=false;
        });

        builder.addCase(customerLogout.fulfilled,(state)=>{
            state.loading=false;
            state.profile=null;
            state.isLoggedIn=false;
            state.jwt="";
        });
    }    
})

export default customerSlice.reducer;