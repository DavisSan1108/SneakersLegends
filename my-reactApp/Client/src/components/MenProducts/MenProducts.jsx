import menProduct1 from '../../assets/teni3.webp';
import menProduct2 from '../../assets/teni5.webp';
import menProduct3 from '../../assets/teni6.webp';
import menProduct4 from '../../assets/teni7.webp';
import menProduct5 from '../../assets/teni8.webp';
import menProduct6 from '../../assets/teni9.webp';
import menProduct7 from '../../assets/teni10.webp';
import menProduct8 from '../../assets/teni12.webp';
import menProduct9 from '../../assets/teni13.webp';
import menProduct10 from '../../assets/teni18.webp';

export default function MenProducts() {
  const menProducts = [
    { id: 1, nombre: 'Air Jordan 1', precio: 75, imagen: menProduct1 },
    { id: 2, nombre: 'Air Jordan 4', precio: 80, imagen: menProduct2 },
    { id: 3, nombre: 'Air Jordan 6', precio: 60, imagen: menProduct3 },
    { id: 4, nombre: 'Air Jordan 11', precio: 70, imagen: menProduct4 },
    { id: 5, nombre: 'Air Jordan 12', precio: 90, imagen: menProduct5 },
    { id: 6, nombre: 'Air Jordan 13', precio: 85, imagen: menProduct6 },
    { id: 7, nombre: 'Air Jordan 5', precio: 65, imagen: menProduct7 },
    { id: 8, nombre: 'Air Jordan 7', precio: 72, imagen: menProduct8 },
    { id: 9, nombre: 'Air Jordan 9', precio: 95, imagen: menProduct9 },
    { id: 10, nombre: 'Air Jordan 10', precio: 100, imagen: menProduct10 }
  ];

  return (
    <div className="min-h-screen bg-black py-10"> {/* Fondo negro */}
      <h1 className="text-4xl font-bold text-center mb-8 text-green-500">Productos Jordan para Hombres</h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {menProducts.map((producto) => (
          <div key={producto.id} className="border p-4 rounded-lg shadow-lg bg-gray-800"> {/* Cajas en gris oscuro */}
            <img src={producto.imagen} alt={producto.nombre} className="w-full h-48 object-cover mb-4 rounded-lg" />
            <h2 className="text-2xl font-semibold mb-2 text-green-500">{producto.nombre}</h2>
            <p className="text-lg mb-4 text-gray-300">Precio: ${producto.precio}</p>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
