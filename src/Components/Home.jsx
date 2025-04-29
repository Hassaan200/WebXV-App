import React from 'react'
import Form from './Form'
import Carosal from './Carosal'
import Info from './Info'
import Chart from './Chart'
const Home = ({ setJustRegistered }) => {
  return (
   <>
   <Form setJustRegistered={setJustRegistered}/>
   <Carosal/>
   <Info/>
   <Chart/>
   </>
  )
}

export default Home
