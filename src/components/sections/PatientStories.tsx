"use client";

import { useState } from 'react';
import { getMockReviews } from '@/lib/mock-data';

export function PatientStories() {
  const reviews = getMockReviews();
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentReview = reviews[currentIndex];

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const satisfactionBars = Math.round((currentReview.rating / 5) * 10);
  const emptyBars = 10 - satisfactionBars;

  return (
    <section
      style={{
        backgroundColor: 'var(--color-porcelain-100)',
        paddingTop: 'var(--section-gap)',
        paddingBottom: 'var(--section-gap)',
      }}
    >
      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '0 24px',
          textAlign: 'center',
        }}
      >
        <span
          style={{
            position: 'absolute',
            top: '-20px',
            left: '-10px',
            fontSize: '120px',
            color: 'var(--color-champagne-200)',
            opacity: 0.5,
            lineHeight: 1,
          }}
        >
          ❝
        </span>

        <div style={{ position: 'relative', padding: '40px 0' }}>
          <p
            style={{
              fontFamily: 'var(--font-accent)',
              fontStyle: 'italic',
              fontSize: 'clamp(22px, 3vw, 32px)',
              color: 'var(--color-obsidian-800)',
              lineHeight: 1.4,
              margin: 0,
            }}
          >
            &ldquo;{currentReview.content}&rdquo;
          </p>

          <div
            style={{
              width: '40px',
              height: '1px',
              backgroundColor: 'var(--color-champagne-300)',
              margin: '24px auto',
            }}
          />

          <p
            style={{
              fontFamily: 'var(--font-data)',
              fontSize: '13px',
              color: 'var(--color-porcelain-500)',
              margin: 0,
            }}
          >
            {currentReview.patientInitials}, {currentReview.patientAge} lat · {currentReview.procedureName} · {currentReview.patientCity}
          </p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '4px',
              marginTop: '16px',
              fontFamily: 'var(--font-data)',
              fontSize: '12px',
            }}
          >
            <span>Satysfakcja</span>
            <span style={{ marginLeft: '8px', letterSpacing: '2px' }}>
              {'█'.repeat(satisfactionBars)}
              {'░'.repeat(emptyBars)}
            </span>
            <span style={{ marginLeft: '8px' }}>{Math.round((currentReview.rating / 5) * 100)}%</span>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '16px',
            marginTop: '32px',
          }}
        >
          <button
            onClick={goToPrev}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '20px',
              color: 'var(--color-porcelain-400)',
              cursor: 'pointer',
              padding: '8px',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--color-obsidian-800)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--color-porcelain-400)';
            }}
            aria-label="Poprzednia opinia"
          >
            ←
          </button>

          <div style={{ display: 'flex', gap: '6px' }}>
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  border: 'none',
                  backgroundColor:
                    index === currentIndex
                      ? 'var(--color-champagne-400)'
                      : 'var(--color-porcelain-300)',
                  cursor: 'pointer',
                  padding: 0,
                }}
                aria-label={`Opinia ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '20px',
              color: 'var(--color-porcelain-400)',
              cursor: 'pointer',
              padding: '8px',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--color-obsidian-800)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--color-porcelain-400)';
            }}
            aria-label="Następna opinia"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}