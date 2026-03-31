import { Metadata } from 'next';
import { getMockProcedures } from '@/lib/mock-data';
import { formatPrice } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Cennik zabiegów chirurgii plastycznej — ChirurgiaPiekna.com',
  description: 'Orientacyjne ceny zabiegów chirurgii plastycznej w Polsce.',
};

const categoryNames: Record<string, string> = {
  'chirurgia-twarzy': 'Chirurgia Twarzy',
  'chirurgia-piersi': 'Chirurgia Piersi',
  'plastyka-brzucha': 'Plastyka Brzucha',
  'chirurgia-intymna': 'Chirurgia Intymna',
  'rekonstrukcja': 'Rekonstrukcja',
  'lipofilling': 'Lipofilling',
};

export default function CennikPage() {
  const procedures = getMockProcedures().sort((a, b) => a.priceRange.min - b.priceRange.min);

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
            Cennik zabiegów chirurgii plastycznej
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              color: 'var(--color-porcelain-600)',
              marginTop: '8px',
            }}
          >
            Orientacyjne ceny w Polsce
          </p>
        </div>

        <div
          style={{
            backgroundColor: 'var(--color-porcelain-50)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
          }}
        >
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
            }}
          >
            <thead>
              <tr
                style={{
                  backgroundColor: 'var(--color-porcelain-100)',
                }}
              >
                <th
                  style={{
                    textAlign: 'left',
                    padding: '16px 24px',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '14px',
                    color: 'var(--color-obsidian-900)',
                  }}
                >
                  Zabieg
                </th>
                <th
                  style={{
                    textAlign: 'left',
                    padding: '16px 24px',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '14px',
                    color: 'var(--color-obsidian-900)',
                  }}
                >
                  Cena od
                </th>
                <th
                  style={{
                    textAlign: 'left',
                    padding: '16px 24px',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '14px',
                    color: 'var(--color-obsidian-900)',
                  }}
                >
                  Cena do
                </th>
                <th
                  style={{
                    textAlign: 'left',
                    padding: '16px 24px',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '14px',
                    color: 'var(--color-obsidian-900)',
                  }}
                >
                  Obszar
                </th>
              </tr>
            </thead>
            <tbody>
              {procedures.map((procedure, index) => (
                <tr
                  key={procedure.id}
                  style={{
                    borderBottom: '1px solid var(--color-porcelain-200)',
                    backgroundColor: index % 2 === 1 ? 'var(--color-porcelain-100)' : 'transparent',
                  }}
                >
                  <td
                    style={{
                      padding: '16px 24px',
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                      color: 'var(--color-obsidian-900)',
                    }}
                  >
                    {procedure.title}
                  </td>
                  <td
                    style={{
                      padding: '16px 24px',
                      fontFamily: 'var(--font-data)',
                      fontSize: '14px',
                      color: 'var(--color-obsidian-900)',
                    }}
                  >
                    {formatPrice(procedure.priceRange.min, procedure.priceRange.min).replace('PLN', 'PLN')}
                  </td>
                  <td
                    style={{
                      padding: '16px 24px',
                      fontFamily: 'var(--font-data)',
                      fontSize: '14px',
                      color: 'var(--color-obsidian-900)',
                    }}
                  >
                    {formatPrice(procedure.priceRange.max, procedure.priceRange.max).replace('PLN', 'PLN')}
                  </td>
                  <td
                    style={{
                      padding: '16px 24px',
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                      color: 'var(--color-porcelain-500)',
                    }}
                  >
                    {categoryNames[procedure.categorySlug] || procedure.categorySlug}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '12px',
            fontStyle: 'italic',
            color: 'var(--color-porcelain-500)',
            marginTop: '24px',
            textAlign: 'center',
          }}
        >
          Ceny orientacyjne. Dokładną wycenę uzyskasz na konsultacji w wybranej klinice.
        </p>
      </div>
    </div>
  );
}