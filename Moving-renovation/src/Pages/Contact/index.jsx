import Navbar from "../../components/Navbar/Navbar"
import Header from "../../components/Header/Header"
import HeroSection from "../../components/Hero/Hero"
import ContactSection from "../../components/ContactSection/ContactSection"
import Testimonials from "../../components/Testimonial/Testimonials"
import Footer from "../../components/Footer/Footer"
import HeroImg from "../../assets/Moving_renovation_Hero.png"

const Contact = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <HeroSection
            backgroundImage={HeroImg}
            title="Contact Moving_Renovation"
            paragraph="Once we receive your information, one of our moving experts will get in touch to discuss your upcoming move! We're excited to hear from you!"
            buttonText="Call Us Now At 678-973-3935"
            buttonLink="tel:6789733935"
            />
            <ContactSection />
            <Testimonials />
            <Footer />
        </div>
    ) 
}

export default Contact