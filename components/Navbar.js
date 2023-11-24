import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMenuHovered, setMenuHovered] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        <button
          className={`text-white flex items-center focus:outline-none p-2 ${
            isMenuHovered ? "hovered" : ""
          }`}
          onClick={toggleMenu}
          onMouseEnter={() => setMenuHovered(true)}
          onMouseLeave={() => setMenuHovered(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className={`h-8 w-8 transition-transform transform ${
              isMenuHovered ? "scale-150" : "scale-125"
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
          <span
            className={`text-xl ml-5 transition-transform ${
              isMenuHovered ? "scale-125" : "scale-100"
            }`}
          >
            MENU
          </span>
        </button>
        <div className="m-auto text-white text-xl pr-20 font-semibold">
          <span>Noticias</span>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
          <div className="flex justify-end p-5">
            <button
              className="text-white focus:outline-none m-2 text-2xl"
              onClick={toggleMenu}
            >
              ✕ CERRAR
            </button>
          </div>

          <div className="flex flex-col items-center overflow-y-auto">
            <Link href="/1" className="text-white py-14 ml-5 text-xl scale-150">
              Enlace 1
            </Link>
            <Link href="/2" className="text-white py-14 ml-5 text-xl scale-150">
              Enlace 2
            </Link>
            <Link href="/3" className="text-white py-14 ml-5 text-xl scale-150">
              Enlace 3
            </Link>
            <Link href="/4" className="text-white py-14 ml-5 text-xl scale-150">
              Enlace 4
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
