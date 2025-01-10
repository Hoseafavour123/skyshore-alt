import React from 'react'
import { deepBlue } from '../assets/images'

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16 w-full">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div
          className="flex flex-col md:flex-row items-center bg-cover bg-center bg-no-repeat h-auto p-8 md:p-10 rounded-lg"
          style={{
            backgroundImage: `url(${deepBlue})`,
          }}
        >
          {/* Text Section */}
          <div className="w-full md:w-1/2 mb-6 md:mb-0 text-center md:text-left">
            <p className="text-lg uppercase">Latest Oil & Gas News Updates</p>
            <p className="capitalize font-semibold text-2xl md:text-4xl mt-3">
              Sign up for our newsletter
            </p>
          </div>

          {/* Input Section */}
          <div className="w-full md:w-1/2 flex flex-col md:flex-row items-center md:items-end gap-4">
            <input
              type="email"
              className="w-full md:w-3/4 rounded-full p-4 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm text-black"
              placeholder="Enter your email"
            />
            <button className="bg-blue-500 rounded-full px-6 py-3 text-white hover:bg-blue-600 transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Text */}
        <p className="text-center mt-8 text-sm md:text-base">
          &copy; {new Date().getFullYear()} Skyshore Downstream and Marketing
          Limited. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
