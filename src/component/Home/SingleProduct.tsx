/* eslint-disable react/prop-types */
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/features/CartSlice";
import React from "react";

export type TProductInfo={
    _id:string,
    pd_name:string,
    pd_brand:string,
    pd_category:string,
    pd_price:number,
    pd_image:string,
    quantity?:number,
    order_price?:number
}

        // eslint-disable-next-line react/prop-types
    const SingleProduct = ({shoe: productInfo}:{shoe:TProductInfo}) => {
            
            // eslint-disable-next-line react/prop-types
            const {_id,pd_name, pd_brand, pd_price,pd_image,} = productInfo;
            const dispatch=useAppDispatch()
            // eslint-disable-next-line react/prop-types
        const HandleAddToCart=()=>{
            dispatch(addToCart(productInfo))
        }
            return (
                <>
    <div className="card product_cart  text-black
      p-0  w-84 
    bg-base-100 font-serif">
        <figure><img className="w-full p-0 h-[250px]"  src={pd_image} alt="Shoes" /></figure>
        
        <div className="card-body px-4 h-[110px] hover:bg-gray-100 rounded">
        <h3 className="card-title">
        { pd_name}
        <div className="badge bg-primary text-white">{pd_brand}</div>
        </h3>
        <div className="card-actions justify-top">
        <h6 className="text-lg text-black">{ pd_price} $</h6> 
        {/* <p>{pd_description.slice(0,40)}</p> */}
        </div>
        <div className="hover:block invisible absolute hover:bg-gray-600 rounded-md">
        <div className=" mt-16 px-4 py-2 space-x-10">
        <button onClick={HandleAddToCart} className=" cart_button ">Add to Cart</button>
        <Link to={`/product/${_id}`}>
        <button className="cart_button">See Details</button>
        </Link>
        </div>
        </div>
        </div>
        
        </div> 
            </>
            );
        };

        export default SingleProduct;