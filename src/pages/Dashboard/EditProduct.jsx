    import { useState } from "react";
    import { useForm } from "react-hook-form";
    import Modal from "../../component/shared/Modal";
import { useLoaderData } from "react-router-dom";
import toast from "react-hot-toast";

    const EditProduct = () => {
        const {register,handleSubmit, }=useForm()
        const shoe=useLoaderData();
        const [isOpen,setModel]=useState(false);
        const [EditData,setEditData]=useState(null)
        const token=localStorage.getItem('token-fation-shoe')
        const notify = (message) => toast(message);
        const isClose=()=>{
            setModel(false)
        }
        const isSubmit= async()=>{
            setModel(false)
            await fetch(`https://fation-shoes.onrender.com/product/${shoe._id}`, {
                method: "PATCH",
    
                headers: {
                  "Content-type": "application/json",
                  authorization:`Bearer ${token}`
                },
                body: JSON.stringify(EditData),
              })
                .then((res) => res.json())
                .then( async() =>{
                  notify("Update Successfully Done")
                });
           
        }
        const [editInputField,setInputField]=useState({...shoe});
        const HandleEditInputField=(e)=>{
            e.preventDefault();
            setInputField({...editInputField,[e.target.name]:e.target.value})
        }
        const onSubmit= async(data)=>{
            console.log(data)
            setModel(true)
            setEditData(data)
        }
        
        return (
            <div>
                
               
               
           <Modal isOpen={isOpen} isClose={isClose} isSubmit={isSubmit}>
                <Modal.Header>
                  Confirm edit this product Information 
                 </Modal.Header>
                 <div className='flex justify-center'>   
                    <Modal.Submit>Yes</Modal.Submit>
                </div>
              </Modal>
              <div>
              <h1 className="text-center font-serif font-extralight ">Edit Product</h1>
            
              
    <form className="min-w-[720px]" onSubmit={handleSubmit(onSubmit)}>
    <div className="w-full my-2">
            <label className="text-bold " htmlFor="pd_category">Product Category</label>
            <select id="pd_category" defaultValue={editInputField?.pd_category} {...register("pd_category",{
    onChange: e => HandleEditInputField(e)})}>
        <option value={"casual_shoes"}>Casual Shoe</option>
        <option value={"formal_shoes"}> Formal Shoe</option>
        <option value={"boot"}>Boot</option>
        <option value={"loafers"}>Loafers</option>
    </select>
        </div>
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
            <label className="text-bold " htmlFor="pd_description">Product Description</label>
            <textarea  type="text" id="pd_description" defaultValue={editInputField?.pd_description} {...register("pd_description",{
    onChange: e => HandleEditInputField(e)})}/>
        </div>
        <div>
            <input type="submit" value={"Update"} className="btn-solid"></input>
        </div>
    </form>
              </div>
            </div>
        );
    };
    
    

    export default EditProduct;