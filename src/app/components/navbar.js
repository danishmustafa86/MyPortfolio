"use client";

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';  // Correct Next.js image component
import myImage from "@/app/components/images/myimage.jpg";  // Correct image import

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.navbarContainer}>
        {/* Use Next.js Image for optimized loading */}
        <Image 
          src={myImage} 
          alt="Profile image of Danish Mustafa" // Updated alt text
          width={50} 
          height={50} 
          style={styles.profileImage} 
        />
        <div style={styles.navbarLogo}>My Portfolio</div>
        <button style={styles.hamburger} onClick={toggleMenu}>
          <span style={styles.hamburgerLine}></span>
          <span style={styles.hamburgerLine}></span>
          <span style={styles.hamburgerLine}></span>
        </button>
        <ul style={{ ...styles.navbarLinks, ...(isOpen ? styles.open : {}) }}>
          <li style={styles.navItem}>
            <Link href="/" style={styles.navLink}>Home</Link>
          </li>
          <li style={styles.navItem}>
            <Link href="/about" style={styles.navLink}>About</Link>
          </li>
          <li style={styles.navItem}>
            <Link href="/projects" style={styles.navLink}>Projects</Link>
          </li>
          <li style={styles.navItem}>
            <Link href="/contact" style={styles.navLink}>Contact</Link>
          </li>
        </ul>
      </div>

      {/* Media queries for responsive navbar */}
      <style jsx>{`
        @media (max-width: 768px) {
          .navbarLinks {
            display: none;
          }
          .navbarLinks.open {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 60px;
            left: 0;
            width: 100%;
            background-color: #333;
            padding: 10px 0;
          }
          .hamburger {
            display: flex;
          }
          .navItem {
            width: 100%;
          }
          .navLink {
            text-align: center;
            padding: 15px;
          }
        }
      `}</style>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#333',
    color: 'white',
    padding: '10px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    zIndex: 1000,
  },
  navbarContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  profileImage: {
    borderRadius: '50%',
    transition: 'transform 0.3s',
  },
  navbarLogo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textAlign: 'left',
    flexGrow: 1,
  },
  hamburger: {
    display: 'none',
    flexDirection: 'column',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
  hamburgerLine: {
    width: '25px',
    height: '3px',
    backgroundColor: 'white',
    margin: '4px 0',
  },
  navbarLinks: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  navItem: {
    flex: '1',
    textAlign: 'center',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    padding: '10px 15px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    transition: 'color 0.3s',
  },
  open: {
    display: 'flex',
    position: 'absolute',
    top: '60px',
    left: '0',
    width: '100%',
    backgroundColor: '#333',
    flexDirection: 'column',
    zIndex: 100,
    padding: '10px 0',
  },
};

export default Navbar;
