import React from 'react';
import PropTypes from 'prop-types';
import Button from '../ButtonCall/ButtonCall';
import Form from '../Form/Form';

const HeroSection = ({backgroundImage, title, paragraph, buttonText, buttonLink}) => {
  return (
    <section className="text-white body-font bg-cover bg-center" style={{backgroundImage: `url(${backgroundImage})`, height:'auto'}}>
      <div className="container mx-auto px-5 py-24 lg:flex lg:flex-row flex-col items-center justify-start"> {/* Ajuste de clase flex */}
        <div className="lg:w-1/2 md:w-full w-full lg:pl-24 md:pl-16 flex flex-col md:items-start items-start text-left mb-16 lg:mb-0">
          <h1 className="title-font sm:text-4xl lg:text-5xl text-3xl mb-4 font-bold text-orange-600" style={{textStroke: '1px black', WebkitTextStroke: '1.5px black'}} >{title}</h1>
          <p className="mb-6 leading-relaxed font-semibold text-base">{paragraph}</p>
          <Button link={buttonLink} text={buttonText} />
        </div>
        <div className="lg:w-1/2 lg:justify-end">
          <Form />
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

