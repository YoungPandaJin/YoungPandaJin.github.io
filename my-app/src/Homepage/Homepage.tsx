import React from 'react';
import Hero from './Hero/Hero';
import AboutMe from './AboutMe/AboutMe';
import MenuTab from '../PageSetup/MenuTab';
import ProjectSection from './Projects/Projects';
import './Homepage.scss';
import Footer from './Footer/Footer';

const stars = Array.from({ length: 100 }, (_, index) => (
  <div key={index} className="star" style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}></div>
));

const shootingStar = (
  <div className="shooting-star" style={{ top: `${Math.random() * 50}%`, left: `${Math.random() * 50}%` }}></div>
);

const Homepage: React.FC = () => {
  return (
    <div className="homepage">
      <div className="starry-background">
        {stars}
        {shootingStar}
      </div>
      <MenuTab />
      <header id="hero-section" className="homepage-header">
        <Hero />
      </header>
      <section id="about-me-section">
        <AboutMe />
      </section>
      <section id="project-section">
        <ProjectSection />
      </section>
      <Footer />
    </div>
  );
};

export default Homepage;
