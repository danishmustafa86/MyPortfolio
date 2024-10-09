"use client"; // Ensure this is included for client-side rendering

import Image from 'next/image';
import React from 'react';
import bgImage from "@/app/components/images/bg1.jpg"; // Import your specific image

const ImageComponent = ({ alt }) => {
  return (
    <div style={styles.container}>
      <Image 
        src={bgImage} // Use the imported image
        alt={alt} 
        layout="fill" // Use fill layout to cover the container
        objectFit="cover" // Maintain aspect ratio while covering the container
        className="responsive-image" // Apply the global CSS class
        priority 
      />
      <div style={styles.overlay}>
        <div style={styles.textContainer}>
          <h1 style={styles.name}>Danish Mustafa</h1>
          <p style={styles.description}>
            A passionate developer who loves coding, problem-solving, and creating innovative solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    width: '100%', // Full width of the parent
    height: '100vh', // Full height of the viewport
    overflow: 'hidden', // Hide any overflow
  },
  overlay: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1, // Ensure the text is above the image
  },
  textContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background
    padding: '20px',
    borderRadius: '8px', // Rounded corners
  },
  name: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    margin: '0',
  },
  description: {
    fontSize: '1.2rem',
    marginTop: '10px',
  },
};

export default ImageComponent;
