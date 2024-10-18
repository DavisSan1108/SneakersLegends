import React, { useState, useEffect } from 'react';
import { getProducts } from '../services/productService';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {products.map(product => (
          <li key={product.model_id}>
            {product.name} - Año: {product.release_year}
          </li>
        ))}
      </ul>
    </div>
  );
}
