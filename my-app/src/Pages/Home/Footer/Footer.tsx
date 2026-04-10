import React from 'react';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Jinyoung Choi. Built with React &amp; TypeScript.</p>
      <div className="footer-links">
        <a href="https://www.linkedin.com/in/jinyoung-choi-61aa181ba/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
        <a href="https://github.com/YoungPandaJin" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>
        <a href="mailto:jchoi8163@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} /> Email
        </a>
      </div>
    </footer>
  );
};

export default Footer;