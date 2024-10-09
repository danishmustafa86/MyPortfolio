"use client";

import { useState } from 'react';
import Image from 'next/image';
// import Navbar from "@/app/components/navbar";
// import Footer from "@/app/components/footer"; // Uncomment if using Navbar and Footer

export default function About() {
  const [skills] = useState([
    'Machine Learning', 'Web Development', 'AI Solutions', 'Data Science',
    'DSA', 'LeetCode', 'Teaching DSA',
    'Leading', 'Deep Learning', 'Mobile Development', 'Backend Engineering',
    'Frontend Engineering'
  ]);

  return (
    <div style={styles.container}>
      {/* <Navbar/> */}
      <h1 style={styles.title}>About Me</h1>
      <div style={styles.gridContainer}>
        {/* Left Side: About Me Section */}
        <div style={styles.aboutMeSection}>
          <div style={styles.descriptionDiv}>
            <h2 style={styles.smallTitle}>Who am I?</h2>
            <p style={styles.smallDescription}>
              I am a student at University of Agriculture Faisalabad, Pakistan, in my 3rd semester of BS (Software Engineering) and a student at Stanford University: Code In Place 2024. I am a CS50X puzzle day winner organized by Harvard University, a Meta Hacker 2024 Qualifier, and have participated in multiple hackathons. I am also a web designer and a LeetCode programmer with over 300 problems solved. Additionally, I am a student at PIAIC, learning Generative AI and Machine Learning.
            </p>
            <p style={styles.smallDescription}>
              My journey in tech has allowed me to explore various domains such as Web Development, DSA, LeetCode, Deep Learning, Natural Language Processing, Computer Vision, and teaching students. I am always looking to enhance my knowledge by learning new technologies and applying them to solve real-world problems. I believe that technology has the power to make a significant impact in the world, and I strive to be at the forefront of that change.
            </p>
          </div>
          <div className="quote" style={styles.quoteDiv}>
            <blockquote style={styles.quote}>
              "The best way to predict the future is to create it."
            </blockquote>
          </div>
        </div>

        {/* Right Side: Skills Section */}
        <div style={styles.skillsSection}>
          <h2 style={styles.skillsTitle}>Skills</h2>
          <div style={styles.buttonsContainer}>
            {skills.map((skill, index) => (
              <button key={index} style={styles.skillButton}>{skill}</button>
            ))}
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    marginTop: '50px',
    marginBottom: '0px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#000', // Black background
    color: '#fff', // White text
    minHeight: '100vh',
  },
  title: {
    fontSize: '36px',
    marginBottom: '20px',
    textAlign: 'center',
    color: '#fff',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr', // Two equal columns
    gap: '20px', // Space between columns
    alignItems: 'start',
  },
  aboutMeSection: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  descriptionDiv: {
    marginBottom: '20px',
  },
  smallTitle: {
    fontSize: '24px',
    marginBottom: '10px',
    color: '#fff',
  },
  smallDescription: {
    fontSize: '16px',
    color: '#ccc', // Lighter white for description text
    lineHeight: '1.6',
  },
  quoteDiv: {
    padding: "20px",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quote: {
    fontSize: '20px',
    fontStyle: 'italic',
    textAlign: 'center',
    borderLeft: '5px solid #0070f3',
    paddingLeft: '15px',
    color: '#0070f3',
  },
  skillsSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  skillsTitle: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#fff',
  },
  buttonsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
    gap: '10px',
    width: '100%',
  },
  skillButton: {
    padding: '10px 20px',
    backgroundColor: '#0070f3',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
  },
};
