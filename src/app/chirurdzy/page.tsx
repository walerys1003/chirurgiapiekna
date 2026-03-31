import { Metadata } from 'next';
import { getMockSurgeons } from '@/lib/mock-data';
import { SurgeonCard } from '@/components/cards/SurgeonCard';

export const metadata: Metadata = {
  title: 'Chirurdzy plastyczni — ChirurgiaPiekna.com',
  description: 'Poznaj najlepszych chirurgów plastycznych w Polsce.',
};

export default function SurgeonsPage() {
  const surgeons = getMockSurgeons();

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
            Chirurdzy plastyczni
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              color: 'var(--color-porcelain-600)',
              marginTop: '8px',
            }}
          >
            Doświadczeni specjaliści z całej Polski
          </p>
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
      </div>
    </div>
  );
}