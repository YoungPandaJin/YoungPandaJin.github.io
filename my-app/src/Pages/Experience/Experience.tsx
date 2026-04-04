import React from 'react';
import './Experience.scss';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
}

interface EducationItem {
  degree: string;
  school: string;
  period: string;
  details?: string[];
}

interface CurrentProject {
  name: string;
  description: string;
  technologies: string[];
}

// Edit your experience here
const experiences: ExperienceItem[] = [
  {
    role: 'Software Engineer',
    company: 'FloQast',
    period: '2024 December – Present',
    description: [
      'Building and maintaining full-stack features for accounting workflow automation.',
    ],
  },
];

// Edit your education here
const education: EducationItem[] = [
  {
    degree: 'B.S. in Computer Science',
    school: 'Rose-Hulman Institute of Technology',
    period: '2020 – 2024',
    details: [],
  },
];

// Edit what you're currently working on here
const currentProjects: CurrentProject[] = [
  {
    name: 'AI "Friend"',
    description: 'A sarcastic AI voice assistant that reacts to what you say using speech recognition and text-to-speech.',
    technologies: ['Python', 'PyTorch', 'Speech Recognition'],
  },
  {
    name: 'Portfolio Website',
    description: 'Continuously improving this site with new features and better design.',
    technologies: ['React', 'TypeScript', 'SCSS'],
  },
];

const Experience: React.FC = () => {
  return (
    <div className="experience">
      <div className="experience-content">
        <h2 className="experience-title">Currently Working On</h2>
        <div className="current-projects">
          {currentProjects.map((project, index) => (
            <div key={index} className="current-project-card">
              <div className="current-project-status">
                <span className="status-dot" />
                In Progress
              </div>
              <h3 className="current-project-name">{project.name}</h3>
              <p className="current-project-description">{project.description}</p>
              <div className="current-project-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h2 className="experience-title">Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker" />
              <div className="timeline-card">
                <h3 className="timeline-role">{exp.role}</h3>
                <span className="timeline-company">{exp.company}</span>
                <span className="timeline-period">{exp.period}</span>
                <ul className="timeline-description">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <h2 className="experience-title">Education</h2>
        <div className="timeline">
          {education.map((edu, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker" />
              <div className="timeline-card">
                <h3 className="timeline-role">{edu.degree}</h3>
                <span className="timeline-company">{edu.school}</span>
                <span className="timeline-period">{edu.period}</span>
                {edu.details && edu.details.length > 0 && (
                  <ul className="timeline-description">
                    {edu.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Experience);
