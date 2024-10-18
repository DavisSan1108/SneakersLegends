import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [brand_id, setBrandId] = useState("");
  const navigate = useNavigate();

  // Obtener el token desde el localStorage (o donde lo estés almacenando)
  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = { name, price, brand_id };

    try {
      const response = await fetch("http://localhost:3000/admin/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, // Agregar el token en la cabecera
        },
        body: JSON.stringify(product),
      });

      if (response.ok) {
        alert("Producto agregado exitosamente");
        navigate("/admin/products");
      } else {
        alert("Error al agregar producto");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error al agregar producto");
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Agregar Producto</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Nombre:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Precio:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Brand ID:</label>
          <input
            type="text"
            value={brand_id}
            onChange={(e) => setBrandId(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Agregar Producto
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
