import  { useContext } from 'react';
import { orderCartContext } from '../context/ListAddCart';

const useListAddCart = () => {
   
    const cartList=useContext(orderCartContext);
    return cartList;
};

export default useListAddCart;