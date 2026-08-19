import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 text-4xl font-bold text-ghanafc-primary">Page not found</h2>
        <p className="mb-8 text-gray-600">
          That page does not exist. Let us get you back to the club.
        </p>
        <Link to="/" className="btn-primary inline-block">
          Back to home
        </Link>
      </div>
    </section>
  )
}
