import React from 'react';
import styles from './Steps.module.css';

function Steps() {
  return (
    <div className={styles.stepsContainer}>
      <div className={styles.stepCard}>
        <div className={styles.stepNumber}>1</div>
        <p className={styles.stepText}>
          Integer aliquam, lorem vitae dapibus sollicitudin, nibh nisl egestas enim, ut dapibus odio augue venenatis mi.
        </p>
      </div>
      <div className={styles.stepCard}>
        <div className={styles.stepNumber}>2</div>
        <p className={styles.stepText}>
          Integer aliquam, lorem vitae dapibus sollicitudin, nibh nisl egestas enim, ut dapibus odio augue venenatis mi.
        </p>
      </div>
      <div className={styles.stepCard}>
        <div className={styles.stepNumber}>3</div>
        <p className={styles.stepText}>
          Integer aliquam, lorem vitae dapibus sollicitudin, nibh nisl egestas enim, ut dapibus odio augue venenatis mi.
        </p>
      </div>
    </div>
  );
}

export default Steps;
