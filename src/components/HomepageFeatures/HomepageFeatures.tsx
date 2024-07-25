import styles from './styles.module.css';
import { PiArrowLeftThin } from "react-icons/pi";


type ValuesItem = {
    categoryTitle: string;
    categoryLink:string;
    title:string;
    link: string;
  };

const ValuesList:ValuesItem[] =[
    {
        categoryTitle: "המעבדה",
        categoryLink:"LABS",
        title:"המעבדה של TGI ",
        link:"TGI_LABS_INFO"
    } ,  
    {
        categoryTitle: "אירועים",
        categoryLink:"EVENTS",
        title:"חגיגות 250,000 משתמשים בדיסקורד",
        link:"HAGIGA_AHUSHARMUTA"
    } ,  
    {
        categoryTitle: "קהילה",
        categoryLink:"community",
        title:"צוות בכיר ב -TeGriAi ",
        link:"STAM_TRYHARDIM"
    } ,  
]
function Values({ categoryTitle, categoryLink, title, link }) {
    return (
      <div className='Value-Container'>
        <a href={link} className='Link-Container'>
          <a style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
            <div >
                <a  href={categoryLink}style={{ color: '#006BDD', }}>{categoryTitle}</a> / {title}
              <PiArrowLeftThin className='Icons'/>
            </div>
          </a>
        </a>
      </div>
    ); 
  }

export default function HomepageLastValues(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="Last-Values-Container">
        <h3 className='Last-Values-Text'>ערכים אחרונים</h3>
        <div className="Values-Container">
          {ValuesList.map((props, idx) => (
            <Values key={idx} {...props} />
          ))}
          
        </div>
        <a style={{float:'left'}} href=''>קרא/י עוד  <PiArrowLeftThin style={{float:'left',margin:'5px',color:'#05468B'}}/></a>
      </div>
    </section>
  );
}

