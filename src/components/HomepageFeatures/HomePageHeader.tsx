
import '@site/src/css/custom.css'
import '@site/src/css/HomePage.css'

export default function HomePageHeader(): JSX.Element {
    return (
    <div className='Header-Container'>
        <h2 className='text1' style={{direction:'rtl'}}> הויקיפדיה של TeGriAi</h2>
        <p className='text2'>ברוכים הבאים לוויקיפדיה שלנו! הקהילה הישראלית הכי גדולה ברשת</p>
        <button className='start-button'>מתחילים</button>
    </div>
    );
  } 
  