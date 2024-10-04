import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TProductInfo } from "../../component/Home/SingleProduct";

type TInitialState={
    first_name:string,
    last_name:string,
    contact_number1:string,
    contact_number2:string,
    date_of_birth:string,
    gender:string,
    email:string,
    img:string,
}
const initialState:TInitialState={
    first_name: "",
    email: "",
    img: "",
    last_name: "",
    contact_number1: "",
    contact_number2:"",
    date_of_birth: "",
    gender: ""
}

const UserSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        updateUser:(state,action:PayloadAction<TInitialState>)=>{
           
            state.email=action.payload.email,
            state.img=action.payload.img,
            state.first_name=action.payload.first_name,
            state.last_name=action.payload.last_name,
            state.contact_number1=action.payload.contact_number1,
            state.contact_number2=action.payload.contact_number2,
            state.date_of_birth=action.payload.date_of_birth,
            state.gender=action.payload.gender
            console.log(state)
        },
    }
})

export const {updateUser}=UserSlice.actions
export default UserSlice.reducer