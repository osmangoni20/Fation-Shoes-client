import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layoutes/MainLayout";
import ErrorPage from '../pages/ErrorPage'
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import DashboardLayout from "../layoutes/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Registration from "../pages/Registration";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ProductDetails from "../component/shared/ProductDetails";
import AddProduct from "../pages/Dashboard/AddProduct";
import AllProducts from "../pages/Dashboard/AllProducts";
import EditProduct from "../pages/Dashboard/EditProduct";
import Profile from "../pages/Dashboard/Profile";
import EditProfile from "../pages/Dashboard/EditProfile";
import SearchItem from "../pages/SearchItem";
import OrderCart from "../component/Order/OrderCart";
import ShippingAddress from "../component/Order/ShippingAddress";
import Order from "../pages/Dashboard/Order";
import React from "react";
import Payment from "../component/Order/Payment/Payment.tsx";
import PaymentHistory from "../pages/Dashboard/UserDashboard/PaymentHistory.tsx";
import Testimonial from "../component/Home/Testimonial.tsx";
import AddReview from "../pages/Dashboard/UserDashboard/AddReview.tsx";
import Shop from "../pages/Dashboard/UserDashboard/Shop.tsx";
import MyOrder from "../pages/Dashboard/UserDashboard/MyOrder.tsx";
import OrderDetails from "../pages/Dashboard/OrderDetails.tsx";
import Review from "../pages/Review.tsx";
import UserDashboard from "../component/Dashboard/UserDahboard/UserDashboard.tsx";
import Contact from "../component/contact/Contact.tsx";
import PrivacyPolicy from "../pages/privacyPolicy.tsx";
import CookiePolicy from "../pages/cookiePolicy.tsx";
import TermsAndCondition from "../pages/TermsAndCondition.tsx";
import ReturnAndReplacement from "../pages/ReturnAndReplacement.tsx";
import ShippingService from "../pages/ShippingService.tsx";
import PaymentService from "../pages/PaymentService.tsx";
import UserMessage from "../component/Dashboard/UserMessage.tsx";

const route =createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children: [
          {
            path: "/",
            element: <Home/>,
            
          },
          {
            path: "/product/:id",
            element: <ProductDetails/>,
            loader:({params})=>fetch(`https://fation-shoes.onrender.com/product/${params.id}`),
          },
          {
            path: "/about",
            element: <About/>,
          },
          {
            path: "/privacy_policy",
            element: <PrivacyPolicy/>,
          },
          {
            path: "/cookie_policy",
            element: <CookiePolicy/>,
          },
          {
            path: "/term_condition",
            element: <TermsAndCondition/>,
          },
          {
            path: "/return_replacement",
            element: <ReturnAndReplacement/>,
          },
          {
            path: "/shipping_service",
            element: <ShippingService/>,
          },
          {
            path: "/payment_service",
            element: <PaymentService/>,
          },
          {
            path:"/contact",
            element:<Contact/>
          },
          {
            path:"/client_reviews",
            element:<Review title={"Client's Review"}/>
          },
          {
            path:'/searchProduct/:searchValue',
            element:<SearchItem/>
          },
          {
            path:'/searchProduct/:category/:searchValue',
            element:<SearchItem/>
          },
          {
            path: "/login",
            element: <Login/>,
          },
          {
            path:"/register",
            element:<Registration/>
          },
          {
            path:"/order_cart/:email",
            element:<OrderCart/>
          },
          {
            path:"/order/shippingAddress",
            element:<PrivateRoute><ShippingAddress/></PrivateRoute>
          },
          {
            path:"/order/payment",
            element:<PrivateRoute><Payment/></PrivateRoute>
          }
        ],
      },
      {
        path: "dashboard",
        element:<PrivateRoute><DashboardLayout/></PrivateRoute> ,
        errorElement: <ErrorPage/>,
        
        children: [
          { path: "home", element: (
          <PrivateRoute><Dashboard/></PrivateRoute>
        ) 
      },
      { path: "user_dashboard", element: (
        <PrivateRoute><UserDashboard/></PrivateRoute>
      ) 
    },
      {
        path:"all-products",
        element:<PrivateRoute>
          <AllProducts/>
        </PrivateRoute>,
      },
      {
        path:"order",
        element:<PrivateRoute><Order/></PrivateRoute>
      },
      {
        path:"user_message",
        element:<PrivateRoute><UserMessage/></PrivateRoute>
      },
      
      {
        path:"/dashboard/order/orderDetails/:email",
        element:<PrivateRoute><OrderDetails/></PrivateRoute>,
        loader:({params})=>fetch(`https://fation-shoes.onrender.com/order/${params.email}`),

      },
      {
        path:"myOrder",
        element:<PrivateRoute><MyOrder/></PrivateRoute>
      },
      {
        path:"paymentHistory",
        element:<PrivateRoute><PaymentHistory/></PrivateRoute>
      },
      {
        path:"add_review",
        element:<PrivateRoute><AddReview/></PrivateRoute>
      },
      {
        path:"user_profile",
        element:<PrivateRoute>
          <Profile/>
        </PrivateRoute>,
      },

      {
        path:"/dashboard/user_profile/edit_profile",
        element:<PrivateRoute>
          <EditProfile/>
        </PrivateRoute>,
        loader:()=>fetch('https://fation-shoes.onrender.com/user'),
      },
      
      
      {
        path:'add_products',
        element:<PrivateRoute><AddProduct/></PrivateRoute>,
      },
     
      
      {
        path:"/dashboard/all-products/edit/:id",
        element:<EditProduct/>,
        loader:({params})=>fetch(`https://fation-shoes.onrender.com/product/${params.id}`),
      }

      ],
      },

  ]);

export default route;