import SingleProduct from "./SingleProduct";

// eslint-disable-next-line react/prop-types
const Product = ({shoes}) => {
    console.log(shoes)
    return (
       <div className="py-20">
            <h1 className="text-center font-serif text-5xl py-10">Our Featured Products</h1>
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