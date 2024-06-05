import { useParams } from 'react-router-dom';
import SingleProduct from '../component/Home/SingleProduct';
import { useEffect, useState } from 'react';

const SearchItem = () => {
    const {category, searchValue}=useParams();
   
    const[ProductData,setProductData]=useState([])
    
    useEffect(()=>{
        fetch(`http://localhost:3000/product/?searchValue=${searchValue}&searchCategory=${category}`)
        .then(res=>res.json())
        .then(data=>setProductData(data))
    },[searchValue,category])
    console.log(ProductData)
    return (
        <div >
                
            {

                    ProductData.length>0?
                    <div className="p-5 grid-cols-1 grid md:grid-cols-3 gap-10 justify-center align-to items-start">
                {
                    ProductData?.map((shoe)=>
                    <SingleProduct
                     shoe={shoe} key={shoe._id}
                     />)
                }
               
                </div>:
                    <div>
                    <figure className='w-full flex justify-center'>
                        <img  src='https://img.freepik.com/premium-vector/vector-2-style-grungy-red-rubber-stamp-out-stock_9834-1331.jpg?size=626&ext=jpg&ga=GA1.2.291005766.1716642525&semt=ais_user'/>
                    </figure>
                    </div>
                }
            </div>
    );
};

export default SearchItem;