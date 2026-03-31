import Link from 'next/link';
import Image from 'next/image';
import { Clinic } from '@/types';
import { RatingDisplay } from '@/components/shared/RatingDisplay';

interface ClinicCardProps {
  clinic: Clinic;
}

const priceLevelLabels: Record<string, string> = {
  budget: 'Ekonomiczna',
  mid: 'Średnia',
  premium: 'Premium',
  luxury: 'Luksus',
};

export function ClinicCard({ clinic }: ClinicCardProps) {
  const href = `/kliniki/${clinic.slug}`;

  return (
    <Link href={href} style={{ textDecoration: 'none', display: 'block' }}>
      <div
        style={{
          backgroundColor: 'var(--color-porcelain-50)',
          borderRadius: 'var(--radius-lg)',
          padding: '20px',
          boxShadow: 'var(--shadow-card)',
          transition: 'box-shadow 0.4s, transform 0.3s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = 'var(--shadow-elevated)';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = 'var(--shadow-card)';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
          {clinic.logo && (
            <div
              style={{
                position: 'relative',
                width: '48px',
                height: '48px',
                flexShrink: 0,
              }}
            >
              <Image
                src={clinic.logo.url}
                alt={clinic.logo.alt}
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          )}

          <div style={{ flex: 1 }}>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '16px',
                color: 'var(--color-obsidian-900)',
                margin: '0 0 4px 0',
              }}
            >
              {clinic.name}
            </h3>

            <p
              style={{
                fontFamily: 'var(--font-data)',
                fontSize: '12px',
                color: 'var(--color-porcelain-500)',
                margin: '0 0 12px 0',
              }}
            >
              {clinic.city}
            </p>

            <RatingDisplay rating={clinic.rating} reviewCount={clinic.reviewCount} />

            <div
              style={{
                marginTop: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-data)',
                  fontSize: '11px',
                  color: 'var(--color-champagne-600)',
                }}
              >
                {priceLevelLabels[clinic.priceLevel]}
              </span>

              {clinic.financing && (
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '11px',
                    color: 'var(--color-porcelain-500)',
                  }}
                >
                  · Raty
                </span>
              )}
            </div>

            {clinic.features.length > 0 && (
              <div
                style={{
                  marginTop: '12px',
                  fontSize: '12px',
                  color: 'var(--color-porcelain-500)',
                }}
              >
                {clinic.features.slice(0, 2).join(' · ')}
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}