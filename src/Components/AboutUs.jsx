import React from 'react'
import Info from './Info'
import TokCard from './TokCard'


const AboutUs = () => {
    const tokData = [
        {
         img: "/Images/tok1.png",
         Heading: "Create a Wallet",
         Text1: "Download Metamask App or any wallet ",
         Text2: "Download the Google chrome extension",
        },
        {
         img: "/Images/tok2.png",
         Heading: "Create a Wallet",
         Text1: "Download Metamask App or any wallet ",
         Text2: "Download the Google chrome extension",
        },
        {
         img: "/Images/tok3.png",
         Heading: "Create a Wallet",
         Text1: "Download Metamask App or any wallet ",
         Text2: "Download the Google chrome extension",
        },
        {
         img: "/Images/tok4.png",
         Heading: "Create a Wallet",
         Text1: "Download Metamask App or any wallet ",
         Text2: "Download the Google chrome extension",
        },
    ]
  return (
    <>
    <div className='sm:pt-32 pt-22'>
        <div>
        <h1 className='text-4xl text-center font-bold'>About Us</h1>
      <Info/>
        </div>
        <div>

            <h1 className='text-4xl text-center font-bold mt-10'>How you Buy $XV Token</h1>

            <div className="flex justify-center gap-4 mt-6 flex-wrap">
            <TokCard content={tokData[0]} />
            <TokCard content={tokData[1]} />
            </div>
            <div className="flex justify-center gap-4 mt-4 flex-wrap">
            <TokCard content={tokData[2]} />
            <TokCard content={tokData[3]} />
            </div>

    </div>
    </div>
    </>
  )
}

export default AboutUs
