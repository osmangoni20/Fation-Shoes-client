import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "../../../component/shared/Loader";
import Pagination from "../../../component/shared/Pagination";

const MyOrder = () => {
  const { user }: any = useAuth();
  const baseURL = `https://fationshoe-server.vercel.app/order/${user?.email}`;

  const [userOrder, setUserOrder] = useState<any>();
  const [isCancelOrder, setIsCancelOrder]=useState(false)
  const [itemsPerPage, setItemPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);
  const fetchData = () => {
    axios.get(baseURL).then((response) => {
      setUserOrder(response.data);
    });
  };
  useEffect(() => {
    fetchData();
  }, [isCancelOrder]);
  console.log(userOrder);

  const handleOrderCancel = async (id) => {
    try {
        const response = await fetch(`https://fationshoe-server.vercel.app/cancel-order/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const updateData=userOrder?.data?.filter(order=>order?._id!=id)
        setUserOrder({...userOrder, data:updateData})
        if (!response.ok) {
            throw new Error("Failed to cancel order!");
        }

        const result = await response.json();
        console.log(result.message);
        setIsCancelOrder(!isCancelOrder);
    } catch (error) {
        console.error("Error:", error.message);
    }
};


  // shorting order
  let pendingOrder = 0;
  let rearrangeOrder: any[] = [];
  for (let index = 0; index < userOrder?.data.length; index++) {
    const element = userOrder?.data[index];
    if (element?.status === "pending") {
      pendingOrder += 1;
      rearrangeOrder.unshift(element);
    } else {
      rearrangeOrder.push(element);
    }
  }

  const paginationParamsData = {
    totalPages: userOrder?.totalPages,
    itemsPerPage,
    currentPage,
    setItemPerPage,
    setCurrentPage,
  };
  return (
    <div>
      <h2 className="text-center lg:text-3xl text-xl text-white">
        Your Order Item
      </h2>
      <div className="flex flex-wrap gap-2 space-y-10">
        <div className="min-w-md my-10 pb-6 bg-[#171A3B] w-full text-center text-white rounded-md p-3">
        <table className="table text-white w-full border-collapse">
            <thead className="py-5 my-5 text-white text-center">
              <th>Date</th>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Transaction Id</th>
              <th>Status</th>
              <th>Action</th>
            </thead>
            <tbody className="text-center space-y-4">
              {rearrangeOrder?.map((order) =>
                order?.order_product?.map((product) => {
                  return (
                    <tr
                      className={`transition duration-300 hover:bg-gray-400`}
                      key={product?._id}
                    >
                      <td>
                        {order?.order_product[0]?.pd_name ===
                          product?.pd_name &&
                          (order?.date || new Date().toLocaleDateString())}
                      </td>
                      <td>
                        <img
                          className="h-full w-full object-cover"
                          src={product?.pd_image}
                        ></img>
                      </td>
                      <td>{product?.pd_name}</td>
                      <td>{product?.pd_price}</td>
                      <td>{product?.quantity}</td>
                      <td>{order?.paymentInfo?.transactionId||"Cash on Delivery"}</td>

                      <td className="text-[#4F87F4]">{order?.status}</td>
                      <td>
                      <td>
                      <button
                      onClick={() => handleOrderCancel(order?._id)}
                      className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-bold rounded"
                    >
                      Cancel Order
                    </button>
                      </td>
                      </td>
                    </tr>
                  );
                })
              )}
              {userOrder?.length < 0 && <h3>You have placed no orders.</h3>}
            </tbody>
          </table>
          <div>{userOrder && <Pagination params={paginationParamsData} />}</div>
        </div>

        {userOrder?.length < 0 && <Loader />}
      </div>
    </div>
  );
};

export default MyOrder;
