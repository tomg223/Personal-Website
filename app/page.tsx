"use client"; // Add this directive
import ContactForm from './components/ContactForm'; // Import ContactForm
import React, { useRef } from 'react'; // Import useRef
import Image from 'next/image'
import dynamic from 'next/dynamic';

const TommyModel = dynamic(() => import('./components/tommy.js'), { ssr: false });



import { Inter } from '@next/font/google';
import { motion } from 'framer-motion'; // Import motion
import ExperienceItem from './components/ExperienceItem'; // Import the ExperienceItem component
import ProjectCard from './components/ProjectCard'; // Import the ProjectCard component
import '/styles/globals.css';
import SongRow from './components/SongRow'; // Import SongRow
import BinaryStream from './components/BinaryStream';
import TommyStream from './components/TommyStream';
import ThisWebsite from '../images/projects/this-website.png';

const inter = Inter({ subsets: ['latin'] });
 
const songs = [
  {
    title: 'Jambles',
    image: '/images/music/untitled.png', // Replace with the song's image URL
    audio: 'https://soundcloud.com/tom-gansa/jambles?si=298ce130290b43fabffe744438e410b7&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing', // Replace with the song's audio file URL
  },
  {
    title: 'Song Two',
    image: '', // Replace with the song's image URL
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', // Replace with the song's audio file URL
  },
  {
    title: 'Song Three',
    image: '', // Replace with the song's image URL
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', // Replace with the song's audio file URL
  },
  {
    title: 'Song Four',
    image: '', // Replace with the song's image URL
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', // Replace with the song's audio file URL
  },
  {
    title: 'Song Five',
    image: '', // Replace with the song's image URL
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', // Replace with the song's audio file URL
  },
  {
    title: 'Song Six',
    image: '', // Replace with the song's image URL
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', // Replace with the song's audio file URL
  },
];

const workExperience = [
  {
    title: 'Software Developer Intern @ Tonic Group',
    description: 'Developed responsive, user-friendly websites for clients including a Bellevue and NYU hospitals healthcare provider training website on eczema treatment using JS, Angular, RxJS, Karma, Jasmine, and Protractor.',
    date: 'May 2024 - August 2024',
    link: 'https://example.com',
  },
  {
    title: 'Frontend/Backend Engineer Intern @ BuybleNYC',
    description: 'Collaborated in a 3-person dev team to build an app for a small early-stage Craigslist-style student startup founded by Columbia graduates using Dart, Flutter, and Firebase. Available on popular appstores.',
    date: 'May 2023 - Aug 2023',
    link: 'https://example.com',
  },
  {
    title: 'Math Tutor',
    description: 'Tutored students ranging from ages 10-16 on math subjects related to ACT/SAT prep and their classes.',
    date: 'Sep 2019 - March 2021',
    link: 'https://example.com',
  },
  {
    title: 'Student Internship in Technology @ Saint Ann’s High School',
    description: 'Provided school teachers and staff with friendly technical support, gaining familiarity with network and wireless protocols and architectures for large educational institution as well as worked with school data in spreadsheets.',
    date: 'Sep 2018 - Jun 2019',
    link: 'https://example.com',
  },
];

const projects = [
  {
    title: 'Personal Website',
    description: 'The personal website you are looking at was built with React, NextJS, Tailwind, and Framer Motion.',
    image: '/images/projects/this-website.png', 
  },
  {
    title: 'Image Processing Application',
    description: 'I built a Java-based image processing application with capabilities for histogram equalization, noise reduction, edge detection,bitwise operations, and convolution operations among many others. I used Java Swing to provide a GUI that facilitates intuitive image operations  ',
    image: '/images/projects/image-processing-ss.png', 
  },
  {
    title: 'Command-Line Chat Application',
    description:'Developed a suite of Python scripts to simulate complex network protocols for my command line chat application, including Go-Back-N for reliable packet transmission and Distance Vector routing for dynamic network path calculation using the Bellman Ford algorithm. Used sockets, threading, custom packet design, packet handling, node operations, incorporating JSON for node communication and routing.',
    image: '/images/projects/gbn.png', 
  },
  {
    title: 'Skate Spotter',
    description: 'Developed a Flask-based webserver to show skateboarders places to skate and serve as a locational archive for skateboarding history, integrating Google Maps API and managing dynamic content with SQLAlchemy. Configured and managed a PostgreSQL database connection, employing advanced SQL operations for live data insertion and retrieval.',
    image: '/images/projects/skatedb.png', 
  },
  {
    title: 'French Conjugator',
    description: 'Created a French conjugation learning website using React, Flask, and postgreSQL enabling dynamic management of language flashcards and conjugation tests. Retrieved conjugations from API, and populated postgres database using API.',
    image: '/images/projects/french.png', 
  },
];

