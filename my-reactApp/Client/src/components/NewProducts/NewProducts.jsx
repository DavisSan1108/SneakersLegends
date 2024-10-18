import React from 'react';
import producto1 from '../../assets/producto1.jpg';
import producto3 from '../../assets/producto3.jpg';
import producto5 from '../../assets/teni5.webp';
import producto7 from '../../assets/teni7.webp';
import producto9 from '../../assets/teni9.webp';

const productosNuevos = [
  { id: 1, nombre: 'Air Jordan 1', precio: 100, imagen: producto1 },
  { id: 2, nombre: 'Air Jordan 3', precio: 150, imagen: producto3 },
  { id: 3, nombre: 'Air Jordan 5', precio: 200, imagen: producto5 },
  { id: 4, nombre: 'Air Jordan 7', precio: 120, imagen: producto7 },
  { id: 5, nombre: 'Air Jordan 9', precio: 180, imagen: producto9 },
  // Puedes agregar más productos con nombres reales de tenis Jordan...
];

export default function NewProducts({ limite = productosNuevos.length }) {
  // Seleccionar solo los productos según el límite proporcionado
  const productosAMostrar = productosNuevos.slice(0, limite);

  return (
    <div className="min-h-screen bg-black"> {/* Fondo negro para toda la página */}
      <div className="container mx-auto mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productosAMostrar.map((producto) => (
            <div key={producto.id} className="border p-4 rounded-lg shadow-lg bg-black dark:bg-gray-900"> {/* Fondo negro en cada tarjeta */}
              <img src={producto.imagen} alt={producto.nombre} className="w-full h-48 object-cover mb-4 rounded-lg" />
              <h2 className="text-2xl font-semibold mb-2 text-green-500 dark:text-green-400">{producto.nombre}</h2> {/* Texto en verde */}
              <p className="text-lg mb-4 text-white dark:text-gray-300">Precio: ${producto.precio}</p> {/* Texto en blanco */}
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700"> {/* Botón verde */}
                Agregar al carrito
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
