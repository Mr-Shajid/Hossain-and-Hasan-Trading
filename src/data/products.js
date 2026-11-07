// Product catalog. Add "image" later (e.g. '/images/apple.jpg') and swap the emoji.
export const products = [
  {
    id: 'apple',
    name: 'Apple',
    emoji: '🍎',
    origins: ['China', 'Brazil', 'Poland', 'South Africa', 'India'],
    description: 'Crisp, juicy apples sourced from trusted growers. Placeholder description.',
  },
  {
    id: 'orange',
    name: 'Orange',
    emoji: '🍊',
    origins: ['China', 'South Africa', 'Egypt'],
    description: 'Sweet, vitamin-rich oranges for retail and wholesale. Placeholder description.',
  },
  {
    id: 'mandarin',
    name: 'Mandarin',
    emoji: '🍊',
    origins: ['South Africa', 'China'],
    description: 'Easy-peel mandarins with a naturally sweet flavor. Placeholder description.',
  },
  {
    id: 'pears',
    name: 'Pears',
    emoji: '🍐',
    origins: ['China'],
    description: 'Fresh, tender pears selected for quality. Placeholder description.',
  },
  {
    id: 'grapes',
    name: 'Grapes',
    emoji: '🍇',
    origins: ['China'],
    description: 'Fresh grapes packed to preserve quality in transit. Placeholder description.',
  },
]

// Unique list of all origin countries, built from the products above
export const allOrigins = [...new Set(products.flatMap((p) => p.origins))]