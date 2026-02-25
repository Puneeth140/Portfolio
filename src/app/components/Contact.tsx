import React from 'react';
import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <section id="contact" className={styles.container}>
      <h2 className={styles.sectionTitle}>[ESTABLISH_CONNECTION]</h2>
      
      <div className={styles.contactWrapper}>
        <div className={styles.statusBox}>
          <div className={styles.statusIndicator}>
            <span className={styles.pulse}></span>
            <p>SIGNAL: STABLE</p>
          </div>
        </div>

        <div className={styles.linksGrid}>
          <a href="mailto:upuneeth47@gmail.com" className={styles.contactItem}>
            <span className={styles.label}>EMAIL:</span>
            <span className={styles.value}>puneeth@mail.com</span>
          </a>
          <a href="https://www.linkedin.com/in/puneeth-u-b535481a1/" target="_blank" className={styles.contactItem}>
            <span className={styles.label}>LINKEDIN:</span>
            <span className={styles.value}>/in/puneeth-ai</span>
          </a>
          <a href="https://github.com/Puneeth140" target="_blank" className={styles.contactItem}>
            <span className={styles.label}>GITHUB:</span>
            <span className={styles.value}>@puneeth-dev</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;