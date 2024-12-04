import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { order, orderItem } from "../../Types/OrderTypes";
import { api } from "../Config/Api";
import { Address } from "../../Types/UserTypes";

export const fetchUserOrderHistory=createAsyncThunk<order[],string>("/order/fetchUserOrderHistory",
    async(jwt,{rejectWithValue})=>{
        try {
            const response=await api.get(`/api/orders/user`,{
                headers:{
                    Authorization:`Bearer ${jwt}`
                }
            });
            const data=response.data;
            console.log("user order history ",data);
            return data;
        } catch (error:any) {
            console.log("user order history error",error.response);
            return rejectWithValue(error.response.data.error || "failed to fetch user order history")
        }
    }
)

export const fetchUserOrderById=createAsyncThunk<order,{orderId:number|undefined,jwt:string}>("/order/fetchUserOrderById",
    async({orderId,jwt},{rejectWithValue})=>{
        try {
            const response=await api.get(`/api/orders/${orderId}`,{
                headers:{
                    Authorization:`Bearer ${jwt}`
                }
            });
            const data=response.data;
            console.log(" order by id ",data);
            return data;
        } catch (error:any) {
            console.log("order by id error",error.response);
            return rejectWithValue("failed to fetch order by id")
        }
    }
)

export const createOrder=createAsyncThunk<any,{shippingAddress:Address, paymentMethod:string,jwt:string|null}>("/order/createOrder",
    async({shippingAddress, paymentMethod,jwt},{rejectWithValue})=>{
        try {
            const response=await api.post(`/api/orders/create`,shippingAddress,{
                params:{paymentMethod:paymentMethod},
                headers:{
                    Authorization:`Bearer ${jwt}`
                }
            });
            const data=response.data;

            console.log(" order created ",data);
            if(response.data.payment_link_url){
                window.location.href=response.data.payment_link_url;
            }
            return data;
        } catch (error:any) {
            console.log("order created error",error.response);
            return rejectWithValue("failed to create order")
        }
    }
)

export const fetchOrderItemById=createAsyncThunk<orderItem,{orderItemId:number,jwt:string}>("/order/fetchOrderItemById",
    async({orderItemId,jwt},{rejectWithValue})=>{
        try {
            const response=await api.get(`/api/orders/orderItem/${orderItemId}`,{
                headers:{
                    Authorization:`Bearer ${jwt}`
                }
            });
            const data=response.data;
            console.log(" order item by id ",data);
            return data;
        } catch (error:any) {
            console.log("order item by id error",error.response);
            return rejectWithValue("failed to fetch order item by id")
        }
    }
)

export const paymentSuccess=createAsyncThunk<any,{orderId:any, paymentId:string|null,jwt:string,paymentLinkId:string|null}>("/order/paymentSuccess",
    async({orderId,paymentId,jwt,paymentLinkId},{rejectWithValue})=>{
        try {
            const response=await api.get(`/api/payment/${orderId}/payment/${paymentId}`,{
                headers:{
                    Authorization:`Bearer ${jwt}`
                },
                params:{paymentLinkId:paymentLinkId}
            });
            const data=response.data;
            console.log(" payment Success ",data);
            return data;
        } catch (error:any) {
            console.log("payment Success error",error.response);
            return rejectWithValue(error.response.data.message||"failed to payment Success")
        }
    }
)


export const cancelOrder=createAsyncThunk<order,any>("/order/cancelOrder",
    async({orderId},{rejectWithValue})=>{
        try {
            const response=await api.put(`/api/orders/${orderId}/cancel`,{},{
                headers:{
                    Authorization:`Bearer ${localStorage.getItem("jwt")}`
                }
            });
            const data=response.data;
            console.log(" cancel order ",data);
            return data;
        } catch (error:any) {
            console.log("cancel order error",error.response);
            return rejectWithValue(error.response.data.message||"failed to cancel order")
        }
    }
)



interface OrderState{
    orders:order[],
    orderItem:orderItem|null,
    currentOrder:order|null,
    paymentOrder:any|null,
    loading:boolean,
    error:string|null,
    orderCanceled:boolean
}

const initialState:OrderState={
    orders:[],
    orderItem:null,
    currentOrder:null,
    paymentOrder:null,
    loading:false,
    error:null,
    orderCanceled:false
}

const orderSlice=createSlice({
    name:"order",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchUserOrderHistory.pending,(state)=>{
            state.loading=true;
            state.error=null;
            state.orderCanceled=false;
        })
        .addCase(fetchUserOrderHistory.fulfilled,(state,action)=>{
            state.loading=false;
            state.orders=action.payload
        })
        .addCase(fetchUserOrderHistory.rejected,(state,action)=>{
            state.loading=false;
           state.error=action.payload as string
        });

        builder.addCase(fetchUserOrderById.pending,(state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(fetchUserOrderById.fulfilled,(state,action)=>{
            state.loading=false;
            state.currentOrder=action.payload
        })
        .addCase(fetchUserOrderById.rejected,(state,action)=>{
            state.loading=false;
           state.error=action.payload as string
        });

        builder.addCase(createOrder.pending,(state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(createOrder.fulfilled,(state,action)=>{
            state.loading=false;
            state.paymentOrder=action.payload
        })
        .addCase(createOrder.rejected,(state,action)=>{
            state.loading=false;
           state.error=action.payload as string
        });

        builder.addCase(fetchOrderItemById.pending,(state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(fetchOrderItemById.fulfilled,(state,action)=>{
            state.loading=false;
            state.orderItem=action.payload
        })
        .addCase(fetchOrderItemById.rejected,(state,action)=>{
            state.loading=false;
           state.error=action.payload as string
        });

        builder.addCase(paymentSuccess.pending,(state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(paymentSuccess.fulfilled,(state,action)=>{
            state.loading=false;
            console.log("payment success in reducer :",action.payload);
        })
        .addCase(paymentSuccess.rejected,(state,action)=>{
            state.loading=false;
           state.error=action.payload as string
        });


        builder.addCase(cancelOrder.pending,(state)=>{
            state.loading=true;
            state.error=null;
            state.orderCanceled=false;
        })
        .addCase(cancelOrder.fulfilled,(state,action)=>{
            state.loading=false;
            state.orderCanceled=true;
            state.currentOrder=action.payload;
            state.orders=state.orders?.map((order)=>
                order.id===action.payload.id?action.payload:order
            );
        })
        .addCase(cancelOrder.rejected,(state,action)=>{
            state.loading=false;
           state.error=action.payload as string
        });
    }    
})

export default orderSlice.reducer;

