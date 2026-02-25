import React from 'react';
import styles from './SkillBadge.module.scss';

interface SkillProps {
  name: string;
}

const SkillBadge = ({ name }: SkillProps) => {
  return (
    <div className={styles.badge}>
      <span className={styles.bracket}>[</span>
      <span className={styles.name}>{name}</span>
      <span className={styles.bracket}>]</span>
    </div>
  );
};

export default SkillBadge;