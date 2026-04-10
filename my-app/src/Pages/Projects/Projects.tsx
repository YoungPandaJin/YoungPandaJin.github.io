import React, { useState } from 'react';
import './Projects.scss';
import projects from './ProjectsDatas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { ANIMATION_DURATION } from '../../shared/constants';

const ProjectSection: React.FC = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const switchProject = (getNewIndex: () => number) => {
    if (isFading) return;
    setIsFading(true);
    setTimeout(() => {
      setCurrentProjectIndex(getNewIndex());
      setIsFading(false);
    }, ANIMATION_DURATION);
  };

  const handleNextProject = () => {
    switchProject(() => (currentProjectIndex + 1) % projects.length);
  };

  const handlePrevProject = () => {
    switchProject(() => (currentProjectIndex - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentProjectIndex];
  const hasMultipleProjects = projects.length > 1;

  return (
    <div className="project">
      <h2 className="project-title">Projects</h2>
      <div className="project-section">
        <div className="project-box">
          <div className="project-content">
            <div className={`project-info ${isFading ? 'fade-out' : 'fade-in'}`}>
              <div className="info-header">
                <h2 className="info-title">{currentProject.title}</h2>
                {currentProject.status === 'in-progress' && (
                  <span className="status-badge">
                    <span className="status-dot" />
                    In Progress
                  </span>
                )}
              </div>
              {currentProject.description.map((desc, index) => (
                <p key={index} className="compact-description">{desc}</p>
              ))}
              <div className="project-bottom">
                {currentProject.technologies && (
                  <div className="project-technologies">
                    {currentProject.technologies.map((tech, index) => (
                      <span key={index} className={`technology-highlight ${tech.toLowerCase()}`}>{tech}</span>
                    ))}
                  </div>
                )}
                {currentProject.links && (
                  <div className="project-links">
                    {currentProject.links.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-button"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
            {currentProject.images.length > 0 && (
              <div className={`project-image-side ${isFading ? 'fade-out' : ''}`}>
                <div className="flip-card">
                  <img src={currentProject.images[0]} alt={currentProject.title} />
                </div>
              </div>
            )}
          </div>
          {hasMultipleProjects && (
            <div className="project-nav">
              <button className="carousel-button" onClick={handlePrevProject} aria-label="Previous project">
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <div className="project-dots">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${index === currentProjectIndex ? 'active' : ''}`}
                    onClick={() => {
                      if (index !== currentProjectIndex) switchProject(() => index);
                    }}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>
              <button className="carousel-button" onClick={handleNextProject} aria-label="Next project">
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;