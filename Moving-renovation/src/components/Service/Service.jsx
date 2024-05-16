import React from 'react';
import { Link } from 'react-router-dom';
import { PiHouseLineDuotone, PiBuildingApartmentDuotone,PiArmchair } from "react-icons/pi";
import { RiTruckLine } from "react-icons/ri";
import { FaMapMarkedAlt, FaTruckLoading } from "react-icons/fa";
import { FaBoxesPacking } from "react-icons/fa6";

const servicesData = [
  {
    title: 'Residential Moving',
    description: 'Residential moving service.',
    slug: '/my-service/residential',
    icon: PiHouseLineDuotone
  },
  {
    title: 'Apartment Moving',
    description: 'Apartment moving service.',
    slug: 'apartment-moving',
    icon: PiBuildingApartmentDuotone
  },
  {
    title: 'Commercial Moving',
    description: 'Commercial moving service.',
    slug: 'commercial-moving',
    icon: RiTruckLine
  },
  {
    title: 'Long Distance Moving',
    description: 'Long-distance moving service.',
    slug: 'long-distance-moving',
    icon: FaMapMarkedAlt
  },
  {
    title: 'Furniture Assembly Moving',
    description: 'Furniture assembly and moving service.',
    slug: 'furniture-assembly-moving',
    icon: PiArmchair
  },
  {
    title: 'Item Loading',
    description: 'Loading service.',
    slug: 'item-loading',
    icon: FaTruckLoading
  },
  {
    title: 'Packing / Unpacking',
    description: 'Packing and unpacking service.',
    slug: 'packing-unpacking',
    icon: FaBoxesPacking
  }
];

const Service = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto text-center">
        <h2 className="lg:text-6xl text-4xl text-orange-400 font-semibold mb-4">OUR SERVICE</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map(service => (
            <Link key={service.slug} to={`${service.slug}`}>
              <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
                <service.icon className="text-6xl text-gray-500 mr-2" style={{ color: 'orange' }} />
                <div>
                  <h3 className="text-3xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-1xl text-gray-700">{service.description}</p>
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

