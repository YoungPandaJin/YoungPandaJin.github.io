import React, { useState, useEffect } from 'react';
import './MenuTab.scss';

const MenuTab: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero-section');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    const sections = document.querySelectorAll('header[id], section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="menu-tab" aria-label="Page navigation">
      <ul>
        <li className={activeSection === 'hero-section' ? 'active' : ''}>
          <a href="#hero-section">Hero</a>
        </li>
        <li className={activeSection === 'about-me-section' ? 'active' : ''}>
          <a href="#about-me-section">About Me</a>
        </li>
        <li className={activeSection === 'project-section' ? 'active' : ''}>
          <a href="#project-section">Projects</a>
        </li>
      </ul>
    </nav>
  );
};

export default MenuTab;
