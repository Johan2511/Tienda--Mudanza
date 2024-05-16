import React from 'react';
import PropTypes from 'prop-types';
import Button from '../ButtonCall/ButtonCall';
import Form from '../Form/Form';
import ContactForm from '../Form/Form2';

const HeroSection = ({backgroundImage, title, paragraph, buttonText, buttonLink}) => {
  return (
    <section className="body-font bg-cover bg-center relative" style={{backgroundImage: `url(${backgroundImage})`, height:'auto'}}>
      <div className="absolute inset-0 bg-black opacity-35"></div> {/* Superposición semitransparente */}
      <div className="container mx-auto px-5 py-24 lg:flex lg:flex-row flex-col items-center justify-start relative z-10"> {/* Ajuste de clase flex y z-index */}
        <div className="lg:w-1/2 md:w-full w-full lg:pl-24 md:pl-16 flex flex-col md:items-start items-start text-left mb-16 lg:mb-0">
          <h1 className="title-font text-center sm:text-5xl lg:text-6xl text-4xl mb-4 font-bold text-orange-600" style={{textStroke: '1px black', WebkitTextStroke: '1px white'}} >{title}</h1>
          <p className="text-justify mb-6 leading-relaxed font-medium text-base sm:text-2xl text-white">{paragraph}</p>
          <Button link={buttonLink} text={buttonText} />
        </div>
        <div className="lg:w-1/2 lg:justify-end">
          {/* <Form /> */}
          < ContactForm />
        </div>
      </div>
    </section>
  );
};

HeroSection.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired
};

export default HeroSection;


