import React from 'react'
import logo from '../assets/Images/logonav.png'
import { Link } from 'react-router'
import { NavLink } from 'react-router'
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { toast } from 'react-hot-toast';


const Navbar = ({ user, justRegistered, setJustRegistered }) => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success('Logged out successfully!');
      setJustRegistered(false); 
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
  return (
    <nav className='border-1 border-gray-900 fixed w-full top-0 z-50 shadow-xl bg-[rgb(12,18,24)] hidden lg:block'>
      <ul className='flex justify-around items-center h-20'>
        <div>
            <img src={logo} alt="" />
        </div>
        <div className='flex gap-6'>
            <li><NavLink to="/" className={({isActive})=>
            isActive ? 'text-white' : 'text-gray-400'}>Web XV</NavLink></li>
            <li><NavLink to="/Projects" className={({isActive})=>
            isActive ? 'text-white' : 'text-gray-400'}>All projects</NavLink></li>
            <li><NavLink to="/Community" className={({isActive})=>
            isActive ? 'text-white' : 'text-gray-400'}>Community</NavLink></li>
            <li><NavLink to="/About" className={({isActive})=>
            isActive ? 'text-white' : 'text-gray-400'}>About us</NavLink></li>
        </div>
        <div>
          {user ?(
            <button
            className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg font-medium cursor-pointer"
            onClick={handleLogout}
          >
           <Link to="/">LOGOUT</Link>
          </button>
          ):
          justRegistered ?(
            <button className="bg-blue-600 hover:bg-blue-800 px-5 py-3 rounded-lg font-medium cursor-pointer"><Link to="/">LOGIN</Link></button>
          ):(<button className="bg-blue-600 hover:bg-blue-800 px-5 py-3 rounded-lg font-medium cursor-pointer"><Link to="/Community">REGISTER</Link></button>)
          }
        </div>
      </ul>
    </nav>
  )
}

export default Navbar
