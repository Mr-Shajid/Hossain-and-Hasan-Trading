import { Link } from 'react-router-dom'
import { company, whatsappLink } from '../data/company'
import { products, allOrigins } from '../data/products'
import ProductCard from '../components/ProductCard'
import ContactCTA from '../components/ContactCTA'

const reasons = [
  { icon: '🌍', title: 'Global Sourcing', text: 'Fruits sourced from trusted growers across several countries.' },
  { icon: '✅', title: 'Quality Checked', text: 'Every shipment is inspected before it reaches you.' },
  { icon: '🚚', title: 'Reliable Delivery', text: 'Careful handling and timely delivery to keep fruit fresh.' },
  { icon: '🤝', title: 'Fair Pricing', text: 'Competitive wholesale prices with clear communication.' },
]

const stats = [
  { value: `${products.length}+`, label: 'Fruit Varieties' },
  { value: `${allOrigins.length}`, label: 'Sourcing Countries' },
  { value: '100%', label: 'Quality Focused' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-900 to-green-700 text-white">
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-300">
            {company.tagline}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Fresh Fruits, Imported With Care
          </h1>
          <p className="mt-5 max-w-xl text-lg text-green-100">
            We import apples, oranges, mandarins, pears, and grapes from the world’s best growing
            regions and deliver them to your business.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-orange-500 px-6 py-3 text-center font-semibold text-white hover:bg-orange-600"
            >
              Get a Free Quote
            </a>
            <Link
              to="/products"
              className="rounded-md border border-white px-6 py-3 text-center font-semibold hover:bg-white/10"
            >
              View Our Products →
            </Link>
          </div>
        </div>
      </section>

      {/* About blurb + stats */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-green-900 md:text-3xl">Who We Are</h2>
            <p className="mt-4 text-gray-600">
              {company.name} is an import company bringing fresh, high-quality fruit from
              around the world to local markets.
            </p>
            <Link to="/about" className="mt-5 inline-block font-semibold text-green-700 hover:underline">
              Learn more about us →
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl bg-green-50 p-5 text-center">
                <p className="text-3xl font-bold text-green-700">{s.value}</p>
                <p className="mt-1 text-xs text-gray-600">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-bold text-green-900 md:text-3xl">Our Fruits</h2>
            <Link to="/products" className="text-sm font-semibold text-green-700 hover:underline">
              View all →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 3).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center text-2xl font-bold text-green-900 md:text-3xl">Why Choose Us</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <div key={r.title} className="rounded-xl border border-gray-200 p-6 text-center">
              <div className="text-4xl">{r.icon}</div>
              <h3 className="mt-3 font-bold text-green-900">{r.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{r.text}</p>
            </div>
          ))}
        </div>
      </section>

      <ContactCTA />
    </>
  )
}