
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const {register,handleSubmit, reset, formState:{errors}}=useForm()
    const url="http://localhost:3000/shoes"
    const onSubmit= async(data)=>{
        console.log(data)
        await fetch(url,{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(data)
        }).then(res=>res.json())
        .then((data)=>{
            console.log(data),
            alert("Successfully Done")
            reset()
        })
    }
    return (
        <div>
           <h1 className="text-center font-serif font-extralight ">Add New Product</h1>
            <form className="min-w-[720px]" onSubmit={handleSubmit(onSubmit)}>

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
                    <label className="text-bold " htmlFor="pd_id">Product ID</label>
                    <input  type="text" id="pd_id" {...register("pd_id")}/>
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