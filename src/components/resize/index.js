import React, { useState, useEffect } from 'react';

const ResponsiveContainer = ({ children }) => {
  const [windowSize, setWindowSize] = useState({
    height: window.innerHeight - 54,
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        height: window.innerHeight - 54,
        width: window.innerWidth,
      });
    };

    // Set initial size and update on resize
    window.addEventListener('resize', handleResize);
    handleResize(); // call once on mount

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerStyle =
    windowSize.width >= 992
      ? { height: `${windowSize.height}px`, overflowY: 'hidden' }
      : {};

  return (
    <div className="" style={containerStyle}>
      {children}
    </div>
  );
};

export default ResponsiveContainer;
