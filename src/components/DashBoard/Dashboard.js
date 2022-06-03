import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, Outlet } from "react-router-dom";
import { auth } from "../../Firebase/Firebase.init";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <div>
      <div className="drawer drawer-mobile drawer-end bg-base-200">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content lg:ml-10 mt-5 mx-5">
          <div className="flex flex-row justify-between items-center">
            <h2 className=" text-xl md:text-2xl lg:text-3xl font-semibold text-primary">
              Welcome To Your DashBoard
            </h2>
            <label
              htmlFor="my-drawer-2"
              className="btn bg-base-200 drawer-button lg:hidden mr-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
          </div>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            {!admin && (
              <>
                <li className="mb-2">
                  <NavLink to="/dashboard">My Profile</NavLink>
                </li>
                <li className="mb-2">
                  <NavLink to="/dashboard/orders">Orders</NavLink>
                </li>
                <li className="mb-2">
                  <NavLink to="/dashboard/review">Add A Review</NavLink>
                </li>
              </>
            )}

            {admin && (
              <>
                <li>
                  <NavLink to="/dashboard">My Profile</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/users">All Users</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addProduct">Add A Product</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageProduct">Manage All Products</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
