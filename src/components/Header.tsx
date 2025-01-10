import React from 'react';
import {
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaClock,
  FaPhone
} from 'react-icons/fa'


const Header: React.FC = () => {
    return (
      <div className="max-md:hidden w-full mt-0 bg-[#06277B] h-auto p-2">
        <header className="container mx-auto flex p-4 justify-between items-center text-white">
          <div>
            <div className="flex justify-between gap-5">
              <div className="relative group flex items-center gap-2">
                <FaEnvelope className="text-white" />
                <a href="info@skyshoregroup.com">info@skyshoregroup.com</a>
                <span className="absolute left-0 -bottom-1 w-0 h-1 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </div>
              <div className="w-0.5 bg-gray-500"></div>
              <div className="flex items-center gap-2">
                <FaClock className="text-white" />
                <span> Working: 8:00am - 5:00pm </span>
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-5">
            <div className="relative group flex items-center gap-2">
              <FaPhone className="text-white" />
              <span> +234 803 123 4567 </span>
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </div>
            <div className="w-0.5 bg-gray-500"></div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <a href="">
                  <FaFacebook className="text-white" />{' '}
                </a>
                <a href="">
                  <FaTwitter className="text-white" />{' '}
                </a>
                <a href="">
                  <FaLinkedin className="text-white" />{' '}
                </a>
                <a href="">
                  <FaInstagram className="text-white" />{' '}
                </a>
              </div>
            </div>
          </div>
        </header>
      </div>
    )
};

export default Header;