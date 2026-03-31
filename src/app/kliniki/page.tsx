import { Metadata } from 'next';
import { getMockClinics } from '@/lib/mock-data';
import { ClinicCard } from '@/components/cards/ClinicCard';

export const metadata: Metadata = {
  title: 'Kliniki chirurgii plastycznej — ChirurgiaPiekna.com',
  description: 'Znajdź najlepsze kliniki chirurgii plastycznej w Polsce.',
};

export default function ClinicsPage() {
  const clinics = getMockClinics();

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
            Kliniki chirurgii plastycznej
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              color: 'var(--color-porcelain-600)',
              marginTop: '8px',
            }}
          >
            Znajdź najlepsze ośrodki w Polsce
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '24px',
          }}
        >
          {clinics.map((clinic) => (
            <ClinicCard key={clinic.id} clinic={clinic} />
          ))}
        </div>
      </div>
    </div>
  );
}