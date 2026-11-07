import { whatsappLink } from '../data/company'

export default function ProductCard({ product }) {
  return (
    <article
      id={product.id}
      className="scroll-mt-24 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
    >
      {/* Placeholder image area: replace the emoji with an <img> later */}
      <div className="flex h-40 items-center justify-center bg-green-50 text-6xl">
        {product.emoji}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-green-900">{product.name}</h3>
        <p className="mt-2 text-sm text-gray-600">{product.description}</p>

        <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
          Sourced from
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {product.origins.map((country) => (
            <span
              key={country}
              className="rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700"
            >
              {country}
            </span>
          ))}
        </div>

        <a
          href={whatsappLink(`Hello, I would like a quote for ${product.name}.`)}
          target="_blank"
          rel="noreferrer"
          className="mt-5 block rounded-md bg-green-700 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-green-800"
        >
          Request a Quote
        </a>
      </div>
    </article>
  )
}