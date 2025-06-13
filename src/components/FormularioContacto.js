import React from "react";

function FormularioContacto() {
  return (
    <section
      id="formulario"
      className="max-w-lg mx-auto my-12 mb-24 px-6 py-10 bg-white shadow-lg rounded-xl"
    >
      <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">
        Contáctame
      </h2>
      <form
        action="https://formsubmit.co/veritohermosillac@gmail.com"
        method="POST"
        className="space-y-4"
      >
        <div>
          <label
            htmlFor="nombre"
            className="block text-left font-medium text-gray-700"
          >
            Nombre
          </label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            placeholder="Tu nombre"
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-left font-medium text-gray-700"
          >
            Correo electrónico
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="tucorreo@ejemplo.com"
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div>
          <label
            htmlFor="mensaje"
            className="block text-left font-medium text-gray-700"
          >
            Mensaje
          </label>
          <textarea
            name="mensaje"
            id="mensaje"
            rows="5"
            placeholder="Escribe tu mensaje..."
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          ></textarea>
        </div>

        
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://terapias-veronica.vercel.app/#gracias" />

        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 active:bg-purple-800 text-white font-semibold px-6 py-2 rounded-full transition w-full flex items-center justify-center gap-2"
        >
          <span>Enviar mensaje</span> <span>📩</span>
        </button>
      </form>
    </section>
  );
}

export default FormularioContacto;
