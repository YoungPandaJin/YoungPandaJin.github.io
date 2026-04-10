import React from 'react';
import './MenuTab.scss';

export type Tab = 'home' | 'projects' | 'experience' | 'secret';

interface MenuTabProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

const MenuTab: React.FC<MenuTabProps> = ({ activeTab, onTabChange }) => {
  return (
    <nav className="menu-tab" aria-label="Page navigation">
      <ul>
        <li className={activeTab === 'home' ? 'active' : ''}>
          <button onClick={() => onTabChange('home')}>Home</button>
        </li>
        <li className={activeTab === 'projects' ? 'active' : ''}>
          <button onClick={() => onTabChange('projects')}>Projects</button>
        </li>
        <li className={activeTab === 'experience' ? 'active' : ''}>
          <button onClick={() => onTabChange('experience')}>Experience</button>
        </li>
      </ul>
    </nav>
  );
};

export default MenuTab;
