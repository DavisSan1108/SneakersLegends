const express = require('express');
const router = express.Router();
const db = require('../db'); // Conexión a la base de datos
const jwt = require('jsonwebtoken');

// Middleware para verificar el token JWT
const authenticateAdmin = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  // Si no se proporciona el encabezado de autorización
  if (!authHeader) {
    return res.status(401).json({ message: 'Acceso denegado. No se proporcionó token.' });
  }

  // Separar "Bearer" del token real
  const token = authHeader.split(' ')[1];

  // Si no hay un token válido
  if (!token) {
    return res.status(401).json({ message: 'Acceso denegado. Token no válido.' });
  }

  // Verificar el token
  jwt.verify(token, 'your_secret_key', (err, decoded) => {
    if (err) {
      console.error('Error de verificación de token:', err.message); // Log para depurar
      return res.status(401).json({ message: 'Token inválido o expirado.' });
    }

    // Token válido, continuar con la solicitud
    req.adminId = decoded.admin_id; // Decodificar y guardar admin_id en la solicitud
    console.log('Token verificado, admin_id:', req.adminId); // Log para confirmar verificación de token
    next();
  });
};

// Obtener todos los productos (ruta protegida)
router.get('/admin/products', authenticateAdmin, (req, res) => {
  const sql = `SELECT * FROM models`;
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error al obtener productos:', err.message); // Log para depurar
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Eliminar un producto (ruta protegida)
router.delete('/admin/products/:id', authenticateAdmin, (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM models WHERE model_id = ?`;
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error('Error al eliminar producto:', err.message); // Log para depurar
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Producto eliminado' });
  });
});

module.exports = router;
