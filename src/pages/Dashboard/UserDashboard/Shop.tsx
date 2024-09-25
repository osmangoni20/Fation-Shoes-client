

import React, { useEffect, useState } from 'react';
import SingleProduct, { TProductInfo } from '../../../component/Home/SingleProduct';
import { useLoaderData } from 'react-router-dom';

const Shop = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
  const [shoes, setShoes]=useState<any>([])

    useEffect(()=>{
        fetch('https://fation-shoes.onrender.com/product')
        .then(res=>res.json())
        .then(data=>setShoes(data))
    },[])
    console.log(shoes)
    return (
        <div >
            <div className="grid grid-cols-3 gap-1 justify-center align-to items-start">
            {
                shoes?.map((shoe)=><SingleProduct shoe={shoe} key={shoe?._id}></SingleProduct>)
            }
        </div>
        </div>
    );
};
export default Shop;