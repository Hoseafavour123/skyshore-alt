import { useState, useEffect } from 'react'
import { shore2, backg3, backg1, backg2 } from '../assets/images'
import { Link } from 'react-router-dom'

const HeaderBanner = () => {
  const slides = [
    {
      image: shore2,
      heading: 'Welcome to',
      text: 'Skyshore Downstream and Marketing Limited. Your trusted partner in delivering premium energy solutions and driving the future of sustainable progress',
      buttonLabel: 'About Us',
      link: '/about'
    },
    {
      image: backg3,
      heading: 'Pioneering the Future of Energy',
      text: 'Pioneering the future of energy with innovative solutions',
      buttonLabel: 'Our Products',
      link: '/products'
    },
    {
      image: backg2,
      heading: 'Premium Energy Products',
      text: 'Delivering premium energy products with unmatched reliability and sustainability across Africa. Powering progress, one solution at a time.',
      buttonLabel: 'Get Started',
      link: '/contact'
    },
     {
      image: backg1,
      heading: 'Enjoy Maximum Performance',
      text: 'With our range of lubricants, you will enjoy maximum performance, our lubricants are engineered for excellence and powered by innovation',
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

      <div className="max-md:p-2 absolute inset-y-0 left-0 w-1/2  bg-opacity-60 flex items-center z-20">
        <div className="p-8 md:p-16 text-white transition-opacity duration-1000">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
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
