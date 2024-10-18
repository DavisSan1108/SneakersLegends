import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="container mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          to="/admin/products"
          className="bg-blue-500 text-white font-bold py-4 px-6 rounded shadow-md hover:bg-blue-700 transition duration-200 text-center"
        >
          Administrar Productos
        </Link>
        <Link
          to="/admin/orders"
          className="bg-green-500 text-white font-bold py-4 px-6 rounded shadow-md hover:bg-green-700 transition duration-200 text-center"
        >
          Administrar Pedidos
        </Link>
        <Link
          to="/admin/users"
          className="bg-red-500 text-white font-bold py-4 px-6 rounded shadow-md hover:bg-red-700 transition duration-200 text-center"
        >
          Administrar Usuarios
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
