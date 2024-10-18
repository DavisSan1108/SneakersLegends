import React, { useState, useEffect } from "react";
import { getOrders, deleteOrder } from '../../components/Services/orderService'; // Ajustada la ruta

function OrdersAdmin() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const data = await getOrders();
      setOrders(data);
    } catch (error) {
      console.error("Error al obtener pedidos:", error);
    }
  };

  const handleDelete = async (orderId) => {
    try {
      await deleteOrder(orderId);
      fetchOrders(); // Actualiza la lista de pedidos después de eliminar
    } catch (error) {
      console.error("Error al eliminar pedido:", error);
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Administrar Pedidos</h1>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>ID</th>
            <th>Cliente</th>
            <th>Fecha</th>
            <th>Total</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer_id}</td>
              <td>{order.order_date}</td>
              <td>{order.total_amount}</td>
              <td>
                <button onClick={() => handleDelete(order.id)} className="btn btn-danger">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersAdmin;
