import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TProductInfo } from '../Home/SingleProduct';

const UserMessage = () => {
   
    const [userMessage,setNewMessage]=useState<any[]>([])
    const [isLoading, setIsLoading]=useState(true)

    const shortingMessageData=(data)=>{
      const shortData:any[]=[]
      data.forEach(element => {

        if(element.status==="pending"){
          shortData.unshift(element)
        }
        else{
          shortData.push(element)
        }
      });

      setNewMessage(shortData)
    }
     useEffect(()=>{

      const fetchData= async()=>{
         try{

          const response=await axios.get("https://fationshoe-server.vercel.app/message")
          const data=response.data
          shortingMessageData(data)
          setIsLoading(false)
         }
         catch(error){
          console.log(error.message)
         }
      }
      fetchData()
    //      fetch('https://fationshoe-server.vercel.app/message').then(res=>res.json())
    //      .then(data=>{
    //      setNewMessage(data)
    //      setIsLoading(false)
    //  })
     },[])
     const HandleStatus=(status,id)=>{
        console.log(status,id)
        fetch(`https://fationshoe-server.vercel.app/message/${id}`,{
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
                        userMessage?.map((message,index)=>{
                            return(
                               <tr className='py-2 border-b-2 h-[50px] space-y-4 text-sm font-medium text-gray-200' key={message?._id}>
                               <td>{message?.date}</td>
                               <td>{message?.user_name}</td>
                               <td>{message?.email}</td>
                               <td>{message?.user_message}</td>
                               <td>
                    {message.status === "pending"? (
                      <select onChange={(e)=>HandleStatus(e?.target?.value,message._id)} className="text-white bg-black rounded-md p-2">
                         <option value="" disabled selected>Select Status</option>
                         <option value={"pending"}>Pending</option>
                        <option value={"done"}>Done</option>
                      </select>
                    ):"Done"}
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