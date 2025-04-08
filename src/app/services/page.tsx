export default function ServicesPage() {
  return (
    <section className="bg-gray-50 min-h-screen py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Hero interne */}
        <div className="bg-white/60 backdrop-blur-md rounded-xl shadow-2xl p-10 text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
            Nos Services
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus orci non sagittis auctor.
          </p>
        </div>

        {/* Grid des services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Service Installation */}
          <div className="bg-white/60 backdrop-blur-md p-8 rounded-lg shadow-lg hover:scale-105 transition-transform transform">
            <h2 className="text-2xl font-bold text-gray-900 mb-3 text-center">
              Installation
            </h2>
            <p className="text-base text-gray-700 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* Service Hébergement */}
          <div className="bg-white/60 backdrop-blur-md p-8 rounded-lg shadow-lg hover:scale-105 transition-transform transform">
            <h2 className="text-2xl font-bold text-gray-900 mb-3 text-center">
              Hébergement
            </h2>
            <p className="text-base text-gray-700 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* Service Développement */}
          <div className="bg-white/60 backdrop-blur-md p-8 rounded-lg shadow-lg hover:scale-105 transition-transform transform">
            <h2 className="text-2xl font-bold text-gray-900 mb-3 text-center">
              Développement
            </h2>
            <p className="text-base text-gray-700 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* Service Formation */}
          <div className="bg-white/60 backdrop-blur-md p-8 rounded-lg shadow-lg hover:scale-105 transition-transform transform">
            <h2 className="text-2xl font-bold text-gray-900 mb-3 text-center">
              Formation
            </h2>
            <p className="text-base text-gray-700 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
