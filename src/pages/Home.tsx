import Banner from "../component/Home/Banner";
import Product, { TProductProps } from "../component/Home/Product";
import OurService from "../component/Home/OurService";
import Testimonial from "../component/Home/Testimonial";
import Add from "../component/Home/Add";
import TendingProducts from "../component/Home/TendingProducts";
import { useEffect, useState } from "react";
import React from "react";
import ProductCategory from "../component/Home/ProductCategory";
import Loader from "../component/shared/Loader";
import TrandMark from "../component/Home/TrandMark";
import { useAppSelector } from "../redux/hooks";



const Home = () => {
    const [data,setShoe]=useState<TProductProps>()
   const [isLoading, setIsLoading]=useState(true)
   const {isAdmin}=useAppSelector(state=>state.userR)
    useEffect(()=>{
        fetch('https://fationshoe-server.vercel.app/product').then(res=>res.json())
        .then(data=>{
        setShoe(data)
        setIsLoading(false)
    })
    },[])
    return (
        <div className="ghost_bg z-10">
     
        <Banner/>
        <OurService/>
        <TrandMark/>
        {
            isLoading?<Loader/>:<Product shoes={data}/>
        }
 
        <ProductCategory/>
       {
        isLoading?<Loader/>:<TendingProducts shoes={data}/>
       } 
    
        {isAdmin===false&&<Testimonial title={"Client's Review"}/>}
    
        </div>
    );
};

export default Home;