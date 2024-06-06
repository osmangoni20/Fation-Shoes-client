import SingleProduct from "./SingleProduct";

// eslint-disable-next-line react/prop-types
const TendingProducts = ({shoes}) => {
    console.log(shoes)
    return (
      <>
      {
        // eslint-disable-next-line react/prop-types
        shoes?.length?<div>
 <div className="py-5">
            <h1 className="font-serif text-3xl p-x-10">CASUAL SHOES</h1>
            <div className="flex flex-wrap justify-center gap-8 items-center my-3">
                {
                    // eslint-disable-next-line react/prop-types
                    shoes?.slice(0,8)?.map((shoe,index)=><SingleProduct shoe={shoe} key={index}/>)
                }
            </div>
       </div>
        </div>:<div className="p-5">

        </div>
      }
      </>
    );
};

export default TendingProducts;