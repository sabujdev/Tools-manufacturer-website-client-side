import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignIn from "./Components/Authentication/SignIn";
import SignUp from "./Components/Authentication/SignUp";
import Blogs from "./Components/Blogs/Blogs";
import AddAProduct from "./Components/DashBoard/AddAProduct";
import AddAReview from "./Components/DashBoard/AddAReview";
import Dashboard from "./Components/DashBoard/Dashboard";
import ManageAllProducts from "./Components/DashBoard/ManageAllProducts";
import MyOrders from "./Components/DashBoard/MyOrders";
import MyProfile from './Components/DashBoard/MyProfile';
import Payment from './Components/DashBoard/Payment';
import Users from "./Components/DashBoard/Users";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import OrderPage from "./Components/OrderPage/OrderPage";
import RequireAdmin from "./Components/RequireAuth/RequireAdmin";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import Nav from "./Components/Shared/Nav";
import Tools from "./Components/Tools/Tools";

function App() {
  return (
    <div className="App">
      <Nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/tools"
            element={
              <RequireAuth>
                <Tools></Tools>
              </RequireAuth>
            }
          />
          <Route path="/orderPage" element={<OrderPage />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/blogs" element={<Blogs />} />
          {/* <Route path="/portfolio" element={<Portfolio />} /> */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<MyProfile />} />
            <Route path='orders' element={<MyOrders />} />
            <Route path="payment/:id" element={<Payment />} />
            <Route path="review" element={<AddAReview />} />
            <Route
              path="users"
              element={
                <RequireAdmin>
                  <Users />
                </RequireAdmin>
              }
            />
            <Route
              path="addProduct"
              element={
                <RequireAdmin>
                  <AddAProduct />
                </RequireAdmin>
              }
            />
            <Route
              path="manageProduct"
              element={
                <RequireAdmin>
                  <ManageAllProducts />
                </RequireAdmin>
              }
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Nav>
      <ToastContainer />
    </div>
  );
}

export default App;
