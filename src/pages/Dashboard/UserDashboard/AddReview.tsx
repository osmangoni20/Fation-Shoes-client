import React, { useState } from 'react';
import Modal from '../../../component/shared/Modal';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const AddReview = () => {
    const {register,handleSubmit}=useForm()
    const [isOpen,setModel]=useState(false)
    const [isSubmitData, setSubmitData]=useState(null)
    const url="https://fation-shoes.onrender.com/add_review"
    const notify = (message) => toast(message);
    const {user}:any=useAuth()

    const onSubmit= async(data)=>{
        await fetch(url,{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({...data, email:user?.email})
        }).then(res=>res.json())
        .then(async(data)=>{
            console.log(data)
            setModel(false)
          notify("Review Done")
        })

    }
   
    return (
        <div>
          
        
           
           <h1 className="text-center font-serif font-extralight p-10">Review</h1>
            <form className="min-w-[720px] p-5 shadow  rounded-md" onSubmit={handleSubmit(onSubmit)}>
           <div className="grid grid-cols-2 gap-5">
           <div className="w-full my-2">
            <label className="text-bold " htmlFor="pd_category">Product Category</label>
            <select id="pd_category"{...register("pd_category")}>
            <option value={"casual_shoes"}>Casual Shoe</option>
        <option value={"formal_shoes"}> Formal Shoe</option>
        <option value={"boot"}>Boot</option>
        <option value={"loafers"}>Loafers</option>
    </select>
        </div>
                <div className="w-full my-2">
                    <label className="text-bold block" htmlFor="pd_name">Product Name</label>
                    <input  type="text" id="pd_name" {...register("pd_name")}/>
                </div>
                
                <div className="w-full my-2">
                    <label className="text-bold " htmlFor="review">Your Review</label>
                    <textarea  id="review" {...register("review")}/>
                </div>
             
               
               
           </div>
                <div className="flex justify-center">
                    <input type="submit" value={"Add Product"} className="font-bold text-lg bg-primary text-white p-4 rounded"></input>
                </div>
            </form>
        </div>
    );
};

export default AddReview;