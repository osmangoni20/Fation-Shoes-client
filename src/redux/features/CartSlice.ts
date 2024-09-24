import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TProductInfo } from '../../component/Home/SingleProduct'


type TInitialState={
    products:TProductInfo[],
    totalSelectedItem:number,
    shippingCost:number,
    tax:number,
    offer:number,
    subTotal:number,
    total:number
}
const initialState:TInitialState={
    products:[],
    totalSelectedItem:0,
    shippingCost:0,
    tax:0,
    offer:0.2,
    subTotal:0,
    total:0
}


const CartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action:PayloadAction<TProductInfo>)=>{
            console.log(action.payload)
            const isExist=state.products.find(product=>product._id===action.payload._id)
            
            if(!isExist){
               const order_price=Number(action.payload.pd_price) - Number(action.payload.pd_price) * state.offer
                state.products.push({...action.payload, quantity:1,order_price})
                state.shippingCost=100
                console.log(state.products)
                state.totalSelectedItem=calculateTotalSelectedItem(state)
                console.log(state.totalSelectedItem)
                if(Number(state.totalSelectedItem)%10==0){
                    console.log(state.totalSelectedItem, state.shippingCost)
                    state.shippingCost=state.shippingCost*2
                }
                state.subTotal=calculateSubTotal(state)
                state.total=state.tax+state.shippingCost+state.subTotal
            }
        },
        deleteProduct:(state,action)=>{
        const products=state.products.filter(product=>product._id!==action.payload)
        state.products=products
        RestartState(state)
        },
        updateProduct:(state,action:PayloadAction<any>)=>{
            console.log(action.payload)

        const product=state.products.find(product=>product._id===action.payload.id) as any
            if(action.payload.type==='increment')
           {product.quantity+=1}
            else if(product.quantity>1){
                product.quantity-=1
            }
            RestartState(state)
        },
        clearCart:(state)=>{
            state.products=[]
            state.subTotal=0
            state.total=0
            state.shippingCost=0
        }
    }
})
const RestartState=(state)=>{
    state.subTotal=calculateSubTotal(state)
    state.total=state.tax+state.shippingCost+state.subTotal
    state.totalSelectedItem=calculateTotalSelectedItem(state)
}
const calculateTotalSelectedItem=(state)=>{
    return state.products.reduce((total,product)=>{
        return total+product.quantity
    },0)
}
const calculateSubTotal=(state)=>{
   return state.products.reduce((total,product)=>{
        return product.order_price*product.quantity+total
    },0)
}

export const {addToCart, deleteProduct,updateProduct,clearCart}=CartSlice.actions

export default CartSlice.reducer