import Navbar from "../../components/Navbar/Navbar"
import Header from "../../components/Header/Header"
import HeroSection from "../../components/Hero/Hero"
import GallerySection from "../../components/Gallery/Gallery"
import Testimonials from "../../components/Testimonial/Testimonials"
import ContactSection from "../../components/ContactSection/ContactSection"
import LocationList from '../../components/LocationList/LocationList'
import Information from "../../components/Information/Information"
import Footer from "../../components/Footer/Footer"
import HeroImg from "../../assets/Moving_renovation_Hero.png"
import HeroI from "../../assets/Hero.jpg"
import MovingVideo from "../../assets/Moving_Renovation_video.mp4"
import Service from "../../components/Service/Service"

const Home = () => {

    const locations = [
        'Atlanta, GA',
        'Buckhead, GA',
        'Brookhaven, GA',
        'Chamblee, GA',
        'Fayetteville, GA',
        'Sandy Springs, GA',
        'Norcross, GA',
        'Duluth, GA',
        'Roswell, GA',
        'Marietta, GA',
        'Alpharetta, GA',
        'Kennesaw, GA',
        'Vinings, GA',
        'Johns Creek, GA',
        'Peachtree City, GA',
        'Newnan, GA'
      ];
    return (
        <div>
            <Header />
            <Navbar />
            <HeroSection
            backgroundImage={HeroI}
            title="Atlanta's Spotless Moving Company"
            paragraph="We take maintaining our reputation very seriously by ensuring that all our customers enjoy a smooth and hassle-free moving process, and you can trust that our team will work tirelessly to ensure it is completed with the utmost professionalism."
            buttonText="Call Us Now At 678-973-3935"
            buttonLink="tel:6789733935" 
            />
            <GallerySection />
            <Information 
            mediaContent={MovingVideo}
            title='BEST RESIDENTIAL MOVERS IN ATLANTA'
            paragraph='As Georgia’s #1 rated residential and local moving company there is no one else you should trust to handle your next move. Our team will properly pad and wrap all major furniture items, treating your belongings with care. Whether you are moving across town or across the state - Falcon Moving is the company you can trust to get your belongings safely from point A to B.
            Our team is experienced, efficient and friendly. Moving can be a stressful time, let us help make it easier. Give us a call or use the convenience of online booking!'
            buttonText="Call Us Now At 678-973-3935"
            buttonLink="tel:6789733935"
            mediaType="video" />
            <Service />
            <Testimonials />
            <ContactSection>
                <LocationList
                locations={locations}
                title="AREAS WE SERVE"
                description="WE SERVICE THE ENTIRE STATE OF GEORGIA"
                />
            </ContactSection>
                
            <Footer />
        </div>
    ) 
}

export default Home