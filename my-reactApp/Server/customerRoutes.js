const express = require('express');
const router = express.Router();
const db = require('../db');

// Obtener todos los clientes
router.get('/', (req, res) => {
  db.query('SELECT * FROM customers', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Agregar un nuevo cliente
router.post('/', (req, res) => {
  const { first_name, last_name, email, phone } = req.body;
  db.query('INSERT INTO customers (first_name, last_name, email, phone) VALUES (?, ?, ?, ?)', [first_name, last_name, email, phone], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Cliente añadido', id: result.insertId });
  });
});

module.exports = router;
