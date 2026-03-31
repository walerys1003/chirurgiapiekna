import { ImageAsset } from './Procedure';

export interface BeforeAfterCase {
  id: string;
  slug: string;
  procedureSlug: string;
  surgeonSlug: string;
  clinicSlug: string;
  title: string;
  description: string;
  beforeImage: ImageAsset;
  afterImage: ImageAsset;
  patientAge: number;
  patientGender: 'female' | 'male';
  timeAfterProcedure: string;
  patientTestimonial?: string;
  tags: string[];
  featured: boolean;
}