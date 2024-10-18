// src/components/Services.jsx

import backgroundImage from '../../assets/fondo-services.jpg'; // Ajusta la ruta según donde almacenes tu imagen

function Services() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-10"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Añadir la imagen de fondo
        backgroundSize: 'cover',                   // Cubrir todo el contenedor
        backgroundRepeat: 'no-repeat',             // No repetir la imagen
        backgroundPosition: 'center',              // Centrar la imagen
      }}
    >
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Nuestros Servicios</h1>
      
      {/* Explicación de la página */}
      <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-3xl text-center">
        Bienvenidos a **Sneakers Legends**, la página de compra y venta de sneakers, ropa y accesorios más completa. Aquí podrás encontrar una amplia variedad de productos de marcas como **Nike**, **Jordan**, **Adidas**, **Louis Vuitton**, y muchas más. No solo nos enfocamos en sneakers exclusivos, sino también en accesorios y ropa que complementan tu estilo.
      </p>
      
      {/* Sección de cómo funciona la página */}
      <div className="max-w-3xl text-left bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-900 mb-4">Cómo Funciona la Página</h2>
        <p className="text-lg text-gray-700 mb-4">
          Nuestro objetivo principal es ofrecerte una experiencia de compra única, permitiéndote navegar entre distintas categorías como **Nuevos**, **Ofertas**, y **Marcas** para encontrar el par de sneakers o la prenda que buscas. Además, también puedes explorar nuestra tienda para adquirir accesorios exclusivos. Todos los productos están organizados de manera clara, con imágenes de alta calidad y descripciones detalladas para ayudarte a tomar la mejor decisión.
        </p>
        
        {/* Sección de cómo vender */}
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Guía para Vender en Sneakers Legends</h2>
        <p className="text-lg text-gray-700 mb-4">
          Si quieres vender tus sneakers, ropa o accesorios, sigue los pasos a continuación para listar tus productos en nuestra plataforma:
        </p>
        <ol className="list-decimal list-inside text-lg text-gray-700 mb-6">
          <li>Regístrate y crea tu perfil en Sneakers Legends.</li>
          <li>Dirígete a la sección de **Vender** en la parte superior del menú.</li>
          <li>Llena el formulario con la información de tu producto, incluyendo:
            <ul className="list-disc list-inside ml-5">
              <li>Nombre del producto</li>
              <li>Descripción detallada</li>
              <li>Marca</li>
              <li>Condición (Nuevo/Usado)</li>
              <li>Precio de venta</li>
              <li>Fotos de alta calidad (mínimo 3)</li>
            </ul>
          </li>
          <li>Revisa la información proporcionada y confirma la publicación.</li>
          <li>Una vez aprobado, tu producto estará disponible para todos los usuarios de Sneakers Legends.</li>
        </ol>
        
        {/* Sección de contacto */}
        <p className="text-lg text-gray-700">
          Si tienes alguna duda sobre cómo vender o comprar en nuestra plataforma, visita la sección de **Contacto** o comunícate con nuestro equipo de soporte. Estamos aquí para ayudarte a aprovechar al máximo la experiencia en **Sneakers Legends**.
        </p>
      </div>
    </div>
  );
}

export default Services;
