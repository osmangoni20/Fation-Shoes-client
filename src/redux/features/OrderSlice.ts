import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TProductInfo } from "../../component/Home/SingleProduct";

type TInitialState={
    order_product: TProductInfo[];
    status: string;
    shippingInfo: object;
    payable_cost: number;
    payment_method: string;
}
const initialState:TInitialState={
    order_product:[],
    status:"",
    shippingInfo:{},
    payable_cost:0,
    payment_method:''
}

const OrderSlice=createSlice({
    name:'order',
    initialState,
    reducers:{
        add_new_order:(state,action:PayloadAction<TInitialState>)=>{
            state=action.payload
        }
    }
})

export const {add_new_order}=OrderSlice.actions
export default OrderSlice.reducer