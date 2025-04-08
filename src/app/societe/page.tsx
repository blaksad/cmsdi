import { CheckCircleIcon } from '@heroicons/react/24/outline'

export default function SocietePage() {
  return (
    <section className="bg-gray-50 min-h-screen py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Petit hero */}
        <div className="bg-white/60 backdrop-blur-md rounded-xl shadow-2xl p-10 text-center animate-fadeInDown">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">Société</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus orci non sagittis auctor.
          </p>
        </div>

        {/* Informations */}
        <div className="bg-white/60 backdrop-blur-md rounded-xl shadow-md p-8 animate-fadeInDown">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Informations</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <CheckCircleIcon className="w-6 h-6 text-indigo-600 mr-2" />
              <span className="text-gray-800">Notre entreprise</span>
            </li>
            <li className="flex items-center">
              <CheckCircleIcon className="w-6 h-6 text-indigo-600 mr-2" />
              <span className="text-gray-800">Nos partenaires</span>
            </li>
            <li className="flex items-center">
              <CheckCircleIcon className="w-6 h-6 text-indigo-600 mr-2" />
              <span className="text-gray-800">Nos références</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
