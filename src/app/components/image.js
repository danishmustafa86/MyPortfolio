// "use client"; // Ensure this is included for client-side rendering

// import Image from 'next/image';
// import React from 'react';
// import bgImage from "@/app/components/images/bg1.jpg"; // Import your specific image
// import profilePic from "@/app/components/images/myimage.jpg"; // Import your profile picture

// const ImageComponent = ({ alt = "Background Image" }) => { // Provide a default value for alt
//   return (
//     <div style={styles.container}>
//       <Image 
//         src={bgImage} // Use the imported background image
//         alt={alt} // Use the passed or default alt value
//         fill // Updated for Next.js 13 (replaces layout="fill")
//         style={{ objectFit: "cover" }} // Updated for Next.js 13 (replaces objectFit)
//         className="responsive-image" 
//         priority 
//       />
//       <div style={styles.contentContainer}>
//         <div style={styles.leftSection}>
//           {/* Profile Picture */}
//           <Image 
//             src={profilePic} // Use the imported profile image
//             alt="Profile Picture" // Explicit alt for profile picture
//             width={300} 
//             height={300} 
//             style={styles.profilePic}
//           />
//         </div>
//         <div style={styles.rightSection}>
//           {/* Text Section */}
//           <h1 style={styles.name}>Danish Mustafa</h1>
//           <p style={styles.description}>
//             A passionate developer who loves coding, problem-solving, and creating innovative solutions.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     position: 'relative',
//     width: '100%', // Full width of the parent
//     height: '100vh', // Full height of the viewport
//     overflow: 'hidden',
//   },
//   contentContainer: {
//     position: 'absolute',
//     top: '0',
//     left: '0',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     width: '100%',
//     height: '100%', // Fill the viewport
//     zIndex: 1, // Ensure the content is above the image
//   },
//   leftSection: {
//     flex: 1,
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: '20px',
//   },
//   profilePic: {
//     borderRadius: '50%', // Circle-shaped profile picture
//     border: '5px solid white', // White border around the profile picture
//   },
//   rightSection: {
//     flex: 1,
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: '20px',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
//     borderRadius: '8px',
//   },
//   name: {
//     fontSize: '2.5rem',
//     fontWeight: 'bold',
//     color: 'white',
//     marginBottom: '10px',
//   },
//   description: {
//     fontSize: '1.2rem',
//     color: 'white',
//     textAlign: 'center',
//   },
// };

// export default ImageComponent;
