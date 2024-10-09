"use client";

// Import your images
import Aiagnet from "@/app/components/images/kitchen.png"; 
import AiVison from "@/app/components/images/podcast.png";
import Article from "@/app/components/images/ArticleSift.png";
import Diabetes from "@/app/components/images/Diabetes.png";
import Lablab from "@/app/components/images/Lablab.png";
import Leetcode from "@/app/components/images/Leetcode.png";
import Newsnexus from "@/app/components/images/NewNexus.png";
import Voiceto from "@/app/components/images/Voicetovoice.png";
import Geminichatbot from "@/app/components/images/discord.png";
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: 'Article Sift',
      image: Article,
      description: 'A web app for managing news links to get short news summaries using AI and a language translator.',
      technologies: ['AIML', 'Llama', 'Streamlit'],
    },
    {
      title: 'Smart Kitchen',
      image: Aiagnet,
      description: "A simple app for a hotel to manage its customers using new user demands to fulfill them.",
      technologies: ['CSS', 'Bootstrap', 'JavaScript'],
    },
    {
      title: 'Diabetes Prediction',
      image: Diabetes,
      description: 'An app that guides diabetes patients about their condition and offers recovery suggestions.',
      technologies: ['Python', 'Streamlit', 'Anthropic'],
    },
    {
      title: 'Podcast Generator',
      image: AiVison,
      description: 'An app that helps people engage by chatting with machines.',
      technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    },
    {
      title: 'Lablab Hackathons',
      image: Lablab,
      description: 'Participation in multiple hackathons at lablab.ai, achieving good positions.',
      technologies: ['Python', 'Streamlit', 'HuggingFace'],
    },
    {
      title: 'Leetcode Practice',
      image: Leetcode,
      description: "Improving my logical thinking and problem-solving skills via LeetCode and DSA.",
      technologies: ['DSA', 'NeetCode.io', 'Python'],
    },
    {
      title: 'NewsNexus',
      image: Newsnexus,
      description: 'A news aggregation and analysis platform.',
      technologies: ['Google Custom API', 'Streamlit', 'Llama'],
    },
    {
      title: 'Voice to Voice Chatbot',
      image: Voiceto,
      description: 'Voice chatbot for real-time communication.',
      technologies: ['AIML', 'Streamlit', 'OpenAI', 'gpt-4'],
    },
    {
      title: "Discord App",
      image: Geminichatbot,
      description: 'A Discord clone app.',
      technologies: ['JavaScript', 'CSS', 'Bootstrap'],
    }
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My Projects</h1>
      <div style={styles.gridContainer}>
        {projects.map((project, index) => (
          <div key={index} style={styles.projectCard}>
            <Image
              src={project.image}
              alt={project.title}  // Ensure that all images have appropriate alt text
              style={styles.projectImage}
              width={300}  // Specify width for the image
              height={200} // Specify height for the image
              priority // Preload images for better performance
            />
            <div style={styles.projectDescription}>
              <h2 style={styles.projectTitle}>{project.title}</h2>
              <p>{project.description}</p>
            </div>
            <div style={styles.projectTechnologies}>
              <h3>Technologies:</h3>
              <ul style={styles.techList}>
                {project.technologies.map((tech, idx) => (
                  <li key={idx} style={styles.techItem}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#000',
    color: '#fff',
    minHeight: '100vh',
  },
  title: {
    fontSize: '36px',
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
    margin: '10px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    border: '1px solid #333',
  },
  projectImage: {
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
