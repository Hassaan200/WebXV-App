import { useState } from "react";
import { Menu } from 'lucide-react';
import logo from '../assets/Images/logonav.png'


export default function RightSidebar() {
  const [isOpen, setIsOpen] = useState(false);

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
        className={`fixed top-0 right-0 h-full w-64  bg-[rgb(12,18,24)] shadow-lg z-50 transform transition-transform duration-300 rounded-l-4xl ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setIsOpen(false)}>✕</button>
        </div>
        <ul className="p-4 space-y-4">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
     </div>
   
  
</div>
      
    </>
  );
}
