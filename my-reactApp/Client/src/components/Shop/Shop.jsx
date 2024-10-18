// Importar las imágenes locales desde la carpeta `assets`
import jordan1 from '../../assets/teni3.webp';
import jordan11 from '../../assets/teni5.webp';
import jordan36 from '../../assets/teni6.webp';
import jordan5 from '../../assets/teni7.webp';
import jordan6 from '../../assets/teni8.webp';
import jordan7 from '../../assets/teni9.webp';
import jordan12 from '../../assets/teni10.webp';
import jordan18 from '../../assets/teni12.webp';
import jordan19 from '../../assets/teni13.webp';
import jordan21 from '../../assets/teni18.webp';
import jordan22 from '../../assets/teni19.webp';
import jordan23 from '../../assets/teni21.webp';
import jordan24 from '../../assets/teni22.webp';
import jordan25 from '../../assets/teni23.webp';
import jordan26 from '../../assets/teni24.webp';
import jordan27 from '../../assets/teni25.webp';

// Importar la imagen de fondo
import backgroundImage from '../../assets/fondo-shop.jpg'; // Asegúrate de tener esta imagen en la carpeta `assets`

export default function Shop() {
  // Lista de productos con los nombres de tenis Jordan reales
  const productos = [
    { id: 1, nombre: 'Air Jordan 1', precio: 100, imagen: jordan1 },
    { id: 2, nombre: 'Air Jordan 11', precio: 150, imagen: jordan11 },
    { id: 3, nombre: 'Air Jordan 36', precio: 200, imagen: jordan36 },
    { id: 4, nombre: 'Air Jordan 5', precio: 120, imagen: jordan5 },
    { id: 5, nombre: 'Air Jordan 6', precio: 130, imagen: jordan6 },
    { id: 6, nombre: 'Air Jordan 7', precio: 180, imagen: jordan7 },
    { id: 7, nombre: 'Air Jordan 12', precio: 160, imagen: jordan12 },
    { id: 8, nombre: 'Air Jordan 18', precio: 190, imagen: jordan18 },
    { id: 9, nombre: 'Air Jordan 19', precio: 170, imagen: jordan19 },
    { id: 10, nombre: 'Air Jordan 21', precio: 210, imagen: jordan21 },
    { id: 11, nombre: 'Air Jordan 22', precio: 220, imagen: jordan22 },
    { id: 12, nombre: 'Air Jordan 23', precio: 250, imagen: jordan23 },
    { id: 13, nombre: 'Air Jordan 24', precio: 260, imagen: jordan24 },
    { id: 14, nombre: 'Air Jordan 25', precio: 280, imagen: jordan25 },
    { id: 15, nombre: 'Air Jordan 26', precio: 290, imagen: jordan26 },
    { id: 16, nombre: 'Air Jordan 27', precio: 300, imagen: jordan27 },
  ];

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Aplicar la imagen de fondo
        backgroundSize: 'cover',                   // Cubrir todo el contenedor
        backgroundRepeat: 'no-repeat',             // No repetir la imagen
        backgroundPosition: 'center',              // Centrar la imagen en el contenedor
      }}
    >
      <div className="container mx-auto mt-10 p-10">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">
          Tienda de Productos
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productos.map((producto) => (
            <div key={producto.id} className="border p-4 rounded-lg shadow-lg bg-black dark:bg-gray-900">
              <img src={producto.imagen} alt={producto.nombre} className="w-full h-48 object-cover mb-4 rounded-lg" />
              <h2 className="text-2xl font-semibold mb-2 text-green-500 dark:text-green-400">{producto.nombre}</h2>
              <p className="text-lg mb-4 text-white dark:text-gray-300">Precio: ${producto.precio}</p>
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700">
                Agregar al carrito
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
