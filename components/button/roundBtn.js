import React from 'react';
import styles from './roundBtn.module.css';

export default function RoundBtn({ icon = '' }) {
  return (
    <div className={styles.roundBtn}>
      <img src={icon} className="rb-icon" alt="" />
    </div>
  );
}
