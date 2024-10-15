import Footerr from "../components/Footerr";
import HomeCarousel from "../components/HomeCarousel";
import HomeHeader from "../components/HomeHeader";
import HomeIntroduce from "../components/HomeIntroduce";
import HomeIntroduce2 from "../components/HomeIntroduce2";
import HomeJourney from "../components/HomeJourney";
const Home =()=>{
    return(
        <div>
            <HomeHeader/>
            <HomeCarousel/>
            <HomeIntroduce/>
            <HomeIntroduce2/>
            <HomeJourney/>
            <Footerr></Footerr>
        </div>
    );
};

export default Home;