"use client";
import Navbar from "../components/Navbar";
import DolarBlue from '../components/DolarBlue';
import Clima from "../components/Clima";
import Footer from '../components/Footer';
import Entradas from "../components/Entradas";

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="md:flex md:justify-center mt-2">
        <DolarBlue className="md:mr-4" /> {/* Margen a la derecha en resoluciones mayores */}
        <Clima className="md:ml-4 mt-4 md:mt-0" /> {/* Margen a la izquierda en resoluciones mayores */}
      </div>
      <div className="grid">
        <Entradas />
        <Entradas />
      </div>
      <div className="h-24"></div>
      <Footer />
    </div>
  );
};

export default Page;
