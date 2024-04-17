import React from 'react';

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Testimonios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700">¡Mudanzas Express hizo que mi mudanza fuera muy fácil y rápida!</p>
            <p className="text-gray-500">- Juan Pérez</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700">Estoy muy contenta con el servicio, ¡altamente recomendado!</p>
            <p className="text-gray-500">- María González</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700">Profesionales y cuidadosos con mis pertenencias, ¡gracias!</p>
            <p className="text-gray-500">- Roberto Ramírez</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
