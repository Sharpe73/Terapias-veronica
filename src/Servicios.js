import React from "react";

const servicios = [
  {
    id: "masaje-relajante",
    nombre: "Masaje Relajante",
    precio: "$20.000",
    imagen: "/imagenes/relajante.jfif",
    descripcion:
      "Ideal para reducir el estrés y la tensión acumulada. Técnica suave, con aceites aromáticos.",
  },
  {
    id: "masaje-descontracturante",
    nombre: "Descontracturante",
    precio: "$20.000 (1 hora)",
    imagen: "/imagenes/descontracturante.jfif",
    descripcion: `El masaje descontracturante sirve para soltar las fibras que forman al músculo y que al entrecruzarse producen contracción muscular, abultamiento y dolor.

Beneficios del masaje descontracturante:
🌿 Aumenta flujo sanguíneo.
🌿 Disminuye el dolor.
🌿 Relaja el cuerpo.
🌿 Elimina el estrés.
🌿 Acelera la reparación de los tejidos.
🌿 Evita la formación de focos inflamatorios.
🌿 Facilita la recuperación de la movilidad.`,
  },
  {
    id: "masaje-piedras",
    nombre: "Masaje con Piedras Calientes",
    precio: "$30.000",
    imagen: "/imagenes/piedras.jfif",
    descripcion:
      "Terapia con piedras volcánicas calientes para relajar músculos, mejorar circulación y armonizar cuerpo y mente.",
  },
  {
    id: "masaje-champi",
    nombre: "Masaje Hindú Ayurvédico y Champi",
    precio: "$20.000 (1 hora)",
    imagen: "/imagenes/champi.jpeg",
    descripcion: `Elimina toxinas musculares. Alivia tortícolis, mejora circulación y relaja cuello y hombros.
Estimula el sistema nervioso, promueve el crecimiento del cabello, alivia dolores de cabeza, estrés emocional y mental.
Ayuda con problemas oculares, insomnio, irritabilidad y más.

🌿 Recomendado para: Bruxismo, sinusitis, migrañas, zumbido de oídos, insomnio, ansiedad, angustia, depresión, falta de concentración, bloqueo energético y mental.`,
  },
];

function Servicios() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-purple-700">
        Nuestros Servicios
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {servicios.map((servicio, index) => (
          <div
            key={index}
            id={servicio.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition flex flex-col justify-between"
          >
            <img
              src={servicio.imagen}
              alt={servicio.nombre}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {servicio.nombre}
                </h3>
                <p className="text-sm text-gray-600 whitespace-pre-line mb-4">
                  {servicio.descripcion}
                </p>
                <p className="text-purple-600 font-bold text-lg mb-4">
                  {servicio.precio}
                </p>
              </div>
              <a
                href={`https://wa.me/56979854465?text=Hola, quisiera más información sobre el servicio de ${encodeURIComponent(
                  servicio.nombre
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-full shadow transition"
              >
                <span className="mr-2">💬</span> Consultar por WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Servicios;
