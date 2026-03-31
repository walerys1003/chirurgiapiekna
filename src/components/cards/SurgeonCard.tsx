"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Surgeon } from '@/types';
import { RatingDisplay } from '@/components/shared/RatingDisplay';

interface SurgeonCardProps {
  surgeon: Surgeon;
}

export function SurgeonCard({ surgeon }: SurgeonCardProps) {
  const href = `/chirurdzy/${surgeon.slug}`;

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
            aspectRatio: '3/4',
            overflow: 'hidden',
          }}
        >
          <Image
            src={surgeon.photo.url}
            alt={surgeon.photo.alt}
            fill
            style={{
              objectFit: 'cover',
              filter: 'grayscale(100%)',
              transition: 'filter 0.8s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = 'grayscale(0%)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = 'grayscale(100%)';
            }}
          />
        </div>

        <div style={{ padding: '16px' }}>
          <h3
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '16px',
              color: 'var(--color-obsidian-900)',
              margin: '0 0 4px 0',
            }}
          >
            {surgeon.name}
          </h3>

          <p
            style={{
              fontFamily: 'var(--font-accent)',
              fontStyle: 'italic',
              fontSize: '14px',
              color: 'var(--color-porcelain-600)',
              margin: '0 0 8px 0',
            }}
          >
            {surgeon.title}
          </p>

          {surgeon.specializations.length > 0 && (
            <p
              style={{
                fontFamily: 'var(--font-data)',
                fontSize: '11px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-champagne-600)',
                margin: '0 0 12px 0',
              }}
            >
              {surgeon.specializations[0]}
            </p>
          )}

          <RatingDisplay rating={surgeon.rating} reviewCount={surgeon.reviewCount} />

          <div
            style={{
              marginTop: '12px',
              fontSize: '12px',
              color: 'var(--color-success)',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            ✓ Specjalista chirurgii plastycznej
          </div>
        </div>
      </motion.div>
    </Link>
  );
}