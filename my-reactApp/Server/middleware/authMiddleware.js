const jwt = require('jsonwebtoken');
const SECRET_KEY = 'your_secret_key'; // Debe coincidir con la clave utilizada al crear el token

// Middleware para autenticar administradores
const authenticateAdmin = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Obtener el token del encabezado

  if (!token) {
    return res.status(403).json({ message: 'Token no proporcionado' });
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token inválido o expirado' });
    }

    req.admin = decoded; // Guardar los datos decodificados (por ejemplo, admin_id) en req
    next();
  });
};

module.exports = { authenticateAdmin };
