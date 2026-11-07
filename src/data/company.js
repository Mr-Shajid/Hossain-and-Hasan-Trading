// All company details live here.
export const company = {
  name: 'Hossain & Hasan Trading',
  tagline: 'Your Trusted Fresh Fruit Import Partner',
  address: '123 Placeholder Street, City, Country',
  phone: '+00 000 000 0000',
  whatsappNumber: '0000000000', // digits only
  email: 'info@example.com',
}

export const whatsappLink = (message = 'Hello, I would like to request a quote.') =>
  `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(message)}`

export const emailLink = (subject = 'Quote Request') =>
  `mailto:${company.email}?subject=${encodeURIComponent(subject)}`