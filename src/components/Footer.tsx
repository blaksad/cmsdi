export default function Footer() {
  return (
    <footer className="w-full py-6 bg-white/20 backdrop-blur-sm text-center mt-auto">
      <p className="text-sm text-gray-800">
        © {new Date().getFullYear()} - CMSDI. Tous droits réservés.
      </p>
    </footer>
  )
}
