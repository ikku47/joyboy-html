import React, { useEffect } from 'react';
import './shiny.scss'; // Assuming you've created a CSS file for these styles

const ShinyWrapper = ({children,className}) => {
  useEffect(() => {
    const syncPointer = ({ x, y }) => {
      document.documentElement.style.setProperty('--x', x.toFixed(2))
      document.documentElement.style.setProperty(
        '--xp',
        (x / window.innerWidth).toFixed(2)
      )
      document.documentElement.style.setProperty('--y', y.toFixed(2))
      document.documentElement.style.setProperty(
        '--yp',
        (y / window.innerHeight).toFixed(2)
      )
    }
    document.body.addEventListener('pointermove', syncPointer)
    return () => {
      document.removeEventListener('pointermove', syncPointer);
    };
  }, []);

  return (
    <div className={`shiny ${className}`} data-glow>
      {children}
    </div>
  );
};

export default ShinyWrapper;
