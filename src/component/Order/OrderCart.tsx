import {  useState } from "react";
import { Link } from "react-router-dom";
import CheckOutSummary from "./CheckOutSummary";
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import type { RootState } from '../../redux/store'
import { clearCart, deleteProduct, updateProduct } from "../../redux/features/CartSlice";
import React from "react";
import { TProductInfo } from "../Home/SingleProduct";
const OrderCart = () => {
  const {products,totalSelectedItem,subTotal}=useAppSelector((state:RootState)=>state.cartR)
  console.log(totalSelectedItem,subTotal)
  const dispatch=useAppDispatch()
  const[quantity,setQuantity]=useState(1)
 
  // const [itemCollection, setItemCollection] = useState(
  //   JSON.parse(localStorage.getItem("cartItemList"))
  // );

  // eslint-disable-next-line no-undef

  // useEffect(() => {
  //   setItemCollection(itemCollection);
  //   const totalTk = itemCollection.reduce(
  //     (total, item) => total + item.order_price * item.pd_quantity,
  //     0
  //   );
  //   console.log(totalTk);
  // }, [itemCollection]);

  const HandleQuantity = (id: any,type: string) => {
    console.log(id)
    dispatch(updateProduct({id,type}))
    // localStorage.setItem("cartItemList", JSON.stringify(itemCollection));
  };
  const HandleDelete = (id: any) => {
    console.log(id);
    dispatch(deleteProduct(id))
    // const items = itemCollection.filter((item) => item._id !== id);
    // console.log(items);
    // localStorage.setItem("cartItemList", JSON.stringify(items));
    // setItemCollection(items);
  };

 
  return (
    <div className="ghost_bg rounded-b-md">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3">
        <div className="col-span-2 p-5 md:order-2 lg:order-1 xl:order-1 2xl:order-1 order-2">
          <div className="my-2 bg-white p-4 font-semibold text-xl flex
          justify-between items-center">
            <h4 className="flex gap-1 items-center">
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
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </span>
              Total Item-<span>{totalSelectedItem} </span>
            </h4>
            <h4>
              Total- <span>{subTotal || "00.00"} Tk.</span>
            </h4>
          </div>
          <div className="bg-white rounded-b-md">
            {products?.length > 0 &&
              products?.map((item:TProductInfo) => (
                <div key={item._id} className="border-b-2 border-gray-400">
                  <div className="relative">
                    <button
                      onClick={() => HandleDelete(item?._id)}
                      className="absolute right-1 top-0 "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6 "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="md:flex lg:flex xl:flex 2xl:flex justify-between items-center pt-6 pb-2">
                    <div className="flex justify-between w-[400px]">
                    <img
                      className="h-[150px] w-[200px]"
                      src={item?.pd_image}
                    ></img>
                    <div>
                      <h3 className="text-2xl text-primary">{item.pd_name}</h3>
                      <h6 className="text-ghost text-xl">
                        Brand:
                        <span className="text-primary px-2">
                          {item.pd_brand}
                        </span>
                      </h6>
                      <h6 className="text-ghost text-xl">
                        Category:
                        <span className="text-primary px-2">
                          <Link
                            to={`/searchProduct/category/${item.pd_category}`}
                          >
                            {item.pd_category || "Lather"}
                          </Link>
                        </span>
                      </h6>
                    </div>
                    </div>
                    <div className="flex justify-between items-center md:w-[300px] sm:w-full lg:w-[300px] xl:w-[300px] w-full">
                    <div className="flex gap-2 items-center">
                      <button onClick={()=>HandleQuantity(item?._id,'decrement')} className="btn text-xl">
                        -
                      </button>
                      <input
                      onChange={(e)=>dispatch(updateProduct({id:item?._id,type:"",value:e.target.value}))}
                        className="w-[40px] text-center pr-0  h-[50px] border-none"
                        defaultValue={item?.quantity}
                        type="number"
                      />
                      <button onClick={()=>HandleQuantity(item?._id,'increment')} className="btn text-xl">
                        +
                      </button>
                    </div>
                    <div>
                      <div className="text-xl pr-2">
                        {" "}
                        <p className="line-through text-sm text-red-500 px-2">
                          {item?.pd_price} Tk.
                        </p>
                        <p>{item?.order_price} Tk.</p>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              ))}
            {products?.length === 0 && (
              <div>
                <h1 className="text-md text-center py-5 text-red-500 ">
                  Not Found Item
                </h1>
              </div>
            )}
           <div className="p-2 flex justify-center">
            {products.length>0&&
            <button onClick={()=>dispatch(clearCart())} className=" text-white font-semibold bg-red-500 rounded-md p-2  text-xl">
                  Clean Cart
                </button>}
           </div>

          </div>
        </div>
        <div className="col-span-1 my-6 md:order-1 lg:order-2 xl:order-2 2xl:order-2 order-1">
         <CheckOutSummary submitType={"proceed checkout"}></CheckOutSummary>
        </div>
      </div>
    </div>
  );
};

export default OrderCart;
