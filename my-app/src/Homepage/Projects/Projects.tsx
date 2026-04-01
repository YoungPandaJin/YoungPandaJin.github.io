import React, { useState } from 'react';
import './Projects.scss';
import projects, { Projects } from './ProjectsDatas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { ANIMATION_DURATION } from '../../constants';

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

  const handleImageClick = (index: number) => {
    if (index === currentProjectIndex) return;
    switchProject(() => index);
  };

  const currentProject = projects[currentProjectIndex];
  const projectsImages = projects.map((project: Projects) => project.images[0]);

  return (
    <div className="project">
      <h2 className="project-title">Project</h2>
      <div className="project-section">
        <div className="project-box">
          <div className="project-content">
            <div className={`project-info ${isFading ? 'fade-out' : 'fade-in'}`}>
              <h2 className="info-title">{currentProject.title}</h2>
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
            <div className={`project-image-side ${isFading ? 'fade-out' : ''}`}>
              <div className="flip-card">
                <img src={currentProject.images[0]} alt={`Project ${currentProjectIndex + 1}`} />
              </div>
            </div>
          </div>
          <div className="project-nav">
            <button className="carousel-button" onClick={handlePrevProject} aria-label="Previous project">
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <div className="image-thumbnails">
              {projectsImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${projects[index].title} thumbnail`}
                  className={index === currentProjectIndex ? 'selected' : ''}
                  onClick={() => handleImageClick(index)}
                />
              ))}
            </div>
            <button className="carousel-button" onClick={handleNextProject} aria-label="Next project">
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;