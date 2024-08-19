import React from 'react';
import styles from './styles.module.css';

function Steps() {
  return (
    <div className={styles.stepsContainer}>
      <div className={styles.stepCard}>
        <div className={styles.stepNumber}>1</div>
        <p className={styles.stepText}>
        כל השחקנים מחויבים לפעול בהתאם לחוקי המשחק ולהוראות שניתנות במסגרת המשחק.
        </p>
      </div>
      <div className={styles.stepCard}>
        <div className={styles.stepNumber}>2</div>
        <p className={styles.stepText}>
        חל איסור מוחלט על ביצוע אירייפים (Ear Rape) בכל צורה שהיא.
        </p>
      </div>
      <div className={styles.stepCard}>
        <div className={styles.stepNumber}>3</div>
        <p className={styles.stepText}>
        שימוש בשינוי קול או סאונד פד מותר רק כאשר הדבר מתאים לדמות במשחק. כל שימוש אחר אסור.
        </p>
      </div>
      <div className={styles.stepCard}>
        <div className={styles.stepNumber}>4</div>
        <p className={styles.stepText}>
        יש לדבר לכל שחקן או איש צוות בכבוד, תוך שמירה על נימוס והוגנות.
        </p>
      </div>
      <div className={styles.stepCard}>
        <div className={styles.stepNumber}>5</div>
        <p className={styles.stepText}>
        חל איסור על ביצוע טרולים מעבר למידה סבירה. יש להימנע מפעולות שפוגעות בחוויית המשחק של אחרים.
        </p>
      </div>
      <div className={styles.stepCard}>
        <div className={styles.stepNumber}>6</div>
        <p className={styles.stepText}>
        אין לפרסם בכל רחבי הקהילה ללא אישור מפורש מאנשי הצוות.
        </p>
      </div>
      <div className={styles.stepCard}>
        <div className={styles.stepNumber}>7</div>
        <p className={styles.stepText}>
        חל איסור מוחלט על חדירה לפרטיות של משתמשים או אנשי צוות, או ביצוע כל פעולה אשר עשויה להטריד.
        </p>
      </div>
      <div className={styles.stepCard}>
        <div className={styles.stepNumber}>8</div>
        <p className={styles.stepText}>
        השפות המותרות לשימוש בקהילה הן עברית ואנגלית בלבד.
        </p>
      </div>
      <div className={styles.stepCard}>
        <div className={styles.stepNumber}>9</div>
        <p className={styles.stepText}>
        חל איסור על הספמת הצ'אט. כתיבה של יותר מ-3 שורות ברצף תיחשב כהספמה.
        </p>
      </div>
      <div className={styles.stepCard}>
        <div className={styles.stepNumber}>10</div>
        <p className={styles.stepText}>
        חל איסור על פרסום תוכן לא הולם או שימוש בשפה לא נאותה בפרטי עם אנשי צוות.
        </p>
      </div>
      <div className={styles.stepCard}>
        <div className={styles.stepNumber}>11</div>
        <p className={styles.stepText}>
        אין להיות מחובר לקהילה עם יותר מחשבון משתמש אחד בו זמנית.
        </p>
      </div>
      <div className={styles.stepCard}>
        <div className={styles.stepNumber}>12</div>
        <p className={styles.stepText}>
        כל ניסיון לעקוף עונש שניתן על ידי הצוות, בכל דרך שהיא, אסור בהחלט.
        </p>
      </div>
    </div>
  );
}

export default Steps;
