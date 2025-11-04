import { useContext } from 'react'
import { Link, NavLink } from 'react-router'
import { AuthContext } from '../context/AuthProvider'
import { FaLeaf, FaUser } from 'react-icons/fa'
import toast from 'react-hot-toast'

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success('Logged out successfully!')
      })
      .catch(error => {
        toast.error('Error logging out')
      })
  }

  const navLinks = (
    <>
      <li>
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            isActive ? 'text-primary font-bold' : 'hover:text-primary'
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/plants" 
          className={({ isActive }) => 
            isActive ? 'text-primary font-bold' : 'hover:text-primary'
          }
        >
          Plants
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink 
            to="/profile" 
            className={({ isActive }) => 
              isActive ? 'text-primary font-bold' : 'hover:text-primary'
            }
          >
            My Profile
          </NavLink>
        </li>
      )}
    </>
  )

  return (
    <nav className="navbar bg-white shadow-md px-4 lg:px-20 py-4 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-primary">
          <FaLeaf className="text-secondary" />
          <span>GreenNest</span>
        </Link>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          {navLinks}
        </ul>
      </div>
      
      <div className="navbar-end gap-2">
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                {user.photoURL ? (
                  <img src={user.photoURL} alt={user.displayName} />
                ) : (
                  <div className="bg-primary flex items-center justify-center h-full">
                    <FaUser className="text-white" />
                  </div>
                )}
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li className="menu-title">
                <span>{user.displayName || 'User'}</span>
              </li>
              <li><Link to="/profile">My Profile</Link></li>
              <li><button onClick={handleLogout}>Logout</button></li>
            </ul>
          </div>
        ) : (
          <>
            <Link to="/login" className="btn btn-outline btn-primary btn-sm">
              Login
            </Link>
            <Link to="/signup" className="btn btn-primary btn-sm text-white">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar