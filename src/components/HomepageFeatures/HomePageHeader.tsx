import React, { useEffect, useState } from 'react';
import '@site/src/css/custom.css';
import '@site/src/css/HomePage.css';

export default function HomePageHeader(): JSX.Element {
  const [scrollPosition, setScrollPosition] = useState(0);

  

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const parallaxFactor = 0.4;
  const backgroundPositionY = scrollPosition * parallaxFactor;

  return (
    <div
      className='Header-Container'
      style={{ backgroundPositionY: `${backgroundPositionY}px` }}
    >
      <div className='text-wrapper'>
        <h2 className='text1'>הויקיפדיה של TeGriAi</h2>
        <p className='text2'>ברוכים הבאים לוויקיפדיה שלנו! הקהילה הישראלית הכי גדולה ברשת</p>
      </div>
      <button className='start-button'>מתחילים</button>
    </div>
  );
}