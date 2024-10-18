import React, { useState } from 'react';
import { addProduct } from '../services/productService';

export default function ProductForm() {
  const [name, setName] = useState('');
  const [releaseYear, setReleaseYear] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({ name, release_year: releaseYear });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nombre del Producto" onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Año de Lanzamiento" onChange={(e) => setReleaseYear(e.target.value)} />
      <button type="submit">Agregar Producto</button>
    </form>
  );
}
