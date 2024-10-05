import React from 'react';
import { useAppSelector } from '../../../redux/hooks';
import { Link } from 'react-router-dom';

const AccountInfo = () => {
    const{first_name,last_name,contact_number1,contact_number2,email,date_of_birth,gender}=useAppSelector(state=>state.userR)
    console.log(first_name,last_name,email,contact_number1)
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
                                {first_name?first_name:<span className='text-gray-600'>Enter your first name</span>}
                            </p>
                        </li>
                        <li className='py-3 border-b-2 border-b-gray-300  space-y-4'>
                            <p className='text-md text-gray-400'>Last Name</p>
                            <p className='text-md font-medium text-white'>
                            {last_name?last_name:<span className='text-gray-600'>Enter your last name</span>}
                            </p>
                        </li>
                        <li className='py-3 border-b-2 border-b-gray-300  space-y-4'>
                            <p className='text-md text-gray-400'>Email</p>
                            <p className='text-md font-medium text-white'>{email}</p>
                        </li>
                        <li className='py-3 border-b-2 border-b-gray-300  space-y-4'>
                            <p className='text-md text-gray-400'>Contact Number</p>
                            <p className='text-md font-medium text-white'>
                            {contact_number1?contact_number1:<span className='text-gray-600'>Enter your contact number</span>}
                            </p>
                        </li>
                        <li className='py-3 border-b-2 border-b-gray-300  space-y-4'>
                            <p className='text-md text-gray-400'> Alternative Contact Number</p>
                            <p className='text-md font-medium text-white'>
                            {contact_number2?contact_number2:<span className='text-gray-600'>Enter your contact number</span>}
                            </p>
                        </li>
                        <li className='py-3 border-b-2 border-b-gray-300  space-y-4'>
                            <p className='text-md text-gray-400'>Date of Birth</p>
                            <p className='text-md font-medium text-white'>
                            {date_of_birth?date_of_birth:<span className='text-gray-600'>Enter your date of birth</span>}
                            </p>
                        </li>
                        <li className='py-3 border-b-2 border-b-gray-300  space-y-4'>
                            <p className='text-md text-gray-400'>Gender</p>
                            <p className='text-md font-medium text-white'>
                            {gender?gender:<span className='text-gray-600'>Enter your gender</span>}
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AccountInfo;