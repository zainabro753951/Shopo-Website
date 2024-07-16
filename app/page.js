import React from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Cards from './Components/Cards'
import Mobile from './Components/Mobile'
import Features from './Components/Features'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

const page = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Cards/>
      <Mobile/>
      <Features/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default page