import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";

// eslint-disable-next-line react/prop-types
const TendingProducts = ({shoes}) => {
    
    const[casualData,setCasualData]=useState([])
    const[formalData,setFormalData]=useState([])
    const[loaferData,setLoaferData]=useState([])
    useEffect(()=>{
      fetch(`https://fation-shoes.onrender.com/product/?searchValue=${"casual_shoes"}&searchCategory=${"category"}`)
      .then(res=>res.json())
      .then(data=>setCasualData(data))

      fetch(`https://fation-shoes.onrender.com/product/?searchValue=${"formal_shoes"}&searchCategory=${"category"}`)
      .then(res=>res.json())
      .then(data=>setFormalData(data))

      fetch(`https://fation-shoes.onrender.com/product/?searchValue=${"loafers"}&searchCategory=${'category'}`)
      .then(res=>res.json())
      .then(data=>setLoaferData(data))

  },[])
    return (
      <>
      {
        // eslint-disable-next-line react/prop-types
        casualData?.length?<div>
 <div className="py-5">
        <h1 className="font-serif text-3xl py-5 px-10">Casual Shoe</h1>
            <div className="flex flex-wrap justify-center gap-8 items-center my-3">
                {
                    // eslint-disable-next-line react/prop-types
                    shoes?.slice(0,6)?.map((shoe,index)=><SingleProduct shoe={shoe} key={index}/>)
                }
            </div>
       </div>
        </div>:<div className="p-5">

        </div>
      }

      {/* Formal shoe */}
      {
        // eslint-disable-next-line react/prop-types
        casualData?.length?<div>
 <div className="py-5">
        <h1 className="font-serif text-3xl py-5 px-10">Formal Shoe</h1>
            <div className="flex flex-wrap justify-center gap-8 items-center my-3">
                {
                    // eslint-disable-next-line react/prop-types
                    formalData?.slice(0,6)?.map((shoe,index)=><SingleProduct shoe={shoe} key={index}/>)
                }
            </div>
       </div>
        </div>:<div className="p-5">

        </div>
      }

      {/* Loafer Shoe */}
      {
        // eslint-disable-next-line react/prop-types
        casualData?.length?<div>
 <div className="py-5">
        <h1 className="font-serif text-3xl py-5 px-10">Recommended Loafer </h1>
            <div className="flex flex-wrap justify-center gap-8 items-center my-3">
                {
                    // eslint-disable-next-line react/prop-types
                    loaferData?.slice(0,6)?.map((shoe,index)=><SingleProduct shoe={shoe} key={index}/>)
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