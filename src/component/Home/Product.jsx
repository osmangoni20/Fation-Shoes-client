import SingleProduct from "./SingleProduct";

// eslint-disable-next-line react/prop-types
const Product = ({shoes}) => {
    console.log(shoes)
    return (<>
       {
        // eslint-disable-next-line react/prop-types
        shoes?.length?<div>
        <div className="py-10">
            <h1 className="font-serif text-3xl font-bold uppercase text-center">Most Popular Shoe</h1>
            <div className="grid grid-cols-4 justify-center gap-2 items-center my-5">
                {
                    // eslint-disable-next-line react/prop-types
                    shoes?.slice(0,6)?.map((shoe,index)=><SingleProduct shoe={shoe} key={index}/>)
                }
            </div>
       </div>
        </div>:<div className="p-5">

        </div>
       }
       </>
    );
};

export default Product;