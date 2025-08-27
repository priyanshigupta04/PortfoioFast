"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, FileText, Github, Linkedin } from "lucide-react"; // Add icons
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPython,
  SiC,
  SiMongodb,
  SiReact,
  SiDjango,
  SiBootstrap,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiExpress,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import ProjectCard from "./components/ProjectCard";
import BackgroundFX from "./components/BackgroundFX";

const skills = [
  { icon: SiHtml5, label: "HTML", color: "from-orange-400 to-orange-600" },
  { icon: SiCss3, label: "CSS", color: "from-blue-400 to-blue-600" },
  {
    icon: SiJavascript,
    label: "JavaScript",
    color: "from-yellow-400 to-yellow-500",
  },
  { icon: SiPython, label: "Python", color: "from-blue-300 to-blue-500" },
  { icon: SiC, label: "C", color: "from-gray-400 to-gray-600" },
  { icon: FaJava, label: "Java", color: "from-red-400 to-red-600" },
  { icon: SiMongodb, label: "MongoDB", color: "from-green-400 to-green-600" },
  { icon: SiReact, label: "React", color: "from-cyan-400 to-cyan-600" },
  { icon: SiDjango, label: "Django", color: "from-green-700 to-green-900" },
  {
    icon: SiBootstrap,
    label: "Bootstrap",
    color: "from-purple-400 to-purple-600",
  },
  {
    icon: SiTailwindcss,
    label: "Tailwind CSS",
    color: "from-sky-400 to-sky-600",
  },
  { icon: SiNodedotjs, label: "Node.js", color: "from-green-500 to-green-700" },
  { icon: SiExpress, label: "Express.js", color: "from-gray-700 to-gray-900" },

  { icon: SiGit, label: "Git", color: "from-red-400 to-red-600" },
  { icon: SiGithub, label: "GitHub", color: "from-gray-700 to-gray-900" },
];

