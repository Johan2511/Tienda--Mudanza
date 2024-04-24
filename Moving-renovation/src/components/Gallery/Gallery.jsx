import React from 'react';

const GallerySection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
        </div>
        <div className="flex flex-wrap -m-4">
          {/* Gallery items */}
          {/* You can map over your image data here to generate gallery items */}
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex flex-col h-full border-4 border-gray-200 bg-white">
              <img alt="gallery" className="w-full h-full object-cover object-center" src="https://dummyimage.com/600x360" />
              <div className="p-8">
                <h2 className="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">THE SUBTITLE</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex flex-col h-full border-4 border-gray-200 bg-white">
              <img alt="gallery" className="w-full h-full object-cover object-center" src="https://dummyimage.com/600x360" />
              <div className="p-8">
                <h2 className="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">THE SUBTITLE</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex flex-col h-full border-4 border-gray-200 bg-white">
              <img alt="gallery" className="w-full h-full object-cover object-center" src="https://dummyimage.com/600x360" />
              <div className="p-8">
                <h2 className="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">THE SUBTITLE</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
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
