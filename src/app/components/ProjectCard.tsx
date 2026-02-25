import React from 'react';
import styles from './ProjectCard.module.scss';

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  DemoLink: string;
  GithubLink: string; // This is your 'codeLink'
}

// We use the names defined in the Interface above
const ProjectCard = ({ title, description, image, tech, DemoLink, GithubLink }: ProjectProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {/* FIX: Use 'image' and 'title' directly, not 'projects.image' */}
        <img src={image} alt={title} className={styles.projectImg} />
        
        <div className={styles.overlay}>
          <p className={styles.hoverDesc}>{description}</p>
          <div className={styles.techList}>
            {/* FIX: Use 'tech' directly */}
            {tech.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          
          {/* FIX: Use 'link' directly */}
          <a href={GithubLink} target="_blank" rel="noreferrer" className={styles.codeBtn}>
            VIEW_SOURCE_CODE
          </a>
          <a href={DemoLink} target="_blank" rel="noreferrer" className={styles.demoBtn}>
            DEMO
          </a>
        </div>
      </div>

      <div className={styles.cardFooter}>
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default ProjectCard;