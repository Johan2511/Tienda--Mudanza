import Navbar from "../../components/Navbar/Navbar"
import Header from "../../components/Header/Header"
import Services from "../../components/Services/Services"
import Testimonials from "../../components/Testimonial/Testimonials"

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Services />
            <Testimonials />
        </div>
    ) 
}

export default Home