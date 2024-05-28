        import { Link, useLoaderData } from "react-router-dom";


        const ProductDetails = () => {
            const shoe=useLoaderData()
            const {id,pd_name, pd_brand, pd_price, pd_description,pd_image,pd_size} = shoe;
                
            return (
                <div>
                    <div className="grid grid-cols-2 gap-5 p-5 my-3">
                        <div className="w-full">
                            <img src={pd_image} alt="product image"/>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">
                            { pd_name}
                            <div className="badge badge-secondary">{pd_brand}</div>
                            </h2>
                             <div className="card-actions justify-top">
                            <div className="badge badge-outline">{ pd_price} $</div> 
                            <div className="badge badge-outline">{shoe?.pd_size?pd_size[0]:""}-{shoe?.pd_size?pd_size[5]:""}</div>
                            </div>
                            <p>{ pd_description}</p>
                           
                            <div className="w-full">
                            <Link to={`/product/${id}`}>
                            <button className="w-full btn btn-primary text-white">Bye Now</button>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            );
        };

        export default ProductDetails;