import React from 'react';
import { Link } from 'react-router-dom';
import { PiHouseLineDuotone, PiBuildingApartmentDuotone,PiArmchair } from "react-icons/pi";
import { RiTruckLine } from "react-icons/ri";
import { FaMapMarkedAlt, FaTruckLoading } from "react-icons/fa";
import { FaBoxesPacking } from "react-icons/fa6";

const servicesData = [
  {
    title: 'Residential Moving',
    description: 'Servicio de mudanza residencial.',
    slug: 'residential-moving',
    icon: PiHouseLineDuotone
  },
  {
    title: 'Apartment Moving',
    description: 'Servicio de mudanza de apartamentos.',
    slug: 'apartment-moving',
    icon: PiBuildingApartmentDuotone
  },
  {
    title: 'Commercial Moving',
    description: 'Servicio de mudanza comercial.',
    slug: 'commercial-moving',
    icon: RiTruckLine
  },
  {
    title: 'Long Distance Moving',
    description: 'Servicio de mudanza de larga distancia.',
    slug: 'long-distance-moving',
    icon: FaMapMarkedAlt
  },
  {
    title: 'Furniture Assembly Moving',
    description: 'Servicio de montaje de muebles y mudanzas.',
    slug: 'furniture-assembly-moving',
    icon: PiArmchair
  },
  {
    title: 'Item Loading',
    description: 'Servicio de carga de artículos.',
    slug: 'item-loading',
    icon: FaTruckLoading
  },
  {
    title: 'Packing / Unpacking',
    description: 'Servicio de embalaje y desembalaje.',
    slug: 'packing-unpacking',
    icon: FaBoxesPacking
  }
];

const Service = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map(service => (
            <Link key={service.slug} to={`/services/${service.slug}`}>
              <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
                <service.icon className="text-4xl text-gray-500 mr-2" style={{ color: 'orange' }} />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;

