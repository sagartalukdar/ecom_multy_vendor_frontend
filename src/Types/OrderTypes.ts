import { Product } from "./ProductType"
import { Address, User } from "./UserTypes"


export interface order{
    id?:number,
    orderId:string,
    user:User,
    sellerId:number,
    orderItems:orderItem[],
    orderDate:string,
    shippingAddress:Address,
    paymentDetails:any,
    totalMrpPrice:number,
    totalSellingPrice?:number,
    discount?:number,
    orderStatus:orderStatus,
    totalItem:number,
    deliverDate:string
}

export enum orderStatus{
    PENDING='PENDING',
	PLACED='PLACED',
	CONFIRMED='CONFIRMED',
	SHIPPED='SHIPPED',
	DELIVERED='DELIVERED',
	CANCELLED='CANCELLED'
}

export interface orderItem{
    id:number,
    order:order,
    product:Product,
    size:string,
    quantity:number,
    mrpPrice:number,
    sellingPrice:number,
    userId:number
}