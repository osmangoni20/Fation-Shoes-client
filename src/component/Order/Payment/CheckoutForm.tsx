

import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import { orderPostApi } from '../ShippingAddress';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import toast from "react-hot-toast";
import { clearCart } from '../../../redux/features/CartSlice';
import { useNavigate } from 'react-router-dom';
import Modal from '../../shared/Modal';

const CheckoutForm = ({elements,stripe}) => {


    const submitOrderData=useAppSelector(state=>state.orderR)
    const dispatch=useAppDispatch()
    const navigate=useNavigate()
    const[isModel,setModel]=useState(false);

    const isClose=()=>{
        setModel(false)
    }
    const isConfirmFromModel=()=>{
        setModel(false)
    }
const handleSubmit= async(e)=>{
    e.preventDefault()
    setModel(true)
    if(!isModel){
        if(!stripe||!elements){
            return
        }
    
        const card=elements.getElement(CardElement)
        if(card===null){return}
    
        const {error, paymentMethod}=await stripe.createPaymentMethod({
            type:'card',
            card
        })
        if(!error){
            
            orderPostApi(submitOrderData).then(res=>res.json())
            .then(async(data: any)=>{
                console.log(data)
                
                toast.success("Order Success")
                dispatch(clearCart())
                navigate('/')
            })
            console.log(paymentMethod)
        }else{
            console.log(error)
        }
    }
   
}
    return (
        <div>
            <Modal isClose={isClose} isOpen={isModel} isSubmit={isConfirmFromModel}>
                <Modal.Header>Are You Confirm Order</Modal.Header>
                <div className="flex justify-center">
                <Modal.Submit>Yes</Modal.Submit>
                </div>
            </Modal>
            <form onSubmit={handleSubmit}>
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
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
        </div>
       
    );
};

export default CheckoutForm;