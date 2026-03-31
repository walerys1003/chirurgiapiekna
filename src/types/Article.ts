import { ImageAsset, SEOData } from './Procedure';

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: ImageAsset;
  category: string;
  author: string;
  publishedAt: string;
  seo: SEOData;
}

export interface PatientReview {
  id: string;
  procedureSlug: string;
  surgeonSlug: string;
  clinicSlug: string;
  patientInitials: string;
  patientAge: number;
  patientCity: string;
  rating: number;
  content: string;
  procedureName: string;
  publishedAt: string;
}