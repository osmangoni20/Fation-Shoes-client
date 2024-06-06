import SingleProduct from "./SingleProduct";

// eslint-disable-next-line react/prop-types
const Product = ({shoes}) => {
    console.log(shoes)
    return (<>
       {
        // eslint-disable-next-line react/prop-types
        shoes?.length?<div>
        <div className="py-20">
            <h1 className="font-serif text-3xl py-10 px-10">MOST-WANTED SHOES</h1>
            <div className="flex flex-wrap justify-center gap-8 items-center my-5">
                {
                    // eslint-disable-next-line react/prop-types
                    shoes?.slice(0,3)?.map((shoe,index)=><SingleProduct shoe={shoe} key={index}/>)
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