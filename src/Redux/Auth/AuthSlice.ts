import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { string } from "yup";
import { api } from "../Config/Api";


export const sendLoginSignupOtp=createAsyncThunk<any,any>("/auth/sendLoginSignupOtp",
    async({email}:{email:string},{rejectWithValue})=>{
        try {
            const response=await api.post("/auth/sent/login-signup-otp",{email});
            console.log("send otp response .. ",response);
            return response;
        } catch (error) {
            console.log("send otp error .. ",error);
        }
    }
)


interface authState{
    jwt:string|null;
    loading:boolean;
    error:any;
    otp:any
}

const initialState:authState={
    jwt:"",
    loading:false,
    error:null,
    otp:null
}


const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(sendLoginSignupOtp.pending,(state)=>{
            state.loading=true;
        })
        .addCase(sendLoginSignupOtp.fulfilled,(state,action)=>{
            state.loading=false;
            state.otp=action.payload;
        })
        .addCase(sendLoginSignupOtp.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        });
    }    
})

export default authSlice.reducer;

