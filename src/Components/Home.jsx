import React from 'react'
import Form from './Form'
import Carosal from './Carosal'
import Info from './Info'
import Chart from './Chart'
const Home = ({ setJustRegistered, user }) => {
  return (
   <>
   <Form setJustRegistered={setJustRegistered}/>
   <Carosal/>
   <Info/>
   <Chart user={user}/>
   </>
  )
}

export default Home
