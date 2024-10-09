"use client"; // Ensure this is included for client-side rendering

import React from 'react';
import Image from 'next/image'; // Importing the Next.js Image component

// Use dynamic imports for images to avoid issues with build-time resolution
import MyImage from "@/app/components/images/myimage.jpg";
import Facebook from "@/app/components/images/facebook.png";
import Twitter from "@/app/components/images/tweet.png";
import Github from "@/app/components/images/github.png";
import Linkedin from "@/app/components/images/linkedin.png";
import Instagram from "@/app/components/images/insta.png";

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#333',
    color: 'white',
    padding: '40px 20px',
  };

  const sectionStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
    marginBottom: '20px',
  };

  const lineStyle = {
    margin: '10px 0',
    borderTop: '1px solid rgba(255, 255, 255, 0.5)',
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  const iconStyle = {
    margin: '0 10px',
    width: '30px',  // Adjusted size for better visibility
    height: '30px',
    verticalAlign: 'middle',
  };

  const copyrightStyle = {
    textAlign: 'center',
    fontSize: '0.9rem',
    marginTop: '20px',
  };

  const aboutMeStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const imageStyle = {
    borderRadius: '50%', // Makes the image circular
    width: '50px', // Adjust size as needed
    height: '50px',
    marginRight: '10px', // Space between the image and text
  };

  return (
    <footer style={footerStyle}>
      <div style={sectionStyle}>
        <div style={aboutMeStyle}>
          <Image src={MyImage} alt="About Me" width={50} height={50} style={imageStyle} />
          <p>I'm a passionate developer who loves coding and problem-solving!</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'right', marginRight: "40px", alignItems: 'left' }}>
          <a href="https://www.linkedin.com/in/danishmustafa86/" target="_blank" rel="noopener noreferrer">
            <Image src={Linkedin} alt="LinkedIn" width={30} height={30} style={iconStyle} />
          </a>
          <a href="https://github.com/danishmustafa86" target="_blank" rel="noopener noreferrer">
            <Image src={Github} alt="Github" width={30} height={30} style={iconStyle} />
          </a>
          <a href="https://www.instagram.com/danishmustafa_786" target="_blank" rel="noopener noreferrer">
            <Image src={Twitter} alt="Twitter" width={30} height={30} style={iconStyle} />
          </a>
          <a href="https://www.facebook.com/danish.jajja.56" target="_blank" rel="noopener noreferrer">
            <Image src={Facebook} alt="Facebook" width={30} height={30} style={iconStyle} />
          </a>
          <a href="https://www.instagram.com/danishmustafa_786" target="_blank" rel="noopener noreferrer">
            <Image src={Instagram} alt="Instagram" width={30} height={30} style={iconStyle} />
          </a>
        </div>
      </div>
      <div style={lineStyle}></div>
      <div style={copyrightStyle}>
        <p>© 2024 Danish Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
