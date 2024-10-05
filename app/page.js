import React from 'react'
import img from "@/public/img/img1.jpeg"
import Image from 'next/image'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import BestSellingProducts from './component/BestSellingProducts'
import SignedCollection from './component/SignedCollection'
import MissionSection from './component/MissionSection'
import Footer from './component/Footer'
import BestProduct from './component/BestProduct'

function page() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <BestSellingProducts></BestSellingProducts>
      <BestProduct></BestProduct>
      <SignedCollection></SignedCollection>
      <MissionSection></MissionSection>
      <Footer></Footer>
    </div>
  )
}

export default page