import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const imagenes = [
  "/imagenes/galeria1.jfif",
  "/imagenes/galeria2.jfif",
  "/imagenes/relajante2.jfif",
  "/imagenes/deportivo.jpg",
  "/imagenes/estres.jfif",
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
  };

  return (
    <section className="max-w-5xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
        Galería
      </h2>
      <Slider {...settings}>
        {imagenes.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`Masaje ${index + 1}`}
              className="rounded-xl mx-auto max-w-[600px] h-[300px] object-cover shadow-md"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default GaleriaCarrusel;//
