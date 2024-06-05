/* eslint-disable react/prop-types */
    import { Link } from "react-router-dom";


        // eslint-disable-next-line react/prop-types
        const SingleProduct = ({shoe}) => {
            
            // eslint-disable-next-line react/prop-types
            const {_id,pd_name, pd_brand, pd_price,pd_image,pd_description} = shoe;
        
            // eslint-disable-next-line react/prop-types
        
            return (
                <>
                <div className="card h-[420px] w-96 bg-base-100 shadow-xl font-serif">
        <figure><img className="h-[250px]"  src={pd_image} alt="Shoes" /></figure>
        <div className="card-body h-[160px] py-1">
        <h2 className="card-title">
        { pd_name}
        <div className="badge badge-secondary">{pd_brand}</div>
        </h2>
        <div className="card-actions justify-top">
        <h6 className="font-bold">{ pd_price} $</h6> 
        <p>{pd_description.slice(0,40)}</p>
        </div>
        <div className="flex justify-end items-end">
        <Link to={`/product/${_id}`}>
        <button className="btn btn-primary text-white">See Details</button>
            </Link>
    
        </div>
        </div>
        </div> 
            </>
            );
        };

        export default SingleProduct;