// Layout.js
import React from 'react';
import Header from './header/Header';
import { useScrollAnimationEffect } from './ScrollAnimationHelper';

const Layout = ({ children }) => {
  // ScrollAnimationHelper'dan gelen efektleri uygula
  useScrollAnimationEffect();
  
  return (
    <div className="app-container">
      <div className="fixed-header">
        <Header />
      </div>
      {children}
    </div>
  );
};

export default Layout;