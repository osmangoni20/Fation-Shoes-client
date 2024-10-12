import { useParams } from 'react-router-dom';

import { useEffect, useState } from 'react';
import React from 'react';
import SingleProduct, { TProductInfo } from '../Home/SingleProduct';
import Loader from '../shared/Loader';


const RelatedProducts = ({category}) => {
   
   console.log(category)
    const[ProductData,setProductData]=useState<TProductInfo[]>([])
    
    useEffect(()=>{
        fetch(`https://fationshoe-server.vercel.app/product/?searchValue=${category}&searchCategory=category`)
        .then(res=>res.json())
        .then(data=>setProductData(data))
    },[category])
    console.log(ProductData)
    return (
        <div >
                    <h2 className='text-2xl font-montserrat'>Related Products</h2>
            {

                    ProductData.length>0?
                    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4  justify-center align-to items-start">
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

export default RelatedProducts;