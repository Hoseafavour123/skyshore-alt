import React from 'react';
import { products } from '../constants';
import ServiceCard from '../components/ServiceCard';

const Services: React.FC = () => {
    return (
      <div className="">
        <p className="text-xl text-center text-blue-500 mb-2">OUR PRODUCTS</p>
        <div className="flex items-center justify-center mb-8">
          <hr className="w-1/3 border-t-3 border-blue-600" />
          <h2 className="text-3xl text-nowrap font-bold mx-4">High Quality Products</h2>
          <hr className="w-1/3 border-t-3 border-blue-600" />
        </div>

        <div className="mt-5 bg-gradient-to-r from-purple-200 via-blue-200 to-white p-12 rounded-xl shadow-lg">
          <div className="max-w-6xl mx-auto text-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:p-6">
              {products.map((product, id) => (
                <ServiceCard
                  key={id}
                  title={product.title}
                  imageUrl={product.imageUrl}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
};

export default Services;