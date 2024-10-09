"use client"

import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";// Your background image
import Section from "@/app/components/projectssection";// Your background image
import bgImage from "@/app/components/images/bg1.jpg"; // Import your specific image

export default function Projects() {
  const projects = [
    {
      title: 'Project 1',
      image: '../components/images/bg1.jpg',
      description: 'A web app for managing tasks and tracking progress.',
      technologies: ['React', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Project 2',
      image: '/images/project2.jpg',
      description: 'A machine learning model to predict house prices.',
      technologies: ['Python', 'Scikit-learn', 'Pandas'],
    },
    {
      title: 'Project 3',
      image: {Image},
      description: 'A mobile app for personal finance management.',
      technologies: ['Flutter', 'Dart', 'Firebase'],
    },
    {
      title: 'Project 4',
      image: '/images/project4.jpg',
      description: 'A recommendation system for e-commerce platforms.',
      technologies: ['TensorFlow', 'Keras', 'Python'],
    },
    {
      title: 'Project 5',
      image: '/images/project5.jpg',
      description: 'A chatbot for customer service automation.',
      technologies: ['Dialogflow', 'Node.js', 'React'],
    },
    {
      title: 'Project 6',
      image: '/images/project6.jpg',
      description: 'A portfolio website for showcasing projects.',
      technologies: ['Next.js', 'Tailwind CSS', 'Vercel'],
    },
    {
      title: 'Project 7',
      image: '/images/project7.jpg',
      description: 'A game developed for mobile platforms.',
      technologies: ['Unity', 'C#', 'Blender'],
    },
    {
      title: 'Project 8',
      image: '/images/project8.jpg',
      description: 'An AI solution for analyzing social media sentiment.',
      technologies: ['Python', 'Natural Language Processing', 'Flask'],
    },
    {
      title: 'Project 9',
      image: '/images/project9.jpg',
      description: 'A cloud-based SaaS solution for data analytics.',
      technologies: ['AWS', 'Python', 'React'],
    },
  ];

  return (
    <div style={styles.container}>
      <Navbar/>
      <div  style={styles.section}>
      <Section />

      </div>

        <Footer/>
    </div>
  );
}

const styles = {
  container: {
    padding: '0px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#000',
    color: '#fff',
    minHeight: '100vh',
  },
  section: {
    padding: '0px',
    marginBottom: "50px",

  },
  title: {
    fontSize: '36px',
    margin: '80px auto',

    marginBottom: '40px',
    textAlign: 'center',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
  },
  projectCard: {
    backgroundColor: '#1a1a1a',
    borderRadius: '8px',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    border: '1px solid #333',
  },
  projectCardHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  projectImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  projectDescription: {
    padding: '15px',
  },
  projectTitle: {
    fontSize: '24px',
    marginBottom: '10px',
    color: '#00ffcc',
  },
  projectTechnologies: {
    padding: '15px',
    backgroundColor: '#222',
    borderTop: '1px solid #333',
  },
  techList: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  techItem: {
    backgroundColor: '#0070f3',
    color: '#fff',
    display: 'inline-block',
    padding: '5px 10px',
    margin: '5px 5px 5px 0',
    borderRadius: '5px',
    fontSize: '14px',
  },
};
