import { whatsappLink, emailLink } from '../data/company'

export default function ContactCTA() {
  return (
    <section className="bg-green-700 py-14 text-white">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-2xl font-bold md:text-3xl">Ready to place an order?</h2>
        <p className="mx-auto mt-3 max-w-xl text-green-100">
          Tell us what you need and we will get back to you with a quote.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="w-full rounded-md bg-white px-6 py-3 font-semibold text-green-800 hover:bg-green-50 sm:w-auto"
          >
            Chat on WhatsApp
          </a>
          <a
            href={emailLink()}
            className="w-full rounded-md border border-white px-6 py-3 font-semibold hover:bg-green-800 sm:w-auto"
          >
            Send an Email
          </a>
        </div>
      </div>
    </section>
  )
}