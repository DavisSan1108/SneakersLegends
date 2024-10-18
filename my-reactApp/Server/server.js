const express = require("express");
const mysql = require("mysql2");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
const port = 3000;
const SECRET_KEY = "your_secret_key"; // Cambia esto por una clave secreta más segura

// Middleware
app.use(express.json());

// Configurar CORS para permitir solicitudes desde localhost:5173
app.use(
  cors({
    origin: "http://localhost:5173", // Permite solicitudes desde tu frontend
    methods: ["GET", "POST", "PUT", "DELETE"], // Métodos permitidos
    credentials: true,
  })
);

// Conexión a la base de datos
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1105",
  database: "Tienda_Sneakers",
});

db.connect((err) => {
  if (err) {
    console.log("Error conectando a la base de datos:", err);
    return;
  }
  console.log("Conectado a la base de datos MySQL");
});

// Ruta para obtener todos los productos sin autenticación
app.get("/products", (req, res) => {
  const query = "SELECT * FROM models";
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Ruta para registrar un nuevo administrador (hasheando la contraseña)
app.post("/register-admin", async (req, res) => {
  const { username, password, email } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10); // Hasheamos la contraseña
    const query = "INSERT INTO admins (username, password, email) VALUES (?, ?, ?)";
    db.query(query, [username, hashedPassword, email], (err, results) => {
      if (err) {
        console.error("Error ejecutando la consulta:", err);
        res.status(500).json({ error: "Error al registrar el administrador" });
        return;
      }
      res.status(201).json({ message: "Administrador registrado exitosamente" });
    });
  } catch (error) {
    res.status(500).json({ error: "Error al registrar el administrador" });
  }
});

// Ruta para login de administrador
app.post("/login-admin", (req, res) => {
  const { username, password } = req.body;

  const query = "SELECT * FROM admins WHERE username = ?";
  db.query(query, [username], async (err, results) => {
    if (err || results.length === 0) {
      return res.status(401).json({ message: "Usuario o contraseña incorrectos" });
    }

    const admin = results[0];
    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Usuario o contraseña incorrectos" });
    }

    const token = jwt.sign({ admin_id: admin.admin_id }, SECRET_KEY, { expiresIn: "1h" });

    res.json({ token });
  });
});

// Middleware de autenticación de administrador
function authenticateAdmin(req, res, next) {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(403).json({ message: "Token no proporcionado" });
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Token inválido" });
    }
console.log(token, SECRET_KEY)
    req.admin_id = decoded.admin_id;
    next();
  });
}

// Aplicar autenticación a todas las rutas de administración
app.use("/admin", authenticateAdmin);

// Ejemplo de rutas protegidas para administración

// Obtener todos los productos (solo administradores)
app.get("/admin/products", (req, res) => {
  const query = "SELECT * FROM models";
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Agregar producto (solo administradores)
app.post("/admin/products", (req, res) => {
  const { brand_id, name, release_year } = req.body;
  const query = "INSERT INTO models (brand_id, name, release_year) VALUES (?, ?, ?)";

  db.query(query, [brand_id, name, release_year], (err, results) => {
    if (err) {
      console.error("Error ejecutando la consulta:", err);
      res.status(500).json({ error: "Error al agregar el producto" });
      return;
    }
    res.status(201).json({ message: "Producto agregado exitosamente", model_id: results.insertId });
  });
});

// Editar producto (solo administradores)
app.put("/admin/products/:id", (req, res) => {
  const { id } = req.params;
  const { brand_id, name, release_year } = req.body;
  const query = "UPDATE models SET brand_id = ?, name = ?, release_year = ? WHERE model_id = ?";

  db.query(query, [brand_id, name, release_year, id], (err, results) => {
    if (err) {
      console.error("Error ejecutando la consulta:", err);
      res.status(500).json({ error: "Error al actualizar el producto" });
      return;
    }
    res.json({ message: "Producto actualizado exitosamente" });
  });
});

// Eliminar producto (solo administradores)
app.delete("/admin/products/:id", (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM models WHERE model_id = ?";

  db.query(query, [id], (err, results) => {
    if (err) {
      console.error("Error ejecutando la consulta:", err);
      res.status(500).json({ error: "Error al eliminar el producto" });
      return;
    }
    res.json({ message: "Producto eliminado exitosamente" });
  });
});

// Ruta protegida para obtener todos los pedidos (solo administradores)
app.get("/admin/orders", (req, res) => {
  const query = "SELECT * FROM orders";
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
