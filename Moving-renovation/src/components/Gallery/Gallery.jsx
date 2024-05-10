import React from 'react';
import nosotrosimg from '../../assets/nosotros.webp';
import nosotros2img from '../../assets/nosotros2.webp';
import nosotros3img from '../../assets/nosotros3.webp';

const GallerySection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="title-animation title-font text-center sm:text-5xl lg:text-7xl text-3xl mb-4 font-extrabold text-orange-600">WHY CHOOSE MOVING_RENOVATION</h2>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">There is no one you can trust like the crew at Moving_Renovation. With a team of professional, trustworthy and clean-cut young men, we provide a dependable and stress-free experience from point A to point B.</p>
        </div>
        <div className="flex flex-wrap -m-4">
          {/* Gallery items */}
          {/* You can map over your image data here to generate gallery items */}
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex flex-col h-full border-4 border-gray-200 bg-white">
              <picture>
                <source srcSet={nosotrosimg} type='nosotros/webp' />
                <img alt="gallery" className="w-full h-full object-cover object-center" src={nosotrosimg} />
              </picture>
              <div className="p-8">
                <h2 className="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">CUSTOMER SERVICE</h2>
                <p className="leading-relaxed">Our main goal is to provide you with a stress-free journey. We guarantee that our movers will do everything in their power to complete your move quickly and efficiently.</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex flex-col h-full border-4 border-gray-200 bg-white">
              <picture>
                <source srcSet={nosotros2img} type='nosotros2/webp' />
                <img alt="gallery" className="w-full h-full object-cover object-center" src={nosotros2img} />
              </picture>
              <div className="p-8">
                <h2 className="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">PAYMENT</h2>
                <p className="leading-relaxed">You only pay for the minutes our moving helpers work. This means that you will not be required to pay on the day of your move. There are no hidden costs.</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex flex-col h-full border-4 border-gray-200 bg-white">
              <picture>
                <source srcSet={nosotros3img} type='nosotros3/webp' />
                <img alt="gallery" className="w-full h-full object-cover object-center" src={nosotros3img} />
              </picture>
              <div className="p-8">
                <h2 className="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">COMMUNICATION</h2>
                <p className="leading-relaxed">We send confirmation messages via text and email to verify your moving time, moving date, and hourly rates. Additionally, we'll give you a call when the crew is on its way.</p>
              </div>
            </div>
          </div>
          {/* End of Gallery items */}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
