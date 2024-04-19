import React from 'react';
import HeroImg from '../../assets/Moving_renovation_Hero.png'
import Button from '../ButtonCall/ButtonCall';

const HeroSection = () => {
  return (
    <section className="text-white body-font bg-cover bg-center" style={{backgroundImage: `url(${HeroImg})`, height:'500px'}}>
      
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-5xl text-4xl mb-4 font-medium text-white">Before they sold out
            <br className="hidden lg:inline-block" />readymade gluten
          </h1>
          <p className="mb-8 leading-relaxed font-semibold">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
          <div className="flex justify-center items-center">
            
          <Button link="tel:6789733935" text="Call Us Now At 678-973-3935" />
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;