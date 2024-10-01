import React from "react";
import SingleProduct from "./SingleProduct";
type TProductInfo={
    _id:string,
    pd_name:string,
    pd_brand:string,
    pd_price:number,
    pd_image:string,
    pd_category:string,
    pd_description:string
}

// eslint-disable-next-line react/prop-types
const Product = ({shoes}:{shoes:TProductInfo[]}) => {
    console.log(shoes)
    return (<>
       {
        // eslint-disable-next-line react/prop-types
        shoes?.length?<div>
        <div className="py-10">
            <h1 className="font-serif text-3xl font-bold uppercase text-center">Most Popular Shoe</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 z-0 justify-center gap-2 items-center my-5">
                {
                    // eslint-disable-next-line react/prop-types
                    shoes?.slice(0,6)?.map((shoe,index)=><SingleProduct shoe={shoe} key={index}/>)
                }
            </div>
       </div>
        </div>:<div className="p-5">

        </div>
       }
       </>
    );
};

export default Product;