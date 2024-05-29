import SingleProduct from "./SingleProduct";

// eslint-disable-next-line react/prop-types
const Product = ({shoes}) => {
    console.log(shoes)
    return (
       <div className="py-10">
            <h1 className="text-center text-5xl py-5">Our Products</h1>
            <div className="flex flex-wrap justify-center gap-8 items-center my-5">
                {
                    // eslint-disable-next-line react/prop-types
                    shoes?.slice(0,3)?.map((shoe,index)=><SingleProduct shoe={shoe} key={index}/>)
                }
            </div>
       </div>
    );
};

export default Product;