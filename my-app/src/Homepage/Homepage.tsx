import React, { useState } from 'react';
import Hero from './Hero/Hero';
import AboutMe from './AboutMe/AboutMe';
import MenuTab, { Tab } from '../PageSetup/MenuTab';
import ProjectSection from './Projects/Projects';
import Experience from './Experience/Experience';
import Footer from './Footer/Footer';
import { ANIMATION_DURATION } from '../constants';
import './Homepage.scss';

const stars = Array.from({ length: 100 }, (_, index) => (
  <div key={index} className="star" style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}></div>
));

const shootingStar = (
  <div className="shooting-star" style={{ top: `${Math.random() * 50}%`, left: `${Math.random() * 50}%` }}></div>
);

const Homepage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [isFading, setIsFading] = useState(false);

  const handleTabChange = (tab: Tab) => {
    if (tab === activeTab || isFading) return;
    setIsFading(true);
    setTimeout(() => {
      setActiveTab(tab);
      window.scrollTo({ top: 0 });
      setIsFading(false);
    }, ANIMATION_DURATION);
  };

  return (
    <div className="homepage">
      <div className="starry-background">
        {stars}
        {shootingStar}
      </div>
      <MenuTab activeTab={activeTab} onTabChange={handleTabChange} />
      <div className={`tab-content ${isFading ? 'fade-out' : 'fade-in'}`}>
        {activeTab === 'home' && (
          <>
            <header className="homepage-header">
              <Hero />
            </header>
            <section>
              <AboutMe />
            </section>
            <Footer />
          </>
        )}
        {activeTab === 'projects' && (
          <section>
            <ProjectSection />
          </section>
        )}
        {activeTab === 'experience' && (
          <section>
            <Experience />
          </section>
        )}
      </div>
    </div>
  );
};

export default Homepage;
