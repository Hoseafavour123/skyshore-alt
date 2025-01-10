import React from 'react'
import { products } from '../constants'
import { Link } from 'react-router-dom'
import { vid12 } from '../assets/videos/Skyshore Videos'

const Products: React.FC = () => {
  return (
    <div>
      <div className="relative h-[500px] w-full overflow-hidden mb-20">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src={vid12} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

        {/* Text Content */}
        <div className="relative flex flex-col justify-center items-center h-full text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Products</h1>
        </div>
      </div>

      <div className="container mx-auto mt-20 mb-20">
        <p className="text-center">
          <em className="text-3xl font-semibold">
            Engineered for Performance, Driven by Innovation
          </em>{' '}
        </p>
        <div className="flex items-start justify-center flex-wrap gap-4 mt-5">
          {products.map((product, id) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center md:w-[30%] shadow-lg p-3 rounded-md"
            >
              <img
                src={product.imageUrl}
                alt=""
                className="h-[300px] w-[350px]"
              />
              <p className="text-blue-800 text-3xl text-center">
                {product.title}
              </p>
              <div className="text-center  p-2">{product.description}</div>
              <Link to={`/contact`}>
                <button className="bg-blue-800 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                  Order Product
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products
