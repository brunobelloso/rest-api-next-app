"use client";
import Navbar from "../components/Navbar";
import DolarBlue from '../components/DolarBlue';
import Clima from "../components/Clima";
import Footer from '../components/Footer';
import Entradas from "../components/Entradas";

const Page = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center mt-4">
      <DolarBlue />
      <Clima/>
      </div>
      <div className="grid">
      <Entradas/>
      <Entradas/>
      </div>
      <div className="h-24"></div>
      <Footer />
    </div>
  );
};

export default Page;
