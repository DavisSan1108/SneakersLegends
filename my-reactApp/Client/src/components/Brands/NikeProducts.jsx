import producto1 from '../../assets/teni3.webp';
import producto2 from '../../assets/teni5.webp';
import producto3 from '../../assets/teni6.webp';
import producto4 from '../../assets/teni7.webp';
import producto5 from '../../assets/teni8.webp';
import producto6 from '../../assets/teni9.webp';
import producto7 from '../../assets/teni10.webp';
import producto8 from '../../assets/teni12.webp';
import producto9 from '../../assets/teni13.webp';
import producto10 from '../../assets/teni18.webp';
import backgroundImage from '../../assets/fondo-nike.jpg'; // Importa la imagen de fondo

export default function NikeProducts() {
  // Lista de productos para la marca Nike
  const nikeProducts = [
    { id: 1, name: 'Nike Air Max', price: 120, image: producto1 },
    { id: 2, name: 'Nike Zoom', price: 140, image: producto2 },
    { id: 3, name: 'Nike React', price: 130, image: producto3 },
    { id: 4, name: 'Nike Pegasus', price: 150, image: producto4 },
    { id: 5, name: 'Nike Free Run', price: 110, image: producto5 },
    { id: 6, name: 'Nike Air Force', price: 160, image: producto6 },
    { id: 7, name: 'Nike Metcon', price: 180, image: producto7 },
    { id: 8, name: 'Nike Blazer', price: 170, image: producto8 },
    { id: 9, name: 'Nike Cortez', price: 90, image: producto9 },
    { id: 10, name: 'Nike SB Dunk', price: 200, image: producto10 },
  ];

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
      <div className="w-full max-w-7xl bg-gray-900 bg-opacity-80 p-10 rounded-lg shadow-lg mt-10">
        <h1 className="text-5xl font-bold text-white text-center mb-10">
          Productos Nike
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {nikeProducts.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow-lg bg-white dark:bg-gray-800">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-lg" />
              <h2 className="text-2xl font-semibold mb-2 dark:text-white">{product.name}</h2>
              <p className="text-lg mb-4 dark:text-gray-300">Precio: ${product.price}</p>
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
