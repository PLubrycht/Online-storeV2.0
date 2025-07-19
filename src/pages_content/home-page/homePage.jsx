import './HomePage.css'
import HomePageHeroSection from './sections/HomePage-Hero-Section/HomePageHeroSection'; 
import HomePageSection1 from './sections/HomePage-Section1/HomePageSection1';   
import CaruseleSection from './sections/HomePage-Section2-Carusele/CaruseleSection';

function HomePage (){
    return(
    <div>
        <HomePageHeroSection></HomePageHeroSection>
        <HomePageSection1></HomePageSection1>
        <CaruseleSection></CaruseleSection>
    </div>
    );
}
export default HomePage