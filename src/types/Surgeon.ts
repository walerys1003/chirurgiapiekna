import { ImageAsset, SEOData } from './Procedure';

export interface Certification {
  name: string;
  issuer: string;
  year: number;
  verifyUrl?: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: number;
}

export interface Surgeon {
  id: string;
  slug: string;
  name: string;
  title: string;
  specializations: string[];
  bio: string;
  photo: ImageAsset;
  certifications: Certification[];
  clinicSlugs: string[];
  procedureSlugs: string[];
  yearsExperience: number;
  operationsCount: number;
  rating: number;
  reviewCount: number;
  city: string;
  education: Education[];
  memberships: string[];
  seo: SEOData;
}