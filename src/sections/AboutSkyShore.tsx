import React, { useEffect, useState } from 'react'
import { aboutFour, aboutOne, aboutThree, aboutTwo } from '../assets/images'
import { Link } from 'react-router-dom'

const AboutSkyShore: React.FC = () => {
  const slides = [aboutTwo, aboutOne, aboutThree, aboutFour]
 const [currentIndex, setCurrentIndex] = useState(0)

 useEffect(() => {
   const interval = setInterval(() => {
     setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
   }, 4000)

   return () => clearInterval(interval)
 }, [slides.length])

  return (
    <div className="relative h-[800px] bg-black p-6">
      {/* Image Slider */}
      <div className="relative flex justify-center items-center h-[600px] rounded-lg">
        {slides.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`absolute w-[900px] h-[500px] transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
      {/* Text Content */}
      <div className="bg-white absolute top-[30%] right-[10%] w-[400px] p-5 border rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          <span className="font-normal text-blue-400">Transforming </span>
          Downstream and Marketing
        </h2>
        <p className="text-gray-600 leading-relaxed">
          
          Driving Innovation in the Downstream Sector
Skyshore Downstream and Marketing (SDM) is a dynamic subsidiary of Skyshore Group Ltd (SGL), strategically positioned to redefine the downstream oil and gas industry. <br/>With a focus on efficiency, innovation, and sustainable solutions, we specialize in the marketing, distribution, and retail of refined petroleum products across Africa and beyond.
<br/>
Incorporated in Nigeria under the "Companies and Allied Matters Act 1990," SDM leverages decades of industry expertise from its parent group, Skyshore Group Ltd, to deliver value-driven services. We ensure the seamless supply of energy solutions, bridging the gap between production and end-users while adhering to the highest global standards.
          <p className='text-end text-black'>
            <Link to="/contact" className="hover:underline">
              Read more
            </Link>
          </p>
        </p>
      </div>

      <p className='text-gray-500 text-7xl mt-3 font-bold'>ABOUT US</p>
    </div>
  )
}

export default AboutSkyShore
