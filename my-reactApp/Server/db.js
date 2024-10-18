const mysql = require('mysql2');

// Crear la conexión a la base de datos
const db = mysql.createConnection({
    host: "localhost",
    user: "root", // Cambia esto según tu configuración
    password: "1105", // Cambia esto según tu configuración
    database: "Tienda_Tenis", // Cambia esto según tu configuración
  });

// Conectar a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión a la base de datos MySQL establecida');
});

module.exports = db;
