import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const imagenes = [
  "/imagenes/galeria1.jfif",
  "/imagenes/galeria2.jfif",
  "/imagenes/relajante2.jfif",
  "/imagenes/estres.jfif",
  "/imagenes/galeria4.jpg",
  "/imagenes/galeria6.jpg",
  "/imagenes/galeria7.jpg",
  "/imagenes/galeria3.jfif",
];

function GaleriaCarrusel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
  };

  return (
    <section className="w-full flex flex-col items-center py-12 px-4">
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
        Galería
      </h2>
      <div className="w-full max-w-xl">
        <Slider {...settings}>
          {imagenes.map((src, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-md">
              <img
                src={src}
                alt={`Masaje ${index + 1}`}
                className="w-full h-[280px] object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default GaleriaCarrusel;
