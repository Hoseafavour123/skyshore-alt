import React from 'react';
import Contact from '../sections/Contact';
import {FaLocationDot, FaMessage, FaPhone } from 'react-icons/fa6';
import { vid4 } from '../assets/videos/Skyshore Videos';


const ContactUs: React.FC = () => {
    return (
      <div>
        <div>
          <div className="relative h-[500px] w-full overflow-hidden mb-20">
            {/* Background Video */}
            <video
              className="absolute top-0 left-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
            >
              <source src={vid4} type="video/mp4" />
            </video>
            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

            {/* Text Content */}
            <div className="relative flex flex-col justify-center items-center h-full text-white text-center px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Contact Us
              </h1>
            </div>
          </div>
        </div>

        <div className="container mx-auto">
          <Contact />
        </div>

        <div className="container mx-auto max-md:flex-col flex justify-between md:flex-wrap mt-20 mb-20 font-semibold max-md:p-3">
          <div className="flex md:w-[25%] md:justify-center md:items-center gap-3 border rounded-lg shadow-md h-32 p-4">
            <FaPhone className="text-3xl text-blue-500" />
            <div>
              <p className="text-blue-500">Call us 24/7</p>
              <p>(704) 5555-0127 </p>
            </div>
          </div>
          <div className="flex md:w-[25%] md:justify-center md:items-center gap-3 border rounded-lg shadow-md h-32 p-4">
            <FaMessage className="text-3xl text-blue-500" />
            <div>
              <p className="text-blue-500">Email Us</p>
              <p>sales@sdmwestafrica.com </p>
            </div>
          </div>
          <div className="flex md:w-[25%] justify-center items-center gap-3 border rounded-lg shadow-md h-32 p-4">
            <FaLocationDot className="text-3xl text-blue-500" />
            <div>
              <p className="text-blue-500">Address</p>
              <p>
                No 18 Ibro Avenue, Trans Amadi, Port Harcourt. Rivers state{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
};

export default ContactUs;