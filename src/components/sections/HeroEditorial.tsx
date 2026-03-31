"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

const stats = [
  { number: '62', label: 'Zabiegi' },
  { number: '150+', label: 'Chirurgów' },
  { number: '80+', label: 'Klinik' },
  { number: '2 500', label: 'Efektów B/A' },
];

export function HeroEditorial() {
  return (
    <section
      style={{
        position: 'relative',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        backgroundColor: 'var(--color-obsidian-900)',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 30% 80%, rgba(8,17,30,0.85) 0%, rgba(8,17,30,0.3) 100%)',
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: '10%',
          bottom: '40%',
          maxWidth: '600px',
          zIndex: 10,
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontFamily: 'var(--font-data)',
            fontSize: '12px',
            letterSpacing: '0.2em',
            color: 'var(--color-champagne-500)',
            textTransform: 'uppercase',
            marginBottom: '24px',
          }}
        >
          CHIRURGIA PLASTYCZNA
        </motion.p>

        <div>
          {['Precyzja.', 'Piękno.', 'Zaufanie.'].map((text, index) => (
            <motion.span
              key={text}
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              animate={{ clipPath: 'inset(0% 0 0 0)' }}
              transition={{
                duration: 0.8,
                delay: 0.3 + index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                display: 'block',
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(48px, 7vw, 90px)',
                color: 'var(--color-porcelain-50)',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
              }}
            >
              {text}
            </motion.span>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '18px',
            color: 'var(--color-porcelain-400)',
            marginTop: '24px',
          }}
        >
          Niezależny portal — zabiegi chirurgii plastycznej, chirurdzy, kliniki, efekty
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          style={{
            display: 'flex',
            gap: '32px',
            marginTop: '32px',
          }}
        >
          <Link
            href="/zabiegi"
            style={{
              color: 'var(--color-champagne-500)',
              fontSize: '15px',
              textDecoration: 'underline',
              textUnderlineOffset: '8px',
            }}
          >
            Znajdź zabieg ↗
          </Link>
          <Link
            href="/galeria-przed-po"
            style={{
              border: '1px solid var(--color-porcelain-400)',
              color: 'var(--color-porcelain-300)',
              padding: '10px 24px',
              borderRadius: '9999px',
              fontSize: '15px',
              textDecoration: 'none',
              transition: 'border-color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-champagne-400)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-porcelain-400)';
            }}
          >
            Galeria efektów
          </Link>
        </motion.div>
      </div>

      <div
        style={{
          position: 'absolute',
          right: '10%',
          bottom: '15%',
          textAlign: 'right',
        }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: 1.2 + index * 0.1,
            }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              marginBottom: '12px',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-data)',
                fontSize: '32px',
                color: 'var(--color-champagne-400)',
              }}
            >
              {stat.number}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                color: 'var(--color-porcelain-500)',
              }}
            >
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}