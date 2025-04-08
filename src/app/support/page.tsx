'use client'

import React, { useState } from 'react'

export default function SupportPage() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    collectivite: '',
    telephone: '',
    email: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Formulaire envoyé : \n${JSON.stringify(formData, null, 2)}`)
    setFormData({
      nom: '',
      prenom: '',
      collectivite: '',
      telephone: '',
      email: '',
      message: '',
    })
  }

  return (
    <section className="bg-gray-50 min-h-screen py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Hero */}
        <div className="bg-white/60 backdrop-blur-md rounded-xl shadow-2xl p-10 text-center animate-fadeInDown">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">Support</h1>
          <p className="text-left text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus orci non sagittis auctor. Sed
            magna elit, mattis quis mauris non, rutrum faucibus nisl. Ut ultrices libero scelerisque porttitor
            ullamcorper. Ut ac fermentum felis. Cras id dapibus tellus, a suscipit massa. Nam finibus tellus
            vitae libero tempus laoreet. Aenean nec suscipit enim. Duis suscipit lobortis orci vitae pharetra.
            Cras pretium tristique arcu quis auctor. Cras tincidunt convallis ligula tincidunt lacinia. Fusce quis
            sem vitae velit posuere condimentum vitae eu ipsum. Aliquam erat volutpat. Pellentesque dui
            massa, fermentum in odio nec, hendrerit placerat lectus. Suspendisse ornare ante nulla, eu
            finibus enim interdum sed. Aenean elit massa, lacinia suscipit interdum a, scelerisque at lorem.
          </p>
        </div>

        {/* Coordonnées */}
        <div className="bg-white/60 backdrop-blur-md rounded-xl shadow-md p-8 animate-fadeInDown">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Coordonnées</h2>
          <div className="space-y-4 text-lg text-gray-800">
            <p>
                Nam ornare ullamcorper semper. Aliquam erat volutpat. Nulla facilisi. Phasellus scelerisque
                faucibus porta. Nunc vestibulum, velit et imperdiet ultricies, lorem sem consectetur eros, ultrices
                malesuada nisi risus sed sapien. Integer hendrerit sodales est.
            </p>
            <p>
              <strong>Téléphone :</strong> 03.87.52.05.84
            </p>
            <p>
                Ut non accumsan mi. Cras quis porttitor est. Mauris cursus est et urna facilisis rhoncus. Fusce nec
                eros ac urna dignissim mollis sed sit amet odio. Praesent aliquam fringilla porttitor. Morbi
                molestie nisi vitae tempor ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                elementum in ex quis vulputate.                
            </p>
            <p>
              <strong>Courriel :</strong>{' '}
              <a
                href="mailto:contact@cmsdi.fr"
                className="underline text-blue-600 hover:text-blue-800"
              >
                contact@cmsdi.fr
              </a>
            </p>
            <p>
                Morbi fringilla erat nulla, non maximus erat lobortis vitae. Nulla pellentesque tincidunt rhoncus.
                Nam elementum dignissim dolor ut sodales. Ut lobortis elit eget lacus venenatis faucibus. Cras
                diam nunc, congue ac dictum id, aliquam nec tortor.
            </p>
            <p>
              <strong>Prise en main à distance :</strong>{' '}
              Télécharger : <a
                href="https://www.teamviewer.com/fr/telecharger/windows/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-600 hover:text-blue-800"
              >lien vers TeamViewer
              </a>
            </p>
          </div>
        </div>

        {/* Formulaire de contact */}
        <div className="bg-white/60 backdrop-blur-md rounded-xl shadow-md p-8 animate-fadeInDown">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Demande de contact
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nom */}
              <div>
                <label htmlFor="nom" className="block font-medium mb-2">
                  Nom :
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              {/* Prénom */}
              <div>
                <label htmlFor="prenom" className="block font-medium mb-2">
                  Prénom :
                </label>
                <input
                  type="text"
                  id="prenom"
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
            {/* Collectivité / Entreprise */}
            <div>
              <label
                htmlFor="collectivite"
                className="block font-medium mb-2"
              >
                Collectivité / entreprise :
              </label>
              <input
                type="text"
                id="collectivite"
                name="collectivite"
                value={formData.collectivite}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Téléphone */}
              <div>
                <label
                  htmlFor="telephone"
                  className="block font-medium mb-2"
                >
                  Téléphone :
                </label>
                <input
                  type="text"
                  id="telephone"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              {/* Courriel */}
              <div>
                <label htmlFor="email" className="block font-medium mb-2">
                  Courriel :
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
            {/* Message */}
            <div>
              <label htmlFor="message" className="block font-medium mb-2">
                Message :
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            {/* Bouton d'envoi */}
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition-colors"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
