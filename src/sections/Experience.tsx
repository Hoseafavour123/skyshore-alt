import React from 'react'
import { about1, about2 } from '../assets/images'
import { Link } from 'react-router-dom'
import { vid12 } from '../assets/videos/Skyshore Videos'

const Experience: React.FC = () => {
  return (
    <div className="relative flex flex-col md:flex-row bg-white overflow-hidden">
      {/* Left Text Section */}
      <div className="w-full md:w-1/2 p-5 flex justify-center">
        <div className="space-y-6 pr-5">
          <div className='flex justify-center items-center gap-3'>
            <span className="text-xl font-roboto text-blue-500 text-nowrap">
              MORE ABOUT US
            </span>
            <div className='h-1 w-full bg-blue-500'></div>
          </div>

          <h1 className="text-2xl md:text-4xl font-semibold capitalize">
            We are your trusted partner in distribution and supply of downstream
            products
          </h1>
          <p className="leading-relaxe">
            Skyshore Downstream and Marketing SLimited (SDM) is the member of
            Skyshore Group Ltd (SGL) created to market and distribute downstream
            petroleum products within Nigeria and West Africa.
          </p>
          <br />
          <p>
            Skyshore Downstream was carved out of SkyShore Shipping and Energy
            Ltd (SSL), another member of Skyshore Group Ltd.
          </p>
          <button className="mt-4 bg-blue-800 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            <Link to="/">Learn more</Link>
          </button>
        </div>
      </div>

      {/* Right Image Section with Animating Rectangles */}
      <div className="w-full md:w-1/2 md:h-full relative max-md:m-1">
        <img
          src={about1}
          height={1200}
          alt="Placeholder"
          className="hidden w-full max-md:w-[98%] h-[500px] object-cover"
        />
        <video
          className="w-full max-md:w-[98%] h-[500px] object-cover"
          autoPlay
          loop
          muted
        >
          <source src={vid12} type="video/mp4" />
        </video>

        {/* Animated Rectangles */}
        <div className="absolute max-md:bottom-0 max-md:top-auto max-md:right-2 max-md:left-auto -left-10 top-5 blue-500 animate-moveUpDown">
          <img src={about2} width={220} height={300} />
        </div>
        <div className="max-md:hidden flex justify-between gap-6 py-8 px-5  bg-blue-800 text-white absolute -left-10 bottom-1 animate-moveUpDown rounded-xl">
          <p className="font-bold text-3xl">
            15+ <br />
            years
          </p>
          <p className="text-xl font-semibold capitalize">
            experience in <br />
            downstream & marketng
          </p>
        </div>
      </div>
    </div>
  )
}

export default Experience
