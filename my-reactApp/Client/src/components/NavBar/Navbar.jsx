import { Link } from 'react-router-dom'; // Importar Link para la navegación
import Logo from '../../assets/Logo.webp'; // Importar la imagen del logotipo

export default function Navbar() {
  return (
    <nav className="bg-black border-gray-700"> {/* Fondo negro */}
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* Ajustar tamaño del logotipo aquí */}
          <img src={Logo} className="h-12 w-12" alt="Website Logo" /> {/* Logotipo más grande */}
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-green-500"> {/* Texto en verde */}
            Sneakers Legends
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-multi-level"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-300 rounded-lg md:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
          aria-controls="navbar-multi-level"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-600 rounded-lg bg-gray-800 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-black dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-green-500 bg-black hover:bg-green-700 rounded md:bg-transparent md:text-green-500 md:p-0"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="block py-2 px-3 text-gray-300 hover:bg-green-700 rounded md:bg-transparent md:text-green-500 md:p-0"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className="block py-2 px-3 text-gray-300 hover:bg-green-700 rounded md:bg-transparent md:text-green-500 md:p-0"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 px-3 text-gray-300 hover:bg-green-700 rounded md:bg-transparent md:text-green-500 md:p-0"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="block py-2 px-3 text-gray-300 hover:bg-green-700 rounded md:bg-transparent md:text-green-500 md:p-0"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="block py-2 px-3 text-gray-300 hover:bg-green-700 rounded md:bg-transparent md:text-green-500 md:p-0"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
