

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
const PaymentHistory = () => {
    const {user}:any=useAuth()
    const baseURL = `https://fation-shoes.onrender.com/order/${user?.email}`

    const[order, setUserOrder]=useState<any>()
const fetchData=()=>{
    axios.get(baseURL).then((response) => {
        setUserOrder(response.data);
      });
}
   useEffect(() => {
    fetchData()
   }, [])
   
   console.log(order)
  //  const { payment_method,transactionId
    return (
        <div>
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Email</th>
        <th>Price</th>
        <th>Payment Method</th>
        <th>Transaction ID</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        order?.map(order=>{
          return(
            <tr className="bg-base-200">
        <td>{order?.email}</td>
        <td>{order.price}</td>
        <td>{order?.payment_info?.payment_method}</td>
        <td>{order?.payment_info?.transactionId}</td>
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