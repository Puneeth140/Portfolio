'use client';

import React, { useState, useEffect } from 'react';
import styles from './About.module.scss';

interface TypewriterProps {
  lines: string[];
}

const Typewriter = ({ lines }: TypewriterProps) => {
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    if (visibleLines < lines.length) {
      const timer = setTimeout(() => {
        setVisibleLines((prev) => prev + 1);
      }, 800); // 800ms delay between each line appearing
      return () => clearTimeout(timer);
    }
  }, [visibleLines, lines.length]);

  return (
    <>
      {lines.slice(0, visibleLines).map((line, index) => (
        <p key={index} className={styles.lineEntry}>
          <span className={styles.prompt}>$</span> {line}
        </p>
      ))}
      {visibleLines < lines.length && (
        <p className={styles.lineEntry}>
          <span className={styles.prompt}>$</span>
          <span className={styles.cursor}>_</span>
        </p>
      )}
    </>
  );
};

export default Typewriter;