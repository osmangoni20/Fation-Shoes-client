import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TProductInfo } from '../Home/SingleProduct';

const UserMessage = () => {
   
    const [userMessage,setNewMessage]=useState<any[]>([])
    const [isLoading, setIsLoading]=useState(true)
     useEffect(()=>{
         fetch('https://fation-shoes.onrender.com/message').then(res=>res.json())
         .then(data=>{
         setNewMessage(data)
         setIsLoading(false)
     })
     },[])
     const HandleStatus=(status,id)=>{
        console.log(status,id)
        fetch(`https://fation-shoes.onrender.com/message/${id}`,{
          method:"PATCH",
          headers:{
                    "Content-type":"application/json"
            },
          body:JSON.stringify({status})
        })
      }
    return (
        <div>
            <div className='min-w-md my-10 pb-6 bg-[#171A3B] text-white rounded-md p-3'>
                <h3 className='text-2xl py-4'>User Message</h3>
                <table className='w-full h-full space-y-4 '>
                    <thead className='py-5'>
                        <th>Date</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th>Action</th>

                    </thead>
                    <tbody className='text-center '>
                   
                    {
                        userMessage?.reverse().map((message,index)=>{
                            return(
                               <tr className='py-2 border-b-2 h-[50px] space-y-4 text-sm font-medium text-gray-200' key={message?._id}>
                               <td>{message?.date}</td>
                               <td>{message?.user_name}</td>
                               <td>{message?.email}</td>
                               <td>{message?.user_message}</td>
                               <td>
                    {message.status === "pending" && (
                      <select onChange={(e)=>HandleStatus(e?.target?.value,message._id)} className="text-white bg-black rounded-md p-2">
                         <option value="" disabled selected>Select Status</option>
                         <option value={"pending"}>Pending</option>
                        <option value={"done"}>Done</option>
                      </select>
                    )}
                  </td>
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

export default UserMessage;