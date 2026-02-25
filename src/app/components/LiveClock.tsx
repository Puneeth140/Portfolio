'use client'; 
import React, { useState, useEffect } from 'react';
import styles from './LiveClock.module.scss';

const LiveClock = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      // Format: HH:MM:SS
      const formatted = now.toLocaleTimeString('en-GB', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setTime(formatted);
    };

    updateClock(); // Initial call
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className={styles.clockContainer}>
      <span className={styles.label}>SYS_TIME:</span>
      <span className={styles.time}>{time || '00:00:00'}</span>
    </div>
  );
};

export default LiveClock;