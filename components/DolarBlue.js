import React, { useState, useEffect } from 'react';

const DolarBlue = () => {
  const [dolarBlueData, setDolarBlueData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.bluelytics.com.ar/v2/latest');
        const data = await response.json();
        setDolarBlueData(data.blue);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(console.log('Error al obtener los datos del Dólar Blue. Por favor, inténtalo de nuevo más tarde.'));
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!dolarBlueData) {
    return null; // O podrías retornar un mensaje de carga si lo prefieres.
  }

  return (
    <div className="flex items-center p-4">
      <h1 className="text-2xl font-bold mr-4">Dolar Blue</h1>
      <div className="flex flex-row">
        <p className="font-bold text-green-600 mr-4">Compra ${dolarBlueData.value_buy}</p>
        <p className="font-bold text-red-600 mr-4">Venta ${dolarBlueData.value_sell}</p>
      </div>
    </div>
  );
};

export default DolarBlue;
