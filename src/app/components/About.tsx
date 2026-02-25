import React from 'react';
import Typewriter from './Typewriter';
import styles from './About.module.scss';

const About = () => {
  const bioData = [
    "WHO AM I,",
    "Puneeth: Master's Student.",
    "location --current",
    "Mysuru, Karnataka, India",
    "skills --check",
    "Python, Computer Vision, and Next.js detected.",
    "status",
    "Actively building projects and learning LLM."
  ];

  return (
    <section id="about" className={styles.container}>
      <div className={styles.terminal}>
        <div className={styles.header}>
          <div className={styles.dots}>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
          </div>
          <p className={styles.terminalTitle}>system_core_v1.sh</p>
        </div>
        <div className={styles.body}>
          <Typewriter lines={bioData} />
        </div>
      </div>
    </section>
  );
};

export default About;