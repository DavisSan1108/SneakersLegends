import { Link } from 'react-router-dom';

export default function TopMenu() {
  return (
    <div className="bg-gray-800 text-white py-2">
      <div className="container mx-auto flex justify-center">
        <ul className="flex space-x-8">
          <li>
            <Link to="/brands" className="hover:text-gray-400">
              Marcas
            </Link>
          </li>
          <li>
            <Link to="/offers" className="hover:text-gray-400">
              Ofertas
            </Link>
          </li>
          <li>
            <Link to="/new" className="hover:text-gray-400">
              Nuevo
            </Link>
          </li>
          <li>
            <Link to="/men" className="hover:text-gray-400">
              Hombres
            </Link>
          </li>
          <li>
            <Link to="/women" className="hover:text-gray-400">
              Mujeres
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
