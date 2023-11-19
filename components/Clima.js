import React, { useState, useEffect } from 'react';

const Clima = () => {
  const [clima, setClima] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerClimaPorGeolocalizacion = async () => {
      try {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(async (position) => {
            const apiKey = "a0601791bc2f64d020653ec50196131f";

            const respuesta = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`
            );

            if (respuesta.ok) {
              const datos = await respuesta.json();
              setClima({
                temperatura: datos.main.temp,
                ciudad: datos.name,
              });
            } else {
              setError('Error al obtener el clima');
              console.error('Error al obtener el clima');
            }
          });
        } else {
          setError('Geolocalización no es compatible en este navegador.');
          console.error('Geolocalización no es compatible en este navegador.');
        }
      } catch (error) {
        setError('Error en la solicitud.');
        console.error('Error en la solicitud:', error);
      }
    };

    obtenerClimaPorGeolocalizacion();
  }, []);

  return (
    <div className="p-4">
      {error && <p className="text-red-500">{error}</p>}
      {clima !== null && (
        <p className="text-2xl font-bold mr-4">{`${clima.temperatura.toFixed(1)}°C (${clima.ciudad})`}</p>
      )}
    </div>
  );
};

export default Clima;
