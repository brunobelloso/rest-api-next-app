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
      <Entradas/>
      <Footer />
    </div>
  );
};

export default Page;
