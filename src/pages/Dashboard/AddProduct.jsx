
import { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "../../component/shared/Modal";
import toast from "react-hot-toast";
import Loader from "../../component/shared/Loader";
import axios from "axios";
import cameraImage from "../../assets/camera.png";
import loader from "../../assets/svg/Spin-1s-200px.svg";
const AddProduct = () => {
    const {register,handleSubmit}=useForm()
    const [isOpen,setModel]=useState(false)
    const [isSubmitData, setSubmitData]=useState(null)
    const [uploadImage, setUploadImage]=useState('')
    const [loadImage, setLoadImage]=useState(false)
    const url="https://fationshoe-server.vercel.app/add_product"
    const [isLoading, setIsLoading]=useState(false)
    const isSubmit= async()=>{
        setIsLoading(true)
        await fetch(url,{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({...isSubmitData,pd_image:uploadImage, isDeleted:false})
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
   
    const HandleImageUpload = (e) => {
        setLoadImage(true)
        // setFieldValue({ ...fieldValue, img: e.target.files[0] });
        const ImagForm = new FormData();
        ImagForm.set("key", "20eb4f4a88d3505364e15416b41a0df2");
        ImagForm.append("image", e.target.files[0]);
        axios.post("https://api.imgbb.com/1/upload", ImagForm).then((imageData) => {
          console.log(imageData.data);
          setLoadImage(false)
          setUploadImage(imageData.data.data.url);
        });
      };
    return (
        <div>
          
        
            <Modal isClose={isClose} isOpen={isOpen} isSubmit={isSubmit}>
                <Modal.Header>Are You Confirm Add A New Product</Modal.Header>
                <div className="flex justify-center">
                <Modal.Submit>Yes</Modal.Submit>
                </div>
            </Modal>
           <h1 className="text-center text-white font-serif font-extralight p-10">Add New Product</h1>
            <form className="md:min-w-[720px] lg:min-w-[720px] p-5 shadow bg-[#171A3B] text-white   rounded-md" onSubmit={handleSubmit(onSubmit)}>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
           <div className={"personal_image pt-0 mt-0 pb-5"}>
            <label className="label">
              <input type="file" name="img" onChange={HandleImageUpload} />
              <figure className={"personal_figure"}>
                <span className={"personal_avatar "}>
                  {!loadImage && (
                    <img
                      src={uploadImage}
                      alt="Product Image"
                     className="border-2 border-dashed rounded-md h-[120px]"
                    />
                  )}
                  {loadImage && (
                    <img src={loader}  alt="Product Image"
                    className="border-2 border-dashed rounded-md h-[120px]" />
                  )}
                </span>
                <figcaption className={"personal_figcaption mt-6"}>
                  <img
                    src={cameraImage}
                    height={40}
                    width={40}
                    alt={"Profile"}
                  />
                </figcaption>
              </figure>
            </label>
    </div>
           <div className="w-full my-2">
            <label className="text-bold " htmlFor="pd_category">Product Category</label>
            <select className="text-black" id="pd_category"{...register("pd_category")}>
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
                    <label className="text-bold " htmlFor="pd_stock">Total Stock</label>
                    <input type="text" id="pd_stock" {...register("pd_stock")}/>
                </div>
                <div className="w-full my-2">
                    <label className="text-bold " htmlFor="pd_description">Product Description</label>
                    <textarea  type="text" id="pd_description" {...register("pd_description")}/>
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