export default function Home() {

  const homeRef = useRef<HTMLDivElement>(null);
const experienceRef = useRef<HTMLDivElement>(null);
const musicRef = useRef<HTMLDivElement>(null);
const contactRef = useRef<HTMLDivElement>(null);


const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
  if (ref.current) {
    const headerOffset = 80; // Adjust this to match your header's height
    const elementPosition = ref.current.offsetTop;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};
  
  

  return (
    <div className={`scroll-smooth ${inter.className}`}>
      {/* Header */}
    
      <header className="fixed top-0 left-0 right-0 z-50 bg-blue-900 text-white p-5 flex justify-between items-center">
        <button onClick={() => scrollToSection(homeRef)} className="text-2xl font-bold">Thomas Gansa</button>
        
        <nav className="flex space-x-6 md:space-x-6 flex-wrap md:flex-nowrap">
  <div className="flex w-full justify-center space-x-6 md:w-auto">
    <button onClick={() => scrollToSection(experienceRef)} className="hover:text-gray-300">Experience</button>
    <button onClick={() => scrollToSection(contactRef)} className="hover:text-gray-300">Contact</button>
  </div>
  <div className="w-full flex justify-center mt-4 md:mt-0">
    <button onClick={() => scrollToSection(musicRef)} className="hover:text-gray-300">Music</button>
  </div>
</nav>
      </header>
      
      {/* Main content */}
      <main className="pt-20 bg-blue-900">
        {/* Home Section */}

        <section
  ref={homeRef}
  id="home"
  className="flex flex-col justify-center items-center pt-0 pb-0 mb-0 text-white"
>
  {/* Model at the top */}
  <div className="absolute top-0 left-0 w-full h-full">
    <br></br>
            <TommyStream />
          </div>

          {/* Model */}
          <div className="absolute top-10 w-full flex justify-center items-center" style={{ height: '650px', zIndex: 1, marginTop: '32px' }}>
            <TommyModel />
            
          </div>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
  
  {/* Introduction text centered underneath */}
  <div
    className="flex flex-col items-center text-center mt-0 mb-0 px-10"
    style={{ marginBottom: '-20px',marginTop: '70px'}} // Adjust as needed
  >
    <br></br><br></br><br></br>
    <h1 className={`text-6xl font-extrabold mt-0 mb-0`}>Hi! I'm Tommy.</h1>
    <p className={`mt-2 mb-0 text-xl ${inter.className}`}>
      I am a Computer Science student at Columbia University born and raised in Brooklyn, NY.
      <br />
      My interests include full-stack development, music production, jazz piano, or any intersection of the three.
    </p>
    <p className={`mt-2 mb-0 text-xl ${inter.className}`}>
      Scroll along to learn more about what I've done and where I'm going!
    </p>
  </div>
</section>
    <BinaryStream></BinaryStream>
        
        {/* Work Experience Section */}
        <section ref={experienceRef} id="experience" className="flex flex-col justify-start items-start pl-10 pr-10 pb-0 text-white">
          <h2 className="text-5xl font-semibold">Experience</h2>
          <p className="mt-4 text-xl">Here is my work experience and personal projects.</p>
          
          {/* Work Experience */}
          <div className="mt-8">
            <h3 className="text-4xl font-bold mb-4">Work</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {workExperience.map((item, index) => (
                <ExperienceItem 
                  key={index}
                  title={item.title}
                  description={item.description}
                  date={item.date}
                  link={item.link}
                />
              ))}
            </div>
          </div>
          
          {/* Projects */}
          <div className="mt-8">
            <h3 className="text-4xl font-bold mb-4">Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
              {projects.map((item, index) => (
                <ProjectCard 
                  key={index}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                />
              ))}
            </div>
          </div>
        </section>

        <BinaryStream />

        {/* Music Section */}
        
        <section ref={musicRef} id="music" className=" flex flex-col justify-start items-start pl-10 pr-10 text-white">
          <h2 className="text-5xl font-semibold">Music</h2>
          <p className="mt-4 text-xl">I grew up playing classical piano and played in jazz ensembles from 2015-2021. These days I play music as a hobby and have branched out to other instruments as well as music production! I currently play keys in the Columbia Gospel Choir, and am working on independent projects.</p>
          <p className="mt-4 text-xl">
  You can listen to my latest creations <a href="https://soundcloud.com/tom-gansa" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Here!</a>
</p>

          {/* Songs Table */}
          {/*<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {songs.map((song, index) => (
              <SongRow key={index} {...song} />
            ))}
          </div>*/}
        </section>
        
        <BinaryStream />

        {/* Contact Section */}
        <section ref={contactRef} id="contact" className="flex flex-col justify-start items-start pl-10 px-10 text-white">
          <h2 className="text-5xl font-semibold mb-4">Contact</h2>
          <p className="text-xl">If you have any questions or inquiries feel free to connect with me using the form below. Alternatively, you can reach me at tdg2121@columbia.edu. I'll get back to you as soon as I can!</p>
          <br></br>
          <div className="flex flex-col md:flex-row w-full gap-8">
            {/* Contact Form */}
            <div className="w-full md:w-2/3">
              <ContactForm />
            </div>
          </div>
        </section>
        <BinaryStream></BinaryStream>
        
      </main>
    </div>
  );
}
