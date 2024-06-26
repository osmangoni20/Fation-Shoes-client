import { useEffect, useState } from "react";

const Order = () => {
  const [orderData, setOrderData] = useState(null);
  const url="https://fation-shoes.onrender.com/order"
  useEffect(() => {
    fetch(`${url}`)
      .then((res) => res.json())
      .then((data) => setOrderData(data));
  }, []);
  console.log(orderData);
  const order_amount = orderData?.reduce(
    (accumulator, item) => accumulator + item?.payable_cost,
    0
  );
  return (
    <div>
      <div className="flex justify-between items-center p-3 bg_dashboard text-white">
        <h3>
          Total Order: <span>{orderData?.length}</span>
        </h3>
        <h3>
          Order Amount: <span>{order_amount} Tk.</span>
        </h3>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="">
                <th>Customer Name</th>
                <th>Customer Mobile</th>
                <th>Alternative Mobile</th>
                <th>Date</th>
                <th className="text-blue-700">Total Pay</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {orderData?.map((orderList) => (
                <tr key={orderList._id}>
                  <td>
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
                          {orderList?.customer_name}
                        </h4>
                      </div>
                    </div>
                  </td>

                  <td>
                    <p className="text-md font-medium">
                      {orderList?.customer_mobile1}
                    </p>
                  </td>
                  <td>
                    <p className="text-md font-medium">
                      {orderList?.customer_mobile2}
                    </p>
                  </td>
                  <td>
                    <p className="text-md font-medium">
                      {orderList?.orderDate || new Date().toISOString()}
                    </p>
                  </td>
                  <td>
                    <p className=" text-blue-700 text-md font-medium">
                      {orderList?.payable_cost} Tk.
                    </p>
                  </td>
                  <td>
                    <p className="text-md font-medium text-yellow-500">
                      {orderList?.status}
                    </p>
                  </td>
                  <td>
                    <button className="btn btn-ghost btn-xs">View More</button>
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
