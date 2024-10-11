import { useParams } from 'react-router-dom';
import SingleProduct, { TProductInfo } from '../component/Home/SingleProduct';
import { useEffect, useState } from 'react';
import React from 'react';
import Loader from '../component/shared/Loader';

const SearchItem = () => {
    const {category, searchValue}=useParams();
   
    const[ProductData,setProductData]=useState<TProductInfo[]>([])
    
    useEffect(()=>{
        fetch(`https://fationshoe-server.vercel.app/product/?searchValue=${searchValue}&searchCategory=${category}`)
        .then(res=>res.json())
        .then(data=>setProductData(data))
    },[searchValue,category])
    console.log(ProductData)
    return (
        <div >
                
            {

                    ProductData.length>0?
                    <div className="p-5 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-10 justify-center align-to items-start">
                {
                    ProductData?.map((shoe)=>
                    <SingleProduct
                     shoe={shoe} key={shoe._id}
                     />)
                }
               
                </div>:
                    <div>
                    <figure className='w-full flex justify-center'>
                        <Loader/>
                    </figure>
                    </div>
                }
            </div>
    );
};

export default SearchItem;