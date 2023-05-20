import About from "../About/About";
import CategoryTab from "../CategoryTab/CategoryTab";
import Gallery from "../Gallery/Gallery";
import HeroSection from "../HeroSection/HeroSection";


const Home = () => {
    return (
        <>
            <HeroSection></HeroSection>
            <Gallery></Gallery>
            <CategoryTab></CategoryTab>
            <About></About>
            
        </>
    );
};

export default Home;