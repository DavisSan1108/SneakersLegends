import jordanWM1 from '../../assets/producto1.jpg';
import jordanWM2 from '../../assets/producto2.jpg';
import jordanWM3 from '../../assets/producto3.jpg';
import jordanWM4 from '../../assets/producto4.jpg';
import jordanWM5 from '../../assets/teni8.webp';
import jordanWM6 from '../../assets/teni9.webp';
import jordanWM7 from '../../assets/teni10.webp';
import jordanWM8 from '../../assets/teni12.webp';
import jordanWM9 from '../../assets/teni13.webp';
import jordanWM10 from '../../assets/teni18.webp';

export default function WomanProducts() {
  const womenProducts = [
    { id: 1, nombre: 'Air Jordan 1 WMNS', precio: 75, imagen: jordanWM1 },
    { id: 2, nombre: 'Air Jordan 2 WMNS', precio: 80, imagen: jordanWM2 },
    { id: 3, nombre: 'Air Jordan 3 WMNS', precio: 60, imagen: jordanWM3 },
    { id: 4, nombre: 'Air Jordan 4 WMNS', precio: 70, imagen: jordanWM4 },
    { id: 5, nombre: 'Air Jordan 5 WMNS', precio: 90, imagen: jordanWM5 },
    { id: 6, nombre: 'Air Jordan 6 WMNS', precio: 85, imagen: jordanWM6 },
    { id: 7, nombre: 'Air Jordan 7 WMNS', precio: 65, imagen: jordanWM7 },
    { id: 8, nombre: 'Air Jordan 8 WMNS', precio: 72, imagen: jordanWM8 },
    { id: 9, nombre: 'Air Jordan 9 WMNS', precio: 95, imagen: jordanWM9 },
    { id: 10, nombre: 'Air Jordan 10 WMNS', precio: 100, imagen: jordanWM10 },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto mt-10 p-0">
        <h1 className="text-4xl font-bold text-center mb-8">Productos para Mujeres</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {womenProducts.map((producto) => (
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
