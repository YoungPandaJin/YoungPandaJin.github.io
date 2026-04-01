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

// Edit your experience here
const experiences: ExperienceItem[] = [
  {
    role: 'Software Engineer',
    company: 'FloQast',
    period: '2024 – Present',
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

const Experience: React.FC = () => {
  return (
    <div className="experience">
      <div className="experience-content">
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
