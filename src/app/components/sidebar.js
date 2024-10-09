"use client";

import React from 'react';
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
    zIndex: 1000, // Added zIndex to keep it above other components
    // width: '50px', // Set your desired width here

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
    marginRight: '0px',
  };

  const hoverStyle = {
    color: '#1DA1F2', // Change this color for the hover effect
  };

  return (
    <div style={sidebarStyle}>
      <a
        href="https://www.linkedin.com/in/danishmustafa86/"
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
        onMouseEnter={(e) => (e.target.style.color = hoverStyle.color)}
        onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
      >
        <img src={Linkedin.src} alt="LinkedIn" style={iconStyle} />
        {/* LinkedIn */}
      </a>

      <a
        href="https://github.com/danishmustafa86"
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
        onMouseEnter={(e) => (e.target.style.color = hoverStyle.color)}
        onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
      >
        <img src={Github.src} alt="GitHub" style={iconStyle} />
        {/* GitHub */}
      </a>

      <a
        href="https://www.instagram.com/danishmustafa_786/"
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
        onMouseEnter={(e) => (e.target.style.color = hoverStyle.color)}
        onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
      >
        <img src={Twitter.src} alt="Twitter" style={iconStyle} />
        {/* Twitter */}
      </a>

      <a
        href="https://www.instagram.com/danishmustafa_786/"
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
        onMouseEnter={(e) => (e.target.style.color = hoverStyle.color)}
        onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
      >
        <img src={Instagram.src} alt="Instagram" style={iconStyle} />
        {/* Instagram */}
      </a>

      <a
        href="https://www.facebook.com/danish.jajja.56"
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
        onMouseEnter={(e) => (e.target.style.color = hoverStyle.color)}
        onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
      >
        <img src={Facebook.src} alt="Facebook" style={iconStyle} />
        {/* Facebook */}
      </a>
    </div>
  );
};

export default Sidebar;
