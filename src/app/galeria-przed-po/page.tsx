import { Metadata } from 'next';
import Image from 'next/image';
import { getMockBeforeAfterCases } from '@/lib/mock-data';

export const metadata: Metadata = {
  title: 'Galeria Przed i Po — ChirurgiaPiekna.com',
  description: 'Realne transformacje — zdjęcia przed i po zabiegach chirurgii plastycznej.',
};

export default function GalleryPage() {
  const cases = getMockBeforeAfterCases();

  return (
    <div style={{ paddingTop: '72px' }}>
      <div
        style={{
          maxWidth: 'var(--container-max)',
          margin: '0 auto',
          padding: '60px 24px',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '44px',
              color: 'var(--color-obsidian-900)',
              margin: 0,
            }}
          >
            Galeria efektów
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              color: 'var(--color-porcelain-600)',
              marginTop: '8px',
            }}
          >
            Realne transformacje — zdjęcia przed i po zabiegach
          </p>
          <p
            style={{
              fontFamily: 'var(--font-data)',
              fontSize: '12px',
              color: 'var(--color-porcelain-500)',
              marginTop: '16px',
            }}
          >
            Zdjęcia publikowane za zgodą pacjentów
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }}
          className="gallery-grid"
        >
          {cases.map((caseItem) => (
            <div
              key={caseItem.id}
              style={{
                position: 'relative',
                aspectRatio: '4/3',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                cursor: 'pointer',
              }}
            >
              <Image
                src={caseItem.afterImage.url}
                alt={caseItem.afterImage.alt}
                fill
                style={{ objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(8,17,30,0.9), transparent 60%)',
                  opacity: 0,
                  transition: 'opacity 0.4s',
                }}
                className="gallery-overlay"
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '24px',
                  opacity: 0,
                  transition: 'opacity 0.4s',
                }}
                className="gallery-content"
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '16px',
                    color: 'var(--color-porcelain-50)',
                    margin: 0,
                  }}
                >
                  {caseItem.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-data)',
                    fontSize: '12px',
                    color: 'var(--color-porcelain-300)',
                    marginTop: '4px',
                  }}
                >
                  {caseItem.timeAfterProcedure}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .gallery-grid > div:hover .gallery-overlay,
        .gallery-grid > div:hover .gallery-content {
          opacity: 1;
        }
        @media (max-width: 1024px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .gallery-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}