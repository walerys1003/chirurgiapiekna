"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Procedure } from '@/types';
import { ProcedureMetrics } from '@/components/shared/ProcedureMetrics';

interface ProcedureCardProps {
  procedure: Procedure;
  variant?: 'default' | 'large';
}

const bodyAreaColors: Record<string, string> = {
  face: 'var(--color-area-face)',
  breast: 'var(--color-area-breast)',
  body: 'var(--color-area-body)',
  intimate: 'var(--color-area-intimate)',
  reconstructive: 'var(--color-area-recon)',
};

export function ProcedureCard({ procedure, variant = 'default' }: ProcedureCardProps) {
  const href = `/zabiegi/${procedure.categorySlug}/${procedure.slug}`;

  return (
    <Link href={href} style={{ textDecoration: 'none', display: 'block' }}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        style={{
          backgroundColor: 'var(--color-porcelain-50)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-card)',
          transition: 'box-shadow 0.4s',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = 'var(--shadow-elevated)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = 'var(--shadow-card)';
        }}
      >
        <div
          style={{
            position: 'relative',
            aspectRatio: variant === 'large' ? '4/5' : '4/5',
            overflow: 'hidden',
          }}
        >
          <Image
            src={procedure.featuredImage.url}
            alt={procedure.featuredImage.alt}
            fill
            style={{
              objectFit: 'cover',
              transition: 'transform 0.6s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          />
        </div>

        <div style={{ padding: '16px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '8px',
            }}
          >
            <div
              style={{
                width: '4px',
                height: '32px',
                backgroundColor: bodyAreaColors[procedure.bodyArea] || 'var(--color-champagne-500)',
                borderRadius: '2px',
              }}
            />
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: variant === 'large' ? '20px' : '18px',
                color: 'var(--color-obsidian-900)',
                margin: 0,
              }}
            >
              {procedure.title}
            </h3>
          </div>

          <ProcedureMetrics
            painLevel={procedure.painLevel}
            priceMin={procedure.priceRange.min}
            priceMax={procedure.priceRange.max}
            anesthesiaType={procedure.anesthesiaType}
            recoveryTime={procedure.recoveryTime}
            resultDuration={procedure.resultDuration}
            satisfactionRate={procedure.satisfactionRate}
          />
        </div>
      </motion.div>
    </Link>
  );
}