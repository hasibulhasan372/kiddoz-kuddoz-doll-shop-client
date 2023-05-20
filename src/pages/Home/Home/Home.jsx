import About from "../About/About";
import CategoryTab from "../CategoryTab/CategoryTab";
import CustomerFeedback from "../CustomerFeedback/CustomerFeedback";
import Gallery from "../Gallery/Gallery";
import HeroSection from "../HeroSection/HeroSection";


const Home = () => {
    return (
        <>
            <HeroSection></HeroSection>
            <Gallery></Gallery>
            <CategoryTab></CategoryTab>
            <About></About>
            <CustomerFeedback></CustomerFeedback>
            
        </>
    );
};

export default Home;