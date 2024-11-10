import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/project-bg.jpg)] bg-left bg-cover' // Tailwind for background size
    style={{backgroundSize: "30%", backgroundPositionY: "center 100px top 100px"}}>
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[100px] sm:text-[130px] font-bold leading-tight flex justify-center items-center'>
            <div>
      
                <p  data-aos="zoom-in-up"><i>I AM</i></p>
                
                <p  data-aos="zoom-in-up"><i>AQSA KHAN</i></p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
