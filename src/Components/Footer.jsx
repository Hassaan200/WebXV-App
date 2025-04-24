import React from 'react'
import logo from '../assets/Images/logonav.png'


const Footer = () => {
  return (
    <>
      <footer className="footer  bg-base-200  mt-10 ">
        <div  className="footer flex justify-around  sm:footer-horizontal bg-base-200 text-base-content p-10 ">
  <aside >
    <img src={logo} alt="" />
    <p className='pt-3 sm:text-[16px] text-[12px]'>
    A SocialFi platform for Web3.0 projects to connect with users.
      <br /><br />
      WebXV is a decentralized social platform for Web3.0 <br /> users to meet and connect with one another
    </p>
  </aside>
  <nav className='ml-12'>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover sm:text-[16px] text-[12px]">About Us</a>
    <a className="link link-hover sm:text-[16px] text-[12px]">Projects</a>
    <a className="link link-hover sm:text-[16px] text-[12px]">Community</a>
    <a className="link link-hover sm:text-[16px] text-[12px]">Privacy Policy</a>
    <a className="link link-hover sm:text-[16px] text-[12px]">Terms and Conditions</a>
  </nav>
  <nav>
    <h6 className="footer-title">Social</h6>
    <a className="link link-hover sm:text-[16px] text-[12px]">TikTok</a>
    <a className="link link-hover sm:text-[16px] text-[12px]">Youtube</a>
    <a className="link link-hover sm:text-[16px] text-[12px]">Telegram</a>
  </nav>
 </div>
 <p className='text-xl text-center'>© Copyright 2023 XV | All Rights Reserved | WhitePaper</p>
</footer>
    </>
  )
}

export default Footer
