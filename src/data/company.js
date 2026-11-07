// All company details live here. Replace the placeholders with real info.
export const company = {
  name: 'Your Company Name',
  tagline: 'Your Trusted Fresh Fruit Import Partner',
  address: '123 Placeholder Street, City, Country',
  phone: '+00 000 000 0000',
  whatsappNumber: '0000000000', // digits only, with country code, no + or spaces
  email: 'info@example.com',
}

export const whatsappLink = (message = 'Hello, I would like to request a quote.') =>
  `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(message)}`

export const emailLink = (subject = 'Quote Request') =>
  `mailto:${company.email}?subject=${encodeURIComponent(subject)}`