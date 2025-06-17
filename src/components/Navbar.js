import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [desktopSubmenuOpen, setDesktopSubmenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
      setSubmenuOpen(false);
      setDesktopSubmenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img
            src="/imagenes/LOGO.jpg"
            alt="Logo Terapias Verónica"
            className="w-10 h-10 rounded-full object-cover"
          />
          <h1 className="text-xl font-bold text-purple-700">Terapias Verónica</h1>
        </div>

        {/* Botón hamburguesa */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-purple-700 focus:outline-none"
        >
          ☰
        </button>

        {/* Menú escritorio */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium relative">
          <li
            className="cursor-pointer hover:text-purple-600 relative"
            onMouseEnter={() => setDesktopSubmenuOpen(true)}
          >
            Nuestros Servicios ▾
            {desktopSubmenuOpen && (
              <ul
                className="absolute left-0 mt-2 bg-white shadow rounded px-4 py-2 space-y-1 z-50 text-purple-700 font-semibold text-sm w-48"
                onMouseLeave={() => setDesktopSubmenuOpen(false)}
              >
                <li
                  className="cursor-pointer hover:text-purple-500"
                  onClick={() => scrollToSection("masaje-relajante")}
                >
                  Masaje Relajante
                </li>
                <li
                  className="cursor-pointer hover:text-purple-500"
                  onClick={() => scrollToSection("masaje-descontracturante")}
                >
                  Descontracturante
                </li>
                <li
                  className="cursor-pointer hover:text-purple-500"
                  onClick={() => scrollToSection("masaje-deportivo")}
                >
                  Deportivo
                </li>
                <li
                  className="cursor-pointer hover:text-purple-500"
                  onClick={() => scrollToSection("masaje-champi")}
                >
                  Hindú Champi
                </li>
                <li
                  className="cursor-pointer hover:text-purple-500"
                  onClick={() => scrollToSection("terapia-feng-shui")}
                >
                  Feng Shui con Imanes
                </li>
              </ul>
            )}
          </li>
          <li
            className="cursor-pointer hover:text-purple-600"
            onClick={() => scrollToSection("galeria")}
          >
            Galería
          </li>
          <li
            className="cursor-pointer hover:text-purple-600"
            onClick={() => scrollToSection("faq")}
          >
            Preguntas Frecuentes
          </li>
          <li
            className="cursor-pointer hover:text-purple-600"
            onClick={() => scrollToSection("footer")}
          >
            Contacto
          </li>
        </ul>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-4 shadow">
          <ul className="space-y-2 text-gray-700 font-medium">
            <li
              className="cursor-pointer hover:text-purple-600"
              onClick={() => setSubmenuOpen(!submenuOpen)}
            >
              Nuestros Servicios ▾
            </li>
            {submenuOpen && (
              <ul className="ml-4 space-y-1 text-sm text-gray-600">
                <li
                  className="cursor-pointer hover:text-purple-500"
                  onClick={() => scrollToSection("masaje-relajante")}
                >
                  Masaje Relajante
                </li>
                <li
                  className="cursor-pointer hover:text-purple-500"
                  onClick={() => scrollToSection("masaje-descontracturante")}
                >
                  Descontracturante
                </li>
                <li
                  className="cursor-pointer hover:text-purple-500"
                  onClick={() => scrollToSection("masaje-deportivo")}
                >
                  Deportivo
                </li>
                <li
                  className="cursor-pointer hover:text-purple-500"
                  onClick={() => scrollToSection("masaje-champi")}
                >
                  Hindú Champi
                </li>
                <li
                  className="cursor-pointer hover:text-purple-500"
                  onClick={() => scrollToSection("terapia-feng-shui")}
                >
                  Feng Shui con Imanes
                </li>
              </ul>
            )}
            <li
              className="cursor-pointer hover:text-purple-600"
              onClick={() => scrollToSection("galeria")}
            >
              Galería
            </li>
            <li
              className="cursor-pointer hover:text-purple-600"
              onClick={() => scrollToSection("faq")}
            >
              Preguntas Frecuentes
            </li>
            <li
              className="cursor-pointer hover:text-purple-600"
              onClick={() => scrollToSection("footer")}
            >
              Contacto
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
