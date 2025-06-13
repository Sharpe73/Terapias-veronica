import React, { useState } from "react";

function SobreMi() {
  const [verMas, setVerMas] = useState(false);

  return (
    <section className="max-w-4xl mx-auto py-12 px-6 text-center">
      <h2 className="text-2xl font-semibold text-purple-700 mb-4">Sobre mí</h2>

      {!verMas ? (
        <button
          onClick={() => setVerMas(true)}
          className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-2 rounded-full shadow-md transition"
        >
          Ver más sobre Verónica
        </button>
      ) : (
        <div
          className="bg-[#fef7fb] p-6 mt-4 rounded-2xl shadow-md text-gray-700 border-l-4 border-purple-300 transition-all duration-500 ease-in-out"
        >
          <div className="text-3xl mb-2">💆🏻‍♀️</div>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            Soy <strong>Verónica Hermosilla C.</strong>, terapeuta especializada en{" "}
            <strong>masaje hindú champi</strong> y <strong>ayurvédico</strong>, con
            formación complementaria en <strong>masaje descontracturante</strong> y{" "}
            <strong>moxibustión</strong>, una antigua terapia china que busca equilibrar
            cuerpo y mente.
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            Cuento con más de <strong>10 años de experiencia</strong> ayudando a las personas a
            recuperar su bienestar físico, mental y emocional. Cada sesión es una experiencia
            única, donde aplico técnicas personalizadas para liberar tensiones, aliviar dolencias
            y fomentar una profunda relajación.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            Mi compromiso es ofrecerte un espacio seguro, respetuoso y lleno de armonía para que
            conectes contigo mismo/a y restaures tu energía vital.
          </p>
          <button
            onClick={() => setVerMas(false)}
            className="mt-6 text-sm text-purple-600 hover:underline"
          >
            Ocultar información
          </button>
        </div>
      )}
    </section>
  );
}

export default SobreMi;
