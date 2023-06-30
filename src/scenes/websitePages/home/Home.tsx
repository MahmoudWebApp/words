import LandingPage from './landingPage';
import WhyWord from './whyWords';
import OurBooks from './ourBooks';
import AboutUs from './aboutUs';
import OurLearning from './ourLearning';
import MediaLibrary from './mediaLibrary';
import LatestNews from './latestNews';
import Testimonials from './testimonials';


const Home = () => {

  return (
    <div >
  
        <LandingPage />
        <WhyWord />
        <OurBooks />
        <AboutUs  />
        <OurLearning />
        <MediaLibrary />
        <LatestNews />
        <Testimonials />
  
    </div>
  )
}

export default Home