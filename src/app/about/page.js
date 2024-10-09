"use client";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import Aboutme from "@/app/components/aboutsection";
import { useState } from 'react';

export default function About() {
  const [skills] = useState([
    'Machine Learning', 'Web Development', 'AI Solutions', 'Data Science', 
    'Cloud Computing', 'Natural Language Processing', 'Computer Vision', 
    'DevOps', 'Deep Learning', 'Mobile Development', 'Backend Engineering', 
    'Frontend Engineering'
  ]);

  return (
    <div style={styles.container}>
      <Navbar />
      <div style={styles.content}>
        <Aboutme />
      </div>
      <Footer />
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#000', // Black background
    color: '#fff', // White text
    // padding: '0px',
  },
  content: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    marginBottom:"0px"
  },
  title: {
    fontSize: '36px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr', // Two equal columns
    gap: '20px',
    marginTop: '40px',
  },
  aboutMeSection: {
    display: 'flex',
    flexDirection: 'column',
  },
  descriptionDiv: {
    marginBottom: '20px',
  },
  smallDescription: {
    fontSize: '16px',
    color: '#ccc', // Lighter white for description text
    lineHeight: '1.6',
    textAlign: 'justify',
  },
  quoteDiv: {
    marginTop: '20px',
  },
  quote: {
    fontSize: '20px',
    fontStyle: 'italic',
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
  },
  buttonsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
    gap: '10px',
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






























































// "use client"
// import Navbar from "@/app/components/navbar";
// import Footer from "@/app/components/footer";// Your background image
// import Section from "@/app/components/aboutsection";// Your background image

// import { useState } from 'react';

// export default function About() {
//   const [skills] = useState([
//     'Machine Learning', 'Web Development', 'AI Solutions', 'Data Science', 
//     'Cloud Computing', 'Natural Language Processing', 'Computer Vision', 
//     'DevOps', 'Deep Learning', 'Mobile Development', 'Backend Engineering', 
//     'Frontend Engineering'
//   ]);

//   return (
//     <div style={styles.container}>
//       <Navbar/>
//       <Section/>

//       <Footer/>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     padding: '20px',
//     margin: '100px auto',
//     fontFamily: 'Arial, sans-serif',
//     backgroundColor: '#000', // Black background
//     color: '#fff', // White text
//     minHeight: '100vh',
//   },
//   title: {
//     fontSize: '36px',
//     marginBottom: '20px',
//     textAlign: 'center',
//     color: '#fff',
//   },
//   gridContainer: {
//     display: 'grid',
//     gridTemplateColumns: '1fr 1fr', // Two equal columns
//     gap: '20px', // Space between columns
//     alignItems: 'start',
//   },
//   aboutMeSection: {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//   },
//   descriptionDiv: {
//     marginBottom: '20px',
//   },
//   smallTitle: {
//     fontSize: '24px',
//     marginBottom: '10px',
//     color: '#fff',
//   },
//   smallDescription: {
//     fontSize: '16px',
//     color: '#ccc', // Lighter white for description text
//     lineHeight: '1.6',
//   },
//   quoteDiv: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   quote: {
//     fontSize: '20px',
//     fontStyle: 'italic',
//     textAlign: 'center',
//     borderLeft: '5px solid #0070f3',
//     paddingLeft: '15px',
//     color: '#0070f3',
//   },
//   skillsSection: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
    
//   },
//   skillsTitle: {
//     fontSize: '24px',
//     marginBottom: '20px',
//     color: '#fff',
//   },
//   buttonsContainer: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
//     gap: '10px',
//     width: '100%',
//   },
//   skillButton: {
//     padding: '10px 20px',
//     backgroundColor: '#0070f3',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     fontSize: '16px',
//     transition: 'background-color 0.3s ease',
//   },
// };
