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
const route =createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children: [
          {
            path: "/",
            element: <Home/>,
            loader:()=>fetch('http://localhost:3000/shoes'),
          },
          {
            path: "/product/:id",
            element: <ProductDetails/>,
            loader:({params})=>fetch(`http://localhost:3000/shoes/${params.id}`),
          },
          {
            path: "/about",
            element: <About/>,
          },
          {
            path: "/login",
            element: <Login/>,
          },
          {
            path:"/register",
            element:<Registration/>
          }
        ],
      },
      {
        path: "dashboard",
        element: <DashboardLayout/>,
        errorElement: <ErrorPage/>,
        
        children: [
          { path: "", element: (
          <PrivateRoute><Dashboard/></PrivateRoute>
        ) 
      },
      {
        path:"all-products",
        element:<PrivateRoute>
          <AllProducts/>
        </PrivateRoute>,
        loader:()=>fetch('http://localhost:3000/shoes'),
      },
      {
        path:"user_profile",
        element:<PrivateRoute>
          <Profile/>
        </PrivateRoute>,
        loader:()=>fetch('http://localhost:3000/shoes'),
      },
      
      {
        path:'add-products',
        element:<PrivateRoute><AddProduct/></PrivateRoute>
      },
     
      
      {
        path:"/dashboard/all-products/edit/:id",
        element:<EditProduct/>,
        loader:({params})=>fetch(`http://localhost:3000/shoes/${params.id}`),
      }

      ],
      },

  ]);

export default route;