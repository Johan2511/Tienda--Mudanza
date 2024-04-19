import Navbar from "../../components/Navbar/Navbar"
import Header from "../../components/Header/Header"
import HeroSection from "../../components/Hero/Hero"
import GallerySection from "../../components/Gallery/Gallery"
import Testimonials from "../../components/Testimonial/Testimonials"
import Footer from "../../components/Footer/Footer"

const Home = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <HeroSection />
            <GallerySection />
            <Testimonials />
            <Footer />
        </div>
    ) 
}

export default Home