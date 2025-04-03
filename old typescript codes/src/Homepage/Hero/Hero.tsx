import React from 'react';
import './Hero.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare, faFileDownload } from '@fortawesome/free-solid-svg-icons';
import TarotCard from '../TarotCard';
import resume from '../../Assets/Resume.pdf';

const Hero: React.FC = () => {
  return (
    <div className="hero">
      <div className="tarot-cards">
        {/* <TarotCard frontImage="/tarot/front1.jpg" backImage="/tarot/back.jpg" />
        <TarotCard frontImage="/tarot/front2.jpg" backImage="/tarot/back.jpg" />
        <TarotCard frontImage="/tarot/front3.jpg" backImage="/tarot/back.jpg" /> */}
      </div>
      <img src="https://avatars.githubusercontent.com/u/122561920?v=4" alt="PandaJin" className="hero-image" />
      <h1 className="hero-name">Jinyoung Choi</h1>
      <div className="hero-links">
        <button onClick={() => window.open("https://www.linkedin.com/in/jinyoung-choi-61aa181ba/", "_blank")} className="hero-button">
          <FontAwesomeIcon icon={faLinkedin} className="hero-icon" /> LinkedIn
        </button>
        <button onClick={() => window.open("https://github.com/YoungPandaJin", "_blank")} className="hero-button">
          <FontAwesomeIcon icon={faGithub} className="hero-icon" /> GitHub
        </button>
        <button onClick={() => window.open("https://www.youtube.com/@ThePandaJin", "_blank")} className="hero-button">
          <FontAwesomeIcon icon={faYoutube} className="hero-icon" /> YouTube
        </button>
        <button onClick={() => window.location.href = "mailto:choij4@rose-hulman.edu"} className="hero-button">
          <FontAwesomeIcon icon={faEnvelopeSquare} className="hero-icon" /> Email
        </button>
        <button 
        onClick={() => {
          const link = document.createElement('a');
          link.href = resume;
          link.download = 'resume.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }} 
        className="hero-button"
      >
        <FontAwesomeIcon icon={faFileDownload} className="hero-icon" /> Resume
      </button>
      </div>
    </div>
  );
};

export default Hero;