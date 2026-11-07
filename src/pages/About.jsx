import { company } from '../data/company'
import { allOrigins } from '../data/products'
import PageHeader from '../components/PageHeader'
import ContactCTA from '../components/ContactCTA'

export default function About() {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="Learn who we are and how we bring fresh fruit from farms around the world to your business."
      />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-green-900">Our Story</h2>
            <p className="mt-4 text-gray-600">
              {company.name} started with a simple goal: make quality imported fruit easy to
              get. This is placeholder text. Replace it with the company’s real history,
              founding year, and values.
            </p>
            <p className="mt-4 text-gray-600">
              Today we work with growers in several countries and supply wholesalers, retailers,
              and distributors. Add a second paragraph here about experience and customers.
            </p>
          </div>
          <div className="flex h-64 items-center justify-center rounded-xl bg-green-50 text-8xl">
            🍏
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-2">
          <div className="rounded-xl bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-green-900">🎯 Our Mission</h3>
            <p className="mt-3 text-gray-600">
              To deliver fresh, high-quality fruit reliably and at fair prices. Placeholder text.
            </p>
          </div>
          <div className="rounded-xl bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-green-900">🔭 Our Vision</h3>
            <p className="mt-3 text-gray-600">
              To become a trusted name in fruit importing in our region. Placeholder text.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-bold text-green-900">Where We Source From</h2>
        <p className="mt-3 text-gray-600">We import fruit from the following countries:</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {allOrigins.map((country) => (
            <span
              key={country}
              className="rounded-full bg-orange-50 px-5 py-2 text-sm font-medium text-orange-700"
            >
              {country}
            </span>
          ))}
        </div>
      </section>

      <ContactCTA />
    </>
  )
}