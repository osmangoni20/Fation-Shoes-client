import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TProductInfo } from '../Home/SingleProduct';

const RecentMessage = () => {
   
    const [userMessage,setNewMessage]=useState<any[]>([])
    const [isLoading, setIsLoading]=useState(true)
     useEffect(()=>{
         fetch('https://fationshoe-server.vercel.app/message').then(res=>res.json())
         .then(data=>{
         setNewMessage(data)
         setIsLoading(false)
     })
     },[])
     console.log(userMessage)
    return (
        <div>
            <div className='min-w-md my-10 pb-6 bg-[#171A3B] text-white rounded-md p-3'>
                <h3 className='text-2xl py-4'>Recent Message</h3>
                <table className='w-full h-full space-y-4 border-collapse'>
                    <thead className='py-5'>
                        <th>Date</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th>Status</th>
                    </thead>
                    <tbody className='text-center '>
                    {
                        userMessage?.reverse().slice(0,10).map((message,index)=>{
                            return(
                               <tr className='transition duration-300 py-2 border-b-2 h-[50px] space-y-4 text-sm font-medium text-gray-200' key={message?._id}>
                               <td>{message?.date}</td>
                               <td>{message?.user_name}</td>
                               <td>{message?.email}</td>
                               <td>{message?.user_message}</td>
                               <td>{message?.status}</td>
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