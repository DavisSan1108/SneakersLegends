import fondoPricing from '../../assets/fondo-pricing.jpg'; // Importa la imagen de fondo

export default function Pricing() {
  const pricingPlans = [
    {
      title: 'Plan Básico',
      price: '$10/mes',
      features: [
        'Acceso a productos regulares',
        'Descuentos de hasta el 10%',
        'Soporte por correo electrónico',
      ],
    },
    {
      title: 'Plan Premium',
      price: '$25/mes',
      features: [
        'Acceso a productos exclusivos',
        'Envío gratuito en pedidos superiores a $50',
        'Descuentos de hasta el 20%',
        'Acceso anticipado a nuevos lanzamientos',
      ],
    },
    {
      title: 'Plan VIP',
      price: '$50/mes',
      features: [
        'Acceso a productos edición limitada',
        'Descuentos de hasta el 30%',
        'Envío gratuito en todos los pedidos',
        'Soporte prioritario',
      ],
    },
  ];

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${fondoPricing})`, // Definir la imagen de fondo
        backgroundSize: 'cover',                // Asegurar que cubra todo el área
        backgroundRepeat: 'no-repeat',          // No repetir la imagen
        backgroundPosition: 'center',           // Centrar la imagen
      }}
    >
      <div className="container mx-auto p-8">
        <h1 className="text-5xl font-bold text-center mb-12 text-white">Planes de Precios</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="border p-8 rounded-lg shadow-lg bg-gray-900 bg-opacity-80 text-white"
            >
              <h2 className="text-3xl font-bold mb-6">{plan.title}</h2>
              <p className="text-5xl font-bold text-blue-400 mb-6">{plan.price}</p>
              <ul className="text-lg mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="mb-3">
                    - {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
                Comprar Ahora
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
