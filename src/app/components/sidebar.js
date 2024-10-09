"use client";

import React from 'react';
import Image from 'next/image'; // Use Next.js Image for optimization
import Facebook from "@/app/components/images/facebook.png";
import Twitter from "@/app/components/images/tweet.png";
import Github from "@/app/components/images/github.png";
import Linkedin from "@/app/components/images/linkedin.png";
import Instagram from "@/app/components/images/insta.png";

const Sidebar = () => {
  const sidebarStyle = {
    position: 'fixed',
    top: '50%',
    left: '0',
    transform: 'translateY(-50%)',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '5px',
    backgroundColor: '#333',
    borderRadius: '0 8px 8px 0',
    zIndex: 1000, // Keeps sidebar above other components
  };

  const linkStyle = {
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    fontSize: '24px',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  };

  const iconStyle = {
    width: '20px',
    height: '20px',
    marginRight: '10px', // Added margin for spacing
  };

  const hoverStyle = {
    color: '#1DA1F2', // Change this color for the hover effect
  };

  const handleMouseEnter = (e) => {
    e.target.style.color = hoverStyle.color;
  };

  const handleMouseLeave = (e) => {
    e.target.style.color = linkStyle.color;
  };

  return (
    <div style={sidebarStyle}>
      <a
        href="https://www.linkedin.com/in/danishmustafa86/"
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image src={Linkedin} alt="LinkedIn" width={20} height={20} style={iconStyle} />
      </a>

      <a
        href="https://github.com/danishmustafa86"
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image src={Github} alt="GitHub" width={20} height={20} style={iconStyle} />
      </a>

      <a
        href="https://twitter.com/danishmustafa_786" // Corrected link to Twitter
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image src={Twitter} alt="Twitter" width={20} height={20} style={iconStyle} />
      </a>

      <a
        href="https://www.instagram.com/danishmustafa_786/"
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image src={Instagram} alt="Instagram" width={20} height={20} style={iconStyle} />
      </a>

      <a
        href="https://www.facebook.com/danish.jajja.56"
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image src={Facebook} alt="Facebook" width={20} height={20} style={iconStyle} />
      </a>
    </div>
  );
};

export default Sidebar;
