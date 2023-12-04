import React from "react";

// Componente que recibe los datos como prop
const DataAutos = ({ data }) => {
  return (
    <div>
      <h2>Datos de Autos</h2>
      <ul>
        {data.map((auto, index) => (
          <li key={index}>
            {auto.id}
            <h3>
              {auto.Marca} - {auto.Modelo}
            </h3>
            <p>Año: {auto.Anio}</p>
            <p>Color: {auto.Color}</p>
            <p>Precio: {auto.Precio}</p>
            {/* Agrega más detalles según tus necesidades */}
            <img
              src={auto.Imagen}
              alt={`Imagen de ${auto.Marca} ${auto.Modelo}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataAutos;
