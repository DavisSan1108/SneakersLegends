import TeniLV1 from '../../assets/TeniLV1.png';
import TeniLV2 from '../../assets/TeniLV2.png';
import TeniLV3 from '../../assets/TeniLV3.png';
import TeniLV4 from '../../assets/TeniLV4.png';
import TeniLV5 from '../../assets/TeniLV5.png';
import TeniLV6 from '../../assets/TeniLV6.png';
import TeniLV7 from '../../assets/TeniLV7.png';
import backgroundLV from '../../assets/backgroundLV.png'; // Importar la imagen de fondo desde tu computadora

export default function LVProducts() {
  // Lista de productos con las imágenes correspondientes
  const productos = [
    { id: 1, nombre: 'Louis Vuitton 1', precio: 1500, imagen: TeniLV1 },
    { id: 2, nombre: 'Louis Vuitton 2', precio: 500, imagen: TeniLV2 },
    { id: 3, nombre: 'Louis Vuitton 3', precio: 2000, imagen: TeniLV3 },
    { id: 4, nombre: 'Louis Vuitton 4', precio: 1800, imagen: TeniLV4 },
    { id: 5, nombre: 'Louis Vuitton 5', precio: 2200, imagen: TeniLV5 },
    { id: 6, nombre: 'Louis Vuitton 6', precio: 2500, imagen: TeniLV6 },
    { id: 7, nombre: 'Louis Vuitton 7', precio: 3000, imagen: TeniLV7 },
  ];

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundLV})`, // Aplicar la imagen de fondo
        backgroundSize: 'cover',                   // Cubrir todo el contenedor
        backgroundRepeat: 'no-repeat',             // No repetir la imagen
        backgroundPosition: 'center',              // Centrar la imagen
      }}
    >
      <div className="container mx-auto mt-10">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">Productos de Louis Vuitton</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productos.map((producto) => (
            <div key={producto.id} className="border p-4 rounded-lg shadow-lg bg-black dark:bg-gray-900"> {/* Fondo de producto oscuro */}
              <img src={producto.imagen} alt={producto.nombre} className="w-full h-48 object-cover mb-4 rounded-lg" />
              <h2 className="text-2xl font-semibold mb-2 text-green-500 dark:text-green-400">{producto.nombre}</h2> {/* Texto en verde */}
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
