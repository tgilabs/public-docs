import React from 'react';
import styles from './styles.module.css';

function HomeOfGamers() {
  return (
    <section className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>הבית של הגיימרים בישראל</h1>
        <p className={styles.text}>
          גיימרים, זה המקום שלכם! TG1 היא לא עוד פלטפורמת משחקים, היא בית לקהילה של גיימרים מכל הסוגים. הצטרפו אלינו כדי להתחרות בטורנירים, לשתף פעולה במשחקים הקבוצתיים שלנו ולגלות את השחקן שמסתתר בתוככם. ב-TG1, המשחק הוא רק ההתחלה!
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img src={require('@site/static/img/tg1.png').default} alt="Israel with Game Controller" className={styles.image} />
      </div>
    </section>
  );
}

export default HomeOfGamers;
