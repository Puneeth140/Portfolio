'use client';

import React, { useState, useEffect } from 'react';
import styles from './ScrollToTop.module.scss';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`${styles.scrollArea} ${isVisible ? styles.visible : ''}`}>
      <button onClick={scrollToTop} className={styles.button} aria-label="Scroll to top">
        <span className={styles.arrow}></span>
        <span className={styles.glitchLayer}></span>
      </button>
    </div>
  );
};

export default ScrollToTop;