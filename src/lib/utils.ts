import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(min: number, max: number): string {
  const fmt = new Intl.NumberFormat('pl-PL');
  if (min === max) return `${fmt.format(min)} PLN`;
  return `${fmt.format(min)} – ${fmt.format(max)} PLN`;
}

export function formatPriceFrom(min: number): string {
  return `od ${new Intl.NumberFormat('pl-PL').format(min)} PLN`;
}