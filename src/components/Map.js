// src/components/Map.js
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Defina o ícone do marcador
const icon = new L.Icon({
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const Map = () => {
  const position = [-15.8281, -48.9522]; // Coordenadas de Pirenópolis, Goiás

  const [filter, setFilter] = useState('all'); // Estado para o filtro

  const markers = [
    { position: [-15.8281, -48.9522], type: 'cachoeira', name: 'Cachoeira 1' },
    { position: [-15.8300, -48.9500], type: 'restaurante', name: 'Restaurante Parceiro' },
    // Adicione mais marcadores conforme necessário
  ];

  return (
    <div>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="all">Todos</option>
        <option value="cachoeira">Cachoeiras</option>
        <option value="restaurante">Restaurantes</option>
      </select>
      <MapContainer center={position} zoom={13} style={{ height: "400px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {markers
          .filter(marker => filter === 'all' || marker.type === filter)
          .map((marker, index) => (
            <Marker key={index} position={marker.position} icon={icon}>
              <Popup>{marker.name}</Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  );
};

export default Map;
