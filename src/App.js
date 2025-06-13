import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Servicios from "./Servicios";
import GaleriaCarrusel from "./GaleriaCarrusel";
import FormularioContacto from "./components/FormularioContacto";
import Footer from "./Footer";
import SeccionBeneficios from "./components/SeccionBeneficios";
import SobreMi from "./components/SobreMi";

function App() {
  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  useEffect(() => {
    if (window.location.hash === "#gracias") {
      setMensajeEnviado(true);
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });

      const timer = setTimeout(() => {
        setMensajeEnviado(false);
        window.history.replaceState(null, "", window.location.pathname);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div id="top" className="text-center pt-24 min-h-screen bg-[#fefaf6]">
      <Navbar />

      <h1 className="text-4xl font-bold text-purple-700">Terapias Verónica</h1>
      <p className="mt-4 text-lg text-gray-600">
        Relajación, salud y bienestar a través de terapias profesionales.
      </p>

      <SobreMi />
      <div id="servicios">
        <Servicios />
      </div>
      <SeccionBeneficios />
      <div id="galeria">
        <GaleriaCarrusel />
      </div>

      <div id="contacto">
        <FormularioContacto />
      </div>

      {mensajeEnviado && (
        <div id="gracias" className="my-12 px-4 transition-opacity duration-700 ease-in-out opacity-100">
          <h3 className="text-2xl font-bold text-green-600">¡Gracias por tu mensaje!</h3>
          <p className="text-gray-700 mt-2">Te responderé a la brevedad.</p>
        </div>
      )}

      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
