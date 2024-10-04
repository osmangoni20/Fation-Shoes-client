import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';

const RecentOrder = ({userOrder}) => {
   
   console.log(userOrder)
    return (
        <div>
            <div className='min-w-md my-10 pb-6 bg-[#171A3B] text-white rounded-md p-3'>
                <h3 className='text-2xl py-4'>Recent Your Order</h3>
                <table className='w-full space-y-4 '>
                    <thead className='py-5'>
                        <th>Date</th>
                        <th>Total Product</th>
                        <th>Transaction Id</th>
                        <th>Price</th>
                        <th>Status</th>
                    </thead>
                    <tbody className='text-center '>
                    {
                        userOrder?.reverse().map(order=>{
                            return(
                                <tr className='py-2 text-sm font-medium text-gray-200' key={order?._id}>
                                <td>{order?.date || new Date().toLocaleDateString()}</td>
                                <td>{order?.order_product?.length}</td>
                                <td>{order?.paymentInfo?.transactionId}</td>
                                <td>{order?.price}</td>
                                <td className='text-[#4F87F4]'>{order?.status}</td>
                            </tr>
                            )
                        })
                    }
                    {
                       userOrder?.length<0&&<h3>You have placed no orders.</h3>
                    }
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RecentOrder;