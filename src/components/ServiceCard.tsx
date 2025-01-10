import React from 'react';

interface ServiceCardProps {
    title: string;
    imageUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, imageUrl}) => {
    return (
      <div className="flex items-start max-md:gap-3 gap-5 text-black border border-gray-200 p-4 rounded-lg bg-white shadow-lg hover:animate-pulse cursor-pointer hover:transition-all hover:duration-300 hover:ease-in">
        <div className="flex flex-col gap-3">
          <h1 className="font-semibold text-xl">{title}</h1>
          <div className="">
            <img src={imageUrl} alt={title} className='w-[330px] h-[330px]' />
          </div>
        </div>
      </div>
    )
};

export default ServiceCard;