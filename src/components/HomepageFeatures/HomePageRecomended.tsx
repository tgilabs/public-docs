
import '@site/src/css/custom.css'
import '@site/src/css/HomePage.css'


type recomended ={
    title:string;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    mainText:string;
    link:string;
}
const recomendedlist:recomended[] =[
  {
    title:"המעבדה של TGI",
    mainText:"טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט ",
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    link:"tgiLabs"
  },
  {
    title:"המעבדות של TGI",
    mainText:"טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט ",
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    link:"COW"
  },
  {
    title:"המעבדה של TGI",
    mainText:"טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט ",
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    link:"COW"
  },
  {
    title:"המעבדות של TGI ",
    mainText:"טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט טסקט טקסט ",
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    link:"labs2"
  },

]
const RecomendedTabs = ({title,Svg,mainText,link}:recomended)  =>{
  return(
    <a className="Recomendeds-Container" href={link}>
    <Svg className="svg-Icon" role="img" />
    <h6 className="Recomendeds-Title">{title}</h6>
    <p className="Recomendeds-MainText">{mainText}</p>
</a>
  )
}

export default function HomePageRecomended(): JSX.Element {
    return (
      <section>
        <div className='Recomended-Container'>
            <div className='Recomended-Container-Title-Container'>
                <h3 className='Recomended-Container-Title'> מומלצים</h3>
                <h6 style={{padding:'10px'}}>הערכים הכי מומלצים TGI WIKI </h6>
            </div>
            <div className='Recomended-Container-Recomendeds'>
              {recomendedlist.map((props, idx) => (
            <RecomendedTabs key={idx} {...props} />
            ))}
            </div>
 
        </div>
      </section>
    )
  }