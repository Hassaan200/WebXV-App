import React from 'react'
import A1 from '../assets/Images/A1.png'

const Info = () => {
  return (
    <>
    <div className='flex justify-center flex-wrap items-center gap-10  mt-16 '>
      <div className='max-w-[480px]'>
        <h4 className='text-lg font-semibold text-blue-500'>ABOUT US</h4>
        <h1 className='text-5xl font-bold mb-4'>Who We Are</h1>
        <p className=' leading-relaxed text-gray-400'>XV is a community-focused project led by a highly experienced team of Web3 builders and traders. Our founder A On made his name in the industry moderating for several early crypto projects before the 2021 bull run. <br />
        XV is also supported by several team members that are actively involved in the day-to-day running of the community. Join us on Telegram and Twitter.</p>
      </div>
      <div>
<img src={A1} alt="" className='w-[700px] object-contain' />
      </div>
    </div>
    </>
  )
}

export default Info
