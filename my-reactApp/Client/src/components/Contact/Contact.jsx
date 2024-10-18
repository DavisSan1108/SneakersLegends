
import backgroundContact from '../../assets/fondo-contact.jpg'; // Asegúrate de tener esta imagen en la carpeta `assets`

export default function Contact() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundContact})`, // Aplicar la imagen de fondo
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto p-8 bg-gray-900 bg-opacity-80 text-white rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold text-center mb-8">Contáctanos</h1>
        <p className="text-lg text-center mb-8">
          ¿Tienes alguna duda o quieres vender tus productos con nosotros? ¡Déjanos un mensaje y te responderemos a la
          brevedad!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Información de contacto */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Información de Contacto</h2>
            <p className="mb-2">
              <strong>Dirección:</strong> 123 Calle Principal, Ciudad, País
            </p>
            <p className="mb-2">
              <strong>Teléfono:</strong> +123 456 789
            </p>
            <p className="mb-4">
              <strong>Correo Electrónico:</strong> contacto@sneakerslegends.com
            </p>
            <p>
              También puedes seguirnos en nuestras redes sociales:
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-blue-500 hover:text-blue-700">
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-600">
                <i className="fab fa-twitter fa-2x"></i>
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-700">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
            </div>
          </div>

          {/* Formulario de contacto */}
          <form className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Nombre Completo
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Tu nombre"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Correo Electrónico
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Tu correo electrónico"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Mensaje
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                rows="5"
                placeholder="Escribe tu mensaje aquí..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
