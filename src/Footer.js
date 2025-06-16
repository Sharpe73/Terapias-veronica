import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaMoneyBillWave,
  FaExchangeAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-purple-700 text-white py-6 mt-16">
      <div className="max-w-xl mx-auto px-4 text-center">
        <h3 className="text-2xl font-bold mb-4">Contacto</h3>
        <p className="mb-2 text-lg">
          📍 Atención en <strong>Las Condes, Santiago</strong>
        </p>
        <p className="mb-2">
          📞 WhatsApp:{" "}
          <a href="https://wa.me/56979854465" className="underline">
            +56&nbsp;9&nbsp;7985&nbsp;4465
          </a>
        </p>
        <p className="mb-4">
          📧 Email:{" "}
          <a href="mailto:veritohermosillac@gmail.com" className="underline">
            veritohermosillac@gmail.com
          </a>
        </p>

        <div className="flex justify-center gap-6 text-xl mt-6">
          <a
            href="https:/facebook.com/Reimausui"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-200 transform hover:scale-110 hover:text-purple-300"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-200 transform hover:scale-110 hover:text-purple-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/56979854465"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-200 transform hover:scale-110 hover:text-purple-300"
          >
            <FaWhatsapp />
          </a>
        </div>

        <div className="flex justify-center items-center gap-2 mt-6 text-sm text-gray-300">
          <FaMoneyBillWave className="text-green-300 text-lg" />
          <FaExchangeAlt className="text-white text-lg" />
          <span>Aceptamos pagos en efectivo o transferencia bancaria.</span>
        </div>

        <p className="text-sm mt-2 text-gray-300">
          &copy; {new Date().getFullYear()} Terapias Verónica. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
