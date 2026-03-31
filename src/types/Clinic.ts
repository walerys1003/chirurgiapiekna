import { ImageAsset, SEOData } from './Procedure';

export interface Clinic {
  id: string;
  slug: string;
  name: string;
  description: string;
  city: string;
  address: string;
  phone: string;
  website: string;
  logo: ImageAsset;
  photos: ImageAsset[];
  surgeonSlugs: string[];
  procedureSlugs: string[];
  rating: number;
  reviewCount: number;
  certifications: string[];
  priceLevel: 'budget' | 'mid' | 'premium' | 'luxury';
  features: string[];
  financing: boolean;
  medicalTourism: boolean;
  languages: string[];
  seo: SEOData;
}