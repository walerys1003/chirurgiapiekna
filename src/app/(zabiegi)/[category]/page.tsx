import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { siteConfig } from '@/config/site';
import { getMockProcedures } from '@/lib/mock-data';
import { ProcedureCard } from '@/components/cards/ProcedureCard';
import { BreadcrumbNav } from '@/components/shared/BreadcrumbNav';

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

const categoryDescriptions: Record<string, string> = {
  'chirurgia-twarzy': 'Zabiegi chirurgii twarzy obejmują korektę nosa, powiek, lifting twarzy, korektę uszu i wiele innych procedur mających na celu poprawę wyglądu i harmonii twarzy.',
  'chirurgia-piersi': 'Operacje piersi to jedne z najczęściej wykonywanych zabiegów chirurgii plastycznej. Obejmują powiększanie, zmniejszanie i podnoszenie piersi.',
  'plastyka-brzucha': 'Plastyka brzucha i liposukcja pozwalają na wymodelowanie sylwetki i usunięcie nadmiaru skóry i tłuszczu z okolicy brzucha.',
  'chirurgia-intymna': 'Chirurgia intymna obejmuje zabiegi korekcyjne okolic narządów płciowych, które mogą poprawić komfort i wygląd.',
  'rekonstrukcja': 'Zabiegi rekonstrukcyjne mają na celu przywrócenie prawidłowego wyglądu i funkcji części ciała po urazach, chorobach lub wrodzonych defektach.',
  'lipofilling': 'Lipofilling to zabieg polegający na przeszczepie własnego tłuszczu w celu wypełnienia tkanek i odmłodzenia różnych partii ciała.',
};

const categoryNames: Record<string, string> = {
  'chirurgia-twarzy': 'Chirurgia Twarzy',
  'chirurgia-piersi': 'Chirurgia Piersi',
  'plastyka-brzucha': 'Plastyka Brzucha i Ciała',
  'chirurgia-intymna': 'Chirurgia Intymna',
  'rekonstrukcja': 'Zabiegi Rekonstrukcyjne',
  'lipofilling': 'Lipofilling',
};

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const categoryName = categoryNames[category] || category;
  return {
    title: `${categoryName} — ChirurgiaPiekna.com`,
    description: `Poznaj zabiegi z kategorii ${categoryName}. Znajdziesz tu informacje o cenach, przebiegu zabiegów i najlepszych chirurgach.`,
  };
}

export async function generateStaticParams() {
  return siteConfig.categories.map((cat) => ({
    category: cat.id,
  }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const categoryName = categoryNames[category];

  if (!categoryName) {
    notFound();
  }

  const allProcedures = getMockProcedures();
  const categoryProcedures = allProcedures.filter(
    (p) => p.categorySlug === category
  );

  return (
    <div style={{ paddingTop: '72px' }}>
      <div
        style={{
          height: '40vh',
          minHeight: '300px',
          backgroundColor: 'var(--color-obsidian-900)',
          display: 'flex',
          alignItems: 'center',
          padding: '0 24px',
        }}
      >
        <div style={{ maxWidth: 'var(--container-max)', width: '100%', margin: '0 auto' }}>
          <BreadcrumbNav
            items={[{ label: categoryName }]}
          />
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px, 5vw, 56px)',
              color: 'var(--color-porcelain-50)',
              marginTop: '16px',
            }}
          >
            {categoryName}
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '18px',
              color: 'var(--color-porcelain-300)',
              marginTop: '16px',
              maxWidth: '600px',
            }}
          >
            {categoryDescriptions[category]}
          </p>
          <p
            style={{
              fontFamily: 'var(--font-data)',
              fontSize: '14px',
              color: 'var(--color-champagne-400)',
              marginTop: '16px',
            }}
          >
            {categoryProcedures.length} zabiegów
          </p>
        </div>
      </div>

      <div
        style={{
          maxWidth: 'var(--container-max)',
          margin: '0 auto',
          padding: 'var(--section-gap) 24px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '32px',
          }}
        >
          {categoryProcedures.map((procedure) => (
            <ProcedureCard key={procedure.id} procedure={procedure} />
          ))}
        </div>
      </div>
    </div>
  );
}