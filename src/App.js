import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllProducts from "./Pages/AllProducts/AllProducts";

import Home from "./Pages/Home/Home";

import Login from "./Pages/Login/Login";
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



        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;