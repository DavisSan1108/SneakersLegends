import React, { useState } from 'react';
import producto1 from '../../assets/producto1.jpg';
import producto3 from '../../assets/producto3.jpg';
import producto4 from '../../assets/producto4.jpg';
import teni3 from '../../assets/teni3.webp';
import teni5 from '../../assets/teni5.webp';
import teni6 from '../../assets/teni6.webp';

function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array de imágenes a mostrar en el carrusel
  const images = [
    { src: producto1, alt: 'Producto 1' },
    { src: producto3, alt: 'Producto 3' },
    { src: producto4, alt: 'Producto 4' },
    { src: teni3, alt: 'Tenis 3' },
    { src: teni5, alt: 'Tenis 5' },
    { src: teni6, alt: 'Tenis 6' },
  ];

  // Funciones para manejar el índice de las imágenes en el carrusel
  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-10">
      <div className="overflow-hidden rounded-lg">
        {/* Imagen actual del carrusel */}
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Botón de navegación izquierda */}
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        onClick={prevSlide}
      >
        &#8249;
      </button>

      {/* Botón de navegación derecha */}
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        onClick={nextSlide}
      >
        &#8250;
      </button>

      {/* Indicadores de posición */}
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <span
            key={index}
            className={`cursor-pointer w-3 h-3 mx-1 rounded-full ${
              index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default ProductCarousel;
