    import React from "react";
import SingleProductCardDashboard from "../../component/Dashboard/SingleProductCardDashboard";
    import { useEffect, useState } from "react";
import { TProductInfo } from "../../component/Home/SingleProduct";
import Loader from "../../component/shared/Loader";


    const AllProducts = () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        
        // eslint-disable-next-line no-undef
        const [shoesData,setShoesData]=useState<TProductInfo[]>([]);
        
        useEffect(()=>{
            fetch('https://fation-shoes.onrender.com/product')
            .then(res=>res.json())
            .then(data=>setShoesData(data))
        })
        const HandleDelete=(id)=>{
            console.log("delete id",id);
            const UpdateData=shoesData.filter((item)=>item?._id!==id);
            setShoesData(UpdateData);
        }
        return (
            <div >
                <div className="grid grid-cols-1 md:mt-16 md:grid-cols-2 
                 md:gap-5 lg:grid-cols-3 gap-1 justify-center items-start">
                {
                    shoesData?.map((shoe)=><SingleProductCardDashboard
                     shoe={shoe} key={shoe._id}
                     onDelete={HandleDelete}/>)
                }
                {
                    shoesData?.length<0&&<Loader/>
                }
            </div>
            </div>
        );
    };

    export default AllProducts;