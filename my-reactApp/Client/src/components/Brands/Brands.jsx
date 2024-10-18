import { Link } from 'react-router-dom';
import nikeLogo from '../../assets/nike-logo.png';
import jordanLogo from '../../assets/jordan-logo.png';
import lvLogo from '../../assets/lv-logo.png'; // Ajuste en el nombre si es 'lv-logo.png'
import adidasLogo from '../../assets/adidas-logo.png';
import backgroundImage from '../../assets/fondo-brands.jpg'; // Importa la imagen de fondo

export default function Brands() {
  const brands = [
    { name: 'Nike', logo: nikeLogo, link: '/brands/nike' },
    { name: 'Jordan', logo: jordanLogo, link: '/brands/jordan' },
    { name: 'Louis Vuitton', logo: lvLogo, link: '/brands/lv' },
    { name: 'Adidas', logo: adidasLogo, link: '/brands/adidas' },
  ];

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Definir la imagen de fondo
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      {/* Contenedor con opacidad para resaltar los elementos */}
      <div className="w-full max-w-7xl bg-gray-900 bg-opacity-80 p-10 rounded-lg shadow-lg mt-10">
        <h1 className="text-5xl font-bold text-white text-center mb-10">
          Nuestras Marcas
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {brands.map((brand, index) => (
            <Link to={brand.link} key={index} className="border p-4 rounded-lg shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl">
              <img src={brand.logo} alt={brand.name} className="w-full h-32 object-contain mb-4" />
              <h2 className="text-2xl font-semibold mb-2 dark:text-white text-center">{brand.name}</h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
