import Navbar from "../../components/Navbar/Navbar"
import Header from "../../components/Header/Header"
import HeroSection from "../../components/Hero/Hero"
import GallerySection from "../../components/Gallery/Gallery"
import Testimonials from "../../components/Testimonial/Testimonials"
import ContactSection from "../../components/ContactSection/ContactSection"
import Footer from "../../components/Footer/Footer"
import HeroImg from "../../assets/Moving_renovation_Hero.png"

const Home = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <HeroSection
            backgroundImage={HeroImg}
            title="Atlanta's Spotless Moving Company"
            paragraph="We take maintaining our reputation very seriously by ensuring that all our customers enjoy a smooth and hassle-free moving process, and you can trust that our team will work tirelessly to ensure it is completed with the utmost professionalism."
            buttonText="Call Us Now At 678-973-3935"
            buttonLink="tel:6789733935" 
            />
            <GallerySection />
            <Testimonials />
            <ContactSection />
            {/* <Map /> */}
            <Footer />
        </div>
    ) 
}

export default Home