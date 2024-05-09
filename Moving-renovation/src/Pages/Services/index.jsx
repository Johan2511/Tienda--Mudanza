import React from 'react';
import Navbar from "../../components/Navbar/Navbar"
import Header from "../../components/Header/Header"
import HeroSection from '../../components/Hero/Hero';
import HeroImg from "../../assets/Moving_renovation_Hero.png"
import Service from '../../components/Service/Service';
import Footer from '../../components/Footer/Footer';

const Services = () => {
  return (
    <div>
        <Header />
        <Navbar />
        <HeroSection
        backgroundImage={HeroImg}
        title="Before they sold out readymade gluten"
        paragraph="Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray."
        buttonText="Call Us Now At 678-973-3935"
        buttonLink="tel:6789733935" 
        />
        <Service />
        <Footer />
    </div>
  );
};

export default Services;