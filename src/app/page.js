import styles from "./page.module.css";
import Navbar from "@/app/components/navbar";
import Footer from "../app/components/footer"; // Your background image
import Image from "./components/image3";
import Project from "@/app/components/projectssection";
import Contact from "@/app/components/contactsection";
import About from "@/app/components/aboutsection";
import Sidebar from "@/app/components/sidebar";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <Sidebar />
      <Image alt="My Image" /> {/* Add meaningful alt text here */}
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
