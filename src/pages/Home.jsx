import { useLoaderData } from "react-router-dom";
import Accordion from "../component/Home/Accordion";
import Banner from "../component/Home/Banner";
import Product from "../component/Home/Product";



const Home = () => {
    const data=useLoaderData();
    return (
        <div>
     
        <Banner/>
        <Product shoes={data}/>
        <Accordion/>
    
        </div>
    );
};

export default Home;