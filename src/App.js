import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddProduct from "./components/DashBoard/AddProduct";
import MakeAdmin from "./components/DashBoard/MakeAdmin";
import ManageOrders from "./components/DashBoard/ManageOrders";
import ManageProducts from "./components/DashBoard/ManageProducts";
import MyOrders from "./components/DashBoard/MyOrders";
import MyProfile from "./components/DashBoard/MyProfile";
import OrderSuccess from "./components/Payment/OrderSuccess";
import Payment from "./components/Payment/Payment";

import AllProducts from "./Pages/AllProducts/AllProducts";
import Dashboard from "./Pages/Dashboard/DashBoard";

import Home from "./Pages/Home/Home";
import Productdetails from "./Pages/Home/ProductDetails";

import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/Login/RequeirAuth";
import SignUp from "./Pages/Login/SignUp";
import Blog from "./Pages/Shared/Blog";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";
import NotFound from "./Pages/Shared/NotFound";




function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/allProducts" element={<AllProducts></AllProducts>}></Route>
        <Route path="/myOrders" element={<MyOrders></MyOrders>}></Route>
        <Route path="/addProduct" element={<AddProduct></AddProduct>}></Route>
      <Route path="/productDetails/:id" element={<RequireAuth><Productdetails></Productdetails></RequireAuth>}></Route>
      <Route path="/dashboard" element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}></Route>
      <Route path="/dashboard/myProfile" element={<RequireAuth><MyProfile></MyProfile></RequireAuth>}></Route>
      <Route path="/dashboard/myOrders" element={<RequireAuth><MyOrders></MyOrders></RequireAuth>}></Route>
      <Route path="/dashboard/manageOrders" element={<RequireAuth><ManageOrders></ManageOrders></RequireAuth>}></Route>
      <Route path="/dashboard/manageProducts" element={<RequireAuth><ManageProducts></ManageProducts></RequireAuth>}></Route>
      <Route path="/dashboard/addProduct" element={<RequireAuth><AddProduct></AddProduct></RequireAuth>}></Route>
      <Route path="/dashboard/makeAdmin" element={<RequireAuth><MakeAdmin></MakeAdmin></RequireAuth>}></Route>

      <Route path="/payMent/:id" element={<Payment></Payment>}></Route>
      <Route path="/orderSuccess" element={<OrderSuccess></OrderSuccess>}></Route>


        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;