import React, { useState, useEffect } from 'react';
import Hero from './Home/Hero/Hero';
import AboutMe from './Home/AboutMe/AboutMe';
import MenuTab, { Tab } from '../Layout/MenuTab';
import ProjectSection from './Projects/Projects';
import Experience from './Experience/Experience';
import Secret from './Secret/Secret';
import Footer from './Home/Footer/Footer';
import { ANIMATION_DURATION } from '../shared/constants';
import './Pages.scss';

const stars = Array.from({ length: 100 }, (_, index) => (
  <div key={index} className="star" style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}></div>
));

const shootingStarPosition = { top: `${Math.random() * 50}%`, left: `${Math.random() * 50}%` };

const pageTitles: Record<Tab, string> = {
  home: 'Jinyoung Choi — Software Engineer',
  projects: 'Projects — Jinyoung Choi',
  experience: 'Experience — Jinyoung Choi',
  secret: '🌠 — Jinyoung Choi',
};

const Pages: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    document.title = pageTitles[activeTab];
  }, [activeTab]);

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
      </div>
      <button
        className="shooting-star-wrapper"
        style={shootingStarPosition}
        onClick={() => handleTabChange('secret')}
        aria-label="A shooting star — click to discover a secret"
      >
        <div className="shooting-star" />
      </button>
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
        {activeTab === 'secret' && (
          <section>
            <Secret onGoBack={() => handleTabChange('home')} />
          </section>
        )}
      </div>
    </div>
  );
};

export default Pages;
