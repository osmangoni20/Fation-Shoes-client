import React, { useState } from 'react';
import Modal from '../../../component/shared/Modal';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import Loader from '../../../component/shared/Loader';

const AddReview = () => {
    const {register,handleSubmit}=useForm()
    const [isOpen,setModel]=useState(false)
    const [isSubmitData, setSubmitData]=useState(null)
    const [isLoading, setIsLoading]=useState(false)
    const url="https://fationshoe-server.vercel.app/add_review"
    const {user}:any=useAuth()

    const onSubmit= async(data)=>{
        setIsLoading(true)
        await fetch(url,{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({...data, img:user?.photoURL, date:new Date().toLocaleDateString(), email:user?.email})
        }).then(res=>res.json())
        .then(async(data)=>{
            setIsLoading(false)
            setModel(false)
            toast.success("Your Review Successfully Done. Thanks!!")
        })

    }
   
    return (
        <div>
          
        
           
           <h1 className="text-center font-serif font-extralight p-10 text-white">Review</h1>
            <form className="lg:min-w-[720px] p-5 shadow  rounded-md bg-[#171A3B] text-white" onSubmit={handleSubmit(onSubmit)}>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
           <div className="w-full my-2">
                    <label className="text-bold block" htmlFor="user_name">Your Name</label>
                    <input className='text-white' type="text" id="user_name" {...register("user_name")}/>
                </div>
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
                    <input className='text-white' type="text" id="pd_name" {...register("pd_name")}/>
                </div>
                
                <div className="w-full my-2">
            <label className="text-bold " htmlFor="pd_rating">Product Rating</label>
            <select className='text-gray-50' itemType='number' id="pd_rating"{...register("pd_rating")}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
    </select>
        </div>
                <div className="w-full my-2">
                    <label className="text-bold " htmlFor="review">Your Review</label>
                    <textarea className='h-[200px] text-gray-600' id="review" {...register("review")}/>
                </div>
             
               
               
           </div>
                <div className="flex justify-end">
                    <input type="submit" value={"Submit Review"} className="cursor-pointer h-[40px] py-2 font-medium text-lg bg-primary text-white p-4 rounded"></input>
                </div>
                {
                    isLoading&&<Loader/>
                }
            </form>
        </div>
    );
};

export default AddReview;