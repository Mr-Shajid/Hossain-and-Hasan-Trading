import { useState } from 'react'
import { products, allOrigins } from '../data/products'
import PageHeader from '../components/PageHeader'
import ProductCard from '../components/ProductCard'
import ContactCTA from '../components/ContactCTA'

export default function Products() {
  const [country, setCountry] = useState('All')

  const visible =
    country === 'All' ? products : products.filter((p) => p.origins.includes(country))

  const filterClass = (active) =>
    `rounded-full px-4 py-2 text-sm font-medium transition ${
      active
        ? 'bg-green-700 text-white'
        : 'bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-700'
    }`

  return (
    <>
      <PageHeader
        title="Our Products"
        subtitle="Fresh fruit imported from the best growing regions. Request a quote for any product."
      />

      <section className="mx-auto max-w-6xl px-4 py-12">
        {/* Filter by origin country */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-2 text-sm font-semibold text-gray-500">Origin:</span>
          <button onClick={() => setCountry('All')} className={filterClass(country === 'All')}>
            All
          </button>
          {allOrigins.map((c) => (
            <button key={c} onClick={() => setCountry(c)} className={filterClass(country === c)}>
              {c}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {visible.length === 0 && (
          <p className="mt-8 text-gray-500">No products found for this country.</p>
        )}
      </section>

      <ContactCTA />
    </>
  )
}