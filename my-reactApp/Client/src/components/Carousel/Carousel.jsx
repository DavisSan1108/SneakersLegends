
import Slider from 'react-slick';
import producto1 from '../../assets/producto1.jpg';
import producto2 from '../../assets/producto2.jpg';
import producto3 from '../../assets/producto3.jpg';
import producto4 from '../../assets/producto4.jpg';

export default function ProductCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Mostrar flechas de navegación
    fade: true, // Transición con efecto de desvanecimiento
  };

  return (
    <div className="max-w-screen-lg mx-auto mt-10">
      <h2 className="text-4xl font-bold text-center mb-8 dark:text-white">Productos Destacados</h2>
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="relative">
          <img
            src={producto1}
            alt="Producto 1"
            className="w-full h-96 object-cover rounded-lg"
          />
          <div className="absolute bottom-8 left-8 text-white">
            <h3 className="text-2xl font-bold">Tenis Jordan 1</h3>
            <button className="bg-blue-600 text-white px-4 py-2 mt-2 rounded hover:bg-blue-800">
              Comprar Ahora
            </button>
          </div>
        </div>
        {/* Slide 2 */}
        <div className="relative">
          <img
            src={producto2}
            alt="Producto 2"
            className="w-full h-96 object-cover rounded-lg"
          />
          <div className="absolute bottom-8 left-8 text-white">
            <h3 className="text-2xl font-bold">Tenis Air Max</h3>
            <button className="bg-blue-600 text-white px-4 py-2 mt-2 rounded hover:bg-blue-800">
              Comprar Ahora
            </button>
          </div>
        </div>
        {/* Slide 3 */}
        <div className="relative">
          <img
            src={producto3}
            alt="Producto 3"
            className="w-full h-96 object-cover rounded-lg"
          />
          <div className="absolute bottom-8 left-8 text-white">
            <h3 className="text-2xl font-bold">Tenis Adidas</h3>
            <button className="bg-blue-600 text-white px-4 py-2 mt-2 rounded hover:bg-blue-800">
              Comprar Ahora
            </button>
          </div>
        </div>
        {/* Slide 4 */}
        <div className="relative">
          <img
            src={producto4}
            alt="Producto 4"
            className="w-full h-96 object-cover rounded-lg"
          />
          <div className="absolute bottom-8 left-8 text-white">
            <h3 className="text-2xl font-bold">Tenis Nike</h3>
            <button className="bg-blue-600 text-white px-4 py-2 mt-2 rounded hover:bg-blue-800">
              Comprar Ahora
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
}
