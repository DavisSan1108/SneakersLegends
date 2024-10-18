import axios from 'axios';

// Obtener productos
export const getProducts = async () => {
  const token = localStorage.getItem('adminToken'); // Usar solo 'adminToken'
  if (!token) {
    throw new Error("No se ha encontrado el token de autorización");
  }

  try {
    const res = await axios.get('http://localhost:3000/admin/products', {
      headers: {
        Authorization: `${token}` // Enviar el token correctamente
      },
    });
    return res.data;
  } catch (error) {
    console.error("Error obteniendo productos:", error);
    throw error; // Manejar el error adecuadamente
  }
};

// Eliminar producto
export const deleteProduct = async (id) => {
  const token = localStorage.getItem('adminToken'); // Usar solo 'adminToken'

  if (!token) {
    throw new Error("No se ha encontrado el token de autorización");
  }

  try {
    await axios.delete(`http://localhost:3000/admin/products/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Enviar el token correctamente
      },
    });
  } catch (error) {
    console.error("Error eliminando producto:", error);
    throw error; // Manejar el error adecuadamente
  }
};
