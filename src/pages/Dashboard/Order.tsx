import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Order = () => {
  const [orderData, setOrderData] = useState<any>(null);
  const {user}:any=useAuth()
  const url = `https://fation-shoes.onrender.com/order/`;
  useEffect(() => {
    fetch(`${url}`)
      .then((res) => res.json())
      .then((data) => setOrderData(data));
  }, []);
  const order_amount = orderData?.reduce(
    (accumulator, item) => accumulator + item?.price,
    0
  );

  const HandleStatus=(status,id)=>{
    console.log(status,id)
    fetch(`https://fation-shoes.onrender.com/order/${id}`,{
      method:"PATCH",
      headers:{
                "Content-type":"application/json"
        },
      body:JSON.stringify({status})
    })
  }
  console.log(orderData)
  return (
    <div>
      <div className="flex justify-between items-center p-3 bg_dashboard text-white">
        <h3>
          Total Order: <span>{orderData?.length}</span>
        </h3>
        <h3 className="font-medium">
          Order Amount: <span>{order_amount} Tk.</span>
        </h3>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className=" text-cetner">
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
            <tbody className="space-x-4">
              {/* row 1 */}
              {orderData?.map((order) => (
             <tr key={order._id}>
                  <td className="flex-1">
                    <p className="text-md font-medium">
                      {order?.orderDate || new Date().toISOString()}
                    </p>
                  </td>
                  <td className="flex-1">
                    <p className="text-md font-medium">{order?.email}</p>
                  </td>
                  <td className="flex-2">
                    <div className="flex items-center gap-3 md:w-[100px]">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>

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
                    <p className="text-md font-medium text-yellow-500">
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
                    {order.status === "pending" && (
                      <select onChange={(e)=>HandleStatus(e?.target?.value,order._id)} className="text-white bg-black rounded-md p-2">
                         <option value="" disabled selected>Select Status</option>
                         <option value={"pending"}>Pending</option>
                        <option value={"done"}>Done</option>
                      </select>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Order;
