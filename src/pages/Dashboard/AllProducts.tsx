    import React from "react";
import ProductTable from "../../component/Dashboard/ProductTable";
    import { useEffect, useState } from "react";
import { TProductInfo } from "../../component/Home/SingleProduct";
import Loader from "../../component/shared/Loader";
import Pagination from "../../component/shared/Pagination";


type TAllProducts = {
    data: TProductInfo[];             
    currentPage: number;   
    totalPages: number;    
    totalItems: number;   
  };

    const AllProducts = () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        
        // eslint-disable-next-line no-undef
        const [shoesData,setShoesData]=useState<TAllProducts|undefined>();
        const [itemsPerPage, setItemPerPage]=useState(5);
        const [currentPage, setCurrentPage]=useState(0)
        const [isDeleteItems, setIsDeleteItems]=useState(false)
        useEffect(()=>{
            fetch(`https://fationshoe-server.vercel.app/product?page=${currentPage}&size=${itemsPerPage}`)
            .then(res=>res.json())
            .then(data=>setShoesData(data))
        },[itemsPerPage,currentPage,isDeleteItems])
        const HandleDelete=(id)=>{
            setIsDeleteItems(!isDeleteItems)
            // const UpdateData=shoesData?.data?.filter((item)=>item?._id!==id);
            // setShoesData(UpdateData);
        }
        const paginationParamsData={totalPages:shoesData?.totalPages, itemsPerPage, currentPage, setItemPerPage,  setCurrentPage}
        return (
            <div >
                <div className='min-w-md my-10 pb-6 bg-[#171A3B] text-white rounded-md p-3'>
                    
                {
                    <ProductTable
                    shoe={shoesData?.data} 
                    onDelete={HandleDelete}/>
                }
                {
                    Number(shoesData?.data?.length)<0 &&<Loader/>
                }
            </div>
            {
                shoesData&&<Pagination params={paginationParamsData}/>
            }
            </div>
        );
    };

    export default AllProducts;