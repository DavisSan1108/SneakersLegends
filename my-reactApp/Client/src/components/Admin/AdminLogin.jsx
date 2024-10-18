import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    // Validar que los campos no estén vacíos
    if (!username || !password) {
      setErrorMessage("Por favor, ingresa tanto el nombre de usuario como la contraseña.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/login-admin", {
        username,
        password,
      });

      // Verificar si el token está en la respuesta
      if (response.data && response.data.token) {
        const { token } = response.data;

        // Guardar solo el 'adminToken' en localStorage para mantener la sesión
        localStorage.setItem("adminToken", token);

        // Redirigir al dashboard
        navigate("/admin");
      } else {
        // Manejar el caso de que no se reciba un token válido
        setErrorMessage("No se recibió un token válido. Verifica tu servidor.");
      }
    } catch (error) {
      // Verificar si el error es de autenticación (401)
      if (error.response && error.response.status === 401) {
        setErrorMessage("Usuario o contraseña incorrectos. Verifica tus credenciales e inténtalo nuevamente.");
      } else {
        // Otros errores
        setErrorMessage("Ocurrió un error inesperado. Intenta nuevamente.");
        console.error("Error en el proceso de login:", error);
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión Administrador</h2>

        {errorMessage && (
          <p className="text-red-500 text-center mb-4">{errorMessage}</p>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Nombre de Usuario:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            placeholder="Ingresa tu nombre de usuario"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Contraseña:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            placeholder="Ingresa tu contraseña"
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition duration-300"
        >
          Iniciar Sesión
        </button>
      </div>
    </div>
  );
}

export default AdminLogin;
