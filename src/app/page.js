import Header from "./components/Header"
import Footer from "./components/Footer";
import MainSection from "./components/MainSection"
import SubNavBar from "./components/SubNavBar";
import DealsSection from "./components/DealsSection";
import HomeOutdoorSection from "./components/HomeOutdoorSection";
import Consumer from "./components/Consumer";
import Supplier from "./components/Supplier"
import RecommendationItems from "./components/RecommendationItems";
import Service from "./components/Service";
import Region from "./components/Region";
import Email from "./components/Email";


export default function home(){
    return(
        <div>
            <Header/>
            <SubNavBar/>
            <MainSection/>
            <DealsSection/>
            <HomeOutdoorSection/>
            <Consumer/>
            <Supplier/>
            <RecommendationItems/>
            <Service/>
            <Region/>
            <Email/>
            <Footer/>
        </div>
    );
}
