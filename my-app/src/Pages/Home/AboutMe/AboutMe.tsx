import React from 'react';
import './AboutMe.scss';

interface Skill {
  name: string;
  icon: string;
}

// Icons from https://devicon.dev — to add a new skill, find the icon name on that site
const skills: Skill[] = [
  { name: 'Python', icon: 'devicon-python-plain' },
  { name: 'TypeScript', icon: 'devicon-typescript-plain' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain' },
  { name: 'React', icon: 'devicon-react-original' },
  { name: 'SCSS', icon: 'devicon-sass-original' },
  { name: 'Git', icon: 'devicon-git-plain' },
  { name: 'Godot', icon: 'devicon-godot-plain' },
];

const AboutMe: React.FC = () => {
  return (
    <div className="about-me">
      <div className="about-me-content">
        <h2 className="about-me-title">About Me</h2>
        <p className="about-me-text">
          Hi! I'm <em>Jin</em> — pronounced like the alcohol Gin, but with a J.
        </p>

        <p className="about-me-text">
          I'm a Software Engineer at <strong>FloQast</strong> and a <strong>Rose-Hulman</strong> graduate.
        </p>

        <p className="about-me-text">
          Outside of work, I'm building side projects ranging from AI experiments to game development in Godot.
          Currently exploring ways to integrate AI into my daily workflow to speed up processes and stay ahead of the curve.
        </p>

        <h3 className="about-me-subtitle">Tech I Work With</h3>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-item">
              <i className={`${skill.icon} colored`}></i>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>

        <h3 className="about-me-subtitle">GitHub Activity</h3>
        <div className="github-activity">
          <a href="https://github.com/YoungPandaJin" target="_blank" rel="noopener noreferrer">
            <img
              src="https://ghchart.rshah.org/f13939/YoungPandaJin"
              alt="YoungPandaJin's GitHub contribution chart"
              className="github-chart"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default React.memo(AboutMe);