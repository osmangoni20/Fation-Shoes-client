/* eslint-disable react/prop-types */
    import { Link } from "react-router-dom";


        // eslint-disable-next-line react/prop-types
        const SingleProduct = ({shoe}) => {
            
            // eslint-disable-next-line react/prop-types
            const {_id,pd_name, pd_brand, pd_price,pd_image,pd_description} = shoe;
        
            // eslint-disable-next-line react/prop-types
        
            return (
                <>
    <div className="card product_cart  text-black
      p-0  w-84 
    bg-base-100 font-serif">
        <figure><img className="w-full p-0 h-[260px]"  src={pd_image} alt="Shoes" /></figure>
        <div className="card-body p-4 h-[100px]">
        <h3 className="card-title">
        { pd_name}
        <div className="badge bg-primary text-white">{pd_brand}</div>
        </h3>
        <div className="card-actions justify-top">
        <h6 className="font-bold">{ pd_price} $</h6> 
        <p>{pd_description.slice(0,40)}</p>
        </div>
        
        </div>
        <div className="flex justify-end items-center p-4">
        <Link to={`/product/${_id}`}>
        <button className="btn_secondary cart_button
         text-white">See Details</button>
        </Link>
    
        </div>
        </div> 
            </>
            );
        };

        export default SingleProduct;