import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { company } from '../data/company'

const titles = {
  '/about': 'About Us',
  '/services': 'Services',
  '/products': 'Products',
  '/contact': 'Contact Us',
}

export default function PageTitle() {
  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname === '/') {
      document.title = `${company.name} | Fresh Fruit Importers`
    } else if (titles[pathname]) {
      document.title = `${titles[pathname]} | ${company.name}`
    } else {
      document.title = `Page Not Found | ${company.name}`
    }
  }, [pathname])

  return null
}