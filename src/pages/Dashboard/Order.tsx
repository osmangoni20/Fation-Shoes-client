import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Pagination from "../../component/shared/Pagination";

type TorderParams={
  data:any[],
  totalPages:number,
  totalItems:number,
  currentPages:number

}
const Order = () => {
  const [orderData, setOrderData] = useState<TorderParams>();
  const { user }: any = useAuth();
  const [itemsPerPage, setItemPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);
  const paginationParamsData = {
    totalPages: orderData?.totalPages,
    itemsPerPage,
    currentPage,
    setItemPerPage,
    setCurrentPage,
  };

  const url = `https://fationshoe-server.vercel.app/order/?page=${currentPage}&size=${itemsPerPage}`;
  useEffect(() => {
    fetch(`${url}`)
      .then((res) => res.json())
      .then((data) => setOrderData(data));
  }, [currentPage, itemsPerPage]);


  const order_amount = orderData?.data.reduce(
    (accumulator, item) => accumulator + item?.price,
    0
  );

  const HandleStatus = (status, id) => {
    console.log(status, id);
    fetch(`https://fationshoe-server.vercel.app/order/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ status }),
    });
  };
  console.log(orderData);
  let pendingOrder = 0;
  let rearrangeOrder: any[] = [];
  for (let index = 0; index < Number(orderData?.data.length); index++) {
    const element = orderData?.data[index];
    if (element?.status === "pending") {
      pendingOrder += 1;
      rearrangeOrder.unshift(element);
    } else {
      rearrangeOrder.push(element);
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center p-3 bg_dashboard text-white">
        <p>
          Total Order: <span>{orderData?.data.length}</span>
        </p>
        <p className="font-medium">
          Pending Order: <span>{pendingOrder}</span>
        </p>
        <p className="font-medium">
          Order Amount: <span>{order_amount} Tk.</span>
        </p>
      </div>
      <div>
        <div className="overflow-x-auto bg-[#171A3B] text-white ">
          <table className="table text-white w-full border-collapse">
            {/* head */}
            <thead>
              <tr className=" text-center text-white">
                <th>Date</th>
                <th>Email</th>
                <th>Customer Name</th>
                <th>Mobile No</th>

                <th className="text-blue-700">Total Pay</th>
                <th>Status</th>
                <th>Details</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="space-x-4 text-center">
              {/* row 1 */}
              {rearrangeOrder?.map((order) => (
                <tr key={order._id} className="transition duration-300 hover:bg-gray-400">
                  <td className="flex-1">
                    <p className="text-md font-medium">
                      {order?.orderDate || new Date().toISOString()}
                    </p>
                  </td>
                  <td className="flex-1">
                    <p className="text-md font-medium">{order?.email}</p>
                  </td>
                  <td className="flex-2">
                    <div className="flex items-center gap-3 lg:w-[100px]">
                      <div>
                        <h4 className="text-md">
                          {order?.shippingInfo?.customer_name}
                        </h4>
                      </div>
                    </div>
                  </td>

                  <td className="flex-1">
                    <p className="text-md font-medium">
                      {order?.shippingInfo?.customer_mobile1}
                    </p>
                  </td>

                  <td className="flex-1 w-24">
                    <p className=" text-blue-700 text-md font-medium">
                      {order?.price} Tk.
                    </p>
                  </td>
                  <td className="flex-1">
                    <p className="text-md uppercase font-medium text-yellow-500">
                      {order?.status}
                    </p>
                  </td>
                  <td className="flex-3">
                    <Link
                      className="text-blue-500"
                      to={`/dashboard/order/orderDetails/${order?.email}`}
                    >
                      View More
                    </Link>
                  </td>
                  <td className="px-2 w-24 ">
                    {order.status === "pending" ? (
                      <select
                        onChange={(e) =>
                          HandleStatus(e?.target?.value, order._id)
                        }
                        className="text-white bg-black rounded-md p-2"
                      >
                        <option value="" disabled selected>
                          Select Status
                        </option>
                        <option value={"pending"}>Pending</option>
                        <option value={"done"}>Done</option>
                      </select>
                    ):"Done"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>{orderData && <Pagination params={paginationParamsData} />}</div>
      </div>
    </div>
  );
};

export default Order;
