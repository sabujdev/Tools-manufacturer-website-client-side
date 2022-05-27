import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Blog from "./Pages/Shared/Blog";
import Navbar from "./Pages/Shared/Navbar";




function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        Route>
      </Routes>
    </div>
  );
}

export default App;