import React, { useEffect, useState } from "react";
import RecentOrder from "./RecentOrder";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import AccountInfo from "./AccountInfo";

const UserDashboard = () => {
    const {user}:any=useAuth()
    const baseURL = `https://fationshoe-server.vercel.app/order/${user?.email}`

    const[userOrder, setUserOrder]=useState<any>()
const fetchData=()=>{
    axios.get(baseURL).then((response) => {
        setUserOrder(response.data);
      });
}
   useEffect(() => {
    fetchData()
   }, [])
   const totalOrderPrice=userOrder?.reduce((total,order)=>order?.price+total,0)
   let pendingOrder=0;
   for (let index = 0; index < userOrder?.length; index++) {
    const element = userOrder[index];
    if(element?.status==="pending"){
      pendingOrder+=1;
    }
    
   }
  return (
    <div>
      <div className="flex flex-wrap md:gap-5 justify-around">
        <div
          className=" bg-[#374050] text-white h-[150px]
            shadow-lg  w-[300px]  border-2 
         rounded-tr-xl rounded-bl-xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="#FFFFF4"
            className="size-16 opacity-60"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>

          <span className="text-center">
            <h1 className="text-white">{userOrder?.length>9?userOrder?.length||0:`0${userOrder?.length||0}`||0}</h1>
            <h2 className="text-xl text-center p-0">Total Order</h2>
          </span>
        </div>
        <div
          className=" bg-[#374050] text-white h-[150px]
          shadow-lg  w-[300px]  border-2 
       rounded-tl-xl rounded-br-xl"
      >
         <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-16 opacity-60"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 7.5.415-.207a.75.75 0 0 1 1.085.67V10.5m0 0h6m-6 0h-1.5m1.5 0v5.438c0 .354.161.697.473.865a3.751 3.751 0 0 0 5.452-2.553c.083-.409-.263-.75-.68-.75h-.745M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>

          <span className="text-center">
            <h1 className="text-white">{totalOrderPrice||"00"}</h1>
            <h2 className="text-xl text-center p-0">Total Purchase</h2>
          </span>
        </div>
        <div
         className=" bg-[#374050] text-white h-[150px]
         shadow-lg  w-[300px]  border-2 
      rounded-tr-xl rounded-bl-xl"
     >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-16 opacity-60">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg>


          <span className="text-center">
            <h1 className="text-white">{`${pendingOrder<9?`0${pendingOrder}`:pendingOrder}`}</h1>
            <h2 className="text-xl text-center p-0">Pending Order</h2>
          </span>
        </div>
      </div>

      <RecentOrder userOrder={userOrder} />
      <AccountInfo/>
    </div>
  );
};

export default UserDashboard;
