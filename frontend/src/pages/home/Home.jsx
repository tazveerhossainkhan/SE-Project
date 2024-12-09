import React from 'react'

import bannerImg from "../../assets/pet.png"
import Banner from './Banner'
import TopSellers from './TopSellers'
import Recommended from './Recommended'
import News from './News'

const Home = () => {
  return (
    <>
    <Banner/>
    <TopSellers/>
    <Recommended/>
    <News/>
    </>
    
    
  )
}

export default Home