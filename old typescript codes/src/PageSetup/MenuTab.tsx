import React from 'react';
import './MenuTab.scss';

interface MenuTabProps {
  activeSection: string;
}

const MenuTab: React.FC<MenuTabProps> = ({ activeSection }) => {
  return (
    <nav className="menu-tab">
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