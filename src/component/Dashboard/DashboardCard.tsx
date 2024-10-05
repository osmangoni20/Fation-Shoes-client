import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

// eslint-disable-next-line react/prop-types
const DashboardCard = () => {
  const { user } = useAuth();
  const baseURL = `https://fation-shoes.onrender.com`;

  const [TotalOrder, setUserOrder] = useState<any>([]);
  const [TotalProduct, setTotalProduct] = useState<any>([]);
  const fetchOrderData = () => {
    axios.get(`${baseURL}/order/`).then((response) => {
      setUserOrder(response.data);
    });
  };
  const fetchProductData = () => {
    axios.get(`${baseURL}/product/`).then((response) => {
      setTotalProduct(response.data);
    });
  };
  useEffect(() => {
    fetchOrderData();
    fetchProductData();
  }, []);
  console.log(TotalOrder, TotalProduct);
  const total_sales_amount = TotalOrder.reduce(
    (total, order) => total + order.price,
    0
  );
  const total_purchase_amount =
    TotalProduct.reduce(
      (total, product) => total + Number(product.pd_price),
      0
    ) +
    total_sales_amount * 0.1;
  console.log(total_purchase_amount, total_sales_amount);
  return (
    <div>
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-figure text-primary">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Total Purchase Due</div>
          <div className="stat-value text-primary">{TotalProduct?.length}</div>
          <div className="stat-desc">5% more than last month</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block w-8 h-8 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </div>
          <div className="stat-title">Total Sales Due</div>
          <div className="stat-value text-primary">{TotalOrder?.length}</div>
          <div className="stat-desc">15% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
             className="inline-block w-8 h-8 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 7.5.415-.207a.75.75 0 0 1 1.085.67V10.5m0 0h6m-6 0h-1.5m1.5 0v5.438c0 .354.161.697.473.865a3.751 3.751 0 0 0 5.452-2.553c.083-.409-.263-.75-.68-.75h-.745M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
          <div className="stat-title">Total Sales Amount</div>
          <div className="stat-value text-secondary">
            {total_sales_amount} <span className="text-sm">Tk</span>
          </div>
          <div className="stat-desc">10% more than last month</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
             className="inline-block w-8 h-8 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 7.5.415-.207a.75.75 0 0 1 1.085.67V10.5m0 0h6m-6 0h-1.5m1.5 0v5.438c0 .354.161.697.473.865a3.751 3.751 0 0 0 5.452-2.553c.083-.409-.263-.75-.68-.75h-.745M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
          <div className="stat-title">Total Revenue</div>
          <div className="stat-value text-secondary">
            {total_sales_amount - total_purchase_amount}{" "}
            <span className="text-sm">Tk</span>
          </div>
          <div className="stat-desc">15% more than last month</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
