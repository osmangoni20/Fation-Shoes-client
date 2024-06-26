import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { orderCartContext } from "../../context/ListAddCart";
const UserReview = [
  {
    id: "1",
    user_name: "Mohamad Abdul Kader",
    user_review_time: "6/25/2024",
    user_image:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    user_review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, laborum modi numquam laboriosam a porro quas repellendus, placeat cum error saepe consectetur explicabo unde. Minima, aperiam. Quisquam dolores adipisci distinctio",
  },
  {
    id: "2",
    user_name: "Abdur Rahman Rahat",
    user_review_time: "6/25/2024",
    user_image:
      "https://img.freepik.com/premium-photo/concept-people-with-young-man-yellow-background_185193-81811.jpg?size=626&ext=jpg&ga=GA1.1.291005766.1716642525&semt=sph",
    user_review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, laborum modi numquam laboriosam a porro quas repellendus, placeat cum error saepe consectetur explicabo unde. Minima, aperiam. Quisquam dolores adipisci distinctio",
  },
  {
    id: "3",
    user_name: "Tabassum Khatun",
    user_review_time: "6/25/2024",
    user_image:
      "https://media.istockphoto.com/id/1309696402/photo/headshot-of-mid-adult-british-asian-woman-wearing-hijab.jpg?s=1024x1024&w=is&k=20&c=R0lcO4kkLSwKyyHmAncQ7BWD-tf29YCpmCFTnuWk6ho=",
    user_review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, laborum modi numquam laboriosam a porro quas repellendus, placeat cum error saepe consectetur explicabo unde. Minima, aperiam. Quisquam dolores adipisci distinctio",
  },
];

const ProductDetails = () => {
  
  const shoe = useLoaderData();
  const {user}=useAuth()
  const [add_to_cart_button,set_add_button]=useState(true)
  const {setCart}=useContext(orderCartContext);
  const {
    id,
    pd_name,
    pd_brand,
    pd_category,
    pd_price,
    pd_description,
    pd_image,
    pd_size,
  } = shoe;
  let cartItem=JSON.parse(localStorage.getItem('cartItemList'))||[]
const HandleAdd_to_Cart=()=>{
    set_add_button(true)
     cartItem?.push({...shoe, pd_quantity:1, order_price:Number(pd_price) - Number(pd_price) * 0.2});
     console.log(cartItem)
     localStorage.setItem('cartItemList', JSON.stringify(cartItem));
     setCart(cartItem)
}
const HandleOrder=()=>{
    
}
  return (
    <div className=" flex justify-center ghost_bg py-5">
      <div>
        <div className="max-w-[1100px] py-5 p-5 rounded bg-white flex justify-between  gap-5">
          <div className="w-full">
            <img className="h-[400px]" src={pd_image} alt="product image" />
          </div>
          <div className="p-0  w-[800px]">
            <h3 className="text-4xl text-primary">{pd_name}</h3>
            <h6 className="text-ghost text-xl">
              Brand:
              <span className="text-primary px-2">{pd_brand}</span>
            </h6>
            <h6 className="text-ghost text-xl">
              Category:
              <span className="text-primary px-2">
               <Link to={`/searchProduct/category/${pd_category}`}>
               {pd_category || "Lather"}
               </Link> 
              </span>
            </h6>
            {shoe?.pd_size&& <h6 className="text-ghost text-xl">Size:  {shoe?.pd_size ? pd_size[0] : ""}-
            {shoe?.pd_size ? pd_size[5] : ""}</h6>}
           
            <h6 className="font-bold text-xl">
              <span className="line-through pr-6"> {pd_price} Tk. </span>
              {Number(pd_price) - Number(pd_price) * 0.2} Tk.
            </h6>
            <p className="text-xl py-2 text-justify">{pd_description}</p>

            <div className="py-2 flex gap-2 items-center">
                {
                    add_to_cart_button?<button onClick={HandleAdd_to_Cart} className="text-white flex 
                    items-center gap-2 p-6 btn_secondary">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                          />
                        </svg>
                      </span>
                      <span> Add to Cart</span>
                    </button>:
                     <Link to={`/order_cart/${user?.email}`}>
                     <button className="text-white flex 
                       items-center gap-2 p-6 btn_secondary">
                         <span>
                           <svg
                             xmlns="http://www.w3.org/2000/svg"
                             fill="none"
                             viewBox="0 0 24 24"
                             strokeWidth="1.5"
                             stroke="currentColor"
                             className="size-6"
                           >
                             <path
                               strokeLinecap="round"
                               strokeLinejoin="round"
                               d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                             />
                           </svg>
                         </span>
                         <span> Go To Cart</span>
                       </button>
                     </Link>
                }
             
              <Link to={`/product/${id}`}>
                <button onClick={HandleOrder} className="text-white flex items-center gap-2 py-10 p-6 btn_secondary">
                <span> Order Now</span>
                  <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                  strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>

                  </span>
               
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="max-w-[1100px] bg-white py-5  p-5 rounded my-5">
          <div className="py-10">
            <h1 className="text-4xl text-center font-serif">
              Clint's Review
            </h1>
            <div className="p-5  grid grid-cols-2">
              {UserReview.map((user) => (
                <div
                  key={user.id}
                  className="p-4 text-black "
                >
                  <div className=" flex justify-between">
                    <div className=" flex gap-2 items-start">
                      <img
                        className="h-[60px] w-[60px] rounded-full "
                        src={user?.user_image}
                      ></img>
                      <span>
                        <h3 className="font-serif text-primary  text-xl">
                          {user?.user_name}
                        </h3>
                        <p>{user?.user_review_time}</p>
                      </span>
                    </div>
                    <div></div>
                  </div>
                  <div>
                    <p className="text-justify font-serif py-2">
                      {user?.user_review}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
