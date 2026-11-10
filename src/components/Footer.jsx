import { Link } from 'react-router-dom'
import { company, whatsappLink, emailLink } from '../data/company'

export default function Footer() {
  return (
    <footer className="bg-green-900 text-green-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-bold">
            <img src="/favicon.svg" alt="Logo" className="h-11 w-11" /> {company.name}
          </h3>
          <p className="mt-2 text-sm text-green-200">{company.tagline}</p>
        </div>

        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="mt-2 space-y-1 text-sm text-green-200">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/products" className="hover:text-white">Products</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Contact</h4>
          <ul className="mt-2 space-y-1 text-sm text-green-200">
            <li>{company.address}</li>
            <li>{company.phone}</li>
            <li><a href={emailLink()} className="hover:text-white">{company.email}</a></li>
            <li>
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="hover:text-white">
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>
        
      </div>

      <div className="border-t border-green-800 py-4 text-center text-xs text-green-300">
        © {new Date().getFullYear()} {company.name}. All rights reserved.
      </div>
    </footer>
  )
}