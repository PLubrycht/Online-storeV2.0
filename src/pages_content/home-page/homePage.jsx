import './HomePage.css'
import HomePageHeroSection from './sections/HomePage-Hero-Section/HomePageHeroSection'; 
import HomePageSection1 from './sections/HomePage-Section1/HomePageSection1';   


function HomePage (){
    return(
    <div>
        <HomePageHeroSection></HomePageHeroSection>
        <HomePageSection1></HomePageSection1>
    </div>
    );
}
export default HomePage