import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import LocationList from '../LocationList/LocationList';
import Map from '../Map/Map';

const ContactSection = () => {
  const locations = [
    'Atlanta, GA',
    'Buckhead, GA',
    'Brookhaven, GA',
    'Chamblee, GA',
    'Fayetteville, GA',
    'Sandy Springs, GA',
    'Norcross, GA',
    'Duluth, GA',
    'Roswell, GA',
    'Marietta, GA',
    'Alpharetta, GA',
    'Kennesaw, GA',
    'Vinings, GA',
    'Johns Creek, GA',
    'Peachtree City, GA',
    'Newnan, GA'
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2  overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <Map />
        </div>
        <div className="lg:w-1/3 md:w-120 mx-auto">
          <LocationList
            locations={locations}
            title="AREAS WE SERVE"
            description="WE SERVICE THE ENTIRE STATE OF GEORGIA"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

