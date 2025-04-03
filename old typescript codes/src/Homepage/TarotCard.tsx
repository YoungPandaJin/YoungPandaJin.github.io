import React, { useState } from 'react';
import './TarotCard.scss';

interface TarotCardProps {
  frontImage: string;
  backImage: string;
}

const TarotCard: React.FC<TarotCardProps> = ({ frontImage, backImage }) => {
  const [flipped, setFlipped] = useState(false);

  const handleMouseEnter = () => {
    setFlipped(true);
  };

  const handleMouseLeave = () => {
    setFlipped(false);
  };

  return (
    <div
      className={`tarot-card ${flipped ? 'flipped' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="tarot-card-inner">
        <div className="tarot-card-front">
          <img src={frontImage} alt="Tarot Front" />
        </div>
        <div className="tarot-card-back">
          <img src={backImage} alt="Tarot Back" />
        </div>
      </div>
    </div>
  );
};

export default TarotCard;