function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [navOpen, setNavOpen] = useState(false);
  const [hiText, setHiText] = useState("");
  const hiTextToType = "hi";
  let intervalId;

  const handleMouseEnter = () => {
    setHiText(""); // Reset text on new hover
    let i = 0;
    intervalId = setInterval(() => {
      if (i < hiTextToType.length) {
        setHiText((prev) => prev + hiTextToType.charAt(i));
        i++;
      } else {
        clearInterval(intervalId);
      }
    }, 150); // Typing speed
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openResume = () => {
    window.open("/Resume.pdf", "_blank");
  };

  useEffect(() => {
    const video = document.querySelector("video");
    if (video) {
      video.playbackRate = 0.1; // slower speed
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "experience",
        "education",
        "skills",
        "projects",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation variants for project cards
  const projectCardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
    hover: { scale: 1.05, boxShadow: "0 8px 32px rgba(0,0,0,0.15)" },
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-slate-50 via-blue-100 to-purple-50 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-white/80 via-blue-100/80 to-pink-100/80 backdrop-blur-md border-b border-slate-200 z-50 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-pink-500 to-purple-600">
              Priyanshi Gupta
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setNavOpen(!navOpen)}
                className="text-blue-600 focus:outline-none"
              >
                {/* Hamburger Icon */}
                <svg
                  width="28"
                  height="28"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 7h20M4 14h20M4 21h20" />
                </svg>
              </button>
            </div>
            <div className={`hidden md:flex space-x-8`}>
              {[
                { id: "hero", label: "Home" },
                { id: "about", label: "About" },
                { id: "experience", label: "Experience" },
                { id: "skills", label: "Skills" },
                { id: "projects", label: "Projects" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-semibold transition-all px-2 py-1 rounded-lg
  ${
    activeSection === item.id
      ? "text-blue-600 bg-blue-100/60 underline underline-offset-4"
      : "text-slate-600"
  }
  hover:bg-gradient-to-r hover:from-blue-100 hover:to-pink-100 hover:text-blue-700`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          {/* Mobile Menu */}
          {navOpen && (
            <div className="md:hidden flex flex-col space-y-2 mt-2 bg-white/90 rounded-lg shadow-lg p-4">
              {[
                { id: "hero", label: "Home" },
                { id: "about", label: "About" },
                { id: "experience", label: "Experience" },
                { id: "skills", label: "Skills" },
                { id: "projects", label: "Projects" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setNavOpen(false);
                  }}
                  className={`text-base font-semibold px-2 py-2 rounded-lg ${
                    activeSection === item.id
                      ? "text-blue-600 bg-blue-100/60 underline underline-offset-4"
                      : "text-slate-600"
                  } hover:bg-gradient-to-r hover:from-blue-100 hover:to-pink-100 hover:text-blue-700`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-16 pt-16"
      >
        {/* The new dynamic background effect */}
        <BackgroundFX />

        {/* The semi-transparent overlay for readability */}
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-white/40 via-blue-100/40 to-purple-50/40"></div>

        {/* Content (No Box) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="relative z-20 max-w-5xl mx-auto text-center flex flex-col items-center p-6"
        >
          {/* Elegant Hero Illustration */}
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "backOut" }}
            src="/monitoring.png"
            alt="Girl working on laptop"
            className="mx-auto mb-8 w-48 h-48 rounded-full shadow-lg object-cover ring-4 ring-blue-400"
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-4xl sm:text-6xl font-extrabold mb-2 bg-gradient-to-r from-blue-600 via-pink-500 to-purple-600 bg-clip-text text-transparent leading-tight"
          >
            Priyanshi Gupta
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-2xl sm:text-3xl font-semibold mb-4 text-blue-500"
          >
            Computer Science Student
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 text-slate-700 font-medium"
          >
            Highly motivated Computer Science student with a strong foundation
            in full-stack web development and core computer science concepts,
            seeking to leverage problem-solving skills to develop innovative
            software solutions.
          </motion.p>
          <div className="flex justify-center flex-wrap gap-4">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold flex items-center gap-3 hover:scale-105 hover:shadow-xl transition-all"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              onClick={openResume}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <FileText className="w-5 h-5" />
              Resume
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
<section
  id="about"
  className="py-24 px-4 sm:px-8 lg:px-16 relative overflow-hidden bg-slate-50"
>
  <div className="max-w-6xl mx-auto">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className="text-4xl font-bold text-center text-blue-700 mb-12"
    >
      My Journey: A Passion for Building ✨
    </motion.h2>

    {/* New container for the content with a minimal background effect */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="relative p-8 rounded-3xl shadow-lg bg-gradient-to-br from-white/80 via-blue-100/60 to-purple-50/50 backdrop-blur-sm border border-slate-200"
    >
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side - Image with subtle animation */}
        
          <motion.img
            src="/about.png"
            alt="About me illustration"
            className="w-2/3 max-w-sm h-auto rounded-lg"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1, rotate: 3 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        

        {/* Right Side - Text with staggered animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="lg:w-1/2 space-y-6"
        >
          <div className="text-lg text-slate-700 leading-relaxed space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-2 text-l font-small"
            >
              I'm Priyanshi, a computer science enthusiast with a knack for transforming complex problems into elegant code. My journey in web development is fueled by curiosity and a relentless drive to build something meaningful.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-2 text-l font-small"
            >
              What I love most about technology is the endless opportunity to learn and grow. Every project is a chance to push boundaries and discover new solutions, making the process as rewarding as the final product.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mb-2 text-l font-small"
            >
              My core toolkit includes Python, C, and JavaScript, which I use to architect robust full-stack applications and solve intricate challenges.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mb-2 text-l font-small"
            >
              When I'm not immersed in code, you'll find me harmonizing with melodies. Much like writing a program, singing is about finding the right rhythm and structure—a different kind of problem-solving that brings its own unique joy.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  </div>
</section>
      {/* Experience Section */}
      <section
        id="experience"
        className="relative py-24 px-4 sm:px-8 lg:px-16 overflow-hidden"
      >
        {/* Background Overlay for Readability (same as Hero) */}
        <div className="absolute inset-0 bg-black/40 -z-10"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center text-blue-700 mb-12"
          >
            😎Experience
          </motion.h2>
          <div className="space-y-8">
            {/* Internship */}
            <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl shadow-lg">
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      Web Development Intern
                    </h3>
                    <p className="text-blue-600 font-medium">Sparks to Ideas</p>
                  </div>
                  <div className="flex items-center text-slate-500 mt-2 md:mt-0">
                    <span className="text-lg mr-2">📅</span>
                    <span>May – June 2025</span>
                  </div>
                </div>
                <ul className="text-slate-700 space-y-2">
                  <li>
                    • Built responsive, interactive, and modern UI layouts that
                    improved user satisfaction and performance.
                  </li>
                  <li>
                    • Worked on component-based architecture with ReactJS +
                    Tailwind, ensuring reusability and clean design.
                  </li>
                </ul>
              </div>
            </div>

            {/* Volunteer */}
            <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl shadow-lg">
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      WebTech Volunteer
                    </h3>
                    <p className="text-blue-600 font-medium">
                      Google Developer Student Club
                    </p>
                  </div>
                  <div className="flex items-center text-slate-500 mt-2 md:mt-0">
                    <span className="text-lg mr-2">📅</span>
                    <span>2023 – 2024</span>
                  </div>
                </div>
                <ul className="text-slate-700 space-y-2">
                  <li>
                    • Collaborated with peers to design and deploy web apps for
                    real club activities.
                  </li>
                  <li>
                    • Explored modern front-end stacks (HTML, CSS, JS, ReactJS)
                    to create engaging projects.
                  </li>
                  <li>
                    • Facilitated workshops, making web technologies easier to
                    learn for fellow students.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-24 px-4 sm:px-8 lg:px-16 bg-white overflow-hidden relative"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center text-blue-700 mb-12"
          >
            🛠️ My Skills
          </motion.h2>

          {/* Animated grid container with staggered children */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.08 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                  y: -5,
                }}
                transition={{ duration: 0.3 }}
                className={`flex flex-col items-center justify-center p-6 rounded-2xl shadow-md cursor-pointer
            bg-white/70 backdrop-blur-sm border border-slate-200 transition-all duration-300
            hover:shadow-xl hover:text-white hover:bg-gradient-to-r ${skill.color}`}
              >
                <skill.icon className="w-10 h-10 mb-3" />
                <span className="font-medium text-center">{skill.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="relative py-24 px-4 sm:px-8 lg:px-16 overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-blue-900/20 to-pink-900/20"></div>
        <div className="relative max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center text-blue-700 mb-12"
          >
            Projects🙌
          </motion.h2>

          {/* Animated grid container */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            <motion.div
              variants={{
                visible: { opacity: 1, scale: 1, y: 0 },
                hidden: { opacity: 0, scale: 0.95, y: 20 },
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard
                image="/HotelManagement.png"
                alt="Hotel Booking System - QuickStay"
                name="Hotel Booking System - QuickStay"
                description="Engineered a responsive hotel booking web app using React and Tailwind CSS with dynamic room listings, detailed views, interactive booking forms, and smart filtering options."
                tech={["React", "Tailwind CSS"]}
                buttonColor="border-blue-300"
                buttonTextColor="text-white"
                buttonGradient="bg-gradient-to-r from-blue-500 to-purple-500"
                buttonHover="hover:bg-blue-600 hover:text-white hover:border-blue-600"
                link="https://hotel-management-qug4.vercel.app/"
                overlayColor="bg-blue-900/80"
              />
            </motion.div>
            <motion.div
              variants={{
                visible: { opacity: 1, scale: 1, y: 0 },
                hidden: { opacity: 0, scale: 0.95, y: 20 },
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard
                image="/MediRemind.jpg"
                alt="Medicine Reminder - MediRemind"
                name="Medicine Reminder - MediRemind"
                description="Designed a user-friendly medicine reminder platform with React, HTML, and CSS to help users schedule and track medication intake with timely alerts."
                tech={["React", "HTML", "CSS"]}
                buttonColor="border-slate-300"
                buttonTextColor="text-slate-700"
                buttonGradient="bg-gradient-to-r from-green-400 to-blue-400"
                buttonHover="hover:bg-green-600 hover:text-white hover:border-green-600"
                link="https://medi-remind.vercel.app/"
                overlayColor="bg-green-900/80"
              />
            </motion.div>
            <motion.div
              variants={{
                visible: { opacity: 1, scale: 1, y: 0 },
                hidden: { opacity: 0, scale: 0.95, y: 20 },
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard
                image="/musicPlay.png"
                alt="Music Player - MusicMind"
                name="Music Player - MusicMind"
                description="Built a full-stack music player using Python and Django with a smooth interface for listening, playlist management, and personalized user experience."
                tech={["Python", "Django"]}
                buttonColor="border-slate-300"
                buttonTextColor="text-slate-700"
                buttonGradient="bg-gradient-to-r from-purple-400 to-pink-400"
                buttonHover="hover:bg-purple-600 hover:text-white hover:border-purple-600"
                link="https://musicplay-sox5.onrender.com/"
                overlayColor="bg-purple-900/80"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-white via-blue-50 to-pink-50 px-4 sm:px-8 lg:px-16"
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center text-blue-700 mb-6"
          >
            🤗 Let's Connect!
          </motion.h2>
          <div className="flex flex-col items-center">
            <p className="text-lg text-slate-600 mb-8 max-w-2xl">
              I'm always open to discussing new opportunities and interesting
              projects.
            </p>
            <a
              href="mailto:prigupta124@gmail.com"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              prigupta124@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-8 bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 lg:px-16 text-center md:text-left">
          <div className="text-sm md:text-base mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Priyanshi Gupta. All rights
            reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/priyanshi-gupta-624772288/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-300 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="https://github.com/priyanshigupta04"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-pink-300 transition-colors"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="mailto:prigupta124@gmail.com"
              className="flex items-center gap-2 hover:text-purple-300 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
