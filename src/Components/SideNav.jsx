import { useState } from "react";
import { Menu } from 'lucide-react';
import logo from '../assets/Images/logonav.png'
import { Link } from "react-router";
import { NavLink } from "react-router";
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';

export default function RightSidebar({ user, justRegistered }) {
  const [isOpen, setIsOpen] = useState(false);
const handleLogout = async () => {
    await signOut(auth);
    toast.success('Logged out successfully');
    setIsOpen(false)
  };
  return (
    <>
      
      <div className="border-1 border-gray-900 fixed w-full z-50 shadow-xl bg-[rgb(12,18,24)] py-4 px-6 flex justify-between items-center lg:hidden">
      
   <img src={logo} alt="" className="sm:max-w-25 max-w-20 " />
 
  <div className="flex items-center">      
  
  {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed right-6 text-white  rounded-2xl xl:hidden"
      >
        <Menu />
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 backdrop-blur-xl bg-opacity-40 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64  bg-[rgb(12,18,24)] shadow-lg z-50 transform transition-transform duration-300 rounded-l-xl ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setIsOpen(false)}>✕</button>
        </div>
        <ul className="p-4 space-y-4">
       <li><NavLink to="/" onClick={() => setIsOpen(false)} className={({isActive})=>
            isActive ? 'text-white' : 'text-gray-400'}>Web XV</NavLink></li>
                   <li><NavLink to="/Projects" onClick={() => setIsOpen(false)} className={({isActive})=>
            isActive ? 'text-white' : 'text-gray-400'}>All projects</NavLink></li>
                   <li><NavLink to="/Community" onClick={() => setIsOpen(false)} className={({isActive})=>
            isActive ? 'text-white' : 'text-gray-400'}>Community</NavLink></li>
                   <li><NavLink to="/About" onClick={() => setIsOpen(false)} className={({isActive})=>
            isActive ? 'text-white' : 'text-gray-400'}>About us</NavLink></li>
            {user ?(
               <button
                          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-normal text-[12px] cursor-pointer"
                          onClick={handleLogout}
                        >
                         <Link to="/">LOGOUT</Link>
                        </button>
                        ):
                        justRegistered ?(
            <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg font-medium cursor-pointer" onClick={() => setIsOpen(false)}><Link to="/">LOGIN</Link></button>
          ):(<button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium cursor-pointer"  onClick={() => setIsOpen(false)}><Link to="/Community">REGISTER</Link></button>)
                    }
        </ul>
      </div>
     </div>
   
  
</div>
      
    </>
  );
}
