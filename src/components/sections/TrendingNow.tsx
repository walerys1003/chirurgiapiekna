"use client";

import Link from 'next/link';
import Image from 'next/image';
import { getMockArticles } from '@/lib/mock-data';

export function TrendingNow() {
  const articles = getMockArticles();

  return (
    <section
      style={{
        background: 'linear-gradient(160deg, var(--color-obsidian-950), var(--color-obsidian-800))',
        paddingTop: 'var(--section-gap)',
        paddingBottom: 'var(--section-gap)',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--container-max)',
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p
            style={{
              fontFamily: 'var(--font-data)',
              fontSize: '12px',
              letterSpacing: '0.2em',
              color: 'var(--color-champagne-400)',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}
          >
            TRENDY 2026
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 4vw, 44px)',
              color: 'var(--color-porcelain-50)',
              margin: 0,
            }}
          >
            Pulse — co nowego w chirurgii
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.618fr 1fr',
            gap: '32px',
          }}
        >
          <div
            style={{
              position: 'relative',
              aspectRatio: '16/9',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
            }}
          >
            <Image
              src={articles[0].featuredImage.url}
              alt={articles[0].featuredImage.alt}
              fill
              style={{ objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(8,17,30,0.9), rgba(8,17,30,0.2))',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '24px',
                left: '24px',
                right: '24px',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-data)',
                  fontSize: '11px',
                  color: 'var(--color-champagne-400)',
                  borderLeft: '2px solid var(--color-champagne-400)',
                  paddingLeft: '8px',
                  display: 'inline-block',
                  marginBottom: '8px',
                }}
              >
                TREND 2026
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '28px',
                  color: 'var(--color-porcelain-50)',
                  margin: '0 0 8px 0',
                }}
              >
                {articles[0].title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  color: 'var(--color-porcelain-300)',
                  margin: 0,
                }}
              >
                {articles[0].excerpt.slice(0, 100)}...
              </p>
              <span
                style={{
                  fontFamily: 'var(--font-data)',
                  fontSize: '12px',
                  color: 'var(--color-porcelain-500)',
                  display: 'block',
                  marginTop: '8px',
                }}
              >
                {articles[0].publishedAt}
              </span>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            {articles.slice(1, 3).map((article) => (
              <div
                key={article.id}
                style={{
                  position: 'relative',
                  aspectRatio: '4/3',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src={article.featuredImage.url}
                  alt={article.featuredImage.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(8,17,30,0.9), rgba(8,17,30,0.2))',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '16px',
                    right: '16px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-data)',
                      fontSize: '10px',
                      color: 'var(--color-champagne-400)',
                      borderLeft: '2px solid var(--color-champagne-400)',
                      paddingLeft: '6px',
                      display: 'inline-block',
                      marginBottom: '4px',
                    }}
                  >
                    TREND 2026
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '18px',
                      color: 'var(--color-porcelain-50)',
                      margin: 0,
                    }}
                  >
                    {article.title}
                  </h3>
                  <span
                    style={{
                      fontFamily: 'var(--font-data)',
                      fontSize: '11px',
                      color: 'var(--color-porcelain-500)',
                      display: 'block',
                      marginTop: '4px',
                    }}
                  >
                    {article.publishedAt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link
            href="/poradnik"
            style={{
              color: 'var(--color-porcelain-500)',
              fontSize: '15px',
              textDecoration: 'none',
            }}
          >
            Czytaj więcej →
          </Link>
        </div>
      </div>
    </section>
  );
}