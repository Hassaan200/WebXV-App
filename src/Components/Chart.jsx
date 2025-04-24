import React from 'react'
import Bitcoin  from '../assets/Images/Bitcoin.png'
import  b2  from '../assets/Images/b2.png'
import  b3  from '../assets/Images/b3.png'
import  b4  from '../assets/Images/b4.png'
import  b5  from '../assets/Images/b5.png'
import  g1  from '../assets/Images/g1.png'

const Chart = () => {
  return (
    <>
    <div className='text-center mt-10'>
      <h2 className='text-2xl text-blue-500'>cryptocurrencies</h2>
      <h1 className='text-4xl'>Top Crypto Chart</h1>
      <div className='bg-gray-800 border-1 border-gray-500 rounded-2xl mt-10 w-full max-w-[1100px] mx-auto'>
      <div className='flex justify-around  items-center h-13 ml-3'>
        <div className='text-gray-400'>NAME</div>
        <div className='text-gray-400'>PRICE</div>
        <div className='text-gray-400'>GRAPH</div>
      </div>
        <hr className='text-gray-500' />
      <div className='flex justify-around  items-center h-23'>
        <div className='flex sm:gap-2 items-center h-5'>
            <div>
            <img src={Bitcoin} alt="" className='sm:w-[40px] sm:h-[43px] w-[30px] h-[33px]' />
            </div>
            <div>
            <p className='sm:text-[16px] text-[12px] '>Bitcoin</p>
            <p className='text-gray-500 sm:text-[16px] text-[12px]'>BTC/USD</p>
            </div>
        </div>
        <div ><p className='sm:text-[16px] text-[12px]'>$92,594 <span className='text-green-500 text-xm sm:text-[16px] text-[12px]'>0.85%</span></p></div>
        <div>
            <img src={g1} alt="" />
            </div>
      </div>
        <hr className='text-gray-500' />
      <div className='flex justify-around  items-center h-23'>
        <div className='flex sm:gap-2 items-center h-5'>
            <div>
            <img src={b3} alt="" className='sm:w-[40px] sm:h-[43px] w-[30px] h-[33px]' />
            </div>
            <div>
            <p className='sm:text-[16px] text-[12px] '>Bitcoin</p>
            <p className='text-gray-500 sm:text-[16px] text-[12px]'>BTC/USD</p>
            </div>
        </div>
        <div ><p className='sm:text-[16px] text-[12px]'>$92,594 <span className='text-green-500 text-xm sm:text-[16px] text-[12px]'>0.85%</span></p></div>
        <div>
            <img src={g1} alt="" />
            </div>
      </div>
        <hr className='text-gray-500' />
      <div className='flex justify-around  items-center h-23'>
        <div className='flex sm:gap-2 items-center h-5'>
            <div>
            <img src={b4} alt="" className='sm:w-[40px] sm:h-[43px] w-[30px] h-[33px]' />
            </div>
            <div>
            <p className='sm:text-[16px] text-[12px] '>Bitcoin</p>
            <p className='text-gray-500 sm:text-[16px] text-[12px]'>BTC/USD</p>
            </div>
        </div>
        <div ><p className='sm:text-[16px] text-[12px]'>$92,594 <span className='text-green-500 text-xm sm:text-[16px] text-[12px]'>0.85%</span></p></div>
        <div>
            <img src={g1} alt="" />
            </div>
      </div>
        <hr className='text-gray-500' />
      <div className='flex justify-around  items-center h-23'>
        <div className='flex sm:gap-2 items-center h-5'>
            <div>
            <img src={b5} alt="" className='sm:w-[40px] sm:h-[43px] w-[30px] h-[33px]' />
            </div>
            <div>
            <p className='sm:text-[16px] text-[12px] '>Salona</p>
            <p className='text-gray-500 sm:text-[16px] text-[12px]'>BTC/USD</p>
            </div>
        </div>
        <div ><p className='sm:text-[16px] text-[12px]'>$92,594 <span className='text-green-500 text-xm sm:text-[16px] text-[12px]'>0.85%</span></p></div>
        <div>
            <img src={g1} alt="" />
            </div>
      </div>
        <hr className='text-gray-500' />

      </div>
    </div>

<div className='text-center mt-20  '>
    <h1 className='sm:text-5xl text-3xl font-bold  leading-relaxed sm:leading-snug'>With XV Token The Possibilities <br /> Are Limitless</h1>
    <p className='mt-7 sm:text-2xl text-xm'>One token for everything. XV is the utility token for an ecosystem that has gotten bigger <br />than ever before and is now fully community-oriented.</p>
    <button className="bg-blue-600 hover:bg-blue-700 px-12 py-2 rounded-lg font-medium cursor-pointer mt-6 text-xl">REGISTER NOW</button>
</div>
    </>
    
  )
}

export default Chart
