import SingleProduct from "./SingleProduct";

// eslint-disable-next-line react/prop-types
const TendingProducts = ({shoes}) => {
    console.log(shoes)
    return (
       <div className="py-5">
            <h1 className="font-serif text-4xl p-5">Top Tending Products</h1>
            <div className="flex flex-wrap justify-center gap-8 items-center my-3">
                {
                    // eslint-disable-next-line react/prop-types
                    shoes?.slice(0,8)?.map((shoe,index)=><SingleProduct shoe={shoe} key={index}/>)
                }
            </div>
       </div>
    );
};

export default TendingProducts;