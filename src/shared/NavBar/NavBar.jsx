import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { UserButton, useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  const { user, isSignedIn } = useUser();
  //   const navOptions = (

  //     <>
  //       <li>
  //         <NavLink to="/">Home</NavLink>
  //       </li>
  //       <li>
  //         <NavLink to="/contact-us">Contact Us</NavLink>
  //       </li>
  //       <li>
  //         <NavLink to="/aboutUs">About Us</NavLink>
  //       </li>
  //     </>
  //   );
  const navOptions = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${
              isActive ? "text-sky-500 font-bold" : "text-black"
            } transition-colors duration-300 hover:text-sky-500`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact-us"
          className={({ isActive }) =>
            `${
              isActive ? "text-sky-500 font-bold" : "text-black"
            } transition-colors duration-300 hover:text-sky-500`
          }
        >
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/aboutUs"
          className={({ isActive }) =>
            `${
              isActive ? "text-sky-500 font-bold" : "text-black"
            } transition-colors duration-300 hover:text-sky-500`
          }
        >
          About Us
        </NavLink>
      </li>
      {isSignedIn && (
        <li>
          <Link
            to="/dashboard"
            className={({ isActive }) =>
              `${
                isActive ? "text-sky-500 font-bold" : "text-black"
              } transition-colors duration-300 hover:text-sky-500`
            }
          >
            Dashboard
          </Link>
        </li>
      )}
    </>
  );
  const DesktopnavOptions = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${
              isActive ? "text-sky-500 font-bold" : "text-black"
            } transition-colors duration-300 hover:text-sky-500`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact-us"
          className={({ isActive }) =>
            `${
              isActive ? "text-sky-500 font-bold" : "text-black"
            } transition-colors duration-300 hover:text-sky-500`
          }
        >
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/aboutUs"
          className={({ isActive }) =>
            `${
              isActive ? "text-sky-500 font-bold" : "text-black"
            } transition-colors duration-300 hover:text-sky-500`
          }
        >
          About Us
        </NavLink>
      </li>
      {/* {isSignedIn && (
        <li>
          <Link
            to="/dashboard"
            className="text-white hover:text-sky-500 transition-colors duration-300"
          >
            Dashboard
          </Link>
        </li>
      )} */}
    </>
  );

  return (
    <div className="bg-white z-50">
      <>
        <div className="navbar bg-white font-semibold text-black md:w-10/12 mx-auto z-30">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost ">
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
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[999] p-2 shadow bg-white text-black rounded-box w-52 fixed"
              >
                {navOptions}
                {isSignedIn && (
                  <li className="mt-2">
                    <UserButton />
                  </li>
                )}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">
              <img className="w-8 mr-2" src={logo} alt="" />
              Resu-Ai
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{DesktopnavOptions}</ul>
          </div>
          <div className="navbar-end hidden lg:flex">
            {isSignedIn ? (
              <div className="flex gap-2 items-center">
                <Link to={"/dashboard"}>
                  <Button>Dashboard</Button>
                </Link>
                <UserButton />
              </div>
            ) : (
              <Link to={"/auth/sign-in"}>
                <Button>Get Started</Button>
              </Link>
            )}
          </div>
        </div>
      </>
    </div>
  );
};

export default NavBar;
