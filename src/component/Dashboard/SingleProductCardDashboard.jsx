    /* eslint-disable react/prop-types */
        import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../shared/Modal";
import Toast from "../../component/shared/Toast";


        // eslint-disable-next-line react/prop-types
        const SingleProductCardDashboard = ({shoe,onDelete}) => {
            // eslint-disable-next-line react/prop-types
            const{_id,pd_name,pd_brand,pd_image,pd_description,pd_price,pd_size}=shoe;
            const [isOpen,setModel]=useState(false);
            const [DeleteSuccess, setDeleteSuccess]=useState(false);
            const [showToast,setToast]=useState(false)
            const token=localStorage.getItem('token-fation-shoe')
            const isSubmit=()=>{
                setModel(false)
                const url=`http://localhost:3000/product/${_id}`;
                fetch(url,{
                    method:"DELETE",
                    headers:{
                        authorization:`Bearer ${token}`
                    }
                }).then(res=>res.json()).then(async ()=>{
                    onDelete(_id);
                    setToast(true)
                    setDeleteSuccess(true)
                    await setTimeout(() => {
                        setToast(false)
                        }, 2000);
                    
                });

            }
            const isClose=()=>{
                setModel(false)
            }
            const HandleItemDelete=()=>{
                setModel(true)
            }
            return (
                <div>
                    {showToast&&
            <Toast isOpen={showToast}>
                {DeleteSuccess?"Product Delete Successfully Done":"Internet Connection Disabled"}
            </Toast>}
           
       <Modal isOpen={isOpen} isClose={isClose} isSubmit={isSubmit}>
            <Modal.Header>
              Confirm Delete this product Information 
             </Modal.Header>
             <div className='flex justify-center'>   
                <Modal.Submit>Yes</Modal.Submit>
            </div>
          </Modal>
                    <div className="card w-80 h-[450px] pt-5 bg-base-100 shadow-xl text-black">
                <figure className="h-[200px] w-full"><img src={pd_image} alt="Shoes" /></figure>
                <div className="card-body">
                <h2 className="card-title">
                {pd_name}
                <div className="badge badge-secondary">{pd_brand}</div>
                </h2>
            
                <div className="card-actions justify-top">
                <div className="badge badge-outline bg-gray-500 p-2 text-white font-bold text-md">{ pd_price} $</div> 
                <div className="badge badge-outline">{pd_size?pd_size[0]:""}-{pd_size?pd_size[5]:""}</div>

                </div>
                <div>
                <p>{pd_description?.slice(0,40)}</p>
                </div>
                <div className="flex gap-1 justify-center items-center">
                <Link to={`/product/${_id}`}>
                <button className="btn btn-secondary font-bold text-white">See Details</button>
                </Link>
                <Link to={`edit/${_id}`}>
                <button className="btn bg-indigo-600 text-white">Edit</button>
                </Link>
                <button onClick={()=>HandleItemDelete()} className="btn bg-red-500 text-white">Delete</button>
                </div>
                </div>
                </div> 
                </div>
            );
        };

        export default SingleProductCardDashboard;