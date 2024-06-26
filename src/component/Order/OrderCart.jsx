import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CheckOutSummary from "./CheckOutSummary";
const OrderCart = () => {
  const [itemCollection, setItemCollection] = useState(
    JSON.parse(localStorage.getItem("cartItemList"))
  );
  const [subTotal, setTotalPayableTaka] = useState(0);
  // eslint-disable-next-line no-undef

  useEffect(() => {
    setItemCollection(itemCollection);
    const totalTk = itemCollection.reduce(
      (total, item) => total + item.order_price * item.pd_quantity,
      0
    );
    console.log(totalTk);
    setTotalPayableTaka(totalTk);
  }, [itemCollection]);

  const [quantity, setQuantity] = useState(1);
  const HandleQuantity = (id) => {
    setQuantity((prev) => prev + 1);
    const UpdateItem = itemCollection?.filter((item) => item.id === id);
    UpdateItem.quantity = quantity;
    localStorage.setItem("cartItemList", JSON.stringify(itemCollection));
  };
  const HandleDelete = (id) => {
    console.log(id);
    const items = itemCollection.filter((item) => item._id !== id);
    console.log(items);
    localStorage.setItem("cartItemList", JSON.stringify(items));
    setItemCollection(items);
  };
  return (
    <div className="ghost_bg">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-2 p-5">
          <div className="my-2 bg-white p-4 font-semibold text-xl flex justify-between items-center">
            <h4 className="flex gap-1 items-center">
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
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </span>
              Total Item-<span>{itemCollection?.length} </span>
            </h4>
            <h4>
              Total- <span>{subTotal || "00.00"} Tk.</span>
            </h4>
          </div>
          <div className="bg-white">
            {itemCollection?.length > 0 &&
              itemCollection?.map((item) => (
                <div key={item?.id} className="border-b-2 border-gray-400">
                  <div className="relative">
                    <button
                      onClick={() => HandleDelete(item?._id)}
                      className="absolute right-1 top-0"
                    >
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
                          d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="flex justify-between items-center">
                    <img
                      className="h-[150px] w-[200px]"
                      src={item?.pd_image}
                    ></img>
                    <div>
                      <h3 className="text-2xl text-primary">{item.pd_name}</h3>
                      <h6 className="text-ghost text-xl">
                        Brand:
                        <span className="text-primary px-2">
                          {item.pd_brand}
                        </span>
                      </h6>
                      <h6 className="text-ghost text-xl">
                        Category:
                        <span className="text-primary px-2">
                          <Link
                            to={`/searchProduct/category/${item.pd_category}`}
                          >
                            {item.pd_category || "Lather"}
                          </Link>
                        </span>
                      </h6>
                    </div>
                    <div className="flex gap-2 items-center">
                      <button onClick={HandleQuantity} className="btn text-xl">
                        -
                      </button>
                      <input
                        className="w-[50px] px-0 text-center h-[50px] border-none"
                        value={item?.pd_quantity}
                        type="number"
                      />
                      <button onClick={HandleQuantity} className="btn text-xl">
                        +
                      </button>
                    </div>
                    <div>
                      <h6 className="text-xl pr-2">
                        {" "}
                        <span className="line-through text-sm text-red-500 px-2">
                          {item?.pd_price} Tk.
                        </span>
                        {item?.order_price} Tk.
                      </h6>
                    </div>
                  </div>
                </div>
              ))}
            {itemCollection?.length === 0 && (
              <div>
                <h1 className="text-md text-center py-5 text-red-500 ">
                  Not Found Item
                </h1>
              </div>
            )}
            {/* <div>
                        <div className="relative">
                            <button className="absolute r-1 top-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 24 24" strokeWidth="1.5"
                              stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

                            </button>
                        </div>
                       <div className="flex justify-between ">
                       <img src=""></img>
                        <div>
                            <h4>{pd_name}</h4>
                            <h5>Brand:{pd_brand}</h5>
                            <h5>Category:{pd_category}</h5>
                            <h5>Price: <span>{pd_price}</span></h5>
                        </div>
                       </div>
                    </div> */}

            <div className="flex justify-end p-5">
              {itemCollection?.length > 0 && (
                <button className=" text-white btn_secondary">
                  <Link to={"/order"}>Checkout</Link>
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="col-span-1 my-6">
         <CheckOutSummary subTotal={subTotal}></CheckOutSummary>
        </div>
      </div>
    </div>
  );
};

export default OrderCart;
