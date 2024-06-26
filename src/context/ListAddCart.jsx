import{ createContext, useContext, useState } from 'react';



export const orderCartContext = createContext(null);
// eslint-disable-next-line react/prop-types
const ListAddCart = ({children}) => {
    const[cartList,setCart]=useState(JSON.parse(localStorage.getItem('cartItemList'))||[]);
    const myCart = useContext(orderCartContext);
    console.log(myCart)
    return <orderCartContext.Provider value={{cartList,setCart}}>
        {children}
    </orderCartContext.Provider>;
};

export default ListAddCart;