import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../../redux/hooks';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';


const AccountInfo = () => {
    const [userData,setUserData]=useState<any>()
    const {user}:any=useAuth()
    useEffect(() => {
        fetch(`https://fationshoe-server.vercel.app/user/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setUserData(data)
        })
      }, []);
  
      console.log(console.log(userData))

    return (
        <div>
             <div className='min-w-md my-10 p-6 bg-[#171A3B] text-white rounded-md'>
                <div className='flex justify-between items-center  '>
                    <h3 className='text-2xl '>Account Information</h3>
                    <Link to={"/dashboard/user_profile/edit_profile"}>
                    <button className='px-4 py-2 rounded-md border-2 border-gray-100 text-gray-50'>Edit</button>
                    </Link>
                </div>
                <div>
                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    
                        <li className='py-3 border-b-2 border-b-gray-300  space-y-4'>
                            <p className='text-md text-gray-400'>First Name</p>
                            <p className='text-md font-medium text-white'>
                                {userData?.first_name?userData?.first_name:<span className='text-gray-600'>Enter your first name</span>}
                            </p>
                        </li>
                        <li className='py-3 border-b-2 border-b-gray-300  space-y-4'>
                            <p className='text-md text-gray-400'>Last Name</p>
                            <p className='text-md font-medium text-white'>
                            {userData?.last_name?userData?.last_name:<span className='text-gray-600'>Enter your last name</span>}
                            </p>
                        </li>
                        <li className='py-3 border-b-2 border-b-gray-300  space-y-4'>
                            <p className='text-md text-gray-400'>Email</p>
                            <p className='text-md font-medium text-white'>{user?.email}</p>
                        </li>
                        <li className='py-3 border-b-2 border-b-gray-300  space-y-4'>
                            <p className='text-md text-gray-400'>Contact Number</p>
                            <p className='text-md font-medium text-white'>
                            {userData?.contact_number1?userData?.contact_number1:<span className='text-gray-600'>Enter your contact number</span>}
                            </p>
                        </li>
                        <li className='py-3 border-b-2 border-b-gray-300  space-y-4'>
                            <p className='text-md text-gray-400'> Alternative Contact Number</p>
                            <p className='text-md font-medium text-white'>
                            {userData?.contact_number2?userData?.contact_number2:<span className='text-gray-600'>Enter your contact number</span>}
                            </p>
                        </li>
                        <li className='py-3 border-b-2 border-b-gray-300  space-y-4'>
                            <p className='text-md text-gray-400'>Date of Birth</p>
                            <p className='text-md font-medium text-white'>
                            {userData?.date_of_birth?userData?.date_of_birth:<span className='text-gray-600'>Enter your date of birth</span>}
                            </p>
                        </li>
                        <li className='py-3 border-b-2 border-b-gray-300  space-y-4'>
                            <p className='text-md text-gray-400'>Gender</p>
                            <p className='text-md font-medium text-white'>
                            {userData?.gender?userData?.gender:<span className='text-gray-600'>Enter your gender</span>}
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AccountInfo;