import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Loader from '../../component/shared/Loader';

const OrderDetails = () => {
    const {email}=useParams()
    console.log(email)
    const [orderDetails, setOrderDetails]=useState<any>()
    useEffect(()=>{
        fetch(`http://localhost:5000/order/${email}`)
        .then(res=>res.json())
        .then(data=>setOrderDetails(data))
    },[])

    console.log(orderDetails)
    const {customer_name,customer_email,customer_mobile1,customer_mobile2, customer_city, customer_receive_address,payment_method}=orderDetails?.data[0]?.shippingInfo
    return (
        <div>
            <div className='my-5 text-white'>
                <h3 className=' py-2 text-2xl'>User Information</h3>
               <ul className='grid grid-cols-2 lg:gap-5 text-center text-white'>
              
                    <li className='text-xl font-medium bg-[#374151] rounded-md p-2'>
                        {customer_name}
                    </li>
                    <li className='text-xl font-medium bg-[#374151] rounded-md p-2'>
                        Email: {customer_email}
                    </li>
                    <li className='text-xl font-medium bg-[#374151] rounded-md p-2'>
                        Mobile: {customer_mobile1}
                    </li>
                    <li className='text-xl font-medium bg-[#374151] rounded-md p-2'>
                        Alternative Mobile: {customer_mobile2}
                    </li>
                    <li className='text-xl font-medium bg-[#374151] rounded-md p-2'>
                        City: {customer_city}
                    </li>
                    <li className='text-xl font-medium bg-[#374151] rounded-md p-2'>
                        Address: {customer_receive_address}
                    </li>
               </ul>
            </div>

            <div>
            <h2 className='text-center lg:text-3xl text-xl text-white'>{customer_name} Order Item</h2>
           <div className='flex flex-wrap gap-2 space-y-10'>


           <div className='min-w-md my-10 pb-6 bg-[#171A3B] w-full text-center text-white rounded-md p-3'>
               
                <table className='w-full space-y-4 '>
                    <thead className='py-5 my-5'>
                    <th>Date</th>
                        <th>Product Image</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Transaction Id</th>
                        <th>Status</th>
                    </thead>
                    <tbody className='text-center space-y-4'>
                       
                    {
                        orderDetails?.data?.map(order=>(
                            order?.order_product?.map((product)=>{
                                
                              return(
                                <tr className= {`${order?.order_product[length-1]?.pd_name===product?.pd_name&&"border-b-2 py-4"} py-4 space-y-4 text-sm font-medium text-gray-200`} key={product?._id}>
                                <td>{(order?.order_product[0]?.pd_name===product?.pd_name)&& (order?.date || new Date().toLocaleDateString())}</td>
                                <td>
                                    <img className='h-[100px] w-[150px] mx-auto' src={product?.pd_image}></img>
                                </td>
                                <td>{product?.pd_name}</td>
                                <td>{product?.pd_price}</td>
                                <td>{product?.quantity}</td>
                                <td>{order?.paymentInfo?.transactionId}</td>
                                
                                <td className='text-[#4F87F4]'>{order?.status}</td>
                            </tr>
                              )
                          
                            })
                            
                        )
                            
                               
                               
                                
                               
                            
                        
                    )
                    }
                    {
                       orderDetails?.length<0&&<h3>You have placed no orders.</h3>
                    }
                       
                    </tbody>
                </table>
            </div>
          
            {
                orderDetails?.length<0&&<Loader/>
            }
           </div>
             
        </div>
        </div>
    );
};

export default OrderDetails;