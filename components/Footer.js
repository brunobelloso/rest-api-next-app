// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center fixed bottom-0 w-full">
      {/* Contenido del pie de página con un enlace a LinkedIn */}
      <p className="text-sm">
        © 2023 Hecho por{' '}
        <a
          href="https://www.linkedin.com/in/bruno-belloso-a20592242/"
          className="text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bruno Belloso
        </a>
        . Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
