import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TProductInfo } from "../../component/Home/SingleProduct";

type TInitialState={
    products:TProductInfo[],
    totalSelectedItem:number,
}
const initialState:TInitialState={
    products:[],
    totalSelectedItem:0,
}

const WishListSlice=createSlice({
    name:'wishlist',
    initialState,
    reducers:{
        addToWishList:(state,action:PayloadAction<TProductInfo>)=>{
            console.log(action.payload)
            const isExist=state.products.find(product=>product._id===action.payload._id)
            
            if(!isExist){
                state.products.push({...action.payload})
              
                console.log(state.products)
                state.totalSelectedItem=calculateTotalSelectedItem(state)
            }
        },
        deleteProductFromList:(state,action)=>{
        const products=state.products.filter(product=>product._id!==action.payload)
        state.products=products
        RestartState(state)
        },

        clearWishList:(state)=>{
            state.products=[]
            state.totalSelectedItem=0
        }
    }
})
const RestartState=(state)=>{
    state.totalSelectedItem=calculateTotalSelectedItem(state)
}
const calculateTotalSelectedItem=(state)=>{
    return state.products.reduce((total,product)=>{
        return total+product.quantity
    },0)
}
export const {addToWishList, clearWishList, deleteProductFromList}=WishListSlice.actions
export default WishListSlice.reducer