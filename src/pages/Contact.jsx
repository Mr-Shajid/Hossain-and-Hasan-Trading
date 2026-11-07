import { company, whatsappLink, emailLink } from '../data/company'
import PageHeader from '../components/PageHeader'

const telLink = `tel:${company.phone.replace(/[^\d+]/g, '')}`

export default function Contact() {
  const details = [
    { icon: '📍', label: 'Address', value: company.address },
    { icon: '📞', label: 'Phone', value: company.phone, href: telLink },
    { icon: '✉️', label: 'Email', value: company.email, href: emailLink() },
  ]

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Have a question or want a quote? Reach out and we will reply as soon as possible."
      />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          {/* Contact details */}
          <div className="space-y-4">
            {details.map((d) => (
              <div key={d.label} className="flex items-start gap-4 rounded-xl border border-gray-200 p-5">
                <div className="text-3xl">{d.icon}</div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    {d.label}
                  </p>
                  {d.href ? (
                    <a href={d.href} className="mt-1 block font-medium text-green-800 hover:underline">
                      {d.value}
                    </a>
                  ) : (
                    <p className="mt-1 font-medium text-gray-800">{d.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="rounded-xl bg-green-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Business Hours
              </p>
              <p className="mt-1 text-gray-700">Mon – Sat: 9:00 AM – 6:00 PM (placeholder)</p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col justify-center rounded-2xl bg-green-700 p-8 text-white">
            <h2 className="text-2xl font-bold">Get a Quote Fast</h2>
            <p className="mt-3 text-green-100">
              The quickest way to reach us is WhatsApp. Tell us the fruit, quantity, and delivery
              location, and we will send you pricing.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="rounded-md bg-white px-6 py-3 text-center font-semibold text-green-800 hover:bg-green-50"
              >
                💬 Chat on WhatsApp
              </a>
              <a
                href={emailLink()}
                className="rounded-md border border-white px-6 py-3 text-center font-semibold hover:bg-green-800"
              >
                ✉️ Send an Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}