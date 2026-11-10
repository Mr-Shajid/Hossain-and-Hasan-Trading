// All company details live here.
export const company = {
  name: 'Hossain & Hasan Trading',
  tagline: 'Your Trusted Fresh Fruit Import Partner',
  address: 'Firingi Bazar, Chattogram, Bangladesh',
  phone: '+8801819313542 ',
  whatsappNumber: '01879466744', // digits only
  email: 'hossainsonsctg@gmail.com',
}

export const whatsappLink = (message = 'Hello, I would like to request a quote.') =>
  `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(message)}`

export const emailLink = (subject = 'Quote Request') =>
  `mailto:${company.email}?subject=${encodeURIComponent(subject)}`