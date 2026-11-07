import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center">
      <div className="text-7xl">🍂</div>
      <h1 className="mt-4 text-3xl font-bold text-green-900">Page Not Found</h1>
      <p className="mt-3 text-gray-600">
        Sorry, the page you are looking for does not exist or has moved.
      </p>
      <Link
        to="/"
        className="mt-6 rounded-md bg-green-700 px-6 py-3 font-semibold text-white hover:bg-green-800"
      >
        Back to Home
      </Link>
    </section>
  )
}