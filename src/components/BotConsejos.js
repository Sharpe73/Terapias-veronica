import React, { useState, useEffect } from "react";

const consejos = [
  "💆‍♀️ Tómate 10 minutos al día para respirar profundo y relajar tu cuerpo.",
  "🧘‍♀️ Un masaje a la semana puede ayudarte a dormir mejor y reducir el estrés.",
  "💜 Hidratarte bien antes y después de un masaje mejora sus beneficios.",
  "🕯️ Crear un ambiente tranquilo en casa potencia los efectos del masaje.",
  "🌿 Los aceites esenciales pueden aumentar la relajación. ¡Pruébalos!"
];

function BotConsejos() {
  const [visible, setVisible] = useState(true);
  const [consejo, setConsejo] = useState("");

  useEffect(() => {
    const random = Math.floor(Math.random() * consejos.length);
    setConsejo(consejos[random]);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-4 max-w-xs bg-white border border-gray-300 rounded-lg shadow-lg p-4 z-50 text-sm text-gray-800">
      <div className="flex justify-between items-start mb-2">
        <strong className="text-purple-700">Consejo del día</strong>
        <button
          onClick={() => setVisible(false)}
          className="text-gray-400 hover:text-gray-700 text-xs"
        >
          ✖
        </button>
      </div>
      <p>{consejo}</p>
    </div>
  );
}

export default BotConsejos;
