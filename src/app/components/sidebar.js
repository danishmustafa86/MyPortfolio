"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image'; // Use Next.js Image for optimization
import Facebook from "@/app/components/images/facebook.png";
import Twitter from "@/app/components/images/tweet.png";
import Github from "@/app/components/images/github.png";
import Linkedin from "@/app/components/images/linkedin.png";
import Instagram from "@/app/components/images/insta.png";

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false); // State for hover effect
  const [tooltip, setTooltip] = useState(''); // State for tooltip text

  // Function to handle tooltip display
  const handleTooltip = (text) => {
    setTooltip(text);
  };

  // Function to reset tooltip
  const resetTooltip = () => {
    setTooltip('');
  };

  return (
    <div
      className="fixed top-1/2 left-0 transform -translate-y-1/2 flex flex-col gap-4 p-2 bg-gray-800 rounded-r-lg z-50 shadow-lg hover:shadow-xl transition-shadow duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/danishmustafa86/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-white text-lg hover:text-blue-500 transition-colors duration-300 relative"
        onMouseEnter={() => handleTooltip('LinkedIn')}
        onMouseLeave={resetTooltip}
      >
        <Image src={Linkedin} alt="LinkedIn" width={24} height={24} className="mr-2" />
        {isHovered && (
          <span className="absolute left-12 bg-gray-700 text-white text-sm px-2 py-1 rounded-md shadow-md">
            {tooltip}
          </span>
        )}
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/danishmustafa86"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-white text-lg hover:text-gray-500 transition-colors duration-300 relative"
        onMouseEnter={() => handleTooltip('GitHub')}
        onMouseLeave={resetTooltip}
      >
        <Image src={Github} alt="GitHub" width={24} height={24} className="mr-2" />
        {isHovered && (
          <span className="absolute left-12 bg-gray-700 text-white text-sm px-2 py-1 rounded-md shadow-md">
            {tooltip}
          </span>
        )}
      </a>

      {/* Twitter */}
      <a
        href="https://twitter.com/danishmustafa_786"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-white text-lg hover:text-blue-400 transition-colors duration-300 relative"
        onMouseEnter={() => handleTooltip('Twitter')}
        onMouseLeave={resetTooltip}
      >
        <Image src={Twitter} alt="Twitter" width={24} height={24} className="mr-2" />
        {isHovered && (
          <span className="absolute left-12 bg-gray-700 text-white text-sm px-2 py-1 rounded-md shadow-md">
            {tooltip}
          </span>
        )}
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/danishmustafa_786/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-white text-lg hover:text-pink-500 transition-colors duration-300 relative"
        onMouseEnter={() => handleTooltip('Instagram')}
        onMouseLeave={resetTooltip}
      >
        <Image src={Instagram} alt="Instagram" width={24} height={24} className="mr-2" />
        {isHovered && (
          <span className="absolute left-12 bg-gray-700 text-white text-sm px-2 py-1 rounded-md shadow-md">
            {tooltip}
          </span>
        )}
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/danish.jajja.56"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-white text-lg hover:text-blue-600 transition-colors duration-300 relative"
        onMouseEnter={() => handleTooltip('Facebook')}
        onMouseLeave={resetTooltip}
      >
        <Image src={Facebook} alt="Facebook" width={24} height={24} className="mr-2" />
        {isHovered && (
          <span className="absolute left-12 bg-gray-700 text-white text-sm px-2 py-1 rounded-md shadow-md">
            {tooltip}
          </span>
        )}
      </a>
    </div>
  );
};

export default Sidebar;