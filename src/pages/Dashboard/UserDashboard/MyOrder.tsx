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
   
    return (
        <div>
            <h2 className='text-center'>Your Order</h2>
            {
                userOrder?.order_product?.map(product=>{
                    return(
                        <div className="card w-80 h-[400px] pt-5 bg-base-100 shadow-xl text-black">
                        <figure className="h-[180px] w-full"><img src={product?.pd_image} alt="Shoes" /></figure>
                        <div className="card-body">
                        <h3 className="card-title">
                        {product?.pd_name}
                        <div className="badge badge-secondary">{product?.pd_brand}</div>
                        </h3>
                    
                        <div className="card-actions justify-top">
                        <div className="badge badge-outline bg-gray-500 p-2 text-white font-bold text-md">{ product?.pd_price} $</div> 
        
                        </div>
                
                        <div className="flex gap-1 justify-center items-center">
                        
                        <button className="bg-blue-500 font-bold text-white">{userOrder?.status}</button>
    
                       
                        </div>
                        </div>
                        </div> 
                    )
                })
            }
             
        </div>
    );
};

export default MyOrder;