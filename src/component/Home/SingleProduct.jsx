/* eslint-disable react/prop-types */
    import { Link } from "react-router-dom";


        // eslint-disable-next-line react/prop-types
        const SingleProduct = ({shoe}) => {
            
            // eslint-disable-next-line react/prop-types
            const {id,pd_name, pd_brand, pd_price,pd_image,pd_description} = shoe;
        
            // eslint-disable-next-line react/prop-types
        
            return (
                <>
                <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={pd_image} alt="Shoes" /></figure>
        <div className="card-body">
        <h2 className="card-title">
        { pd_name}
        <div className="badge badge-secondary">{pd_brand}</div>
        </h2>
    
        <div className="card-actions justify-top">
        <div className="badge badge-outline bg-gray-500 p-2 text-white font-bold text-md">{ pd_price} $</div> 
                
        </div>
        <div>
            <p>{pd_description.slice(0,20)}</p>
        </div>
        <div className="flex justify-end items-end">
        <Link to={`/product/${id}`}>
        <button className="btn btn-primary text-white">See Details</button>
            </Link>
    
        </div>
        </div>
        </div> 
            </>
            );
        };

        export default SingleProduct;