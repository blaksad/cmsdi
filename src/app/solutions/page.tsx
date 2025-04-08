import {
  BuildingOffice2Icon,
  MapIcon,
  HomeModernIcon,
} from '@heroicons/react/24/outline'
import { GiTombstone } from 'react-icons/gi'
import { FiTarget } from 'react-icons/fi'

export default function SolutionsPage() {
  return (
    <section className="bg-gray-50 min-h-screen py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Hero interne */}
        <div className="bg-white/60 backdrop-blur-md rounded-xl shadow-2xl p-10 text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
            Nos Solutions
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Duis rhoncus orci non sagittis auctor.
          </p>
        </div>

        {/* Section Solutions */}
        <div id="solutions" className="space-y-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Nos Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Carte Urbanisme */}
            <div className="bg-white/70 backdrop-blur-md p-6 rounded-lg shadow-lg hover:scale-105 transform transition-transform">
              <BuildingOffice2Icon className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                Urbanisme
              </h3>
              <p className="text-sm text-gray-700 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              </p>
            </div>

            {/* Carte SIG */}
            <div className="bg-white/70 backdrop-blur-md p-6 rounded-lg shadow-lg hover:scale-105 transform transition-transform">
              <MapIcon className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                SIG
              </h3>
              <p className="text-sm text-gray-700 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              </p>
            </div>

            {/* Carte Cimetière */}
            <div className="bg-white/70 backdrop-blur-md p-6 rounded-lg shadow-lg hover:scale-105 transform transition-transform">
              <GiTombstone className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                Cimetière
              </h3>
              <p className="text-sm text-gray-700 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              </p>
            </div>

            {/* Carte Chasse */}
            <div className="bg-white/70 backdrop-blur-md p-6 rounded-lg shadow-lg hover:scale-105 transform transition-transform">
              <FiTarget className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                Chasse
              </h3>
              <p className="text-sm text-gray-700 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              </p>
            </div>

            {/* Carte Bâtiment */}
            <div className="bg-white/70 backdrop-blur-md p-6 rounded-lg shadow-lg hover:scale-105 transform transition-transform">
              <HomeModernIcon className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                Bâtiment
              </h3>
              <p className="text-sm text-gray-700 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
