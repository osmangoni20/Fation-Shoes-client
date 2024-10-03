/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/CartSlice";
import Testimonial from "../Home/Testimonial";
import ProductReview from "../product/ProductReview";
import { TProductInfo } from "../Home/SingleProduct";

type TProductData={
  _id:string,
  pd_name:string,
  pd_brand:string,
  pd_category:string,
  pd_price:number,
  pd_description:string,
  pd_image:string,
  pd_size:[],
}
const ProductDetails = () => {
  
  const shoe:TProductData = useLoaderData();
  const {user}=useAuth()
  const [add_to_cart_button,set_add_button]=useState(true)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const {
    _id,
    pd_name,
    pd_brand,
    pd_category,
    pd_price,
    pd_description,
    pd_image,
    pd_size,
  } = shoe;

const HandleAdd_to_Cart=()=>{

    dispatch(addToCart({...shoe}))
    set_add_button(true)
}
const HandleOrder=()=>{
  dispatch(addToCart({...shoe}))
  set_add_button(true)
  navigate(`/order_cart/${user?.email}`)
}
  return (
    <div className=" md:flex justify-center ghost_bg py-5">
      <div>
        <div className="w-full py-5 p-5 rounded bg-white md:flex justify-between  gap-5">
          <div className="w-full">
            <img className="h-[400px]" src={pd_image} alt="product image" />
          </div>
          <div className="p-0  md:w-[800px] text-center md:text-left">
            <h3 className="text-4xl text-primary">{pd_name}</h3>
            <h6 className="text-ghost text-xl">
              Brand:
              <span className="text-primary px-2">{pd_brand}</span>
            </h6>
            <h6 className="text-ghost text-xl">
              Category:
              <span className="text-primary px-2">
               <Link to={`/searchProduct/category/${pd_category}`}>
               {pd_category || "Lather"}
               </Link> 
              </span>
            </h6>
            {shoe?.pd_size&& <h6 className="text-ghost text-xl"> Available Size:  {shoe?.pd_size ? pd_size[0] : ""}-
            {shoe?.pd_size ? pd_size[5] : ""}</h6>}
           
            <h6 className="font-bold text-xl">
              <span className="line-through pr-6"> {pd_price} Tk. </span>
              {Number(pd_price) - Number(pd_price) * 0.2} Tk.
            </h6>
            <p className="text-xl py-2 text-justify">{pd_description}</p>

            <div className="py-2 md:flex gap-2 items-center">
                {
                    add_to_cart_button?<button onClick={HandleAdd_to_Cart} className="text-white md:flex 
                    items-center gap-2 my-2 md:my-0 p-6 btn_secondary hidden ">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                          />
                        </svg>
                      </span>
                      <span> Add to Cart</span>
                    </button>:
                     <Link to={`/order_cart/${user?.email}`}>
                     <button  className="text-white flex 
                    items-center gap-2 my-2 md:my-0 p-6 btn_secondary">
                         <span>
                           <svg
                             xmlns="http://www.w3.org/2000/svg"
                             fill="none"
                             viewBox="0 0 24 24"
                             strokeWidth="1.5"
                             stroke="currentColor"
                             className="size-6"
                           >
                             <path
                               strokeLinecap="round"
                               strokeLinejoin="round"
                               d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                             />
                           </svg>
                         </span>
                         <span> Go To Cart</span>
                       </button>
                     </Link>
                }
             
                <button onClick={HandleOrder}  className="text-white flex 
                    items-center gap-2 my-2 md:my-0 p-6 btn_secondary">
                <span> Order Now</span>
                  <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                  strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>

                  </span>
               
                </button>
           
            </div>
          </div>
        </div>
        {/* <div className="max-w-[1100px] bg-white py-5  p-5 rounded my-5">
          <div className="py-10">
            <h1 className="text-4xl text-center font-serif">
              Clint's Review
            </h1>
            <div className="p-5  grid grid-cols-2">
              {UserReview.map((user) => (
                <div
                  key={user.id}
                  className="p-4 text-black "
                >
                  <div className=" flex justify-between">
                    <div className=" flex gap-2 items-start">
                      <img
                        className="h-[60px] w-[60px] rounded-full "
                        src={user?.user_image}
                      ></img>
                      <span>
                        <h3 className="font-serif text-primary  text-xl">
                          {user?.user_name}
                        </h3>
                        <p>{user?.user_review_time}</p>
                      </span>
                    </div>
                    <div></div>
                  </div>
                  <div>
                    <p className="text-justify font-serif py-2">
                      {user?.user_review}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}
        <ProductReview pd_info={{pd_id:_id,name:pd_name}}/>
        <Testimonial title={"Product Reviews"}/>
      </div>
    </div>
  );
};

export default ProductDetails;
