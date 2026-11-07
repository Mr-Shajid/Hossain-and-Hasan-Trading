import PageHeader from '../components/PageHeader'
import ContactCTA from '../components/ContactCTA'

const services = [
  { icon: '🌍', title: 'Import & Sourcing', text: 'We find and buy fruit directly from trusted growers abroad. Placeholder text.' },
  { icon: '🔍', title: 'Quality Inspection', text: 'Each shipment is checked for freshness, size, and condition. Placeholder text.' },
  { icon: '❄️', title: 'Cold-Chain Logistics', text: 'Temperature-controlled transport keeps fruit fresh from port to you. Placeholder text.' },
  { icon: '📦', title: 'Wholesale Supply', text: 'Bulk supply for retailers, markets, and distributors. Placeholder text.' },
]

const steps = [
  { n: '1', title: 'Send an Inquiry', text: 'Tell us the fruit and quantity you need.' },
  { n: '2', title: 'Get a Quote', text: 'We reply with pricing and availability.' },
  { n: '3', title: 'We Import', text: 'We source, inspect, and ship your order.' },
  { n: '4', title: 'Delivery', text: 'Fresh fruit arrives at your location.' },
]

export default function Services() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="From sourcing to delivery, we handle the whole import process for you."
      />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border border-gray-200 p-6">
              <div className="text-4xl">{s.icon}</div>
              <h3 className="mt-3 text-lg font-bold text-green-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-2xl font-bold text-green-900">How It Works</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-700 text-lg font-bold text-white">
                  {s.n}
                </div>
                <h3 className="mt-4 font-bold text-green-900">{s.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}