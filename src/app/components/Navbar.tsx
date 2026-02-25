'use client';
import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import icons
import LiveClock from './LiveClock';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">PUNEETH.EXE</Link>
      </div>
      
          <div className={styles.rightSection}>
              <ul className={styles.navLinks}>
                  <li>
                      <a href="#about">
                          <span>/</span>ABOUT
                      </a>
                  </li>
                  <li>
                      <a href="#projects">
                          <span>/</span>PROJECTS
                      </a>
                  </li>
                  <li>
                    <a href="#contact">
                    <span>/</span>contact</a>
                  </li>
              </ul>

        <div className={styles.socialIcons}>
          <a href="https://github.com/Puneeth140" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/puneeth-u-b535481a1/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>

        <LiveClock />
      </div>
    </nav>
  );
};

export default Navbar;