import { useState, useEffect } from 'react'
import { shore1, shore2, shore3 } from '../assets/images'
import { Link } from 'react-router-dom'

const HeaderBanner = () => {
  const slides = [
    {
      image: shore1,
      heading: 'Welcome to Skyshore Downstream & Marketing Ltd',
      text: 'Your trusted partner in marketing and distribution of downstream products',
      buttonLabel: 'About Us',
      link: '/about'
    },
    {
      image: shore2,
      heading: 'Pioneering the Future of Energy',
      text: 'Committed to driving growth and sustainability in the energy sector.',
      buttonLabel: 'Our Products',
      link: '/products'
    },
    {
      image: shore3,
      heading: 'Excellent Service Delivery',
      text: 'Shaping the future of downstream and marketing.',
      buttonLabel: 'Get Started',
      link: '/contact'
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden">
      {/* Slideshow */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.heading}
            className="w-full h-full object-cover"
          />
          {/* Darker Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
      ))}

      <div className="absolute inset-y-0 left-0 w-1/2 bg-black bg-opacity-60 flex items-center z-20">
        <div className="p-8 md:p-16 text-white transition-opacity duration-1000">
          <h1 className="text-3xl md:text-7xl font-bold mb-4">
            {slides[currentSlide].heading}
          </h1>
          <p className="text-lg md:text-2xl leading-relaxed">
            {slides[currentSlide].text}
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-700 transition">
            <Link to={`${slides[currentSlide].link}`} className='w-full'>
              {slides[currentSlide].buttonLabel}
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeaderBanner
