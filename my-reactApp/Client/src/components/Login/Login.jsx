import { Link } from 'react-router-dom'; // Importar Link para la navegación interna

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <form className="max-w-sm mx-auto bg-gray-900 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-green-500 mb-6">Login</h2>
        
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-green-500">
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-800 border border-gray-600 text-white text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
            placeholder="name@example.com"
            required
          />
        </div>

        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-green-500">
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-800 border border-gray-600 text-white text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
            required
          />
        </div>

        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              className="w-4 h-4 border border-gray-600 rounded bg-gray-800 focus:ring-3 focus:ring-green-500"
            />
          </div>
          <label htmlFor="remember" className="ml-2 text-sm font-medium text-green-500">
            Remember me
          </label>
        </div>

        <button
          type="submit"
          className="w-full text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Submit
        </button>

        {/* Nueva sección para "Crear una nueva cuenta" */}
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-500">¿No tienes cuenta?</span>
          <Link to="/register" className="text-green-500 hover:underline ml-1">
            Crear una nueva cuenta
          </Link>
        </div>
      </form>
    </div>
  );
}
