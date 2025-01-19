import React from 'react'
import Experience from '../sections/Experience'
import Services from '../sections/Services'
import Contact from '../sections/Contact'
import Partners from '../sections/Partners'
import HeaderAnimate from '../components/HeaderAnimate'
import AboutSkyShore from '../sections/AboutSkyShore'


const Home: React.FC = () => {
  return (
    <div className="font-poppins">

      <div>
       <HeaderAnimate/>
      </div>

      <div className="container mx-auto mt-[120px]  mb-10">
        <Experience/>
      </div>

      <div className="container mx-auto mt-[180px] mb-10">
        <Services />
      </div>

      <div className='mt-[100px]'>
        <Partners/>
      </div>

      <div className='mt-[100px]'>
        <AboutSkyShore/>
      </div>

      <div className="container mx-auto mt-[120px] mb-10">
        <Contact />
      </div>
    </div>
  )
}

export default Home
