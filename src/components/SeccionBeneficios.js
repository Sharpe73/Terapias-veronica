import React from "react";

function SeccionBeneficios() {
  const beneficios = [
    {
      icono: "💪",
      titulo: "Alivio muscular",
      descripcion: "Disminuye la tensión y relaja las fibras musculares.",
    },
    {
      icono: "❤️",
      titulo: "Mejora circulación",
      descripcion: "Favorece el flujo sanguíneo y oxigenación celular.",
    },
    {
      icono: "🧘",
      titulo: "Reduce el estrés",
      descripcion: "Contribuye al equilibrio emocional y mental.",
    },
    {
      icono: "🧠",
      titulo: "Bienestar emocional",
      descripcion: "Ayuda a equilibrar la mente y las emociones.",
    },
    {
      icono: "😴",
      titulo: "Mejor descanso",
      descripcion: "Favorece el sueño profundo y la claridad mental.",
    },
  ];

  return (
    <section className="bg-white py-12 px-4 text-center">
      <h2 className="text-2xl font-semibold text-purple-700 mb-4">
        ¿No sabes qué masaje elegir?
      </h2>
      <p className="text-gray-600 text-base mb-10 max-w-2xl mx-auto">
        Todos los masajes tienen beneficios únicos para tu bienestar físico y mental.
        Estoy aquí para ayudarte a encontrar el más adecuado para ti.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {beneficios.map((item, index) => (
          <div
            key={index}
            className="bg-purple-50 p-6 rounded-xl shadow hover:shadow-md transition"
          >
            <div className="text-4xl mb-3">{item.icono}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {item.titulo}
            </h3>
            <p className="text-gray-600 text-sm">{item.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SeccionBeneficios;
