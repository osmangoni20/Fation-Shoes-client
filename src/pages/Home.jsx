import { useLoaderData } from "react-router-dom";
import Banner from "../component/Home/Banner";
import Product from "../component/Home/Product";
import OurService from "../component/Home/OurService";
import Review from "../component/Home/Review";
import Add from "../component/Home/Add";
import TendingProducts from "../component/Home/TendingProducts";



const Home = () => {
    const data=useLoaderData();
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