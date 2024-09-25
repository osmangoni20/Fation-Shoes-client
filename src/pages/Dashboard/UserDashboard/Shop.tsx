

import React, { useState } from 'react';
import SingleProduct, { TProductInfo } from '../../../component/Home/SingleProduct';
import { useLoaderData } from 'react-router-dom';

const Shop = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const shoes=useLoaderData() as TProductInfo[]
  

    return (
        <div >
            <div className="grid grid-cols-3 gap-1 justify-center align-to items-start">
            {
                shoes?.map((shoe)=><SingleProduct shoe={shoe} key={shoe._id}></SingleProduct>)
            }
        </div>
        </div>
    );
};
export default Shop;