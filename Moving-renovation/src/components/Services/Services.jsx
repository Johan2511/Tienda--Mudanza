import React from 'react';

const Services = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Mudanzas Locales</h3>
            <p className="text-gray-700">Ofrecemos servicio de mudanzas dentro de la ciudad.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Mudanzas Foráneas</h3>
            <p className="text-gray-700">Realizamos mudanzas a otras ciudades y estados.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Acarreos</h3>
            <p className="text-gray-700">Servicio de acarreo para trasladar tus pertenencias.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;