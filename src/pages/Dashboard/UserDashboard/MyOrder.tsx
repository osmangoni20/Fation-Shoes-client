import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MyOrder = () => {
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
    return (
        <div>
            <h2 className='text-center'>Your Order Item</h2>
           <div className='flex flex-wrap gap-2 space-y-10'>
           {
                userOrder?.map((order)=>{
                    return(
                        
                            order?.order_product?.map(product=>{
                                return(
                                    <div className="card w-80  pt-5 bg-base-100 shadow-xl text-black">
                                    <figure className="h-[180px] w-full"><img src={product?.pd_image} alt="Shoes" /></figure>
                                    <div className="card-body">
                                    <h3 className="card-title">
                                    {product?.pd_name}
                                    <div className="badge badge-secondary">{product?.pd_brand}</div>
                                    </h3>
                                
                                    <div className="card-actions justify-top">
                                    <div className="badge badge-outline bg-gray-500 p-2 text-white font-bold text-md">{ product?.pd_price} $</div> 
                    
                                    </div>
                                    <p className='text-justify'>{product.pd_description}</p>
                                    <p className="text-center p-1 uppercase rounded font-bold text-blue-500">{userOrder[0]?.status}</p>
            
                                    </div>
                                    </div> 
                                )
                            })
                        
                    )
                })
            }
           </div>
             
        </div>
    );
};

export default MyOrder;