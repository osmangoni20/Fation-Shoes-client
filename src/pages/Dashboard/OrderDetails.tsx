import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const OrderDetails = () => {
    const {email}=useParams()
    console.log(email)
    const orderDetails:any=useLoaderData()
    const {customer_name,customer_email,customer_mobile1,customer_mobile2, customer_city, customer_receive_address,payment_method}=orderDetails[0]?.shippingInfo
    return (
        <div>
            <div className='my-5'>
                <h3 className=' py-2 text-2xl'>User Information</h3>
               <ul className='grid grid-cols-2 md:gap-5 text-center text-white'>
              
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

            <h3 className='border-b-2 border-slate-400 py-2 text-2xl'>Product List</h3>
            <div className='flex gap-5 flex-wrap  items-center'>
            {
                orderDetails[0]?.order_product?.map((item)=>{
                    return(
                        <div key={item._id}>
                                <div className="card w-80 h-[400px] pt-5 bg-base-100 shadow-xl text-black">
                        <figure className="h-[180px] w-full"><img src={item?.pd_image} alt="Shoes" /></figure>
                        <div className="card-body">
                        <h3 className="card-title">
                        {item?.pd_name}
                        <div className="badge badge-secondary">{item?.pd_brand}</div>
                        </h3>
                    
                        <div className="card-actions justify-top">
                        <div className="badge badge-outline bg-gray-500 p-2 text-white font-bold text-md">{ item?.pd_price} $</div> 
        
                        </div>
                
                        <div className="flex gap-1 justify-center items-center">
                        
                        <button className="bg-blue-500 font-bold text-white">{item?.status}</button>
    
                       
                        </div>
                        </div>
                        </div> 
                    
                        </div>
                    )
                })
            }
            </div>
        </div>
    );
};

export default OrderDetails;