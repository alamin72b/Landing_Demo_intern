import React from 'react';

const Container = ({ children, className = '', id = '' }) => {
  return (
    <main id={id} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden ${className}`}>
      {children}
    </main>
  );
};

export default Container;