// App.jsx
import React from "react";
import DataAutos from "../dataAutos_Api/obtener_Datos"; // Ajusta la ruta según la ubicación de DataAutos.jsx

function App() {
  return (
    <div>
      {/* Otras partes de tu aplicación */}
      <DataAutos />
    </div>
  );
}

export default App;
