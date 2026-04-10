import React from 'react';
import './Hero.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare, faFileDownload } from '@fortawesome/free-solid-svg-icons';
import resume from '../../../Assets/Resume.pdf';

const Hero: React.FC = () => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'resume.pdf';
    link.click();
  };

  return (
    <div className="hero">
      <img src="https://avatars.githubusercontent.com/u/122561920?v=4" alt="Jinyoung Choi" className="hero-image" width="200" height="200" />
      <h1 className="hero-name">Jinyoung Choi</h1>
      <div className="hero-links">
        <a href="https://www.linkedin.com/in/jinyoung-choi-61aa181ba/" target="_blank" rel="noopener noreferrer" className="hero-button">
          <FontAwesomeIcon icon={faLinkedin} className="hero-icon" /> LinkedIn
        </a>
        <a href="https://github.com/YoungPandaJin" target="_blank" rel="noopener noreferrer" className="hero-button">
          <FontAwesomeIcon icon={faGithub} className="hero-icon" /> GitHub
        </a>
        <a href="https://www.youtube.com/@ThePandaJin" target="_blank" rel="noopener noreferrer" className="hero-button">
          <FontAwesomeIcon icon={faYoutube} className="hero-icon" /> YouTube
        </a>
        <a href="mailto:jchoi8163@gmail.com" className="hero-button">
          <FontAwesomeIcon icon={faEnvelopeSquare} className="hero-icon" /> Email
        </a>
        <button onClick={downloadResume} className="hero-button">
          <FontAwesomeIcon icon={faFileDownload} className="hero-icon" /> Resume
        </button>
      </div>
    </div>
  );
};

export default React.memo(Hero);
