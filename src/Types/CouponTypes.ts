import { Cart } from "./CartTypes";

export interface Coupon{
    id?:number;
    code:string;
    discountedPercentage:number;
    validityStartDate:string;
    validityEndDate:string;
    minimumOrderValue:number;
    active:boolean;
}
