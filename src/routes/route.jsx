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
            path:"/order",
            element:<ShippingAddress/>
          }
        ],
      },
      {
        path: "dashboard",
        element: <DashboardLayout/>,
        errorElement: <ErrorPage/>,
        
        children: [
          { path: "home", element: (
          <PrivateRoute><Dashboard/></PrivateRoute>
        ) 
      },
      {
        path:"all-products",
        element:<PrivateRoute>
          <AllProducts/>
        </PrivateRoute>,
        loader:()=>fetch('https://fation-shoes.onrender.com/product'),
      },
      {
        path:"order",
        element:<Order/>
      },
      {
        path:"user_profile",
        element:<PrivateRoute>
          <Profile/>
        </PrivateRoute>,
        loader:()=>fetch('https://fation-shoes.onrender.com/product'),
      },
      {
        path:"/dashboard/user_profile/edit_profile",
        element:<PrivateRoute>
          <EditProfile/>
        </PrivateRoute>,
        loader:()=>fetch('https://fation-shoes.onrender.com/user'),
      },
      
      {
        path:'add-products',
        element:<PrivateRoute><AddProduct/></PrivateRoute>,
        loader:()=>fetch('https://fation-shoes.onrender.com/product'),
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