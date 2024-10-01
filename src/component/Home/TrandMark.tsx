import React, { useState } from "react";

import trandmarkImage from "../../assets/trandmarkbg.png";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/CartSlice";
type TTrademarkShoeProducts={
    id: number,
    name: string,
    brand: string,
    subTitle:string,
    category: string,
    description: string,
    price: number,
    sizes: number[],
    colors: string[],
    stock: number,
    imageUrl: string,
    trademarkStatus: string,
    rating: number,
}
export const trademarkShoeProducts = [
    {
      id: 1,
      pd_name: "Classic 2.5 Edge Shoes",
      subTitle:"Sneakers 2024 Limited Edition",
      pd_brand: "Nike",
      pd_category: "Men",
      pd_description: "A cutting-edge athletic shoe with Nike's signature AirMax technology for maximum comfort and style.",
      pd_price: 150.00,
      sizes: [7, 8, 9, 10, 11, 12],
      colors: ["Black", "White", "Red"],
      stock: 30,
      pd_image: "https://i.ibb.co.com/mykRpKR/fation-shoe-1.png",
      trademarkStatus: "Registered",
      rating: 4.9
    },
    {
      id: 2,
      pd_name: "Ultraboost Infinity",
      pd_brand: "Adidas",
      subTitle:"Sneakers 2024 Limited Edition",
      pd_category: "Women",
      pd_description: "Designed for high performance with Adidas' Ultraboost technology, delivering superior energy return and cushioning.",
      pd_price: 180.00,
      sizes: [6, 7, 8, 9],
      colors: ["Blue", "Pink", "Gray"],
      stock: 20,
      pd_image: "https://i.ibb.co.com/VH7YNh5/fation-shoe-4.png",
      trademarkStatus: "Registered",
      rating: 4.8
    },
    {
      id: 3,
      pd_name: "Classic Chuck Taylor",
      pd_brand: "Converse",
      subTitle:"Sneakers 2024 Limited Edition",
      pd_category: "Unisex",
      pd_description: "Iconic Converse Chuck Taylor All-Star with the classic design loved by all generations.",
      pd_price: 60.00,
      sizes: [5, 6, 7, 8, 9, 10],
      colors: ["White", "Black", "Navy"],
      stock: 50,
      pd_image: "https://i.ibb.co.com/SRY1xmx/fation-shoe-3.png",
      trademarkStatus: "Registered",
      rating: 4.7
    },
    {
      id: 4,
      pd_name: "Yeezy Boost 350",
      pd_brand: "Adidas",
      subTitle:"Sneakers 2024 Limited Edition",
      pd_category: "Men",
      pd_description: "Designed by Kanye West, the Yeezy Boost 350 provides an ultra-modern design with supreme comfort.",
      pd_price: 220.00,
      sizes: [8, 9, 10, 11],
      colors: ["Beige", "Gray", "Black"],
      stock: 10,
      pd_image: "https://i.ibb.co.com/hBC5rMD/fation-shoe-2.png",
      trademarkStatus: "Pending",
      rating: 4.9
    },

]
const TrandMark = () => {
    const [singleProducts, setSingleProducts]=useState<TTrademarkShoeProducts|any>(trademarkShoeProducts[0])
    const dispatch=useDispatch()
   const HandleTrandMarkProducts=(id)=>{
        const filteredProduct= trademarkShoeProducts.find(pd=>pd.id===id)
        setSingleProducts(filteredProduct)
        console.log(filteredProduct)
   }
   const HandleAddToCart=()=>{
    dispatch(addToCart(singleProducts))
}
  return (
    <div>
      <div className=" my-2 text-center mt-5">
        <div className="inline-block py-5">
          <h1 className="md:text-9xl space-x-4 font-lato font-bold ">Trendmark</h1>
          <p className="text-xl font-semibold text-right">
            Fation 2024 Limited Edition
          </p>
        </div>
        <div className="flex justify-between relative pt-5">
        <figure>
          <img
            className="transition pl-5 animate-pulse delay-1000 duration-1000"
            src={trandmarkImage}
          />
        </figure>
        <div className="p-2 hidden md:block">
        <div className="card w-[30%] pt-2 px-2 bg-[#181818]  text-white absolute 
        right-0 z-20 
      p-0  w-84 z-5">
        <figure className="w-full ">
            <img className="w-full h-[250px]" src={singleProducts?.pd_image} alt="Product"/>
        </figure>
        <div className="card-body px-4 space-y-2 rounded">
        <h3 className="card-title font-montserrat">
        { singleProducts?.pd_name}
        <p className="badge bg-primary text-white">{singleProducts?.pd_brand}</p>
        </h3>
        <p  className="text-sm font-semibold text-left uppercase">{singleProducts?.subTitle}</p>
        <p className='text-justify space-x-4'>{singleProducts?.pd_description.slice(0,100)}..</p>
        <div className=" space-y-2">
            <p className='text-lg font-lato font-[400] flex items-center'>Available Size: {
                singleProducts?.sizes?.map((size)=> <span key={size} className=' p-2 '>{size}</span>)
               }
                
                </p>
            <div>
          <div className='flex items-center'>
          {
            [...Array(5)].map((item)=><span key={item}>
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
</svg>
            </span>)
           }
          </div>

            </div>
      
       <p className="text-xl text-left font-semibold font-lato">{ singleProducts?.pd_price}
         <span className="font-medium">USD</span></p> 

       <button onClick={HandleAddToCart} className=" cart_button uppercase">Add to Cart</button>

   
        </div>
        <div>
        </div>

        </div>
        
        </div> 
        </div>
        </div>
        <div className="h-[200px] hidden  pl-4  bg-[#181818] md:flex items-center z-10">
          <div onClick={()=>HandleTrandMarkProducts(1)} className=" p-10 h-full  text-white text-left hover:bg-white w-[200px] cursor-pointer hover:text-black">
            <div  className="flex  justify-between text-black items-center">
              <p>01</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-medium font-bold">TarandMark</h3>
            <p>Meteor Lace-Up Running Shoes</p>
          </div>
          <div onClick={()=>HandleTrandMarkProducts(2)} className=" p-10 h-full  text-white text-left hover:bg-white w-[200px] cursor-pointer hover:text-black">
            <div  className="flex  justify-between text-black items-center">
               <p>02</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-medium font-bold">TarandMark</h3>
            <p>Omax Lace-Up Sports Shoes</p>
          </div>
          <div onClick={()=>HandleTrandMarkProducts(3)} className=" p-10 h-full  text-white text-left hover:bg-white w-[200px] cursor-pointer hover:text-black">
            <div  className="flex  justify-between text-black items-center">
              <p>03</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-medium font-bold">TarandMark</h3>
            <p>Barley Textured Panelled Shoes</p>
          </div>
          <div onClick={()=>HandleTrandMarkProducts(4)} className=" p-10 h-full  text-white text-left hover:bg-white w-[200px] cursor-pointer hover:text-black">
            <div  className="flex  justify-between text-black items-center">
               <p>04</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-medium font-bold">TarandMark</h3>
            <p>Loced Joggers for Men</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrandMark;
