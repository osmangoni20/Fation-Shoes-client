
import { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "../../component/shared/Modal";
import toast from "react-hot-toast";
import Loader from "../../component/shared/Loader";

const AddProduct = () => {
    const {register,handleSubmit}=useForm()
    const [isOpen,setModel]=useState(false)
    const [isSubmitData, setSubmitData]=useState(null)
    const url="https://fation-shoes.onrender.com/add_product"
    const [isLoading, setIsLoading]=useState(false)
    const isSubmit= async()=>{
        setIsLoading(true)
        await fetch(url,{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(isSubmitData)
        }).then(res=>res.json())
        .then(async(data)=>{
            setIsLoading(false)
            console.log(data)
            setModel(false)
            toast.success("Add Successfully Done")
       
        })
    }

    const isClose=()=>{
        setModel(false)
    }

    const onSubmit= async(data)=>{
        setModel(true)
        console.log(data)
        await setSubmitData(data);
    }
   
    return (
        <div>
          
        
            <Modal isClose={isClose} isOpen={isOpen} isSubmit={isSubmit}>
                <Modal.Header>Are You Confirm Add A New Product</Modal.Header>
                <div className="flex justify-center">
                <Modal.Submit>Yes</Modal.Submit>
                </div>
            </Modal>
           <h1 className="text-center font-serif font-extralight p-10">Add New Product</h1>
            <form className="md:min-w-[720px] p-5 shadow  rounded-md" onSubmit={handleSubmit(onSubmit)}>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                    <label className="text-bold " htmlFor="pd_brand">Product Brand</label>
                    <input  type="text" id="pd_brand" {...register("pd_brand")}/>
                </div>
                <div className="w-full my-2">
                    <label className="text-bold " htmlFor="pd_price">Product Price</label>
                    <input type="text" id="pd_price" {...register("pd_price")}/>
                </div>
                <div className="w-full my-2">
                    <label className="text-bold " htmlFor="pd_description">Product Description</label>
                    <textarea  type="text" id="pd_description" {...register("pd_description")}/>
                </div>
                <div className="w-full my-2">
                    <label className="text-bold " htmlFor="pd_image">Product Image</label>
                    <input  type="text" id="pd_image" {...register("pd_image")}/>
                </div>
               
               
           </div>
                <div className="flex justify-center">
                    <input type="submit" value={"Add Product"} className="font-bold py-1 cursor-pointer text-lg bg-primary text-white p-4 rounded"></input>
                </div>

                {
                    isLoading&&<Loader/>
                }
            </form>
        </div>
    );
};

export default AddProduct;