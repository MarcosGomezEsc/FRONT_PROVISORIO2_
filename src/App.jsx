import React, { useEffect, useState } from "react";
import DataAutos from "../dataAutos_Api/obtener_Datos";

const API_URL = "http://app-cdec4268-b88f-4f69-9360-f867ec600cc0.cleverapps.io";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}`);
        if (!response.ok) {
          throw new Error(`Error al obtener datos: ${response.statusText}`);
        }
        const newData = await response.json();

        setData(newData);
      } catch (error) {
        console.error("Error con Fetch:", error.message);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  // Sin dependencias, se ejecutará una vez al montar el componente

  return (
    <div>
      <h1>Mi Aplicación</h1>
      {loading ? <p>Cargando...</p> : <DataAutos data={data} />}
    </div>
  );
}

export default App;
