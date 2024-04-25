import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) {
      // Crea una instancia del mapa y asigna el ID del contenedor del mapa
      const map = L.map('mapid').setView([4.7068738, -74.1221922],25);

      // Añade una capa de mapa base (por ejemplo, OpenStreetMap)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);

      // Añade un marcador
      L.marker([4.7067992, -74.1247584]).addTo(map)
        .bindPopup('Moving_Renovation')
        .openPopup();

      mapRef.current = map;
    }
  }, []);

  return <div 
  id="mapid" 
  style={{ width: '800px', height: '400px', zIndex: 0 }} />;
};

export default Map;
