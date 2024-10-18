const express = require('express');
const router = express.Router();
const db = require('../db');

// Obtener todas las órdenes
router.get('/', (req, res) => {
  db.query('SELECT * FROM orders', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Agregar una nueva orden
router.post('/', (req, res) => {
  const { customer_id, store_id, order_date, total_amount } = req.body;
  db.query('INSERT INTO orders (customer_id, store_id, order_date, total_amount) VALUES (?, ?, ?, ?)', [customer_id, store_id, order_date, total_amount], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Orden añadida', id: result.insertId });
  });
});

module.exports = router;
