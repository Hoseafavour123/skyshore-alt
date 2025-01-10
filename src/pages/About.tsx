import { Link } from 'react-router-dom'
import { about2 } from '../assets/images'
import { useState } from 'react'
import { MdHighQuality } from 'react-icons/md'
import { BiHappyAlt } from 'react-icons/bi'
import { FaLightbulb } from 'react-icons/fa6'
import { FiShield } from 'react-icons/fi'
import { AiOutlineCheckCircle } from 'react-icons/ai'

import { vid12 } from '../assets/videos/Skyshore Videos'
import Partners from '../sections/Partners'

const About: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }
  return (
    <div className="font-poppins">
      <div
        className="relative mt-20 mb-20 w-full h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${about2})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative text-white text-4xl font-bold z-10">
          ABOUT US
        </h1>
      </div>

      <div className="container mx-auto flex gap-5 mb-20 max-md:md:flex-col max-md:flex-col-reverse max-md:p-4">
        <div className="flex-1">
          <img src={about2} alt="" className="hidden h-full" />
          <video
            className="w-full max-md:w-[98%] h-full object-cover border-[40px] border-t-black border-b-black border-l-blue-500 border-r-blue-500"
            autoPlay
            loop
            muted
          >
            <source src={vid12} type="video/mp4" />
          </video>
        </div>
        <div className="flex-1">
          <div className="flex justify-center items-center gap-3 mb-3">
            <span className="text-xl font-roboto text-blue-500 text-nowrap">
              Driving excellence in
            </span>
            <div className="h-1 w-full bg-blue-500"></div>
          </div>
          <p className="font-semibold text-4xl">
            Distribution & Supply <br /> of Downstream Products
          </p>
          <div className='w-[90%]'>
            <p className="mt-3">
              Skyshore Downstream and Marketing SLimited (SDM) is the member of
              Skyshore Group Ltd (SGL) created to market and distribute
              downstream petroleum products within Nigeria and West Africa.
              <br />
              Skyshore Downstream and Marketing (SDM) is a leading player in the
              oil and gas industry, renowned for its extensive markets and
              robust distribution networks. SDM operates across Nigeria and
              extends its reach into several West African countries, ensuring
              efficient delivery of petroleum products throughout the region.
              With a team of highly skilled professionals trained as experts in
              oil and gas trading, SDM guarantees excellence and reliability in
              all its operations.
              <br /><br />
              The company’s strong distribution network ensures seamless
              accessibility to energy products, catering to diverse market
              demands across Nigeria and West Africa. Through Skyshore Retail
              Ltd, SDM also operates as an independent petroleum product
              marketer, collaborating with the Nigerian National Petroleum
              Corporation (NNPC) to further its commitment to providing quality
              energy solutions. SDM remains dedicated to driving growth and
              sustainability within the energy sector.
            </p>
          </div>

          <button className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            <Link to="/contact">Connect with us</Link>
          </button>
        </div>
      </div>

      <div className=" bg-black mb-20 md:p-5 max-md:p-3">
        <div className="flex justify-center items-center flex-col container mx-auto text-white">
          <p className="text-blue-500 font-semibold mt-3 mb-3 text-sm">
            Pioneering
          </p>
          <p className="max-md:text-3xl text-5xl font-semibold uppercase">
            World-Class
          </p>
          <p className="max-md:text-2xl text-4xl text-blue-500 mt-3 uppercase">
            Downstream products
          </p>
        </div>
        <div className="flex justify-center items-center flex-col container mx-auto md:w-[40%] mt-5">
          <div className="border text-white border-gray-800 rounded-md shadow-md">
            {/* Our Mission */}
            <div className="p-2">
              <button
                onClick={() => toggleAccordion(0)}
                className="flex justify-between items-center w-full px-4 py-2 text-left outline-none"
              >
                <span className="font-medium text-lg text-blue-500">
                  Our Mission
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 transform transition-transform ${
                    openIndex === 0 ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === 0 ? 'max-h-40' : 'max-h-0'
                }`}
              >
                <p className="px-4 py-2 text-gray-300">
                  Our goal is to provide the highest quality of products, with
                  the broadest selection of variety of products at the most
                  competitive prices.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-800 mt-2 mb-2"></div>

            {/* Our Vision */}
            <div className="p-2">
              <button
                onClick={() => toggleAccordion(1)}
                className="flex justify-between items-center w-full px-4 py-2 text-left outline-none"
              >
                <span className="font-medium text-lg text-blue-500">
                  Our Vision
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 transform transition-transform ${
                    openIndex === 1 ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === 1 ? 'max-h-40' : 'max-h-0'
                }`}
              >
                <p className="px-4 py-2 text-gray-300">
                  To be the largest, most reliable and trusted company for the
                  distribution and trading of Petroleum products within Nigeria
                  and West Africa through continuous customer interaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-center mb-8">
          <hr className="w-1/3 border-t-3 border-blue-600" />
          <h2 className="text-3xl text-nowrap font-bold mx-4">Core Values</h2>
          <hr className="w-1/3 border-t-3 border-blue-600" />
        </div>

        <div className="container mx-auto flex gap-4 flex-wrap">
          <div className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg max-w-sm mx-auto">
            <div className="text-4xl mb-4">
              <MdHighQuality className="text-blue-500" />
            </div>
            <h2 className="text-xl font-semibold mb-2">High QUality</h2>
            <p className="text-gray-600 text-center">
              We operate under standardized technique with state of the art
              equipment in other to achieve excellence in all our products{' '}
            </p>
          </div>
          <div className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg max-w-sm mx-auto">
            <div className="text-4xl mb-4">
              <BiHappyAlt className="text-blue-500" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Client Satisfaction</h2>
            <p className="text-gray-600 text-center">
              We work hard to ensure transparency and honesty in all
              interactions and communications
            </p>
          </div>
          <div className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg max-w-sm mx-auto">
            <div className="text-4xl mb-4">
              <FaLightbulb className="text-blue-500" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Innovation</h2>
            <p className="text-gray-600 text-center">
              We embrace the concept of innovative culture, through
              collaboration between our staff and constantly striving for the
              best possible outcomes
            </p>
          </div>
          <div className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg max-w-sm mx-auto">
            <div className="text-4xl mb-4">
              <FiShield className="text-blue-500" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Safety</h2>
            <p className="text-gray-600 text-center">
              We carefully plan our corporate actions towards the society, the
              environment, the people, and our partners.
            </p>
          </div>
          <div className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg max-w-sm mx-auto">
            <div className="text-4xl mb-4">
              <AiOutlineCheckCircle className="text-blue-500" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Ethics</h2>
            <p className="text-gray-600 text-center">
              We work hard to ensure transparency and honesty in all
              interactions and communication
            </p>
          </div>
        </div>
      </div>

     <Partners/>
    </div>
  )
}

export default About
