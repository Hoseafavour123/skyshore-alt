import React from 'react';
import { vid10, vid11, vid12, vid4, vid5, vid8 } from '../assets/videos/Skyshore Videos';

const WelcomeVideo: React.FC = () => {
    return (
      <div>
        <div className="relative h-[400px] w-full overflow-hidden mb-20">
          {/* Background Video */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
          >
            <source src={vid5} type="video/mp4" />
          </video>
          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

          {/* Text Content */}
          <div className="relative flex flex-col justify-center items-center h-full text-white text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome
            </h1>

          </div>
        </div>
      </div>
    )
};

export default WelcomeVideo;