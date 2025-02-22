"use client";

import { useState, useEffect } from 'react';

export default function About() {
  const [skills] = useState({
    'Programming Languages': ['Python', 'JavaScript', 'C++', 'Java'],
    'Web Development': ['React', 'Next.js', 'HTML5', 'CSS3', 'Bootstrap'],
    'AI/ML': ['Machine Learning', 'Generative AI', 'LangChain', 'LangGraph', 'Deep Learning'],
    'Data Science': ['Data Analysis', 'Graph Databases', 'RAG'],
    'Problem Solving': ['DSA', 'LeetCode (400+ Problems)', 'Teaching DSA'],
    'Tools & Frameworks': ['Crew.ai', 'LangSmith', 'Graph DB'],
    'Soft Skills': ['Leadership', 'Teaching', 'Hackathons']
  });

  const [quoteImage, setQuoteImage] = useState(''); // State to store the quote image URL
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch the quote image on component mount
  useEffect(() => {
    const fetchQuoteImage = async () => {
      try {
        const response = await fetch('https://quotes-github-readme.vercel.app/api?type=horizontal&theme=transparent');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const imageUrl = response.url; // Get the image URL from the response
        setQuoteImage(imageUrl);
        setError(null); // Clear any previous errors
      } catch (error) {
        console.error('Error fetching quote image:', error);
        setError('Failed to fetch quote. Please try again later.'); // Set error message
      } finally {
        setLoading(false); // Set loading to false after the request completes
      }
    };

    fetchQuoteImage();
  }, []);

  return (
    <div className="p-5 mt-12 mb-0 font-sans bg-black text-white min-h-screen">
      <h1 className="text-4xl mb-5 text-center">About Me</h1>
      <div className="grid grid-cols-1 gap-5 items-start">
        {/* About Me Section */}
        <div>
          <div className="mb-5">
            <h2 className="text-2xl mb-2">Who am I?</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Hello! I'm Danish, a software engineer from Faisalabad, PK.
              I have expertise in AI, ML, Generative AI, and web application development using React.
              I have worked on multiple projects in international hackathons, leveraging my combined
              experience in AI and web development. As a DSA Trainer at iCodeGuru (Welfare Organization),
              I have helped students master data structures and algorithms while solving LeetCode problems
              effectively. Currently, I am diving deep into Generative AI, with a special focus on LangGraph,
              LangChain, LangSmith, Crew.ai, AgenticAI, and Graph Databases.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mt-4">
              My journey in tech has allowed me to explore various domains such as Web Development, DSA,
              LeetCode, Deep Learning, Natural Language Processing, Computer Vision, and teaching students.
              I am always looking to enhance my knowledge by learning new technologies and applying them to
              solve real-world problems. I believe that technology has the power to make a significant impact
              in the world, and I strive to be at the forefront of that change.
            </p>
          </div>
          <div className="p-5 flex items-center justify-center">
            <blockquote className="text-xl italic text-center border-l-4 border-blue-500 pl-4 text-blue-500">
              &quot;The best way to predict the future is to create it.&quot;
            </blockquote>
          </div>
        </div>

        {/* Quotes Section */}
        <div className="mt-10">
          <h2 className="text-2xl mb-5 text-center">Daily Inspiration</h2>
          {/* <div className="bg-gray-800 p-5 rounded-lg shadow-lg text-center"> */}
          <p align="center">
            <img src="https://quotes-github-readme.vercel.app/api?type=horizontal&theme=transparent" alt="Random Dev Quote" />
          </p>
            
          {/* </div> */}
        </div>
      </div>

      {/* Skills Section Below Intro */}
      <div className="mt-10">
        <h2 className="text-2xl mb-5 text-center">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(skills).map(([category, skillsList], index) => (
            <div key={index} className="bg-gray-800 p-5 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-500">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillsList.map((skill, idx) => (
                  <span
                    key={idx}
                    className="py-1 px-3 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-700 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Qualities Section */}
      <div className="mt-10">
        <h2 className="text-2xl mb-5 text-center">More About Me</h2>
        <div className="text-lg text-gray-300 leading-relaxed">
          <p>
            <strong>1️⃣ Tech Stack:</strong><br />
            ➤ Programming Languages: C, C++, Python, JavaScript (ES6+), Java<br />
            ➤ Web Development: HTML5, CSS3, Bootstrap, Next.js<br />
            ➤ Problem Solving: Data Structures and Algorithms (LeetCode: 400+ problems solved)<br />
            ➤ AI: Machine Learning, Generative AI, RAG, LangChain, LangGraph, LangSmith, Crew.ai, Graph DB
          </p>
          <p className="mt-4">
            <strong>2️⃣ Coding & Problem Solving:</strong><br />
            Solved over 400+ problems on LeetCode, focusing on mastering data structures and algorithms.<br />
            ➤ LeetCode Profile: <a href="https://leetcode.com/u/danishmustafa86/" className="text-blue-500 hover:underline">https://leetcode.com/u/danishmustafa86/</a>
          </p>
          <p className="mt-4">
            <strong>3️⃣ Hackathons & Competitions:</strong><br />
            Actively participating in coding competitions and hackathons to sharpen my skills and collaborate with global talent:<br />
            ➤ CS50x Puzzle Day 2024 Winner organized by Harvard University<br />
            ➤ Senior Student at Standford University Code in Place 2024<br />
            ➤ Meta Hacker Cup 2024 Participant<br />
            ➤ Calico UC Berkley Coding Competition 2024 participant<br />
            ➤ Advent of Code 2024 Participant<br />
            ➤ Multiple Lablab.ai, iCodeGuru, and MLH hackathons participant<br />
            ➤ International Hackathons: <a href="https://lablab.ai/u/@danish_mustafa" className="text-blue-500 hover:underline">https://lablab.ai/u/@danish_mustafa</a>
          </p>
          <p className="mt-4">
            <strong>4️⃣ Volunteer Trainer Experience:</strong><br />
            Taught over 200+ students to master Gen AI and DSA through effective LeetCode problem-solving techniques.<br />
            ➤ Training Showcase: <a href="https://rb.gy/lw8j1r" className="text-blue-500 hover:underline">https://rb.gy/lw8j1r</a>
          </p>
          <p className="mt-4">
            <strong>5️⃣ Education:</strong><br />
            ➤ Undergrad. at the University of Agriculture, Faisalabad
          </p>
          <p className="mt-4">
            <strong>6️⃣ Personal Website:</strong><br />
            ➤ <a href="https://danishmustafa86.vercel.app" className="text-blue-500 hover:underline">danishmustafa86.vercel.app</a>
          </p>
        </div>
      </div>
    </div>
  );
}