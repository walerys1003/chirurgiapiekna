import Link from 'next/link';
import { getMockProcedures } from '@/lib/mock-data';
import { formatPrice } from '@/lib/utils';

const displayProcedures = [
  { slug: 'rhinoplastyka-estetyczna', name: 'Rhinoplastyka' },
  { slug: 'powiekszanie-piersi-implantami', name: 'Powiększanie piersi' },
  { slug: 'liposukcja-vaser', name: 'Liposukcja VASER' },
  { slug: 'lifting-twarzy-deep-plane', name: 'Lifting twarzy' },
  { slug: 'abdominoplastyka-pelna', name: 'Abdominoplastyka' },
  { slug: 'blefaroplastyka-gorna', name: 'Blefaroplastyka' },
];

export function PriceGuideTeaser() {
  const procedures = getMockProcedures();
  const maxPrice = Math.max(...displayProcedures.map((p) => {
    const proc = procedures.find((pr) => pr.slug === p.slug);
    return proc ? proc.priceRange.max : 0;
  }));

  return (
    <section
      style={{
        backgroundColor: 'var(--color-obsidian-950)',
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
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 4vw, 44px)',
              color: 'var(--color-porcelain-50)',
              margin: 0,
            }}
          >
            Ile kosztuje chirurgia plastyczna?
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              color: 'var(--color-porcelain-400)',
              marginTop: '8px',
            }}
          >
            Orientacyjne ceny zabiegów w Polsce
          </p>
        </div>

        <div
          style={{
            maxWidth: '700px',
            margin: '0 auto',
          }}
        >
          {displayProcedures.map((item) => {
            const procedure = procedures.find((p) => p.slug === item.slug);
            if (!procedure) return null;

            const barWidth = (procedure.priceRange.max / maxPrice) * 100;

            return (
              <div
                key={item.slug}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '180px 1fr 160px',
                  gap: '16px',
                  alignItems: 'center',
                  marginBottom: '20px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    color: 'var(--color-porcelain-300)',
                  }}
                >
                  {item.name}
                </span>
                <div
                  style={{
                    height: '4px',
                    borderRadius: '2px',
                    background: 'rgba(255,255,255,0.06)',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      width: `${barWidth}%`,
                      background: 'linear-gradient(90deg, var(--color-champagne-500), var(--color-champagne-300))',
                      borderRadius: '2px',
                    }}
                  />
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-data)',
                    fontSize: '13px',
                    color: 'var(--color-champagne-300)',
                    textAlign: 'right',
                  }}
                >
                  {formatPrice(procedure.priceRange.min, procedure.priceRange.max)}
                </span>
              </div>
            );
          })}
        </div>

        <p
          style={{
            textAlign: 'center',
            fontFamily: 'var(--font-body)',
            fontSize: '12px',
            fontStyle: 'italic',
            color: 'var(--color-porcelain-500)',
            marginTop: '32px',
          }}
        >
          Ceny orientacyjne. Dokładną wycenę uzyskasz na konsultacji.
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '24px',
            marginTop: '32px',
          }}
        >
          <Link
            href="/cennik"
            style={{
              color: 'var(--color-champagne-400)',
              fontSize: '15px',
              textDecoration: 'none',
            }}
          >
            Pełny cennik ↗
          </Link>
          <span style={{ color: 'var(--color-porcelain-600)' }}>·</span>
          <Link
            href="/zabiegi"
            style={{
              color: 'var(--color-champagne-400)',
              fontSize: '15px',
              textDecoration: 'none',
            }}
          >
            Porównaj zabiegi ↗
          </Link>
        </div>
      </div>
    </section>
  );
}