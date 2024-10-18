import axios from 'axios';

// Obtener todos los usuarios (clientes)
export const getUsers = async () => {
  try {
    const response = await axios.get('/customers');
    return response.data;
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
    throw error;
  }
};

// Función para eliminar un usuario (cliente) por ID
export const deleteUser = async (userId) => {
  try {
    const response = await axios.delete(`/customers/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error al eliminar el usuario:', error);
    throw error;
  }
};
