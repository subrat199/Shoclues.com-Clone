import React from 'react'
import CarouselBottom from './CarouselBottom';
import Yourgadegt from './Yourgadegt';
import DailyEssentials from './DailyEssentials';
import FestiveSpecial from './FestiveSpecial';
import Footer from './../Components/Footer';

const Home = () => {
  return (
    <div>
       <CarouselBottom/>
       <Yourgadegt/>
       <DailyEssentials/>
       <FestiveSpecial/>
       <Footer/>
    </div>
  )
}

export default Home