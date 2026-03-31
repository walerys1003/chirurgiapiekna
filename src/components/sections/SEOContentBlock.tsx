import Link from 'next/link';

export function SEOContentBlock() {
  return (
    <section
      style={{
        backgroundColor: 'var(--color-porcelain-200)',
        padding: '48px 0',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--content-max)',
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '14px',
            color: 'var(--color-porcelain-600)',
            lineHeight: 1.8,
            marginBottom: '16px',
          }}
        >
          ChirurgiaPiekna.com to niezależny portal informacyjny poświęcony chirurgii plastycznej w Polsce. Naszym celem jest dostarczanie rzetelnych informacji o zabiegach, chirurgach i klinikach, aby pomóc Ci podjąć świadomą decyzję o operacji.
        </p>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '14px',
            color: 'var(--color-porcelain-600)',
            lineHeight: 1.8,
            marginBottom: '16px',
          }}
        >
          W naszym portalu znajdziesz{' '}
          <Link
            href="/zabiegi/chirurgia-twarzy"
            style={{ color: 'var(--color-champagne-600)', textDecoration: 'underline' }}
          >
            zabiegi chirurgii twarzy
          </Link>
          ,{' '}
          <Link
            href="/zabiegi/chirurgia-piersi"
            style={{ color: 'var(--color-champagne-600)', textDecoration: 'underline' }}
          >
            operacje piersi
          </Link>
          ,{' '}
          <Link
            href="/zabiegi/plastyka-brzucha"
            style={{ color: 'var(--color-champagne-600)', textDecoration: 'underline' }}
          >
            plastykę brzucha
          </Link>
          {' '}oraz wiele innych procedur. Każdy opis zawiera informacje o przebiegu zabiegu, czasie rekonwalescencji i orientacyjnych kosztach.
        </p>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '14px',
            color: 'var(--color-porcelain-600)',
            lineHeight: 1.8,
          }}
        >
          Współpracujemy z najlepszymi polskimi chirurgami plastycznymi i klinikami, które oferują zabiegi na najwyższym poziomie. Przeglądaj{' '}
          <Link
            href="/chirurdzy"
            style={{ color: 'var(--color-champagne-600)', textDecoration: 'underline' }}
          >
            profile chirurgów
          </Link>
          {' '}i{' '}
          <Link
            href="/kliniki"
            style={{ color: 'var(--color-champagne-600)', textDecoration: 'underline' }}
          >
            informacje o klinikach
          </Link>
          , aby znaleźć specjalistę idealnie dopasowanego do Twoich potrzeb.
        </p>
      </div>
    </section>
  );
}