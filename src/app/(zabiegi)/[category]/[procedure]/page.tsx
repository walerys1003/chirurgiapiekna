import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getMockProcedureBySlug } from '@/lib/mock-data';
import { BreadcrumbNav } from '@/components/shared/BreadcrumbNav';
import { ProcedureMetrics } from '@/components/shared/ProcedureMetrics';

interface ProcedurePageProps {
  params: Promise<{
    category: string;
    procedure: string;
  }>;
}

const categoryNames: Record<string, string> = {
  'chirurgia-twarzy': 'Chirurgia Twarzy',
  'chirurgia-piersi': 'Chirurgia Piersi',
  'plastyka-brzucha': 'Plastyka Brzucha i Ciała',
  'chirurgia-intymna': 'Chirurgia Intymna',
  'rekonstrukcja': 'Zabiegi Rekonstrukcyjne',
  'lipofilling': 'Lipofilling',
};

export async function generateMetadata({ params }: ProcedurePageProps): Promise<Metadata> {
  const { procedure } = await params;
  const procedureData = getMockProcedureBySlug(procedure);

  if (!procedureData) {
    return { title: 'Zabieg nie znaleziony' };
  }

  return {
    title: procedureData.seo.title,
    description: procedureData.seo.description,
  };
}

export default async function ProcedurePage({ params }: ProcedurePageProps) {
  const { category, procedure } = await params;
  const procedureData = getMockProcedureBySlug(procedure);

  if (!procedureData) {
    notFound();
  }

  const categoryName = categoryNames[category] || category;

  const quickFacts = [
    { label: 'Czas operacji', value: procedureData.operationDuration },
    { label: 'Hospitalizacja', value: procedureData.hospitalization },
    { label: 'Znieczulenie', value: procedureData.anesthesiaType === 'local' ? 'Miejscowe' : procedureData.anesthesiaType === 'sedation' ? 'Sedacja' : 'Ogólne' },
    { label: 'Rekonwalescencja', value: procedureData.recoveryTime },
    { label: 'Trwałość efektu', value: procedureData.resultDuration },
  ];

  return (
    <div style={{ paddingTop: '72px' }}>
      <div
        style={{
          maxWidth: 'var(--container-max)',
          margin: '0 auto',
          padding: '40px 24px',
          display: 'grid',
          gridTemplateColumns: '1fr 380px',
          gap: '48px',
        }}
        className="procedure-layout"
      >
        <div>
          <BreadcrumbNav
            items={[
              { label: categoryName, href: `/zabiegi/${category}` },
              { label: procedureData.title },
            ]}
          />

          <span
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-data)',
              fontSize: '11px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-area-face)',
              marginTop: '24px',
              marginBottom: '8px',
            }}
          >
            {categoryName}
          </span>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 4vw, 42px)',
              color: 'var(--color-obsidian-900)',
              margin: '0 0 16px 0',
            }}
          >
            {procedureData.title}
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '18px',
              color: 'var(--color-porcelain-600)',
              margin: '0 0 24px 0',
            }}
          >
            {procedureData.excerpt}
          </p>

          <div
            style={{
              padding: '20px',
              backgroundColor: 'var(--color-porcelain-100)',
              borderRadius: 'var(--radius-md)',
              marginBottom: '32px',
            }}
          >
            <ProcedureMetrics
              painLevel={procedureData.painLevel}
              priceMin={procedureData.priceRange.min}
              priceMax={procedureData.priceRange.max}
              anesthesiaType={procedureData.anesthesiaType}
              recoveryTime={procedureData.recoveryTime}
              resultDuration={procedureData.resultDuration}
              satisfactionRate={procedureData.satisfactionRate}
            />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '16px',
              marginBottom: '32px',
            }}
          >
            {quickFacts.map((fact) => (
              <div
                key={fact.label}
                style={{
                  padding: '16px',
                  backgroundColor: 'var(--color-porcelain-100)',
                  borderRadius: 'var(--radius-sm)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '12px',
                    color: 'var(--color-porcelain-500)',
                    marginBottom: '4px',
                  }}
                >
                  {fact.label}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-data)',
                    fontSize: '14px',
                    color: 'var(--color-obsidian-900)',
                  }}
                >
                  {fact.value}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '24px',
              marginBottom: '32px',
            }}
          >
            <div>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '18px',
                  color: 'var(--color-obsidian-900)',
                  marginBottom: '12px',
                }}
              >
                Korzyści
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {procedureData.benefits.map((benefit, i) => (
                  <li
                    key={i}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                      color: 'var(--color-success)',
                      marginBottom: '8px',
                      paddingLeft: '20px',
                      position: 'relative',
                    }}
                  >
                    <span style={{ position: 'absolute', left: 0 }}>✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '18px',
                  color: 'var(--color-obsidian-900)',
                  marginBottom: '12px',
                }}
              >
                Ryzyko
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {procedureData.risks.map((risk, i) => (
                  <li
                    key={i}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                      color: 'var(--color-warning)',
                      marginBottom: '8px',
                      paddingLeft: '20px',
                      position: 'relative',
                    }}
                  >
                    <span style={{ position: 'absolute', left: 0 }}>△</span>
                    {risk}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{ marginBottom: '32px' }}>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '18px',
                color: 'var(--color-obsidian-900)',
                marginBottom: '12px',
              }}
            >
              Przeciwwskazania
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {procedureData.contraindications.map((contra, i) => (
                <li
                  key={i}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    color: 'var(--color-danger)',
                    marginBottom: '8px',
                    paddingLeft: '20px',
                    position: 'relative',
                  }}
                >
                  <span style={{ position: 'absolute', left: 0 }}>✕</span>
                  {contra}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '18px',
                color: 'var(--color-obsidian-900)',
                marginBottom: '16px',
              }}
            >
              Najczęściej zadawane pytania
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {procedureData.faq.map((faq, i) => (
                <details
                  key={i}
                  style={{
                    backgroundColor: 'var(--color-porcelain-100)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '16px',
                  }}
                >
                  <summary
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '16px',
                      color: 'var(--color-obsidian-900)',
                      cursor: 'pointer',
                    }}
                  >
                    {faq.question}
                  </summary>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                      color: 'var(--color-porcelain-600)',
                      marginTop: '12px',
                      lineHeight: 1.6,
                    }}
                  >
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            position: 'sticky',
            top: '100px',
            height: 'fit-content',
          }}
        >
          <div
            style={{
              backgroundColor: 'var(--color-porcelain-100)',
              borderRadius: 'var(--radius-lg)',
              padding: '24px',
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '16px',
                color: 'var(--color-obsidian-900)',
                marginBottom: '16px',
              }}
            >
              Podsumowanie
            </h3>

            <div style={{ marginBottom: '16px' }}>
              <ProcedureMetrics
                painLevel={procedureData.painLevel}
                priceMin={procedureData.priceRange.min}
                priceMax={procedureData.priceRange.max}
                anesthesiaType={procedureData.anesthesiaType}
                recoveryTime={procedureData.recoveryTime}
                resultDuration={procedureData.resultDuration}
                satisfactionRate={procedureData.satisfactionRate}
              />
            </div>

            <button
              style={{
                width: '100%',
                padding: '14px',
                backgroundColor: 'var(--color-champagne-500)',
                color: 'var(--color-obsidian-900)',
                border: 'none',
                borderRadius: '9999px',
                fontSize: '15px',
                fontFamily: 'var(--font-body)',
                cursor: 'pointer',
                marginBottom: '12px',
              }}
            >
              Umów konsultację
            </button>

            <button
              style={{
                width: '100%',
                padding: '14px',
                backgroundColor: 'transparent',
                color: 'var(--color-champagne-500)',
                border: '1px solid var(--color-champagne-400)',
                borderRadius: '9999px',
                fontSize: '15px',
                fontFamily: 'var(--font-body)',
                cursor: 'pointer',
              }}
            >
              Dodaj do porównwarki
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}