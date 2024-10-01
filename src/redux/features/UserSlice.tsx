import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TProductInfo } from "../../component/Home/SingleProduct";

type TInitialState={
    name:string,
    email:string,
    img:string,
}
const initialState:TInitialState={
   name:"",
   email:"",
   img:""
}

const UserSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        updateUser:(state,action:PayloadAction<TInitialState>)=>{
           
            state.email=action.payload.email
            state.img=action.payload.img
            state.name=action.payload.name
            console.log(state)
        },
    }
})

export const {updateUser}=UserSlice.actions
export default UserSlice.reducer