import React, { useState } from 'react';
import './MusicPrompt.scss';

interface MusicPromptProps {
  onAccept: () => void;
  onDecline: () => void;
}

const MusicPrompt: React.FC<MusicPromptProps> = ({ onAccept, onDecline }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleAccept = () => {
    setIsVisible(false);
    setTimeout(onAccept, 500); // Wait for the fade-out transition to complete
  };

  const handleDecline = () => {
    setIsVisible(false);
    setTimeout(onDecline, 500); // Wait for the fade-out transition to complete
  };

  return (
    <div className={`MusicPrompt starry-background ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="MusicPrompt-message">
        <h1>Enable Background Music</h1>
        <p>Would you like to turn on background music while browsing the site?</p>
        <div className="MusicPrompt-buttons">
          <button className="accept-button" onClick={handleAccept}>Yes</button>
          <button className="decline-button" onClick={handleDecline}>No</button>
        </div>
      </div>
    </div>
  );
};

export default MusicPrompt;