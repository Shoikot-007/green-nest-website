import { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import { FaLeaf, FaUser } from "react-icons/fa";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logged out successfully!");
      })
      .catch((error) => {
        toast.error("Error logging out");
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          style={{ fontFamily: "Inter, sans-serif" }}
          className={({ isActive }) =>
            isActive
              ? "text-[#3A7D44] font-semibold"
              : "text-[#2B2B2B] hover:text-[#3A7D44] transition-all duration-300"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/plants"
          style={{ fontFamily: "Inter, sans-serif" }}
          className={({ isActive }) =>
            isActive
              ? "text-[#3A7D44] font-semibold"
              : "text-[#2B2B2B] hover:text-[#3A7D44] transition-all duration-300"
          }
        >
          Plants
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/profile"
            style={{ fontFamily: "Inter, sans-serif" }}
            className={({ isActive }) =>
              isActive
                ? "text-[#3A7D44] font-semibold"
                : "text-[#2B2B2B] hover:text-[#3A7D44] transition-all duration-300"
            }
          >
            My Profile
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <nav className="navbar bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)] px-4 lg:px-20 py-4 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden pl-0">
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
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow-[0_4px_12px_rgba(0,0,0,0.05)] bg-white rounded-2xl w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-[#3A7D44]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          <FaLeaf className="text-[#6FBF73]" />
          <span>GreenNest</span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{navLinks}</ul>
      </div>

      <div className="navbar-end gap-2">
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full ring ring-[#6FBF73] ring-offset-base-100 ring-offset-2">
                {user.photoURL ? (
                  <img src={user.photoURL} alt={user.displayName} />
                ) : (
                  <div className="bg-[#3A7D44] flex items-center justify-center h-full">
                    <FaUser className="text-white" />
                  </div>
                )}
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-1 p-2 shadow-[0_4px_12px_rgba(0,0,0,0.05)] menu menu-sm dropdown-content bg-white rounded-2xl w-52"
            >
              <li className="menu-title">
                <span
                  className="text-[#2B2B2B]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {user.displayName || "User"}
                </span>
              </li>
              <li>
                <Link
                  to="/profile"
                  className="text-[#2B2B2B] hover:text-[#3A7D44]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  My Profile
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="text-[#2B2B2B] hover:text-[#3A7D44]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <Link
              to="/login"
              className="btn btn-sm border-[#3A7D44] text-[#3A7D44] bg-transparent hover:bg-[#DDEEDF] rounded-2xl"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="btn btn-sm bg-[#3A7D44] text-white border-none hover:bg-[#6FBF73] rounded-2xl"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
