"use client";

import Image from 'next/image';
import Link from 'next/link';
import { BeforeAfterSlider } from '@/components/shared/BeforeAfterSlider';
import { getMockBeforeAfterCases } from '@/lib/mock-data';

export function BeforeAfterShowcase() {
  const cases = getMockBeforeAfterCases();
  const featuredCase = cases.find((c) => c.featured) || cases[0];
  const thumbnailCases = cases.slice(0, 4);

  return (
    <section
      style={{
        backgroundColor: 'var(--color-obsidian-950)',
        padding: 'calc(var(--section-gap) + 40px) 0',
        clipPath: 'polygon(0 0, 100% 2.5%, 100% 100%, 0% 97.5%)',
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
          <p
            style={{
              fontFamily: 'var(--font-data)',
              fontSize: '12px',
              letterSpacing: '0.2em',
              color: 'var(--color-champagne-500)',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}
          >
            EFEKTY
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 4vw, 44px)',
              color: 'var(--color-porcelain-50)',
              margin: 0,
            }}
          >
            Transformacje, które mówią same za siebie
          </h2>
          <div
            style={{
              width: '60px',
              height: '1px',
              backgroundColor: 'var(--color-champagne-400)',
              margin: '16px auto 0',
            }}
          />
        </div>

        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          <BeforeAfterSlider
            beforeSrc={featuredCase.beforeImage.url}
            afterSrc={featuredCase.afterImage.url}
            beforeAlt={featuredCase.beforeImage.alt}
            afterAlt={featuredCase.afterImage.alt}
          />

          <div
            style={{
              textAlign: 'center',
              marginTop: '16px',
              fontFamily: 'var(--font-data)',
              fontSize: '13px',
              color: 'var(--color-porcelain-400)',
            }}
          >
            {featuredCase.title} · {featuredCase.timeAfterProcedure}
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '16px',
            maxWidth: '600px',
            margin: '40px auto 0',
          }}
        >
          {thumbnailCases.map((caseItem) => (
            <div
              key={caseItem.id}
              style={{
                position: 'relative',
                aspectRatio: '1/1',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                opacity: 0.6,
                cursor: 'pointer',
                transition: 'opacity 0.4s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '0.6';
              }}
            >
              <Image
                src={caseItem.afterImage.url}
                alt={caseItem.afterImage.alt}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>

        <p
          style={{
            textAlign: 'center',
            fontFamily: 'var(--font-body)',
            fontSize: '12px',
            color: 'var(--color-porcelain-500)',
            marginTop: '32px',
          }}
        >
          Zdjęcia publikowane za zgodą pacjentów
        </p>

        <div style={{ textAlign: 'center', marginTop: '24px' }}>
          <Link
            href="/galeria-przed-po"
            style={{
              color: 'var(--color-champagne-400)',
              fontSize: '15px',
              textDecoration: 'none',
            }}
          >
            Przeglądaj galerię ↗
          </Link>
        </div>
      </div>
    </section>
  );
}