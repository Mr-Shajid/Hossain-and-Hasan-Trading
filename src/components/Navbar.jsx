import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { company } from '../data/company'
import { products } from '../data/products'

const linkClass = ({ isActive }) =>
  `px-3 py-2 text-sm font-medium transition-colors ${
    isActive ? 'text-green-700' : 'text-gray-700 hover:text-green-700'
  }`

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" onClick={close} className="flex items-center gap-2 text-l font-bold text-green-700">
          <img src="/favicon.svg" alt="Logo" className="h-11 w-11" />
          <span>{company.name}</span>
        </Link>

        {/* Desktop menu */}
        <ul className="hidden items-center gap-1 md:flex">
          <li><NavLink to="/" end className={linkClass}>Home</NavLink></li>
          <li><NavLink to="/about" className={linkClass}>About Us</NavLink></li>
          <li><NavLink to="/services" className={linkClass}>Services</NavLink></li>

          <li className="group relative">
            <NavLink to="/products" className={linkClass}>Products ▾</NavLink>
            <ul className="invisible absolute left-0 top-full w-48 rounded-md border border-gray-200 bg-white py-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              {products.map((p) => (
                <li key={p.id}>
                  <Link
                    to={`/products#${p.id}`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700"
                  >
                    {p.emoji} {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li><NavLink to="/contact" className={linkClass}>Contact Us</NavLink></li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 text-gray-700 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="space-y-1 border-t border-gray-200 bg-white px-4 py-3 md:hidden">
          <li><NavLink to="/" end onClick={close} className={linkClass}>Home</NavLink></li>
          <li><NavLink to="/about" onClick={close} className={linkClass}>About Us</NavLink></li>
          <li><NavLink to="/services" onClick={close} className={linkClass}>Services</NavLink></li>
          <li><NavLink to="/products" onClick={close} className={linkClass}>Products</NavLink></li>
          {/*{products.map((p) => (
            <li key={p.id} className="pl-6">
              <Link
                to={`/products#${p.id}`}
                onClick={close}
                className="block py-1 text-sm text-gray-600 hover:text-green-700"
              >
                {p.emoji} {p.name}
              </Link>
            </li>
          ))}*/}
          <li><NavLink to="/contact" onClick={close} className={linkClass}>Contact Us</NavLink></li>
        </ul>
      )}
    </header>
  )
}