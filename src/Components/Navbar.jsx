import React from 'react'
import logo from '../assets/Images/logonav.png'
import { Link } from 'react-router'
const Navbar = () => {
  return (
    <nav className='border-1 border-gray-900 fixed w-full top-0 z-50 shadow-xl bg-[rgb(12,18,24)] hidden lg:block'>
      <ul className='flex justify-around items-center h-20'>
        <div>
            <img src={logo} alt="" />
        </div>
        <div className='flex gap-6'>
            <li><Link to="/">Web XV</Link></li>
            <li><Link to="/Projects">All projects</Link></li>
            <li><Link to="/Community">Community</Link></li>
            <li><Link to="/About">About us</Link></li>
        </div>
        <div>
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium cursor-pointer">REGISTER</button>
        </div>

      </ul>
    </nav>
  )
}

export default Navbar
