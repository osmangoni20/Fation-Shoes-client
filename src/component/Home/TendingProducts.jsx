import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import { Link } from "react-router-dom";

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
 <div className="pt-5">
        <div className="flex justify-between items-center">
        <h2 className="pb-0">Casual Shoe</h2>
        <Link to={""}>
        
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 strokeWidth="2" stroke="currentColor" className="size-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
        </Link>
        </div>
        <div className="grid grid-cols-4 justify-center gap-2 items-center my-5">
        {
                    // eslint-disable-next-line react/prop-types
                    shoes?.slice(0,6)?.map((shoe,index)=><SingleProduct shoe={shoe} key={index}/>)
                }
            </div>
            <div className="flex justify-end items-end">
              <button className="btn_ghost flex gap-2 items-center">
                <Link to={"/searchProduct/category/casual_shoes"}>See More</Link>
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
                </span>

              </button>
            </div>
       </div>
        </div>:<div className="p-5">

        </div>
      }

      {/* Formal shoe */}
      
        {/* // eslint-disable-next-line react/prop-types */}
       <div>
        <figure className="flex justify-center">
        <img src="https://toffpark.com/wp-content/uploads/2024/06/Toffpark-Shoe-Banners-1.jpg" 
        className=" scale-75 w-[90%] h-[250px]"/>
        </figure>
        {casualData?.length?<div>
 <div className="pt-5">
 <div className="flex justify-between items-center">

        <h2 className="pb-0">Formal Shoe</h2>
        <Link to={""}>
        
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 strokeWidth="2" stroke="currentColor" className="size-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
        </Link>
        </div>
        <div className="grid grid-cols-4 justify-center gap-2 items-center my-5">
        {
                    // eslint-disable-next-line react/prop-types
                    formalData?.slice(0,6)?.map((shoe,index)=><SingleProduct shoe={shoe} key={index}/>)
                }
            </div>
       
            <div className="flex justify-center items-end">
              <button className="btn_ghost flex gap-2 items-center">
                <Link to={"/searchProduct/category/formal_shoes"}>See More</Link>
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
                </span>

              </button>
            </div>
       </div>

        </div>:<div className="p-5">

        </div>
         }
       </div>
     

      {/* Loafer Shoe */}
      {
        // eslint-disable-next-line react/prop-types
        casualData?.length?<div>
 <div className="pt-5">
 <div className="flex justify-between items-center">
        <h2 className="pb-0">Loafer Shoe</h2>
        <Link to={""}>
        
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 strokeWidth="2" stroke="currentColor" className="size-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
        </Link>
        </div>
        <div className="grid grid-cols-4 justify-center gap-2 items-center my-5">
        {
                    // eslint-disable-next-line react/prop-types
                    loaferData?.slice(0,6)?.map((shoe,index)=><SingleProduct shoe={shoe} key={index}/>)
                }
            </div>
            <div className="flex justify-center items-end">
              <button className="btn_ghost flex gap-2 items-center">
                <Link to={"http://localhost:5173/searchProduct/category/loafers"}>See More</Link>
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
                </span>

              </button>
            </div>
       
       </div>
        </div>:<div className="p-5">

        </div>
      }
      {/* Boots */}

      {
        // eslint-disable-next-line react/prop-types
        casualData?.length?<div>
 <div className="py-5">
 <div className="flex justify-between items-center">
        <h2 className="pb-0">Special Boot Shoe</h2>
        <Link to={""}>
        
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 strokeWidth="2" stroke="currentColor" className="size-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
        </Link>
        </div>
        <div className="grid grid-cols-4 justify-center gap-2 items-center my-5">
        {
                    // eslint-disable-next-line react/prop-types
                    loaferData?.slice(0,6)?.map((shoe,index)=><SingleProduct shoe={shoe} key={index}/>)
                }
            </div>
            <div className="flex justify-end items-end">
              <button className="btn_ghost flex gap-2 items-center">
                <Link to={"http://localhost:5173/searchProduct/category/boot"}>See More</Link>
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
                </span>

              </button>
            </div>
       
       </div>
        </div>:<div className="p-5">

        </div>
      }
      </>
    );
};

export default TendingProducts;