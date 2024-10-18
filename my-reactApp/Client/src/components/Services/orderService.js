import axios from 'axios';

export const getOrders = async () => {
  try {
    const response = await axios.get('/orders');
    return response.data;
  } catch (error) {
    console.error('Error al obtener los pedidos:', error);
    throw error;
  }
};

export const deleteOrder = async (orderId) => {
  try {
    const response = await axios.delete(`/orders/${orderId}`);
    return response.data;
  } catch (error) {
    console.error('Error al eliminar el pedido:', error);
    throw error;
  }
};
