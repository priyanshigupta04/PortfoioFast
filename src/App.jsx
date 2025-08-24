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
} from "react-icons/si";

function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [navOpen, setNavOpen] = useState(false);

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
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover -z-10 opacity-30"
      >
        <source src="/videoBG.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

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
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-16 overflow-hidden pt-16"
      >
        {/* Solid background for perfect text visibility */}
        <div className="absolute inset-0 bg-blue-900/80 -z-10"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center"
        >
          {/* Elegant Hero Illustration */}
          <img
            src="/monitoring.png"
            alt="Girl working on laptop"
            className="mx-auto mb-8 w-48 h-48 rounded-full shadow-lg bg-white/70 object-cover"
            style={{ border: "4px solid #a5b4fc" }}
          />
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-6xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-blue-400 via-pink-400 to-purple-500 bg-clip-text text-transparent"
          >
            Priyanshi Gupta
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl sm:text-3xl font-semibold mb-4 text-blue-500"
          >
            Computer Science Student
          </motion.p>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 text-blue-400 font-medium">
            Highly motivated Computer Science student with a strong foundation
            in full-stack web development and core computer science concepts,
            seeking to leverage problem-solving skills to develop innovative
            software solutions.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold flex items-center gap-3 hover:scale-105 hover:shadow-xl transition-all"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </button>
            <button
              onClick={openResume}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <FileText className="w-5 h-5" />
              Resume
            </button>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 sm:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center text-blue-700 mb-12"
          >
            Let me introduced myself✨
          </motion.h2>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 flex justify-center">
              <img
                src="/about.png"
                alt="About me illustration"
                className="w-2/3 max-w-xs h-auto rounded-lg"
              />
            </div>
            <div className="lg:w-1/2 space-y-6">
              <div className="text-lg text-slate-700 leading-relaxed">
                <p className="mb-4">
                  "Fueled by{" "}
                  <span className="text-red-500 font-semibold">coffee</span>{" "}
                  inspired by{" "}
                  <span className="text-red-500 font-semibold">code</span> and
                  uplifted by{" "}
                  <span className="text-red-500 font-semibold">song</span> I
                  create with passion and joy."
                </p>
                <p className="mb-4 text-slate-600">
                  I fell in love with programming and I have at least learnt
                  something, I think...
                </p>
                <p className="mb-4 text-slate-600">
                  Fluent in the languages of Python, C, and JavaScript, I bring
                  ideas to life through code.
                </p>
                <p className="text-slate-600">
                  Off the screen, I find my rhythm and harmony in singing, where
                  passion meets expression.
                </p>
              </div>
            </div>
          </div>
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
      <section id="skills" className="py-24 px-4 sm:px-8 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center text-blue-700 mb-12"
          >
            Skills💻
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Languages */}
            <div className="bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow-lg hover:scale-105 hover:border-blue-300 transition-all duration-300">
              <div className="p-6">
                <h3 className="font-semibold text-slate-900 mb-4">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="flex items-center gap-1 px-2 py-1 bg-slate-100 text-slate-700 text-sm rounded-md hover:bg-blue-100 hover:border-blue-400 hover:text-blue-800 transition-all duration-200 cursor-pointer">
                    <SiHtml5 className="text-orange-500" /> HTML
                  </span>
                  <span className="flex items-center gap-1 px-2 py-1 bg-slate-100 text-slate-700 text-sm rounded-md hover:bg-blue-100 hover:border-blue-400 hover:text-blue-800 transition-all duration-200 cursor-pointer">
                    <SiCss3 className="text-blue-500" /> CSS
                  </span>
                  <span className="flex items-center gap-1 px-2 py-1 bg-slate-100 text-slate-700 text-sm rounded-md hover:bg-blue-100 hover:border-blue-400 hover:text-blue-800 transition-all duration-200 cursor-pointer">
                    <SiJavascript className="text-yellow-400" /> JavaScript
                  </span>
                  <span className="flex items-center gap-1 px-2 py-1 bg-slate-100 text-slate-700 text-sm rounded-md hover:bg-blue-100 hover:border-blue-400 hover:text-blue-800 transition-all duration-200 cursor-pointer">
                    <SiPython className="text-blue-400" /> Python
                  </span>
                  <span className="flex items-center gap-1 px-2 py-1 bg-slate-100 text-slate-700 text-sm rounded-md hover:bg-blue-100 hover:border-blue-400 hover:text-blue-800 transition-all duration-200 cursor-pointer">
                    <SiC className="text-gray-700" /> C
                  </span>
                  <span className="flex items-center gap-1 px-2 py-1 bg-slate-100 text-slate-700 text-sm rounded-md hover:bg-blue-100 hover:border-blue-400 hover:text-blue-800 transition-all duration-200 cursor-pointer">
                    <SiMongodb className="text-green-600" /> MongoDB
                  </span>
                </div>
              </div>
            </div>
            {/* Frameworks & Libraries */}
            <div className="border border-slate-200 rounded-lg shadow-sm hover:shadow-lg hover:scale-105 hover:border-green-300 transition-all duration-300">
              <div className="p-6">
                <h3 className="font-semibold text-slate-900 mb-4">
                  Frameworks & Libraries
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="flex items-center gap-1 px-2 py-1 bg-slate-100 text-slate-700 text-sm rounded-md hover:bg-green-100 hover:border-green-400 hover:text-green-800 transition-all duration-200 cursor-pointer">
                    <SiReact className="text-blue-500" /> ReactJS
                  </span>
                  <span className="flex items-center gap-1 px-2 py-1 bg-slate-100 text-slate-700 text-sm rounded-md hover:bg-green-100 hover:border-green-400 hover:text-green-800 transition-all duration-200 cursor-pointer">
                    <SiDjango className="text-green-700" /> Django
                  </span>
                  <span className="flex items-center gap-1 px-2 py-1 bg-slate-100 text-slate-700 text-sm rounded-md hover:bg-green-100 hover:border-green-400 hover:text-green-800 transition-all duration-200 cursor-pointer">
                    <SiBootstrap className="text-purple-700" /> Bootstrap
                  </span>
                  <span className="flex items-center gap-1 px-2 py-1 bg-slate-100 text-slate-700 text-sm rounded-md hover:bg-green-100 hover:border-green-400 hover:text-green-800 transition-all duration-200 cursor-pointer">
                    <SiTailwindcss className="text-blue-400" /> Tailwind CSS
                  </span>
                  <span className="flex items-center gap-1 px-2 py-1 bg-slate-100 text-slate-700 text-sm rounded-md hover:bg-green-100 hover:border-green-400 hover:text-green-800 transition-all duration-200 cursor-pointer">
                    <SiNodedotjs className="text-green-600" /> Node
                  </span>
                </div>
              </div>
            </div>
            {/* Developer Tools */}
            <div className="bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow-lg hover:scale-105 hover:border-purple-300 transition-all duration-300">
              <div className="p-6">
                <h3 className="font-semibold text-slate-900 mb-4">Developer Tools</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="flex items-center gap-1 px-2 py-1 bg-slate-100 text-slate-700 text-sm rounded-md hover:bg-purple-100 hover:border-purple-400 hover:text-purple-800 transition-all duration-200 cursor-pointer">
                    <SiGit className="text-red-500" /> Git
                  </span>
                  <span className="flex items-center gap-1 px-2 py-1 bg-slate-100 text-slate-700 text-sm rounded-md hover:bg-purple-100 hover:border-purple-400 hover:text-purple-800 transition-all duration-200 cursor-pointer">
                    <SiGithub className="text-black" /> GitHub
                  </span>
                </div>
              </div>
            </div>
            {/* Core CS Concepts */}
            <div className="bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow-lg hover:scale-105 hover:border-orange-300 transition-all duration-300">
              <div className="p-6">
                <h3 className="font-semibold text-slate-900 mb-4">Core CS Concepts</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="flex items-center gap-1 px-2 py-1 bg-slate-100 text-slate-700 text-sm rounded-md hover:bg-orange-100 hover:border-orange-400 hover:text-orange-800 transition-all duration-200 cursor-pointer">
                    <SiJavascript className="text-yellow-400" /> DSA
                  </span>
                  <span className="flex items-center gap-1 px-2 py-1 bg-slate-100 text-slate-700 text-sm rounded-md hover:bg-orange-100 hover:border-orange-400 hover:text-orange-800 transition-all duration-200 cursor-pointer">
                    <SiPython className="text-blue-400" /> OOP
                  </span>
                  <span className="flex items-center gap-1 px-2 py-1 bg-slate-100 text-slate-700 text-sm rounded-md hover:bg-orange-100 hover:border-orange-400 hover:text-orange-800 transition-all duration-200 cursor-pointer">
                    <SiMongodb className="text-green-600" /> Database Management
                  </span>
                </div>
              </div>
            </div>
            {/* Other Skills */}
            <div className="bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow-lg hover:scale-105 hover:border-pink-300 transition-all duration-300">
              <div className="p-6">
                <h3 className="font-semibold text-slate-900 mb-4">Other Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="flex items-center gap-1 px-2 py-1 bg-slate-100 text-slate-700 text-sm rounded-md hover:bg-pink-100 hover:border-pink-400 hover:text-pink-800 transition-all duration-200 cursor-pointer">
                    <SiReact className="text-blue-500" /> Team Collaboration
                  </span>
                  <span className="flex items-center gap-1 px-2 py-1 bg-slate-100 text-slate-700 text-sm rounded-md hover:bg-pink-100 hover:border-pink-400 hover:text-pink-800 transition-all duration-200 cursor-pointer">
                    <SiPython className="text-blue-400" /> Problem Solving
                  </span>
                  <span className="flex items-center gap-1 px-2 py-1 bg-slate-100 text-slate-700 text-sm rounded-md hover:bg-pink-100 hover:border-pink-400 hover:text-pink-800 transition-all duration-200 cursor-pointer">
                    <SiJavascript className="text-yellow-400" /> Debugging
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-28 px-4 sm:px-8 lg:px-16">
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Project 1 */}
            <motion.div
              variants={projectCardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-lg border-2 border-transparent bg-clip-padding rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 hover:border-blue-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 text-center">
                  Hotel Booking System - QuickStay
                </h3>
                <p className="text-slate-600 mb-4 text-sm text-center">2025</p>
                <p className="text-slate-700 mb-6 text-justify">
                  Engineered a responsive hotel booking web app using React and
                  Tailwind CSS with dynamic room listings, detailed views,
                  interactive booking forms, and smart filtering options.
                </p>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  <span className="px-3 py-1 border border-slate-300 text-slate-700 text-sm rounded-md bg-white/70 hover:bg-blue-100 hover:border-blue-400 hover:text-blue-800 transition-all duration-200">
                    React
                  </span>
                  <span className="px-3 py-1 border border-slate-300 text-slate-700 text-sm rounded-md bg-white/70 hover:bg-blue-100 hover:border-blue-400 hover:text-blue-800 transition-all duration-200">
                    Tailwind CSS
                  </span>
                </div>
                <button
                  className="w-full px-4 py-2 border border-slate-300 text-slate-700 rounded-lg font-medium bg-gradient-to-r from-blue-500 to-purple-500 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 flex items-center justify-center"
                  onClick={() =>
                    window.open(
                      "https://hotel-management-qug4.vercel.app/",
                      "_blank"
                    )
                  }
                >
                  <span className="text-lg mr-2">↗</span>
                  View Project
                </button>
              </div>
            </motion.div>
            {/* Project 2 */}
            <motion.div
              variants={projectCardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-lg border border-slate-200 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-green-600 transition-colors duration-300 text-center">
                  Medicine Reminder - MediRemind
                </h3>
                <p className="text-slate-600 mb-4 text-sm text-center">2025</p>
                <p className="text-slate-700 mb-6 text-justify">
                  Designed a user-friendly medicine reminder platform with
                  React, HTML, and CSS to help users schedule and track
                  medication intake with timely alerts.
                </p>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  <span className="px-3 py-1 border border-slate-300 text-slate-700 text-sm rounded-md bg-white/70 hover:bg-green-100 hover:border-green-400 hover:text-green-800 transition-all duration-200">
                    React
                  </span>
                  <span className="px-3 py-1 border border-slate-300 text-slate-700 text-sm rounded-md bg-white/70 hover:bg-green-100 hover:border-green-400 hover:text-green-800 transition-all duration-200">
                    HTML
                  </span>
                  <span className="px-3 py-1 border border-slate-300 text-slate-700 text-sm rounded-md bg-white/70 hover:bg-green-100 hover:border-green-400 hover:text-green-800 transition-all duration-200">
                    CSS
                  </span>
                </div>
                <button
                  className="w-full px-4 py-2 border border-slate-300 text-slate-700 rounded-lg font-medium bg-gradient-to-r from-green-400 to-blue-400 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-300 flex items-center justify-center"
                  onClick={() =>
                    window.open("https://medi-remind.vercel.app/", "_blank")
                  }
                >
                  <span className="text-lg mr-2">↗</span>
                  View Project
                </button>
              </div>
            </motion.div>
            {/* Project 3 */}
            <motion.div
              variants={projectCardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-lg border border-slate-200 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors duration-300 text-center">
                  Music Player - MusicMind
                </h3>
                <p className="text-slate-600 mb-4 text-sm text-center">2024</p>
                <p className="text-slate-700 mb-6 text-justify">
                  Built a full-stack music player using Python and Django with a
                  smooth interface for listening, playlist management, and
                  personalized user experience.
                </p>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  <span className="px-3 py-1 border border-slate-300 text-slate-700 text-sm rounded-md bg-white/70 hover:bg-purple-100 hover:border-purple-400 hover:text-purple-800 transition-all duration-200">
                    Python
                  </span>
                  <span className="px-3 py-1 border border-slate-300 text-slate-700 text-sm rounded-md bg-white/70 hover:bg-purple-100 hover:border-purple-400 hover:text-purple-800 transition-all duration-200">
                    Django
                  </span>
                </div>
                <button
                  className="w-full px-4 py-2 border border-slate-300 text-slate-700 rounded-lg font-medium bg-gradient-to-r from-purple-400 to-pink-400 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all duration-300 flex items-center justify-center"
                  onClick={() =>
                    window.open(
                      "https://musicplay-sox5.onrender.com/",
                      "_blank"
                    )
                  }
                >
                  <span className="text-lg mr-2">↗</span>
                  View Project
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-white via-blue-50 to-pink-50 px-4 sm:px-8 lg:px-16"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center text-blue-700 mb-12"
          >
            🤗Lets Connect!!
          </motion.h2>
          <p className="text-lg text-slate-600 mb-8">
            I'm always open to discussing new opportunities and interesting
            projects.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <button
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
              as="a"
              href="mailto:prigupta124@gmail.com"
            >
              <Mail className="w-5 h-5 mr-2" />
              prigupta124@gmail.com
            </button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="mt-16 py-8 bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 text-white text-center">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Priyanshi Gupta. All rights reserved.
          </div>
          <div className="flex gap-4 justify-center">
            <a
              href="https://www.linkedin.com/in/priyanshi-gupta-624772288/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition-colors flex items-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="https://github.com/priyanshigupta04"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-300 transition-colors flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="mailto:prigupta124@gmail.com"
              className="hover:text-purple-300 transition-colors flex items-center gap-2"
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
