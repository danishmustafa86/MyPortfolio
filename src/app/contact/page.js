"use client";
import { useState } from 'react';
import Navbar from "@/app/components/navbar";
import Section from "@/app/components/contactsection";
import Footer from "@/app/components/footer";

const styles = {
  container: {
    margin: '0px auto',
    backgroundColor: 'black',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    minHeight: '100vh',  // Ensures the container takes full height
    display: 'flex',
    flexDirection: 'column',
  },
  sectionContainer: {
    marginTop: '40px',
    marginBottom: '40px',
  },
  about: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#fff',
    margin: '20px',
    marginTop: '60px',
    marginBottom: '0px',
    height: '10vh', // Take full viewport height for vertical centering
  },
  title: {
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
    fontWeight: 'bold',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontSize: '1rem',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    height: '150px',
  },
  button: {
    width: '100%',
    padding: '10px',
    fontSize: '1.2rem',
    backgroundColor: 'red',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        alert('Failed to send the message.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Error occurred while sending the message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={styles.container}>
      <Navbar />
      <div style={styles.about}>
        <h1>Contact Me</h1>
        <p>Hey, I'm Danish! If you have any questions, need assistance, or want to collaborate, feel free to reach out. I'm always happy to connect and help in any way I can!</p>

      </div>
      <div style={styles.sectionContainer}>
        <Section />
      </div>
      <Footer />
    </div>
  );
}
