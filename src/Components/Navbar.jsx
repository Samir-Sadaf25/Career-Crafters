import { Link, NavLink } from "react-router";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
//   const { user, logout } = useAuthContext(); // Replace with your auth logic

  const navItems = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/jobs">All Jobs</NavLink></li>
      {/* {user?.role === "employer" && ( */}
        <li><NavLink to="/add-jobs">Add Job</NavLink></li>
      {/* )} */}
      {/* {user && ( */}
        <>
          <li><NavLink to="/application/me">My Applications</NavLink></li>
          <li><NavLink to="/my-jobs">My Job Posts</NavLink></li>
        </>
      {/* )} */}
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
          {/* {user ? ( */}
            {/* <> */}
              <div className="tooltip tooltip-bottom" >
                <FaUserCircle className="text-2xl" />
              </div>
              <button  className="btn btn-outline btn-sm">
                Logout
              </button>
            {/* </> */}
          {/* ) : ( */}
            <Link to="/login" className="btn btn-primary btn-sm">
              Login
            </Link>
          {/* )} */}
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
