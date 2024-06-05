
import { useState } from "react";
import { useForm } from "react-hook-form";
import Toast from "../../component/shared/Toast";
import Modal from "../../component/shared/Modal";

const AddProduct = () => {
    const {register,handleSubmit, reset, formState:{errors}}=useForm()
    const [isOpen,setModel]=useState(false)
    const [showTost,setToast]=useState(false);
    const [apiActionSuccess,setApiAction]=useState(false)
    const [isSubmitData, setSubmitData]=useState(null)
    const url="https://fation-shoes.onrender.com/add_product"

    const isSubmit= async()=>{
        await fetch(url,{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(isSubmitData)
        }).then(res=>res.json())
        .then(async()=>{
            setApiAction(true)
            setModel(false)
            setToast(true)

           await setTimeout(()=>{
                setToast(false)
            },[2000])
            reset()
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
            {showTost&&
            <Toast isOpen={showTost}>
                {apiActionSuccess?"New Product Add Successfully Done":"Internet Connection Disabled"}
            </Toast>}
            <Modal isClose={isClose} isOpen={isOpen} isSubmit={isSubmit}>
                <Modal.Header>Are You Confirm Add A New Product</Modal.Header>
                <div className="flex justify-center">
                <Modal.Submit>Yes</Modal.Submit>
                </div>
            </Modal>
           <h1 className="text-center font-serif font-extralight ">Add New Product</h1>
            <form className="min-w-[720px]" onSubmit={handleSubmit(onSubmit)}>
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
                    <label className="text-bold " htmlFor="pd_image">Product Image</label>
                    <input  type="text" id="pd_image" {...register("pd_image")}/>
                </div>
               
                <div className="w-full my-2">
                    <label className="text-bold " htmlFor="pd_description">Product Description</label>
                    <textarea  type="text" id="pd_description" {...register("pd_description")}/>
                </div>
                <div>
                    <input type="submit" value={"Add Product"} className="btn-solid"></input>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;