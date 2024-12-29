import React, { useState } from 'react';

const Pagination = ({params}) => {

    const {currentPage,itemsPerPage, setItemPerPage, setCurrentPage, totalPages}=params
    console.log(itemsPerPage, currentPage)
    const totalPage=totalPages
    const pages=[...Array(totalPage).keys()];
    const handleItemPerPage=(e)=>{
        setItemPerPage(parseInt(e.target.value))
        setCurrentPage(0)
    }
    const handleCurrentPage=(value)=>{
    
        setCurrentPage(parseInt(value))
    }
    const handlePrevPage=()=>{
        if(currentPage>0){
            setCurrentPage(currentPage-1)
        }
    }
    const handleNextPage=()=>{

        if(currentPage<totalPage-1){
            setCurrentPage(currentPage+1)
        }
        else{
            setCurrentPage(0)
        }
        console.log(currentPage,totalPage)
    }
    
    return (
        <div className='my-10 flex justify-center'>
           {
            totalPage>0&&<div className='flex items-center'>
            <button className='px-1 bg-gray-400' onClick={()=>handlePrevPage()}> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
   <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
 </svg>
 
             </button>
             {
                 pages.map(page=><button className={`${currentPage===page?"bg-[#207F99] text-white":"bg-gray-200"} rounded-full  px-2  mx-1 text-center`} onClick={()=>handleCurrentPage(page)}>{page+1}</button>)
             }
             <button className='bg-gray-400' onClick={()=>handleNextPage()}> 
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
   <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
 </svg>
 
              </button>
              <div>
                 <select className='h-[35px] w-[40px] mx-2 p-1 focus:border-gray-100 focus:bg-none bg-none border-2 border-gray-400' onChange={handleItemPerPage} value={itemsPerPage}>
                     <option value={5}>5</option>
                     <option value={10}>10</option>
                     <option value={15}>15</option>
                     <option value={20}>20</option>
                     <option value={40}>40</option>
                 </select>
              </div>
            </div>
           }
        </div>
    );
};

export default Pagination;