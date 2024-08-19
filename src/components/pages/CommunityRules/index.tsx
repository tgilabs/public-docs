import React from 'react';
import styles from './styles.module.css';

function CommunityRules() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>חוקי הקהילה</h1>
      <p className={styles.text}>
        חוקי הקהילה נועדו לשמור על סביבה נעימה ומכבדת לכל השחקנים.<br />
        חובה על כל שחקן לקרוא ולהבין את החוקים הללו ולפעול בהתאם.
      </p>
    </section>
  );
}

export default CommunityRules;
