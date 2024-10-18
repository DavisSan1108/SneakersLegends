// Importar las imágenes locales desde la carpeta `assets`
import producto1 from '../../assets/producto1.jpg';
import producto3 from '../../assets/producto3.jpg';
import producto5 from '../../assets/teni5.webp'; // Cambiar a la imagen correcta
import producto7 from '../../assets/teni7.webp';

export default function Offers() {
  const productosConRebaja = [
    { id: 1, nombre: 'Air Jordan 1 Retro High', precioOriginal: 150, precioRebajado: 120, imagen: producto1 },
    { id: 2, nombre: 'Air Jordan 4 White Oreo', precioOriginal: 200, precioRebajado: 160, imagen: producto3 },
    { id: 3, nombre: 'Air Jordan 11 Concord', precioOriginal: 220, precioRebajado: 180, imagen: producto5 },
    { id: 4, nombre: 'Air Jordan 6 Infrared', precioOriginal: 180, precioRebajado: 140, imagen: producto7 },
  ];

  return (
    <div className="min-h-screen bg-black"> {/* Fondo negro para la sección de Ofertas */}
      <div className="container mx-auto mt-10">
        <h1 className="text-4xl font-bold text-center mb-8 text-green-500">Productos en Oferta</h1> {/* Texto verde */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productosConRebaja.map((producto) => (
            <div key={producto.id} className="border p-4 rounded-lg shadow-lg bg-black dark:bg-gray-900"> {/* Fondo negro */}
              <img src={producto.imagen} alt={producto.nombre} className="w-full h-48 object-cover mb-4 rounded-lg" />
              <h2 className="text-2xl font-semibold mb-2 text-green-500 dark:text-green-400">{producto.nombre}</h2> {/* Texto en verde */}
              <p className="text-lg line-through text-red-500 mb-2 dark:text-red-400">Precio original: ${producto.precioOriginal}</p> {/* Precio original en rojo */}
              <p className="text-lg mb-4 text-white dark:text-gray-300">Precio con rebaja: ${producto.precioRebajado}</p> {/* Texto en blanco */}
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
