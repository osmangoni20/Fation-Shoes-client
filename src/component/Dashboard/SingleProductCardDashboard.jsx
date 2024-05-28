    /* eslint-disable react/prop-types */
        import { Link } from "react-router-dom";


        // eslint-disable-next-line react/prop-types
        const SingleProductCardDashboard = ({shoe,onDelete}) => {
        
            // eslint-disable-next-line react/prop-types
            const{id,pd_name,pd_brand,pd_image,pd_description,pd_price,pd_size}=shoe;
        
            const HandleItemDelete=()=>{
                const url=`http://localhost:3000/shoes/${id}`;
                fetch(url,{
                    method:"DELETE",
                }).then(res=>res.json()).then(data=>onDelete(data.id));
            }
            return (
                <div>
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
                <Link to={`/product/${id}`}>
                <button className="btn btn-secondary font-bold text-white">See Details</button>
                </Link>
                <Link to={`edit/${id}`}>
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