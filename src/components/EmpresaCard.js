import React from 'react';

const EmpresaCard = ({ name, description, imageUrl }) => {
  return (
    <div className="bg-secondary rounded-lg p-5 m-2 shadow-lg transition-transform transform hover:scale-105">
      <img src={imageUrl} alt={name} className="w-full h-auto rounded-lg" />
      <h3 className="text-lg font-semibold text-dominant">{name}</h3>
      <p className="text-gray-700">{description}</p>
      <button className="bg-dominant text-white py-2 px-4 rounded mt-2 hover:bg-saddle-brown">
        Ver Detalhes
      </button>
    </div>
  );
};

export default EmpresaCard;
