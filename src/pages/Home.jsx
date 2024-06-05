import Banner from "../component/Home/Banner";
import Product from "../component/Home/Product";
import OurService from "../component/Home/OurService";
import Review from "../component/Home/Review";
import Add from "../component/Home/Add";
import TendingProducts from "../component/Home/TendingProducts";
import { useEffect, useState } from "react";



const Home = () => {
    const [data,setShoe]=useState([])
   
    useEffect(()=>{
        fetch('http://localhost:3000/product').then(res=>res.json())
        .then(data=>setShoe(data))
    },[])
    return (
        <div>
     
        <Banner/>
       
        <Product shoes={data}/>
        <Add/>
       <TendingProducts shoes={data}/>
         <OurService/>
        
        <Review/>
    
        </div>
    );
};

export default Home;