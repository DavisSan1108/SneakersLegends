import TenisJordan1 from '../../assets/TenisJordan1.png';
import TenisJordan2 from '../../assets/TenisJordan2.png';
import TenisJordan3 from '../../assets/TenisJordan3.png';
import TenisJordan4 from '../../assets/TenisJordan4.png';
import TenisJordan5 from '../../assets/TenisJordan5.png';
import TenisJordan6 from '../../assets/TenisJordan6.png';
import TenisJordan7 from '../../assets/TenisJordan7.png';
import TenisJordan8 from '../../assets/TenisJordan8.png';
import fondoJordan from '../../assets/fondo-jordan.jpg'; // Importa la imagen de fondo

export default function JordanProducts() {
  // Lista de productos con las imágenes correspondientes
  const productos = [
    { id: 1, nombre: 'Air Jordan 1', precio: 200, imagen: TenisJordan1 },
    { id: 2, nombre: 'Air Jordan 2', precio: 220, imagen: TenisJordan2 },
    { id: 3, nombre: 'Air Jordan 3', precio: 250, imagen: TenisJordan3 },
    { id: 4, nombre: 'Air Jordan 4', precio: 230, imagen: TenisJordan4 },
    { id: 5, nombre: 'Air Jordan 5', precio: 240, imagen: TenisJordan5 },
    { id: 6, nombre: 'Air Jordan 6', precio: 260, imagen: TenisJordan6 },
    { id: 7, nombre: 'Air Jordan 7', precio: 270, imagen: TenisJordan7 },
    { id: 8, nombre: 'Air Jordan 8', precio: 280, imagen: TenisJordan8 },
  ];

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${fondoJordan})`, // Aplicar la imagen de fondo
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full max-w-7xl bg-gray-900 bg-opacity-80 p-10 rounded-lg shadow-lg mt-10">
        <h1 className="text-5xl font-bold text-white text-center mb-10">
          Productos de Jordan
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productos.map((producto) => (
            <div key={producto.id} className="border p-4 rounded-lg shadow-lg bg-white dark:bg-gray-800">
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
    </div>
  );
}
