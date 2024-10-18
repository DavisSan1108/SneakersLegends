import React, { useState, useEffect } from "react";
import { getProducts, deleteProduct } from '../../components/Services/productService'; // Asegúrate de que esta ruta sea correcta

import { Link, useNavigate } from "react-router-dom";

function ProductsAdmin() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Indicador de carga
  const [error, setError] = useState(null); // Para manejar errores
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login'); // Redirige al login si no hay token
    } else {
      fetchProducts();
    }
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true); // Activar el indicador de carga
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error("Error al obtener productos:", error);
      setError("Error al obtener los productos. Verifica la conexión o el servidor.");
    } finally {
      setLoading(false); // Desactivar el indicador de carga
    }
  };

  const handleDelete = async (productId) => {
    const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este producto?");
    if (!confirmDelete) return;

    try {
      await deleteProduct(productId);
      fetchProducts(); // Actualizar la lista después de eliminar el producto
    } catch (error) {
      console.error("Error al eliminar producto:", error);
      setError("Error al eliminar el producto. Inténtalo de nuevo.");
    }
  };

  if (loading) {
    return <div className="text-center">Cargando productos...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Administrar Productos</h1>
      <Link to="/admin/products/new" className="bg-blue-500 text-white py-2 px-4 rounded shadow-md mb-6 inline-block">
        Agregar Producto
      </Link>
      <table className="table-auto w-full bg-white rounded shadow-md">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Nombre</th>
            <th className="px-4 py-2">Precio</th>
            <th className="px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product) => (
              <tr key={product.id} className="border-b">
                <td className="px-4 py-2">{product.id}</td>
                <td className="px-4 py-2">{product.name}</td>
                <td className="px-4 py-2">${product.price}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="bg-red-500 text-white py-1 px-2 rounded shadow-md"
                  >
                    Eliminar
                  </button>
                  <Link
                    to={`/admin/products/edit/${product.id}`}
                    className="bg-yellow-500 text-white py-1 px-2 ml-2 rounded shadow-md"
                  >
                    Editar
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center py-4">
                No hay productos disponibles.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ProductsAdmin;
