import TenisAdidas1 from '../../assets/TenisAdidas1.png';
import TenisAdidas2 from '../../assets/TenisAdidas2.png';
import TenisAdidas3 from '../../assets/TenisAdidas3.png';
import TenisAdidas4 from '../../assets/TenisAdidas4.png';
import TenisAdidas5 from '../../assets/TenisAdidas5.png';
import TenisAdidas6 from '../../assets/TenisAdidas6.png';
import TenisAdidas7 from '../../assets/TenisAdidas7.png';
import fondoAdidas from '../../assets/fondo-adidas.jpg'; // Asegúrate de tener esta imagen en la carpeta `assets`

export default function AdidasProducts() {
  // Lista de productos con las imágenes de Adidas correspondientes
  const productos = [
    { id: 1, nombre: 'Adidas 1', precio: 150, imagen: TenisAdidas1 },
    { id: 2, nombre: 'Adidas 2', precio: 100, imagen: TenisAdidas2 },
    { id: 3, nombre: 'Adidas 3', precio: 120, imagen: TenisAdidas3 },
    { id: 4, nombre: 'Adidas 4', precio: 130, imagen: TenisAdidas4 },
    { id: 5, nombre: 'Adidas 5', precio: 140, imagen: TenisAdidas5 },
    { id: 6, nombre: 'Adidas 6', precio: 160, imagen: TenisAdidas6 },
    { id: 7, nombre: 'Adidas 7', precio: 180, imagen: TenisAdidas7 },
  ];

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${fondoAdidas})`, // Aplicar la imagen de fondo
        backgroundSize: 'cover',               // Ajustar la imagen para cubrir todo el área
        backgroundRepeat: 'no-repeat',         // No repetir la imagen
        backgroundPosition: 'center',          // Centrar la imagen en el contenedor
      }}
    >
      {/* Quitar el contenedor blanco adicional para dejar solo las tarjetas */}
      <h1 className="text-4xl font-bold text-center mb-8 text-white">Productos de Adidas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {productos.map((producto) => (
          <div key={producto.id} className="border p-4 rounded-lg shadow-lg bg-white bg-opacity-70 dark:bg-gray-800 dark:bg-opacity-80">
            <img src={producto.imagen} alt={producto.nombre} className="w-full h-48 object-cover mb-4 rounded-lg" />
            <h2 className="text-2xl font-semibold mb-2 dark:text-white">{producto.nombre}</h2>
            <p className="text-lg mb-4 dark:text-gray-300">Precio: ${producto.precio}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700">
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
