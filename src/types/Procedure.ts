export interface ImageAsset {
  url: string;
  alt: string;
  width: number;
  height: number;
  blurDataURL?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface AfterCareStep {
  day: string;
  instruction: string;
}

export interface SEOData {
  title: string;
  description: string;
  canonical?: string;
}

export interface Procedure {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  categorySlug: string;
  subcategorySlug: string;
  bodyArea: 'face' | 'breast' | 'body' | 'intimate' | 'reconstructive';
  featuredImage: ImageAsset;
  painLevel: number;
  priceRange: { min: number; max: number };
  recoveryTime: string;
  anesthesiaType: 'local' | 'sedation' | 'general';
  resultDuration: string;
  operationDuration: string;
  hospitalization: string;
  satisfactionRate: number;
  popularityScore: number;
  contraindications: string[];
  risks: string[];
  benefits: string[];
  aftercareSteps: AfterCareStep[];
  faq: FAQ[];
  relatedProcedures: string[];
  seo: SEOData;
  updatedAt: string;
}