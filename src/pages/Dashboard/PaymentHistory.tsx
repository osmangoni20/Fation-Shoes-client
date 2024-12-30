

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useAppSelector } from '../../redux/hooks';
const PaymentHistory = () => {
    const {user}:any=useAuth()
    const {img, isAdmin}=useAppSelector(state=>state.userR)
    const baseURL = `https://fationshoe-server.vercel.app/order/${isAdmin?"":user?.email}`

    const[userOrder, setUserOrder]=useState<any>([])
const fetchData=()=>{
    axios.get(baseURL).then((response) => {
        setUserOrder(response.data);
      });
}
   useEffect(() => {
    fetchData()
   }, [user?.email])
   
   console.log(userOrder)
  //  const { payment_method,transactionId
    return (
        <div>
           <div className="overflow-x-auto bg-[#171A3B] text-white">
  <table className="table w-full border-collapse">
    {/* head */}
    <thead className='text-white md:text-[20px]  lg:text-xl text-center w-full'>
      <tr>
        <th>Date</th>
        <th>Email</th>
        <th>Number</th>
        <th>Payment</th>
        <th>Payment Method</th>
        <th>Transaction ID</th>
      </tr>
    </thead>
    <tbody className='text-center'>
      {/* row 1 */}
      {
        userOrder?.data?.map(order=>{
          return(
            <tr className="space-y-10 "> 
          <td>{order?.date|| new Date().toLocaleDateString()}</td>
        <td>{order?.email}</td>
        <td>{order?.shippingInfo?.customer_mobile1}</td>
        <td>{order?.price}</td>
        <td>{order?.paymentInfo?.payment_method}</td>
        <td>{order?.paymentInfo?.transactionId}</td>
      </tr>
          )
        })
      }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default PaymentHistory;