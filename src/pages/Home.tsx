import Banner from "../component/Home/Banner";
import Product from "../component/Home/Product";
import OurService from "../component/Home/OurService";
import Review from "../component/Home/Review";
import Add from "../component/Home/Add";
import TendingProducts from "../component/Home/TendingProducts";
import { useEffect, useState } from "react";
import React from "react";
import ProductCategory from "../component/Home/ProductCategory";
import Loader from "../component/shared/Loader";



const Home = () => {
    const [data,setShoe]=useState([])
   const [isLoading, setIsLoading]=useState(true)
    useEffect(()=>{
        fetch('https://fation-shoes.onrender.com/product').then(res=>res.json())
        .then(data=>{
        setShoe(data)
        setIsLoading(false)
    })
    },[])
    return (
        <div className="ghost_bg z-10">
     
        <Banner/>
        <OurService/>
        {
            isLoading?<Loader/>:<Product shoes={data}/>
        }
        {/* <Add/> */}
        <ProductCategory/>
       {
        isLoading?<Loader/>:<TendingProducts shoes={data}/>
       }
    
        <Review/>
    
        </div>
    );
};

export default Home;