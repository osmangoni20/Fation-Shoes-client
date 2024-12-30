import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "../../component/shared/Loader";

const CancelOrder = () => {
  const { user }: any = useAuth();
  const baseURL = `https://fationshoe-server.vercel.app/order/cancel-order`;

  const [userOrder, setUserOrder] = useState<any>();
  const fetchData = () => {
    axios.get(baseURL).then((response) => {
      setUserOrder(response.data);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(userOrder);




  // shorting order
  let pendingOrder = 0;
  let rearrangeOrder: any[] = [];
  for (let index = 0; index < userOrder?.data.length; index++) {
    const element = userOrder.data[index];
    if (element?.status === "pending") {
      pendingOrder += 1;
      rearrangeOrder.unshift(element);
    } else {
      rearrangeOrder.push(element);
    }
  }
  return (
    <div>
      <h2 className="text-center lg:text-3xl text-xl text-white">
        Cancel Order Item
      </h2>
      <div className="flex flex-wrap gap-2 space-y-10">
        <div className="min-w-md my-10 pb-6 bg-[#171A3B] w-full text-center text-white rounded-md p-3">
          <table className="w-full space-y-4 border-collapse">
            <thead className="py-5 my-5">
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
                      className={`${
                        order?.order_product[length - 1]?.pd_name ===
                          product?.pd_name && "border-b-2 py-4"
                      } py-4 space-y-4 text-sm font-medium text-gray-200 transition duration-300`}
                      key={product?._id}
                    >
                      <td>
                        {order?.order_product[0]?.pd_name ===
                          product?.pd_name &&
                          (order?.date || new Date().toLocaleDateString())}
                      </td>
                      <td>
                        <img
                          className="h-full w-full object-cover rounded mx-auto"
                          src={product?.pd_image}
                        ></img>
                      </td>
                      <td>{product?.pd_name}</td>
                      <td>{product?.pd_price}</td>
                      <td>{product?.quantity}</td>
                      <td>{order?.paymentInfo?.transactionId}</td>

                      <td className="text-[#4F87F4]">{order?.status}</td>
                     
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {userOrder?.length < 0 && <Loader />}
      </div>
    </div>
  );
};

export default CancelOrder;