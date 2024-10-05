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
    order_price?:number,
    pd_description:string,
}

        // eslint-disable-next-line react/prop-types
    const SingleProduct = ({shoe: productInfo}:{shoe:TProductInfo}) => {
            
            // eslint-disable-next-line react/prop-types
            const {_id,pd_name, pd_brand, pd_price,pd_image,pd_description} = productInfo;
            const dispatch=useAppDispatch()
            // eslint-disable-next-line react/prop-types
        const HandleAddToCart=()=>{
            dispatch(addToCart(productInfo))
        }
            return (
                <>
    <div className="card product_cart  text-black
      p-0  w-84 
    bg-base-100 z-5">
        <figure><img className="w-full p-0 h-[150px]"  src={pd_image} alt="Shoes" /></figure>
        
        <div className="card-body px-4 space-y-2 rounded">
        <h3 className="card-title font-montserrat">
        { pd_name}
        <div className="badge bg-primary text-white">{pd_brand}</div>
        </h3>
        <p className='text-justify space-x-4'>{pd_description.slice(0,100)}..</p>
        <div className=" space-y-2">
            <p className='text-lg font-lato font-[400]'>Available Size: {<span className='bg-base-200 p-2 '>40</span>}</p>
            <div>
          <div className='flex items-center'>
          {
            [...Array(5)].map((item)=><span key={item}>
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
</svg>
            </span>)
           }
          </div>

            </div>
        <p className="text-xl font-semibold font-lato">{ pd_price} USD</p> 
       
        </div>
        <div>
        <div className=" lg:space-x-4 flex">
        <button onClick={HandleAddToCart} className="cart_button uppercase">Add to Cart</button>
        <Link to={`/product/${_id}`}>
        <button className="cart_button uppercase hidden lg:block">See Details</button>
        </Link>
        </div>
        </div>

        </div>
        
        </div> 
            </>
            );
        };

        export default SingleProduct;