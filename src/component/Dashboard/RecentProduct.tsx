import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TProductInfo } from '../Home/SingleProduct';
import Pagination from '../shared/Pagination';

const RecentProduct = () => {
   
    const [data,setShoe]=useState<TProductInfo[]>([])
    const [isLoading, setIsLoading]=useState(true)
    const [itemsPerPage, setItemPerPage]=useState(5);
    const [currentPage, setCurrentPage]=useState(0)
    const paginationParamsData={dataSize:data.length, itemsPerPage, currentPage, setItemPerPage,  setCurrentPage}

     useEffect(()=>{
         fetch(`https://fationshoe-server.vercel.app/product?page=${currentPage}&size=${itemsPerPage}`).then(res=>res.json())
         .then(data=>{
         setShoe(data?.data)
         setIsLoading(false)
     })
     },[])
    return (
        <div>
            <div className='min-w-md my-10 pb-6 bg-[#171A3B] text-white rounded-md p-3'>
                <h3 className='text-2xl py-4'>Recent Product</h3>
                <table className='w-full h-full space-y-4 '>
                    <thead className='py-5'>
                        <th>Sl.</th>
                        <th>Product Name</th>
                        <th>Category</th>
                        <th>Brand</th>
                        <th>Price</th>
                    </thead>
                    <tbody className='text-center '>
                    {
                        data?.reverse().slice(0,10).map((order,index)=>{
                            return(
                                <tr className='py-2 border-b-2 h-[50px] space-y-4 text-sm font-medium text-gray-200' key={order?._id}>
                                <td>{index}</td>
                                <td>{order?.pd_name}</td>
                                <td>{order?.pd_category}</td>
                                <td>{order?.pd_brand}</td>
                                <td className='text-[#4F87F4]'>{order?.pd_price}</td>
                            </tr>
                            )
                        })
                    }
                    {
                       data?.length<0&&<h3>You have placed no orders.</h3>
                    }
                       
                    </tbody>
                </table>

                <div className='flex justify-center'>
                    {
                        data&&<Pagination params={paginationParamsData}/>
                    }
                </div>
            </div>
        </div>
    );
};

export default RecentProduct;