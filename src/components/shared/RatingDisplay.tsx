interface RatingDisplayProps {
  rating: number;
  reviewCount: number;
}

export function RatingDisplay({ rating, reviewCount }: RatingDisplayProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'baseline',
        gap: '6px',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-data)',
          color: 'var(--color-champagne-500)',
          fontWeight: 500,
          fontSize: '14px',
        }}
      >
        {rating.toFixed(1)}
      </span>
      <span
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '13px',
          color: 'var(--color-porcelain-500)',
        }}
      >
        ({reviewCount} opinii)
      </span>
    </div>
  );
}