import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import CheckOutSummary from "./CheckOutSummary";
import Modal from "../shared/Modal";
import { FormProps, useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { TProductInfo } from "../Home/SingleProduct";
import { clearCart } from "../../redux/features/CartSlice";
import { add_new_order } from "../../redux/features/OrderSlice";
import { orderPostApi } from "./Payment/orderApi";

type TOrder={
    date:string,
    email:string,
    order_product: TProductInfo[];
    status: string;
    shippingInfo: any;
    price: number;
    payment_info: {
        payment_method: string;
        transactionId: string;
    };
}

    
const ShippingAddress = () => {
    const{user}:any=useAuth()
    const navigate=useNavigate();
    const {register, handleSubmit}=useForm()
    const[isOpen,setModel]=useState(false);
    const [createPayment, setCreatePayment]=useState(false)
    const dispatch=useAppDispatch()
        const [submitData, setSubmitData]=useState<TOrder>()
        const [payment_method,setPayment_method]=useState('');
    const {products,total}=useAppSelector((state)=>state.cartR)
    const {shippingInfo,payment_info}=useAppSelector((state)=>state.orderR)

    // const [itemCollection, setItemCollection] = useState(
    //     JSON.parse(localStorage.getItem("cartItemList"))
    //   );
    // eslint-disable-next-line no-undef

  
  
    const isClose=()=>{
        setModel(false)
    }
    const onSubmit= async(data)=>{

        const newOrder={
            date:new Date().toLocaleDateString(),
            email:user?.email||'',
            order_product:products,
            status:"pending",
            shippingInfo:data,
            price:total,
            payment_info:{
                payment_method,
                transactionId:''
            }
        }
        dispatch(add_new_order(newOrder))
        console.log("shippingInfo", shippingInfo,payment_info.payment_method)
        if(payment_method==='cash_on_delivery'){
            setModel(true)
            setSubmitData(newOrder);
        }else{
            setCreatePayment(true)
        }
    }
    
 const isModelConfirm= async()=>{

    
        orderPostApi(submitData).then(res=>res.json())
        .then(async(data: any)=>{
            console.log(data)
            setModel(false)
            toast.success("Order Success")
            dispatch(clearCart())
            navigate('/')
        })
    }

        const HandlePaymentMethod=(e:ChangeEvent<HTMLInputElement>) => {
            e.preventDefault();
            setPayment_method(e.currentTarget.value)
        }

    return (
        <div className="ghost_bg">
             <Modal isClose={isClose} isOpen={isOpen} isSubmit={isModelConfirm}>
                <Modal.Header>Are You Confirm Order</Modal.Header>
                <div className="flex justify-center">
                <Modal.Submit>Yes</Modal.Submit>
                </div>
            </Modal>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3">
          <div className="col-span-2 px-5 my-6">
          <div className="bg-white p-3 flex justify-between items-center border-b-2 border-gray-500">
          <h3 className="text-3xl font-bold">Shipping Address</h3>
          <p> Fill Out Your Information</p>
          </div>
          <div className=" my-3 border-2">
          <form className="min-w-[720px] shadow  rounded-md" onSubmit={handleSubmit(onSubmit)}>
           <div className="grid grid-cols-2 gap-5 p-5 bg-white">
           {/* <div className="w-full my-2">
            <label className="text-bold " htmlFor="customer_name">Your Name</label>
            <select id="customer_name"{...register("pd_category")}>
            <option value={"casual_shoes"}>Casual Shoe</option>
        <option value={"formal_shoes"}> Formal Shoe</option>
        <option value={"boot"}>Boot</option>
        <option value={"loafers"}>Loafers</option>
    </select>
        </div> */}
                <div className="w-full my-2 text-xl p-2 font-medium">
                <label className="text-bold " htmlFor="customer_name">Your Name</label>
                    <input  type="text" placeholder="Your Name"  required id="customer_name" {...register("customer_name")}/>
                </div>
                <div className="w-full my-2 text-xl p-2 font-medium">
                <label className="text-bold " htmlFor="customer_email">Your Email</label>
                    <input  type="text" id="customer_email" required {...register("customer_email") }/>
                </div>
                
                <div className="w-full my-2 text-xl p-2 font-medium">
                <label className="text-bold " htmlFor="customer_mobile1">Mobile No</label>
                    <input  type="text" placeholder="Mobile No" required id="customer_mobile1" {...register("customer_mobile1")}/>
                </div>
                <div className="w-full my-2 text-xl p-2 font-medium">
                <label className="text-bold " htmlFor="customer_mobile2">Alternative Mobile No</label>
                    <input  type="text" placeholder="Alternative Mobile" required id="customer_mobile2" {...register("customer_mobile2")}/>
                </div>
                <div className="w-full my-2 text-xl p-2 font-medium">
                <label className="text-bold " htmlFor="customer_country">Country</label>
                    <input  type="text" value={"Bangladesh"} id="customer_country" {...register("customer_country")}/>
                </div>
                <div className="w-full my-2 text-xl p-2 font-medium">
                <label className="text-bold " htmlFor="customer_city">City</label>
                    <input  type="text" placeholder="City"  id="customer_city"
                     {...register("customer_city")}/>
                </div>
                <div className="w-full my-2 text-xl p-2 font-medium">
                <label className="text-bold " htmlFor="customer_receive_address">Product Receive Address</label>
                    <textarea  placeholder="Product Receive Address" required  id="customer_receive_address"
                     {...register("customer_receive_address")}/>
                </div>
           </div>
         
          <div className="bg-white my-2 p-4">
            <h3 className="text-3xl font-bold p-3">Cash On Delivery</h3>
            <div className="paymentMethodCart">
                <ul>
                <li className="flex items-center gap-3">
                    <input value={"cash_on_delivery"}  {...register("payment_method")}
                     onChange={(e)=>HandlePaymentMethod(e)} name="payment_method" type="radio"   className="border-none" />
                     Cash On Delivery</li>
                </ul>
            </div>
          </div>
          <div className="bg-white my-1 p-4">
            <h3 className="text-3xl font-bold p-3">Payment Method</h3>
            <div className="flex flex-wrap ">
            <label htmlFor="stripe" className="flex items-center gap-3 paymentMethodCart">
                <input id="stripe" value={"stripe"} {...register("payment_method")}
                onChange={(e)=>HandlePaymentMethod(e)} 
                name="payment_method" type="radio"  className="border-none" />
                Stripe</label>
                <label htmlFor="bkash" className="flex items-center gap-3 paymentMethodCart">
                <input value={"bkash"} {...register("payment_method")}
                onChange={(e)=>HandlePaymentMethod(e)} 
                name="payment_method" type="radio"  className="border-none" />
                Bkash</label>
                <label htmlFor="nagod" className="flex items-center gap-3 paymentMethodCart">
                <input id="nagod" required value={"nagod"} {...register("payment_method")}
                 onChange={(e)=>HandlePaymentMethod(e)} name="payment_method" type="radio"   className="border-none" />
                SSLCommerce</label>
            </div>
          </div>
          
            <div className="p-3 flex justify-end ">
            {
        !createPayment&& <button className=" text-white btn_secondary cursor-pointer ">
                <input type="submit" value={"Order Now"} className="transition-all cursor-pointer translate-x-2 ease-in-out delay-75 duration-200"></input>
                </button>
}{
              createPayment&& <Link to={"/order/payment"}>
                <button className=" text-white btn_secondary cursor-pointer ">
                <input type="submit" value={"Payment"} className="transition-all cursor-pointer translate-x-2 ease-in-out delay-75 duration-200"></input>
                </button>
               </Link>
            }
            
           
             
            </div>
            </form>
        </div>
        </div>
        <div className="col-span-1 my-6">
         <CheckOutSummary submitType={"payment"}></CheckOutSummary>
        </div>
        </div>
        </div>
    );
};

export default ShippingAddress;