import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbNav({ items }: BreadcrumbNavProps) {
  return (
    <nav aria-label="Nawigacja okruszkowa">
      <ol
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          listStyle: 'none',
          padding: 0,
          margin: 0,
          fontFamily: 'var(--font-body)',
          fontSize: '13px',
        }}
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        <li
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
        >
          <Link
            href="/"
            style={{
              color: 'var(--color-porcelain-500)',
              textDecoration: 'none',
            }}
            itemProp="item"
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--color-obsidian-700)';
              e.currentTarget.style.textDecoration = 'underline';
              e.currentTarget.style.textUnderlineOffset = '4px';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--color-porcelain-500)';
              e.currentTarget.style.textDecoration = 'none';
            }}
          >
            <span itemProp="name">Strona główna</span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>

        {items.map((item, index) => (
          <li
            key={item.label}
            style={{ display: 'flex', alignItems: 'center' }}
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <span
              style={{
                color: 'var(--color-porcelain-400)',
                margin: '0 4px',
              }}
            >
              /
            </span>
            {item.href ? (
              <Link
                href={item.href}
                style={{
                  color: 'var(--color-porcelain-500)',
                  textDecoration: 'none',
                }}
                itemProp="item"
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-obsidian-700)';
                  e.currentTarget.style.textDecoration = 'underline';
                  e.currentTarget.style.textUnderlineOffset = '4px';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--color-porcelain-500)';
                  e.currentTarget.style.textDecoration = 'none';
                }}
              >
                <span itemProp="name">{item.label}</span>
              </Link>
            ) : (
              <span
                style={{
                  color: 'var(--color-obsidian-900)',
                }}
                itemProp="name"
              >
                {item.label}
              </span>
            )}
            <meta itemProp="position" content={String(index + 2)} />
          </li>
        ))}
      </ol>
    </nav>
  );
}