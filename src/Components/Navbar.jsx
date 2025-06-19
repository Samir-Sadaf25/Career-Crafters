import { Link, NavLink } from "react-router";
import { FaUserCircle } from "react-icons/fa";
import { use } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { Bounce, toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = use(AuthContext); // Replace with your auth logic
   
   const notify = () => {
    toast.success('Log Out Successfully', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  const handleLogOut = () => {
  
    logOut().then(() => {
      // Sign-out successful.
      notify();
    }).catch((error) => {
      // An error happened.
      
    });
  }


  const navItems = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/AllJobs">All Jobs</NavLink></li>
      {/* {user?.role === "employer" && ( */}
      <li><NavLink to="/add-jobs">Add Job</NavLink></li>
      {/* )} */}
      {user && (
        <>
          <li><NavLink to="/application/me">My Applications</NavLink></li>
          <li><NavLink to="/my-jobs">My Job Posts</NavLink></li>
        </>
      )}
    </>
  );

  return (
    <div className="bg-base-100 shadow-md">
      <div className="navbar container mx-auto flex justify-between">
        {/* Logo & Title */}
        <div className="flex items-center gap-2">
          <Link to="/" className="text-2xl font-bold text-primary">
            CareerCrafters
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>

        {/* User & Auth */}
        <div className="flex items-center gap-3">
  {user ? (
    <>
      <div className="tooltip tooltip-bottom" data-tip={user.email}>
        <FaUserCircle className="text-2xl" />
      </div>
      <button onClick={handleLogOut} className="btn btn-outline btn-sm">
        Logout
      </button>
    </>
  ) : (
    <>
      <Link to="/login" className="btn btn-primary btn-outline">
        Login
      </Link>
      <Link to="/register" className="btn btn-primary btn-outline">
        Register
      </Link>
    </>
  )}
</div>

        {/* Mobile Menu */}
        <div className="lg:hidden dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            ☰
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box">
            {navItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
