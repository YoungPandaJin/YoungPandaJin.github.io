import React from 'react';

interface ShootingStarProps {
  x: number;
  y: number;
}

const ShootingStar: React.FC<ShootingStarProps> = ({ x, y }) => {
  const style = {
    position: 'absolute' as 'absolute',
    left: `${x}px`,
    top: `${y}px`,
    width: '10px',
    height: '10px',
    backgroundColor: 'yellow',
    borderRadius: '50%',
    transition: 'left 0.1s, top 0.1s'
  };

  return <div style={style}></div>;
};

export default ShootingStar;