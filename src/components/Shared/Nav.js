import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import { auth } from "../../Firebase/Firebase.init";

const Nav = ({ children }) => {
  const [user] = useAuthState(auth);

  const LogOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  return (
    <nav className="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="w-full navbar bg-base-300 px-12">
          <div className="flex-1 px-2 mx-2 text-2xl font-simibold">
            Desktop Manufacture
          </div>
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
          </div>

          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal gap-x-3">
              <li>
                <NavLink to="/" className="rounded-lg">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/tools" className="rounded-lg">
                  Tools
                </NavLink>
              </li>
              <li>
                {user && (
                  <NavLink to="/dashboard" className="rounded-lg">
                    Dashboard
                  </NavLink>
                )}
              </li>
              <li>
                <NavLink to="/blogs" className="rounded-lg">
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink to="/portfolio" className="rounded-lg">
                  Portfolio
                </NavLink>
              </li>
              <li>
                {user ? (
                  <button className="rounded-lg" onClick={LogOut}>
                    Log Out
                  </button>
                ) : (
                  <NavLink to="/signIn" className="rounded-lg">
                    Login
                  </NavLink>
                )}
              </li>
            </ul>
          </div>
        </div>
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
          <li>
            <NavLink to="/" className="rounded-lg">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/parts" className="rounded-lg">
              Parts
            </NavLink>
          </li>
          <li>
            {user && (
              <NavLink to="/dashboard" className="rounded-lg">
                Dashboard
              </NavLink>
            )}
          </li>
          <li>
            <NavLink to="/blogs" className="rounded-lg">
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" className="rounded-lg">
              Portfolio
            </NavLink>
          </li>
          <li>
            {user ? (
              <button className="rounded-lg" onClick={LogOut}>
                Log Out
              </button>
            ) : (
              <NavLink to="/signIn" className="rounded-lg">
                Login
              </NavLink>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
