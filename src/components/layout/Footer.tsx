import Link from 'next/link';

const procedureLinks = [
  { href: '/zabiegi/chirurgia-twarzy', label: 'Chirurgia twarzy' },
  { href: '/zabiegi/chirurgia-piersi', label: 'Chirurgia piersi' },
  { href: '/zabiegi/plastyka-brzucha', label: 'Plastyka brzucha' },
  { href: '/zabiegi/chirurgia-intymna', label: 'Chirurgia intymna' },
  { href: '/zabiegi/rekonstrukcja', label: 'Rekonstrukcja' },
  { href: '/zabiegi/lipofilling', label: 'Lipofilling' },
];

const portalLinks = [
  { href: '/galeria-przed-po', label: 'Galeria B/A' },
  { href: '/kliniki', label: 'Kliniki' },
  { href: '/chirurdzy', label: 'Chirurdzy' },
  { href: '/cennik', label: 'Cennik' },
  { href: '/poradnik', label: 'Poradnik' },
  { href: '/aktualnosci', label: 'Aktualności' },
];

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--color-obsidian-900)',
        color: 'var(--color-porcelain-400)',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--container-max, 1520px)',
          margin: '0 auto',
          padding: '80px 24px 40px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
          }}
        >
          <div>
            <Link
              href="/"
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '4px',
                textDecoration: 'none',
                marginBottom: '16px',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 400,
                  color: 'var(--color-porcelain-50)',
                  fontSize: '20px',
                }}
              >
                Chirurgia
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-accent)',
                  fontStyle: 'italic',
                  color: 'var(--color-champagne-400)',
                  fontSize: '20px',
                }}
              >
                Piękna
              </span>
            </Link>
            <p
              style={{
                fontSize: '14px',
                lineHeight: 1.6,
                color: 'var(--color-porcelain-500)',
                maxWidth: '280px',
              }}
            >
              Niezależny portal informacyjny poświęcony chirurgii plastycznej. Zadbaj o swoje piękno świadomie.
            </p>
          </div>

          <div>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '14px',
                fontWeight: 400,
                color: 'var(--color-porcelain-300)',
                marginBottom: '16px',
                letterSpacing: '0.05em',
              }}
            >
              Zabiegi
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {procedureLinks.map((link) => (
                <li key={link.href} style={{ marginBottom: '8px' }}>
                  <Link
                    href={link.href}
                    style={{
                      fontSize: '14px',
                      color: 'var(--color-porcelain-400)',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--color-porcelain-50)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--color-porcelain-400)';
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '14px',
                fontWeight: 400,
                color: 'var(--color-porcelain-300)',
                marginBottom: '16px',
                letterSpacing: '0.05em',
              }}
            >
              Portal
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {portalLinks.map((link) => (
                <li key={link.href} style={{ marginBottom: '8px' }}>
                  <Link
                    href={link.href}
                    style={{
                      fontSize: '14px',
                      color: 'var(--color-porcelain-400)',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--color-porcelain-50)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--color-porcelain-400)';
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '14px',
                fontWeight: 400,
                color: 'var(--color-porcelain-300)',
                marginBottom: '16px',
                letterSpacing: '0.05em',
              }}
            >
              Newsletter
            </h3>
            <p
              style={{
                fontSize: '14px',
                color: 'var(--color-porcelain-500)',
                marginBottom: '12px',
              }}
            >
              Trendy, porady, nowe efekty
            </p>
            <form
              style={{ display: 'flex', gap: '8px' }}
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Twój e-mail"
                style={{
                  flex: 1,
                  background: 'transparent',
                  border: 'none',
                  borderBottom: '1px solid var(--color-porcelain-600)',
                  color: 'var(--color-porcelain-50)',
                  padding: '8px 0',
                  fontSize: '14px',
                  outline: 'none',
                }}
              />
              <button
                type="submit"
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--color-champagne-500)',
                  cursor: 'pointer',
                  fontSize: '18px',
                  padding: '8px',
                }}
              >
                →
              </button>
            </form>
          </div>
        </div>

        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            paddingTop: '24px',
            marginTop: '40px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <p
            style={{
              fontSize: '11px',
              color: 'var(--color-porcelain-600)',
              maxWidth: '600px',
            }}
          >
            Portal ma charakter informacyjny i nie stanowi porady medycznej. Skonsultuj się ze specjalistą przed podjęciem decyzji o zabiegu.
          </p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              fontSize: '12px',
            }}
          >
            <span style={{ color: 'var(--color-porcelain-600)' }}>
              © 2026 ChirurgiaPiekna.com
            </span>
            <Link
              href="/polityka-prywatnosci"
              style={{
                color: 'var(--color-porcelain-500)',
                textDecoration: 'none',
              }}
            >
              Polityka prywatności
            </Link>
            <Link
              href="/regulamin"
              style={{
                color: 'var(--color-porcelain-500)',
                textDecoration: 'none',
              }}
            >
              Regulamin
            </Link>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            gap: '16px',
            marginTop: '24px',
            fontSize: '13px',
          }}
        >
          <a
            href="https://instagram.com/chirurgiapiekna"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--color-porcelain-500)',
              textDecoration: 'none',
            }}
          >
            Instagram
          </a>
          <a
            href="https://facebook.com/chirurgiapiekna"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--color-porcelain-500)',
              textDecoration: 'none',
            }}
          >
            Facebook
          </a>
          <a
            href="https://youtube.com/@chirurgiapiekna"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--color-porcelain-500)',
              textDecoration: 'none',
            }}
          >
            YouTube
          </a>
        </div>
      </div>
    </footer>
  );
}