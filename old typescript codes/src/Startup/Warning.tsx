import React from 'react';
import './Warning.scss';

interface WarningProps {
  onAcknowledge: () => void;
}

const Warning: React.FC<WarningProps> = ({ onAcknowledge }) => {
  return (
    <div className="Warning">
      <div className="Warning-message">
        <h1>Under Development</h1>
        <p>I am currently still updating the website. You can see what I have currently by clicking the button</p>
        <button onClick={onAcknowledge}>Continue to Site</button>
      </div>
    </div>
  );
};

export default Warning;