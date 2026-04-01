import React from 'react';
import './AboutMe.scss';

const AboutMe: React.FC = () => {
  return (
    <div className="about-me">
      <div className="about-me-content">
        <h2 className="about-me-title">About Me</h2>
        <p className="about-me-text">
          Hi! I'm <em>Jinyoung Choi</em>, also known as <em>PandaJin</em>. I'm a passionate developer with a deep love for coding and technology. 
          I'm constantly exploring new programming languages and staying up-to-date with the latest tech trends.
        </p>

        <p className="about-me-text">
          Currently, I'm learning <strong>Godot/GDScript</strong>, <strong>PyTorch</strong>, and <strong>AWS</strong>.
          I'm working on an AI "Friend" project using AWS and PyTorch, and in my spare time, I'm developing a game in Godot. 
          Next on my list is learning <strong>Docker</strong>. I'm always seeking opportunities to grow and expand my skills.
        </p>

        <p className="about-me-text">
          In my free time, you can find me diving into hobbies like gaming and binge-watching shows. I also enjoy working on game development projects and continually expanding my knowledge by exploring new programming languages and tools.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;