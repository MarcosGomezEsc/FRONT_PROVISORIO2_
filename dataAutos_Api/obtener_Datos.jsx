import React, { useState, useContext, useEffect } from "react";
import { AutoContext } from "../contexto/Fetch_Api";

function DataAutos() {
  console.log(AutoContext.Provider.Consumer);
  const { data, loading } = useContext(AutoContext);
  const [autoNames, setAutoNames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Hacer el fetch desde otro archivo JSX o módulo
        const response = await fetchAutoData();
        if (!response.ok) {
          throw new Error("Error al obtener datos");
        }
        const newData = await response.json();

        // Extraer solo los nombres de los autos
        const names = newData.map((item) => item.Marca);
        setAutoNames(names);
      } catch (error) {
        console.error("Error con Fetch:", error);
      }
    };

    fetchData();
  }, []); // Se ejecutará solo una vez al montar el componente

  return (
    <div>
      {/* Contenido principal */}
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <section>
          {/* Renderizar solo los nombres de los autos */}
          {autoNames.length > 0 ? (
            autoNames.map((name, index) => <p key={index}>{name}</p>)
          ) : (
            <p>No se encontraron resultados.</p>
          )}
        </section>
      )}
    </div>
  );
}

export default DataAutos;
