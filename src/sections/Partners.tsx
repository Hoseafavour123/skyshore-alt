import React, { useState, useEffect } from 'react'
import { partners } from '../constants'

const Partners: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(
        (prevSlide: number) => (prevSlide + 1) % Math.ceil(partners.length / 2)
      )
    }, 3000) // Change slide every 3 seconds
    return () => clearInterval(interval) // Cleanup on component unmount
  }, [partners.length])

  // Grouping partners into pairs for each slide
  const groupedPartners = []
  for (let i = 0; i < partners.length; i += 2) {
    groupedPartners.push(partners.slice(i, i + 2))
  }

  return (
    <section className="mt-10 py-10 max-md:p-2">
      <div className="flex items-center justify-center mb-8">
        <hr className="w-1/3 border-t-3 border-blue-600" />
        <h2 className="text-3xl text-nowrap font-bold mx-4">Our Partners</h2>
        <hr className="w-1/3 border-t-3 border-blue-600" />
      </div>

      {/* Slider */}
      <div className="relative w-full h-48 md:h-[300px] flex items-center justify-center overflow-hidden">
        {/* Slide */}
        {groupedPartners.map((group, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div className="flex justify-center items-center gap-8">
              {group.map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center flex-col"
                >
                  <img
                    src={partner.logo}
                    alt={`Partner ${index + 1}`}
                    className="h-24 md:h-[100px] w-[150px] md:w-auto rounded-lg border-2 border-blue-100 p-1 object-contain"
                  />
                  <div className="p-3 w-[500px]">{partner.desc}</div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Navigation Dots */}
        <div className="absolute bottom-0 pt-5 flex items-center justify-center space-x-2">
          {groupedPartners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? 'bg-blue-600' : 'bg-blue-200'
              } transition-colors`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners
