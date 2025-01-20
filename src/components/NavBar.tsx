import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi' // Hamburger and close icons
import { logo } from '../assets/icons'
import { members, products } from '../constants'

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="font-poppins bg-white shadow-md p-3 w-full max-md:top-0 z-50 text-nowrap">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center justify-center">
          <img src={logo} width={80} height={80} alt="" className='mb-4'/>
          <div className="flex flex-col gap-0 text-gray-700 mt-6 -ml-3">
            <span className="text-4xl text-blue-700 font-bold">SDM LIMITED</span>{' '}
            <span className="text-[9.5px] text-blue-800 font-bold">Skyshore Downstream and Marketing Limited </span>
          </div>
        </div>
        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden ">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            {isMenuOpen ? (
              <HiX className="fixed z-50 right-5 top-3 text-3xl text-gray-700" />
            ) : (
              <HiMenu className="text-3xl text-gray-700" />
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`max-md:fixed inset-0 bg-white z-40 p-8 flex flex-col space-y-4 items-center transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 md:static md:flex md:flex-row md:space-y-0 md:space-x-8 md:translate-x-0 md:p-0 md:bg-transparent text-[18px] font-semibold`}
        >
          <li>
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-500 transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>

          {/* About Us Dropdown */}
          <li className="relative group">
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-500 transition-colors"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <ul className="max-md:hidden absolute left-0 mt-1 hidden group-hover:block bg-white border border-t-4 border-t-blue-500 rounded shadow-lg space-y-2 p-3 text-nowrap text-sm font-normal">
              <li className="p-1 border border-blue-200 rounded-md">
                <Link
                  to="/about/history"
                  className="block text-gray-700 hover:text-blue-500 transition-colors"
                >
                  History
                </Link>
              </li>
              <li className="p-1 border border-blue-200 rounded-md">
                <Link
                  to="/about/team"
                  className="block text-gray-700 hover:text-blue-500 transition-colors"
                >
                  Core Values
                </Link>
              </li>
              <li className="p-1 border border-blue-200 rounded-md">
                <Link
                  to="/about/team"
                  className="block text-gray-700 hover:text-blue-500 transition-colors"
                >
                  Vision
                </Link>
              </li>
              <li className="p-1 border border-blue-200 rounded-md">
                <Link
                  to="/about/team"
                  className="block text-gray-700 hover:text-blue-500 transition-colors"
                >
                  Mission
                </Link>
              </li>
            </ul>
          </li>

          {/* Products Dropdown */}
          <li className="relative group">
            <Link
              to="/products"
              className="text-gray-700 hover:text-blue-500 transition-colors"
            >
              Products
            </Link>
            <ul className="max-md:hidden absolute left-0 mt-2 hidden group-hover:block bg-white border border-t-4 border-t-blue-500 rounded shadow-lg space-y-2 p-4 text-nowrap text-sm font-normal ">
              {products.map((product, id) => (
                <li
                  key={id}
                  className="relative p-1 border border-blue-200 rounded-md group"
                >
                  <Link
                    to={`/products/${product?.title?.toLowerCase()}`}
                    className="block text-gray-700 hover:text-blue-500 transition-colors"
                  >
                    <span>{product.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li className="relative group">
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-500 transition-colors"
              onClick={toggleMenu}
            >
              Member Companies
            </Link>
            <ul className="absolute left-0 mt-1 hidden group-hover:block bg-white rounded shadow-lg space-y-2 p-3 text-nowrap text-sm font-normal">
              <li className="relative group">
                <ul className="absolute left-0 mt-1 hidden group-hover:block bg-white border border-t-4 border-t-blue-500 rounded shadow-lg space-y-2 p-3 text-nowrap text-sm font-normal">
                  {members.map((member, id) => (
                    <li key={id} className="p-1 border border-blue-200 rounded-md">
                      <a
                        href={member.link}
                        className="block text-gray-700 hover:text-blue-500 transition-colors"
                      >
                        {member.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-500 transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="max-md:hidden">
          <Link to="/">
            <button
              onClick={toggleMenu}
              className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Visit Home
            </button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
