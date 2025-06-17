import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaSpa } from "react-icons/fa";

function Consulta() {
  const [mostrarConsulta, setMostrarConsulta] = useState(false);

  return (
    <section
      className="bg-gradient-to-b from-purple-50 via-white to-purple-50 py-16 px-4"
      id="consulta"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Separador decorativo */}
        <hr className="w-16 border-t-2 border-purple-300 mx-auto mb-4" />

        {/* Frase inspiradora */}
        <p className="text-purple-800 italic text-lg mb-6">
          “Tu cuerpo escucha todo lo que dice tu mente. Regálale paz.”
        </p>

        {/* Botón desplegable */}
        <button
          onClick={() => setMostrarConsulta(!mostrarConsulta)}
          className="flex items-center justify-center mx-auto mb-10 px-6 py-3 bg-purple-600 text-white font-semibold rounded-full shadow-lg hover:bg-purple-700 transition duration-300"
        >
          <FaSpa className="mr-2" />
          Nuestra Consulta
          {mostrarConsulta ? (
            <FaChevronUp className="ml-2" />
          ) : (
            <FaChevronDown className="ml-2" />
          )}
        </button>

        {/* Contenido expandible */}
        {mostrarConsulta && (
          <div className="transition-all duration-500 ease-in-out">
            <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
              Un espacio cálido y profesional pensado para tu bienestar.
              Aromaterapia, camilla confortable y un ambiente de relajación total
              para que vivas una experiencia única.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <img
                src="/imagenes/consulta1.jfif"
                alt="Consulta Terapias Verónica"
                className="w-[300px] rounded-xl shadow-md object-cover"
              />
              <img
                src="/imagenes/consulta2.jfif"
                alt="Sala de Terapias Verónica"
                className="w-[300px] rounded-xl shadow-md object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Consulta;
