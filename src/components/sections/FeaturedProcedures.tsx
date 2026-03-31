"use client";

import Link from 'next/link';
import { ProcedureCard } from '@/components/cards/ProcedureCard';
import { getMockProcedures } from '@/lib/mock-data';

export function FeaturedProcedures() {
  const procedures = getMockProcedures().slice(0, 4);

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
        <div
          style={{
            textAlign: 'center',
            marginBottom: '64px',
          }}
        >
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
            ZABIEGI
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 4vw, 50px)',
              color: 'var(--color-obsidian-900)',
              margin: 0,
            }}
          >
            Najpopularniejsze zabiegi
          </h2>
          <div
            style={{
              width: '60px',
              height: '1px',
              backgroundColor: 'var(--color-champagne-300)',
              margin: '16px auto 0',
            }}
          />
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '32px',
          }}
          className="md:grid-cols-2 lg:grid-cols-2"
        >
          {procedures.map((procedure, index) => (
            <div
              key={procedure.id}
              style={{
                gridColumn: index === 0 ? 'span 1' : 'span 1',
              }}
            >
              <ProcedureCard
                procedure={procedure}
                variant={index === 0 ? 'large' : 'default'}
              />
            </div>
          ))}
        </div>

        <div
          style={{
            textAlign: 'center',
            marginTop: '48px',
          }}
        >
          <Link
            href="/zabiegi"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '15px',
              color: 'var(--color-porcelain-600)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--color-champagne-600)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--color-porcelain-600)';
            }}
          >
            Kolekcja 62 zabiegów
          </Link>
        </div>
      </div>
    </section>
  );
}