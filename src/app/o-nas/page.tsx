import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'O portalu — ChirurgiaPiekna.com',
  description: 'Poznaj misję i cele portalu ChirurgiaPiekna.com.',
};

export default function ONasPage() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <div
        style={{
          maxWidth: 'var(--content-max)',
          margin: '0 auto',
          padding: '60px 24px',
        }}
      >
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '44px',
            color: 'var(--color-obsidian-900)',
            marginBottom: '32px',
          }}
        >
          O portalu ChirurgiaPiekna.com
        </h1>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '16px',
            color: 'var(--color-porcelain-700)',
            lineHeight: 1.8,
            marginBottom: '24px',
          }}
        >
          ChirurgiaPiekna.com to niezależny portal informacyjny poświęcony chirurgii plastycznej w Polsce. Naszą misją jest dostarczanie rzetelnych, obiektywnych i aktualnych informacji o zabiegach chirurgii plastycznej, chirurgach i klinikach.
        </p>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '16px',
            color: 'var(--color-porcelain-700)',
            lineHeight: 1.8,
            marginBottom: '24px',
          }}
        >
          Wierzymy, że każdy pacjent zasługuje na dostęp do wysokiej jakości informacji, które pomogą mu podjąć świadomą decyzję o zabiegu. Współpracujemy z najlepszymi polskimi chirurgami plastycznymi i stale monitorujemy jakość świadczonych usług.
        </p>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '16px',
            color: 'var(--color-porcelain-700)',
            lineHeight: 1.8,
          }}
        >
          Portal nie jest powiązany z żadną konkretną kliniką ani producentem implantów. Nasze rekomendacje opierają się wyłącznie na opiniach pacjentów i kwalifikacjach specjalistów.
        </p>
      </div>
    </div>
  );
}