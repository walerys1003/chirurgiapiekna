export const siteConfig = {
  name: 'ChirurgiaPiekna',
  tagline: 'Precyzja. Piękno. Zaufanie.',
  description: 'Niezależny portal — zabiegi chirurgii plastycznej, chirurdzy, kliniki, ceny, galerie efektów.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://chirurgiapiekna.com',
  graphqlUrl: process.env.WORDPRESS_GRAPHQL_URL || '',
  locale: 'pl_PL',
  language: 'pl',
  currency: 'PLN',
  categories: [
    { id: 'chirurgia-twarzy', name: 'Chirurgia Twarzy', color: 'var(--area-face)' },
    { id: 'chirurgia-piersi', name: 'Chirurgia Piersi', color: 'var(--area-breast)' },
    { id: 'plastyka-brzucha', name: 'Plastyka Brzucha i Ciała', color: 'var(--area-body)' },
    { id: 'chirurgia-intymna', name: 'Chirurgia Intymna', color: 'var(--area-intimate)' },
    { id: 'rekonstrukcja', name: 'Zabiegi Rekonstrukcyjne', color: 'var(--area-recon)' },
    { id: 'lipofilling', name: 'Lipofilling', color: 'var(--area-body)' },
  ],
  social: {
    instagram: 'https://instagram.com/chirurgiapiekna',
    facebook: 'https://facebook.com/chirurgiapiekna',
    youtube: 'https://youtube.com/@chirurgiapiekna',
  },
} as const;