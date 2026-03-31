import { Article } from '@/types';

const articles: Article[] = [
  {
    id: '1',
    slug: 'regeneracyjna-chirurgia-prp-nano-fat-egzosomy',
    title: 'Regeneracyjna chirurgia — PRP, nano fat i egzosomy',
    excerpt: 'Nowe technologie w regeneracyjnej chirurgii plastycznej: jak wykorzystać własne komórki do odmładzania.',
    content: '',
    featuredImage: {
      url: '/images/articles/regeneracyjna.jpg',
      alt: 'Regeneracyjna chirurgia plastyczna',
      width: 1200,
      height: 675,
    },
    category: 'trendy',
    author: 'ChirurgiaPiekna',
    publishedAt: '2026-03-15',
    seo: {
      title: 'Regeneracyjna chirurgia — PRP, nano fat i egzosomy | ChirurgiaPiekna',
      description: 'Nowe technologie w regeneracyjnej chirurgii plastycznej.',
    },
  },
  {
    id: '2',
    slug: 'glp-1 makeover-chirurgia-po-ozempic',
    title: 'GLP-1 Makeover — chirurgia po Ozempic',
    excerpt: 'Jak Ozempic zmienił chirurgię plastyczną i jakie zabiegi są teraz najpopularniejsze.',
    content: '',
    featuredImage: {
      url: '/images/articles/ozempic.jpg',
      alt: 'Chirurgia po Ozempic',
      width: 1200,
      height: 675,
    },
    category: 'trendy',
    author: 'ChirurgiaPiekna',
    publishedAt: '2026-03-10',
    seo: {
      title: 'GLP-1 Makeover — chirurgia po Ozempic | ChirurgiaPiekna',
      description: 'Jak Ozempic wpłynął na chirurgię plastyczną.',
    },
  },
  {
    id: '3',
    slug: 'jak-wybrac-chirurga-plastycznego-kompletny-poradnik',
    title: 'Jak wybrać chirurga plastycznego — kompletny poradnik',
    excerpt: 'Na co zwrócić uwagę przy wyborze chirurga plastycznego? Certyfikaty, doświadczenie, opinie pacjentów.',
    content: '',
    featuredImage: {
      url: '/images/articles/wybor-chirurga.jpg',
      alt: 'Jak wybrać chirurga plastycznego',
      width: 1200,
      height: 675,
    },
    category: 'poradnik',
    author: 'ChirurgiaPiekna',
    publishedAt: '2026-03-01',
    seo: {
      title: 'Jak wybrać chirurga plastycznego — poradnik | ChirurgiaPiekna',
      description: 'Kompletny poradnik wyboru chirurga plastycznego.',
    },
  },
  {
    id: '4',
    slug: 'deep-plane-facelift-subtelne-odmłodzenie',
    title: 'Deep Plane Facelift — subtelne odmłodzenie nowej generacji',
    excerpt: 'Technologia deep plane revolution w liftingu twarzy — mniej inwazyjnie, naturalniej, trwalej.',
    content: '',
    featuredImage: {
      url: '/images/articles/deep-plane.jpg',
      alt: 'Deep Plane Facelift',
      width: 1200,
      height: 675,
    },
    category: 'trendy',
    author: 'ChirurgiaPiekna',
    publishedAt: '2026-02-20',
    seo: {
      title: 'Deep Plane Facelift — subtelne odmłodzenie | ChirurgiaPiekna',
      description: 'Nowa generacja liftingu twarzy metodą deep plane.',
    },
  },
];

export function getMockArticles() {
  return articles;
}