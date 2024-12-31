import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "../../component/shared/Modal";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import cameraImage from "../../assets/camera.png";
import profileImage from "../../assets/personlogo.jpg";
import loader from "../../assets/svg/Spin-1s-200px.svg";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { updateUser } from "../../redux/features/UserSlice";
import Loader from "../../component/shared/Loader";
import { useNavigate } from "react-router-dom";
const EditProfile = () => {

const {register,handleSubmit}=useForm()
const [isOpen,setModel]=useState(false);
const [EditData,setEditData]=useState(null)
const token=localStorage.getItem('token-fation-shoe')
const{user,UpdateProfile,UpdatePassword,UpdateEmail}=useAuth()
const [userData,setUserData,]=useState(null)
const [changePassword,setChangePassword]=useState(null);
// eslint-disable-next-line no-undef
const [uploadImage, setUploadImage] = useState(null);
// const [progress, setProgress] = useState(false);
// eslint-disable-next-line no-undef
const [fieldValue, setFieldValue] = useState({});
const dispatch=useAppDispatch()
const [isLoading, setIsLoading]=useState(false)
const navigate =useNavigate()
useEffect(()=>{
    fetch(`https://fationshoe-server.vercel.app/user/${user?.email}`)
        .then((res) => res.json())
        .then( (data) =>{
            console.log(data)
     setUserData(data)
        });
},[])
const notify = (message) => toast(message);


const isClose=()=>{
    setModel(false)
}
const HandleChangePassword=(e)=>{
    e.preventDefault();
    UpdatePassword(changePassword)
}
const isSubmit= async()=>{
  setIsLoading(true)
    setModel(false)
    
await UpdateEmail(EditData?.email||user?.email).then(data=>console.log(data))
  await fetch(`https://fationshoe-server.vercel.app/user/${user?.email}`, {
        method: "PATCH",
        headers: {
        "Content-type": "application/json",
        authorization:`Bearer ${token}`
        },
        body: JSON.stringify(EditData),
    }).then((res) => res.json())
        .then( async(data) =>{
           console.log(EditData,data)
            await UpdateProfile((EditData?.first_name),user?.photoURL)
            setIsLoading(false)
           notify("Update Profile Successfully")
          navigate('/dashboard/user_profile')
        }
    
    );
       

}
const [editInputField,setInputField]=useState({...userData});
const HandleEditInputField=(e)=>{
    e.preventDefault();
    setInputField({...editInputField,[e.target.name]:e.target.value})
}
const {img}=useAppSelector(state=>state.userR)
const onSubmit= async(data)=>{
   
    
    const userInfo={
      first_name:data?.first_name?data?.first_name:userData?.first_name,
      last_name:data?.last_name?data?.last_name:userData?.last_name,
      email:data?.email,
      contact_number1:data?.contact_number1?data?.contact_number1:userData?.contact_number1,
      contact_number2:data?.contact_number2?data?.contact_number2:userData?.contact_number2,
      gender:data?.gender?data?.gender:userData?.gender,
      date_of_birth:data?.date_of_birth?data?.date_of_birth:userData?.date_of_birth,
      img:img|| uploadImage || user?.photoURL
    }
    setEditData(userInfo)
    console.log(userData,userInfo)
    dispatch(updateUser(userInfo))
    setModel(true)
}
const HandleImageUpload = (e) => {
    setUploadImage("processing");
    setFieldValue({ ...fieldValue, img: e.target.files[0] });
    const ImagForm = new FormData();
    ImagForm.set("key", "20eb4f4a88d3505364e15416b41a0df2");
    ImagForm.append("image", e.target.files[0]);
    axios.post("https://api.imgbb.com/1/upload", ImagForm).then((imageData) => {
      console.log(imageData.data);
      setUploadImage(imageData.data.data.url);
    });
  };

return (
    <div>
        
<Modal isOpen={isOpen} isClose={isClose} isSubmit={isSubmit}>
        <Modal.Header>
        Confirm Update Your Information 
        </Modal.Header>
        <div className='flex justify-center'>   
            <Modal.Submit>Yes</Modal.Submit>
        </div>
    </Modal>
    <div className="text-white">
    <h1 className="text-center text-white font-serif font-extralight my-5">Update Profile</h1>
    
    <div className="p-5 shadow-md bg-[#171A3B] text-white rounded-xl">
    <div>
    <div className={"personal_image pt-0 mt-0 pb-5"}>
            <label className="label">
              <input type="file" name="img" onChange={HandleImageUpload} />
              <figure className={"personal_figure"}>
                <span className={"personal_avatar "}>
                  {uploadImage !== "processing" && (
                    <img
                      src={uploadImage || user?.photoURL || profileImage}
                      alt="avatar"
                     
                    />
                  )}
                  {uploadImage === "processing" && (
                    <img src={loader} alt="avatar" height={150} width={150} />
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
    </div>
   
<form className="md:min-w-[720px] lg:min-w-[720px]  pt-5 " onSubmit={handleSubmit(onSubmit)}>
    
<div className="grid lg:grid-cols-2 grid-cols-1 gap-3 ">
<div className="w-full my-2">
    <label className="text-bold block" htmlFor="first_name">First Name</label>
    <input  type="text" id="first_name" defaultValue={userData?.first_name||''}  {...register('first_name', {
onChange: e => HandleEditInputField(e)
})}/>
</div>
<div className="w-full my-2">
    <label className="text-bold block" htmlFor="last_name">Last Name</label>
    <input  type="text" id="last_name" defaultValue={userData?.last_name||""}  {...register('last_name', {
onChange: e => HandleEditInputField(e)
})}/>
</div>
<div className="w-full my-2">
    <label className="text-bold " htmlFor="email"> Email</label> 
    <input   type="text" id="email" value={userData?.email||user.email} {...register("email",{
onChange: e => HandleEditInputField(e)})}/>
</div>
<div className="w-full my-2">
    <label className="text-bold " htmlFor="mobile_1">Mobile Number</label>
    <input  type="text" id="mobile_1" defaultValue={userData?.contact_number1||""} {...register("contact_number1",{
onChange: e => HandleEditInputField(e)})}/>
</div>

<div className="w-full my-2">
    <label className="text-bold " htmlFor="mobile_2">Alternative Mobile Number</label>
    <input  type="text" id="mobile_2" defaultValue={userData?.contact_number2||""} {...register("contact_number2",{
onChange: e => HandleEditInputField(e)})}/>
</div>
<div className="w-full my-2">
    <label className="text-bold " htmlFor="mobile_2">Date Of Birth</label>
    <input  type="date" id="date_of_birth" defaultValue={userData?.date_of_birth||""} {...register("date_of_birth",{
onChange: e => HandleEditInputField(e)})}/>
</div>
<div className="w-full my-2">
    <label className="text-bold " htmlFor="gender">Gender</label>
    <select  id="gender" defaultValue={userData?.gender||""} {...register("gender",{
onChange: e => HandleEditInputField(e)})}>
  <option value={"male"}>Male</option>
  <option value={"female"}>Female</option>
</select>
</div>
<div className="w-full my-2 ">
<label className="text-bold " htmlFor="address">Change Password</label>

    <div className="flex gap-1">
    <input placeholder="Change Password" onChange={(e)=>setChangePassword(e.target.value)}  type="password" id="password" defaultValue={editInputField?.password||""} />
    <button onClick={(e)=>HandleChangePassword(e)} className="p-2 text-white font-semibold rounded bg-optional-red">Confirm</button>
    </div>
</div>
<div className="w-full my-2">
    <label className="text-bold " htmlFor="address">Address</label>
    <textarea  type="text" id="address" defaultValue={userData?.address||""} {...register("address",{
onChange: e => HandleEditInputField(e)})}/>
</div>
</div>

<div className="flex justify-center">
    <input type="submit" value={"Update Profile"} className="bg-primary cursor-pointer text-white p-3 rounded-lg"></input>
</div>
{
            isLoading&&<Loader/>
        }
</form>
</div>
    </div>
    </div>
);
};
export default EditProfile;