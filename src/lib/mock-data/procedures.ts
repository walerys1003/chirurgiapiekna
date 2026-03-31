import { Procedure } from '@/types';

const procedures: Procedure[] = [];

export function getMockProcedures(): Procedure[] {
  return procedures;
}

export function getMockProcedureBySlug(slug: string): Procedure | undefined {
  return procedures.find(p => p.slug === slug);
}