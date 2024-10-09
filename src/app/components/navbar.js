"use client";

import Link from 'next/link';
import { useState } from 'react';
import Image from "@/app/components/images/myimage.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.navbarContainer}>
        <img src={Image.src} alt="Profile" style={styles.profileImage} />
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
    width: '50px',
    height: '50px',
    marginRight: '10px',
    transition: 'transform 0.3s',
  },
  navbarLogo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textAlign: 'left',
    flexGrow: 1,
  },
  hamburger: {
    display: 'none', // Hidden on larger screens
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
    flexGrow: 1, // Allow links to grow
    justifyContent: 'flex-end', // Align links to the right
  },
  navItem: {
    flex: '1', // Ensure each item takes equal space
    textAlign: 'center', // Center text
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
    display: 'flex', // Show links when the menu is open
    position: 'absolute',
    top: '60px', // Adjust position based on navbar height
    left: '0',
    width: '100%',
    backgroundColor: '#333',
    flexDirection: 'column',
    zIndex: 100, // Ensure dropdown is above other elements
    padding: '10px 0',
  },
  close: {
    display: 'none', // Hide when menu is closed
  },
};

// Media Queries for Responsiveness
const mediaQueryStyles = `
  @media (max-width: 768px) {
    .navbarLinks {
      display: none; // Hide by default
    }
    .navbarLinks.open {
      display: flex; // Show when open
    }
    .hamburger {
      display: flex; // Show hamburger on small screens
    }
    .navItem {
      width: 100%; // Full width for items
    }
    .navLink {
      padding: 15px; // Increase padding for touch targets
      text-align: center; // Center align text
    }
  }
`;

// Optionally, you can inject the media query styles using a <style> tag in your component
// by using a ref or inserting it directly into the <head> of your document in _app.js.

export default Navbar;
