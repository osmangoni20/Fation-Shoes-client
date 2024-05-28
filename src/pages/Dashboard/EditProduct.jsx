import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";

const EditProduct = () => {
    const {register,handleSubmit, formState:{errors}}=useForm()
    const shoe=useLoaderData();
   
    const [editInputField,setInputField]=useState({...shoe});
    const HandleEditInputField=(e)=>{
        e.preventDefault();
        setInputField({...editInputField,[e.target.name]:e.target.value})
      
    }
    const onSubmit= async(data)=>{
        console.log(data)
        await fetch(`http://localhost:3000/shoes/${shoe.id}`, {
            method: "PATCH",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(data),
          })
            .then((res) => res.json())
            .then((data) => console.log(data));
    }
    return (
        <div>
          <h1 className="text-center font-serif font-extralight ">Edit Product</h1>

            <form className="min-w-[720px]" onSubmit={handleSubmit(onSubmit)}>

                <div className="w-full my-2">
                    <label className="text-bold block" htmlFor="pd_name">Product Name</label>
                    <input  type="text" id="pd_name" defaultValue={editInputField?.pd_name}  {...register('pd_name', {
    onChange: e => HandleEditInputField(e)
    })}/>
                </div>
                <div className="w-full my-2">
                    <label className="text-bold " htmlFor="pd_brand">Product Brand</label>
                    <input  type="text" id="pd_brand" defaultValue={editInputField?.pd_brand} {...register("pd_brand",{
    onChange: e => HandleEditInputField(e)})}/>
                </div>
                <div className="w-full my-2">
                    <label className="text-bold " htmlFor="pd_price">Product Price</label>
                    <input type="text" id="pd_price" defaultValue={editInputField?.pd_price} {...register("pd_price",{
    onChange: e => HandleEditInputField(e)})}/>
                </div>
                <div className="w-full my-2">
                    <label className="text-bold " htmlFor="pd_image">Product Image</label>
                    <input  type="text" id="pd_image" defaultValue={editInputField?.pd_image} {...register("pd_image",{
    onChange: e => HandleEditInputField(e)})}/>
                </div>
                <div className="w-full my-2">
                    <label className="text-bold " htmlFor="pd_id">Product ID</label>
                    <input  type="text" id="pd_id" defaultValue={editInputField?.id} {...register("pd_id",{
    onChange: e => HandleEditInputField(e)})}/>
                </div>
                <div className="w-full my-2">
                    <label className="text-bold " htmlFor="pd_description">Product Description</label>
                    <textarea  type="text" id="pd_description" defaultValue={editInputField?.pd_description} {...register("pd_description",{
    onChange: e => HandleEditInputField(e)})}/>
                </div>
                <div>
                    <input type="submit" value={"Update"} className="btn-solid"></input>
                </div>
            </form>
        </div>
    );
};

export default EditProduct;