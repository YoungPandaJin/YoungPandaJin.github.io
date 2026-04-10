import React from 'react';
import './Secret.scss';

interface SecretProps {
  onGoBack?: () => void;
}

// Write your secret message here
const secretMessage = `You found my secret! 🌠

This is a hidden corner of my site — thanks for being curious enough to click it.

For all my friends. I want to say thank you!`;

const Secret: React.FC<SecretProps> = ({ onGoBack }) => {
  return (
    <div className="secret">
      <div className="secret-content">
        <h2 className="secret-title">You found me.</h2>
        <div className="secret-message">
          {secretMessage.split('\n').map((line, i) => (
            <p key={i}>{line || '\u00A0'}</p>
          ))}
        </div>
        {onGoBack && (
          <button className="secret-back-button" onClick={onGoBack}>
            ← Back to Home
          </button>
        )}
      </div>
    </div>
  );
};

export default Secret;
