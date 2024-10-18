import ProductCarousel from '../Carousel/ProductCarousel';
import Offers from '../Offers/Offers';
import NewProducts from '../NewProducts/NewProducts';
import { Link } from 'react-router-dom';
import backgroundImage from '../../assets/fondo-home.jpg'; // Importa la imagen de fondo desde tu carpeta `assets`

function Home() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Aplicar la imagen de fondo
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      {/* Contenedor con opacidad para resaltar los elementos */}
      <div className="w-full max-w-7xl bg-black bg-opacity-90 p-10 rounded-lg shadow-lg mt-10">
        <h1 className="text-5xl font-bold text-green-500 text-center mb-10">
          Welcome to Sneakers Legends
        </h1>

        {/* Componente de carrusel */}
        <div className="w-full max-w-5xl mb-16">
          <ProductCarousel />
        </div>

        {/* Sección de Ofertas */}
        <div className="w-full max-w-7xl mt-16">
          <h2 className="text-4xl font-bold text-green-500 mb-6 text-center">
            Ofertas
          </h2>
          <Offers />

          {/* Botón "Ver más" para la página completa de ofertas */}
          <div className="flex justify-center mt-8">
            <Link to="/offers">
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Ver más
              </button>
            </Link>
          </div>
        </div>

        {/* Sección de Nuevos Productos con un límite de 4 */}
        <div className="w-full max-w-7xl mt-16">
          <h2 className="text-4xl font-bold text-green-500 mb-6 text-center">
            Nuevos Productos
          </h2>
          <NewProducts limite={4} /> {/* Mostrar solo 4 productos */}

          {/* Botón "Ver más" para la página completa de nuevos productos */}
          <div className="flex justify-center mt-8">
            <Link to="/new">
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Ver más
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
