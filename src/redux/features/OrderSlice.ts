import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TProductInfo } from "../../component/Home/SingleProduct";

type TInitialState={
    email:string,
    order_product: TProductInfo[];
    status: string;
    shippingInfo: object;
    price: number;
    payment_info: {
        payment_method:string,
        transactionId:string
    }
}
const initialState:TInitialState={
    email:"",
    order_product:[],
    status:"",
    shippingInfo:{},
    price:0,
    payment_info:{
        payment_method:'',
        transactionId:''
    }
}

const OrderSlice=createSlice({
    name:'order',
    initialState,
    reducers:{
        add_new_order:(state,action:PayloadAction<TInitialState>)=>{
           
            state.email=action.payload.email
            state.order_product=action.payload.order_product
            state.price=action.payload.price
            state.shippingInfo=action.payload.shippingInfo
            state.payment_info=action.payload.payment_info
            state.status=action.payload.status
            console.log(state)
        },
        paymentInfoUpdate:(state,action:PayloadAction<any>)=>{
            state.payment_info={...state.payment_info,...action.payload}
        }
    }
})

export const {add_new_order, paymentInfoUpdate}=OrderSlice.actions
export default OrderSlice.reducer