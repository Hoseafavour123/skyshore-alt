import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { shore1, shore2, shore3 } from '../assets/images'; // Add your images here

const Welcome: React.FC = () => {
  const images = [shore1, shore2, shore3]; // Array of image sources
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 
    return () => clearInterval(interval); 
  }, [images.length]);
  
  return (
    <div className="relative flex flex-col md:flex-row bg-gradient-to-r from-blue-100 to-white overflow-hidden z-0">
      {/* Left Image Slider Section */}
      <div className="w-full max-md:hidden md:w-1/2 h-64 md:h-full relative border border-l-0">
        <img
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-300"></div>
      </div>

      {/* Right Text Section */}
      <div className="w-full md:w-1/2 p-8 flex items-center justify-center overflow-hidden animate-slideUp">
        <div className="relative h-64 max-md:h-70 w-full">
          <div className="absolute text-content-container">
            <h1 className="text-xl md:mb-4 mb-2">
              Welcome to
              <span className="text-blue-500">
                {' '}
                SkyShore Downstream and Marketing Limited{' '}
              </span>
            </h1>
            <p className="leading-relaxed mb-8 max-md:mt-2">
              <span className="md:text-6xl max-md:text-4xl font-bold">A Leading</span>{' '}
              <em className="ml-2 md:text-6xl max-md:text-4xl text-blue-400">
                {' '}
                Player in Oil and Gas
              </em>
            </p>
            <p className="max-md:hidden leading-relaxed mt-4">
              SDM remains dedicated to driving growth and sustainability within
              the energy sector.
            </p>
            <button className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition-colors">
              <Link to="/">Learn more</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Welcome;
