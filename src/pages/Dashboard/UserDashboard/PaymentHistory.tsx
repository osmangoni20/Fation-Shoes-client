

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
const PaymentHistory = () => {
    const {user}:any=useAuth()
    const baseURL = `https://fation-shoes.onrender.com/order/${user?.email}`

    const[userOrder, setUserOrder]=useState<any>()
const fetchData=()=>{
    axios.get(baseURL).then((response) => {
        setUserOrder(response.data);
      });
}
   useEffect(() => {
    fetchData()
   }, [])
   
   console.log(userOrder)
  //  const { payment_method,transactionId
    return (
        <div>
           <div className="overflow-x-auto bg-[#171A3B] text-white">
  <table className="table w-full">
    {/* head */}
    <thead className='text-white text-xl text-center w-full'>
      <tr>
        <th>Date</th>
        <th>Email</th>
        <th>Price</th>
        <th>Payment Method</th>
        <th>Transaction ID</th>
      </tr>
    </thead>
    <tbody className='text-center'>
      {/* row 1 */}
      {
        userOrder?.map(order=>{
          return(
            <tr className="space-y-10 "> 
          <td>{order?.date|| new Date().toLocaleDateString()}</td>
        <td>{order?.email}</td>
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