import React, { useState } from 'react';
import './Projects.scss';
import projects, { Projects } from './ProjectsDatas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ProjectSection: React.FC = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('');
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNextProject = () => {
    setIsFlipped(true);
    setAnimationClass('fade-out');
    setTimeout(() => {
      setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
      setAnimationClass('fade-in');
      setIsFlipped(false);
    }, 500);
  };

  const handlePrevProject = () => {
    setIsFlipped(true);
    setAnimationClass('fade-out');
    setTimeout(() => {
      setCurrentProjectIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
      setAnimationClass('fade-in');
      setIsFlipped(false);
    }, 500);
  };

  const handleImageClick = (index: number) => {
    setIsFlipped(true);
    setAnimationClass('fade-out');
    setTimeout(() => {
      setCurrentProjectIndex(index);
      setAnimationClass('fade-in');
      setIsFlipped(false);
    }, 500);
  };

  const currentProject = projects[currentProjectIndex];
  const projectsImages = projects.map((project: Projects) => project.images[0]);

  return (
    <div className="project">
      <h2 className="project-title">Project</h2>
      <div className="project-section">
        <div className="project box">
          <div className="project-content">
            <div className={`project-info ${animationClass}`}>
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
                      <button
                        key={index}
                        onClick={() => window.open(link.url, "_blank")}
                        className="project-link-button"
                      >
                        {link.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="project-carousel">
              <button className="carousel-button prev-button" onClick={handlePrevProject}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <div className={`flip-card ${isFlipped ? 'flip' : ''}`}>
                <img src={currentProject.images[0]} alt={`Project ${currentProjectIndex + 1}`} />
              </div> 
              <button className="carousel-button next-button" onClick={handleNextProject}>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
          <div className="image-thumbnails">
          {projectsImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className={index === currentProjectIndex ? 'selected' : ''}
              onClick={() => handleImageClick(index)}
            />
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;