import React from 'react';
import Map from '../Map/Map';

const ContactSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2  overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <Map />
        </div>
        
        
      </div>
    </section>
  );
};

export default ContactSection;
