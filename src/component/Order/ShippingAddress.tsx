import { useEffect, useState } from "react";
import CheckOutSummary from "./CheckOutSummary";
import Modal from "../shared/Modal";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import React from "react";



const ShippingAddress = () => {
    const{user}=useAuth()
    const navigate=useNavigate();
    const {register, handleSubmit}=useForm()
    const[isOpen,setModel]=useState(false);
        const [submitData, setSubmitData]=useState(null)
        const [payment_method,setPayment_method]=useState(null);
    const url="https://fation-shoes.onrender.com/add_order"
    const [itemCollection, setItemCollection] = useState(
        JSON.parse(localStorage.getItem("cartItemList"))
      );
    const [subTotal, setTotalPayableTaka] = useState(0);
    // eslint-disable-next-line no-undef
  const shippingCost=50;
    useEffect(() => {
      const totalTk = itemCollection.reduce(
        (total, item) => total + item.order_price * item.pd_quantity,
        0
      );
      setItemCollection( JSON.parse(localStorage.getItem("cartItemList")));
      console.log(totalTk);
      setTotalPayableTaka(totalTk);
    }, []);
  
    const isClose=()=>{
        setModel(false)
    }
    const onSubmit= async(data)=>{
        setModel(true)
        await setSubmitData({itemCollection,status:"confirm",...data, email:user?.email,payable_cost:subTotal+shippingCost});
    }
 const isSubmit= async()=>{
    console.log(submitData)
        await fetch(url,{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(submitData)
        }).then(res=>res.json())
        .then(async(data)=>{
            console.log(data)
            setModel(false)
            toast.success("Order Success")
            navigate('/')
        })
    }


    return (
        <div className="ghost_bg">
             <Modal isClose={isClose} isOpen={isOpen} isSubmit={isSubmit}>
                <Modal.Header>Are You Confirm Order</Modal.Header>
                <div className="flex justify-center">
                <Modal.Submit>Yes</Modal.Submit>
                </div>
            </Modal>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3">
          <div className="col-span-2 p-5 my-6">
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
                    <input  type="text" placeholder="Your Name" id="customer_name" {...register("customer_name")}/>
                </div>
                <div className="w-full my-2 text-xl p-2 font-medium">
                <label className="text-bold " htmlFor="customer_email">Your Email</label>
                    <input  type="text" id="customer_email" {...register("customer_email")}/>
                </div>
                
                <div className="w-full my-2 text-xl p-2 font-medium">
                <label className="text-bold " htmlFor="customer_mobile1">Mobile No</label>
                    <input  type="text" placeholder="Mobile No" id="customer_mobile1" {...register("customer_mobile1")}/>
                </div>
                <div className="w-full my-2 text-xl p-2 font-medium">
                <label className="text-bold " htmlFor="customer_mobile2">Alternative Mobile No</label>
                    <input  type="text" placeholder="Alternative Mobile" id="customer_mobile2" {...register("customer_mobile2")}/>
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
                    <textarea  type="text" placeholder="Product Receive Address"  id="customer_receive_address"
                     {...register("customer_receive_address")}/>
                </div>
           </div>
         
          <div className="bg-white my-2 p-4">
            <h3 className="text-3xl font-bold p-3">Cash On Delivery</h3>
            <div className="paymentMethodCart">
                <ul>
                <li className="flex items-center gap-3">
                    <input value={"cash_on_delivery"}  {...register("payment_method")}
                     onChange={(e)=>setPayment_method(e.target.value)} name="payment_method" type="radio"   className="border-none" />
                     Cash On Delivery</li>
                </ul>
            </div>
          </div>
          <div className="bg-white my-1 p-4">
            <h3 className="text-3xl font-bold p-3">Payment Method</h3>
            <ul className="flex flex-wrap ">
                
                <li className="flex items-center gap-3 paymentMethodCart">
                <input value={"bkash"} {...register("payment_method")}
                onChange={(e)=>setPayment_method(e.target.value)} 
                name="payment_method" type="radio"  className="border-none" />
                Bkash</li>
                <li className="flex items-center gap-3 paymentMethodCart">
                <input value={"nagod"} {...register("payment_method")}
                 onChange={(e)=>setPayment_method(e.target.value)} name="payment_method" type="radio"   className="border-none" />
                Nagod</li>
            </ul>
          </div>
          
            <div className="p-3 flex justify-end ">
            <button className=" text-white btn_secondary cursor-pointer ">
                  <input type="submit" value={"Order Now"} className="transition-all cursor-pointer translate-x-2 ease-in-out delay-75 duration-200"></input>
                </button>
            </div>
            </form>
        </div>
        </div>
        <div className="col-span-1 my-6">
         <CheckOutSummary subTotal={subTotal}></CheckOutSummary>
        </div>
        </div>
        </div>
    );
};

export default ShippingAddress;