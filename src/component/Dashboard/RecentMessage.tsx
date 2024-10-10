import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TProductInfo } from '../Home/SingleProduct';

const RecentMessage = () => {
   
    const [userMessage,setNewMessage]=useState<any[]>([])
    const [isLoading, setIsLoading]=useState(true)
     useEffect(()=>{
         fetch('https://fation-shoes.onrender.com/message').then(res=>res.json())
         .then(data=>{
         setNewMessage(data)
         setIsLoading(false)
     })
     },[])
    return (
        <div>
            <div className='min-w-md my-10 pb-6 bg-[#171A3B] text-white rounded-md p-3'>
                <h3 className='text-2xl py-4'>Recent Message</h3>
                <table className='w-full h-full space-y-4 '>
                    <thead className='py-5'>
                        <th>Date</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Message</th>

                    </thead>
                    <tbody className='text-center '>
                    {
                        userMessage?.reverse().slice(0,10).map((message,index)=>{
                            return(
                               message?.status==="pending"&& <tr className='py-2 border-b-2 h-[50px] space-y-4 text-sm font-medium text-gray-200' key={message?._id}>
                               <td>{message?.date}</td>
                               <td>{message?.user_name}</td>
                               <td>{message?.email}</td>
                               <td>{message?.user_message}</td>
                               
                           </tr>
                            )
                        })
                    }
                    {
                       userMessage?.length<0&&<p className='text-medium font-normal'>No Message Found</p>
                    }
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RecentMessage;