import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomePageHeader from '../components/HomepageFeatures/HomePageHeader';
import HomepageLastValues from '../components/HomepageFeatures/HomepageFeatures';
import HomePageRecomended from '../components/HomepageFeatures/HomePageRecomended'; 


export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
    title={`${siteConfig.title} | המקום הכי ישראלי ברשת`}
    description="כל המדריכים והמידע במקום אחד, בואו ללמוד על הקהילה שלנו">
      <HomePageHeader  />
      <main >

      </main>
    </Layout>
  );
}
