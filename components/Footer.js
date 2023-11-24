// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="inset-x-0 bottom-0 h-16 bg-gray-800 mt-auto text-white p-4 text-center w-full">
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
