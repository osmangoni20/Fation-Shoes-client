    import React from "react";
import SingleProductCardDashboard from "../../component/Dashboard/SingleProductCardDashboard";
    import { useEffect, useState } from "react";
import { TProductInfo } from "../../component/Home/SingleProduct";
import Loader from "../../component/shared/Loader";
import Pagination from "../../component/shared/Pagination";


    const AllProducts = () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        
        // eslint-disable-next-line no-undef
        const [shoesData,setShoesData]=useState<TProductInfo[]>([]);
        const [itemsPerPage, setItemPerPage]=useState(5);
        const [currentPage, setCurrentPage]=useState(0)

        useEffect(()=>{
            fetch(`https://fationshoe-server.vercel.app/product?page=${currentPage}&size=${itemsPerPage}`)
            .then(res=>res.json())
            .then(data=>setShoesData(data))
        },[itemsPerPage,currentPage])
        const HandleDelete=(id)=>{
            console.log("delete id",id);
            const UpdateData=shoesData.filter((item)=>item?._id!==id);
            setShoesData(UpdateData);
        }
        const paginationParamsData={dataSize:shoesData.length, itemsPerPage, currentPage, setItemPerPage,  setCurrentPage}
        return (
            <div >
                <div className="grid grid-cols-1 md:mt-16 md:grid-cols-2 
                 md:gap-5 lg:grid-cols-2 xl:grid-cols-3 gap-1 mx-auto items-start">
                {
                    shoesData?.map((shoe)=><SingleProductCardDashboard
                     shoe={shoe} key={shoe._id}
                     onDelete={HandleDelete}/>)
                }
                {
                    shoesData?.length<0&&<Loader/>
                }
            </div>
            {
                shoesData&&<Pagination params={paginationParamsData}/>
            }
            </div>
        );
    };

    export default AllProducts;