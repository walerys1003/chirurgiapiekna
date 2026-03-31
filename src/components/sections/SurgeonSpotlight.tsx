import Link from 'next/link';
import { SurgeonCard } from '@/components/cards/SurgeonCard';
import { getMockSurgeons } from '@/lib/mock-data';

export function SurgeonSpotlight() {
  const surgeons = getMockSurgeons().slice(0, 3);

  return (
    <section
      style={{
        paddingTop: 'var(--section-gap)',
        paddingBottom: 'var(--section-gap)',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--container-max)',
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        <div style={{ marginBottom: '48px' }}>
          <p
            style={{
              fontFamily: 'var(--font-data)',
              fontSize: '12px',
              letterSpacing: '0.2em',
              color: 'var(--color-champagne-600)',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}
          >
            CHIRURDZY
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 4vw, 44px)',
              color: 'var(--color-obsidian-900)',
              margin: 0,
            }}
          >
            Poznaj najlepszych chirurgów
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.3fr 1fr 1fr',
            gap: '32px',
          }}
        >
          {surgeons.map((surgeon) => (
            <SurgeonCard key={surgeon.id} surgeon={surgeon} />
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link
            href="/chirurdzy"
            style={{
              color: 'var(--color-porcelain-600)',
              fontSize: '15px',
              textDecoration: 'none',
            }}
          >
            Wszyscy chirurdzy ↗
          </Link>
        </div>
      </div>
    </section>
  );
}