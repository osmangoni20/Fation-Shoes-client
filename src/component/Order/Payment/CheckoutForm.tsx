

import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import toast from "react-hot-toast";
import { clearCart } from '../../../redux/features/CartSlice';
import { useNavigate } from 'react-router-dom';
import Modal from '../../shared/Modal';
import { orderPostApi } from './orderApi';
import './CheckoutForm.css';
const CheckoutForm = () => {

    const stripe = useStripe();
    const elements = useElements();
    const submitOrderData=useAppSelector(state=>state.orderR)
    const dispatch=useAppDispatch()
    const navigate=useNavigate()
    const[isModel,setModel]=useState(false);

    const isClose=()=>{
        setModel(false)
    }
    const isConfirmFromModel= async()=>{
        setModel(false)
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            return;
          }
    
        const card=elements.getElement(CardElement)
        if(card===null){return}
    
        const {error, paymentMethod}=await stripe.createPaymentMethod({
            type:'card',
            card
        })
        if(!error){
            // orderPostApi body from CheckoutSummary
            orderPostApi(submitOrderData).then(res=>res.json())
            .then(async(data: any)=>{
                console.log(data)
                
                toast.success("Order Success")
                dispatch(clearCart())
                navigate('/')
            }).catch(error=>console.log(error))
            console.log(paymentMethod)
        }else{
            console.log(error)
        }
    }
const handleSubmit= async(e)=>{
    e.preventDefault()
    setModel(true)
}
    return (
       <div className="h-screen w-[50%] flex justify-center items-center m-auto">
         <div className='w-full text-center'>
            <Modal isClose={isClose} isOpen={isModel} isSubmit={isConfirmFromModel}>
                <Modal.Header>Are You Confirm Order</Modal.Header>
                <div className="flex justify-center">
                <Modal.Submit>Yes</Modal.Submit>
                </div>
            </Modal>
            <h2 className='text-7xl text-center py-1 font-sans font-semibold'>Payment</h2>
            <p className='text-xl font-medium'>Submit Your Cart</p>
            <form  onSubmit={handleSubmit} className='my-12 payment-form'>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
       
        <div className='flex justify-center my-6'>
        <button type="submit" disabled={!stripe} className=" text-white py-2 btn_secondary cursor-pointer ">
                            Confirm Order
        </button>
        </div>
      </form>
        </div>
       </div>
       
    );
};

export default CheckoutForm;