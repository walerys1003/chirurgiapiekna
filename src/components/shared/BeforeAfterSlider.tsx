"use client";

import { useState, useRef, useCallback } from 'react';
import Image from 'next/image';

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  className?: string;
}

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  className,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const newPosition = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(newPosition);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    updatePosition(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    updatePosition(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    updatePosition(e.touches[0].clientX);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      setPosition((prev) => Math.max(0, prev - 2));
    } else if (e.key === 'ArrowRight') {
      setPosition((prev) => Math.min(100, prev + 2));
    }
  };

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 'var(--radius-lg)',
        aspectRatio: '16/9',
        cursor: isDragging ? 'grabbing' : 'grab',
        userSelect: 'none',
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
      aria-label="Porównanie przed i po zabiegu"
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
        }}
      >
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      <div
        style={{
          position: 'absolute',
          inset: 0,
          clipPath: `inset(0 0 0 ${position}%)`,
        }}
      >
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      <div
        style={{
          position: 'absolute',
          top: '16px',
          left: '16px',
          fontFamily: 'var(--font-data)',
          fontSize: '11px',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--color-porcelain-50)',
          background: 'rgba(8, 17, 30, 0.6)',
          backdropFilter: 'blur(4px)',
          padding: '4px 10px',
          borderRadius: 'var(--radius-sm)',
        }}
      >
        PRZED
      </div>

      <div
        style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          fontFamily: 'var(--font-data)',
          fontSize: '11px',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--color-porcelain-50)',
          background: 'rgba(8, 17, 30, 0.6)',
          backdropFilter: 'blur(4px)',
          padding: '4px 10px',
          borderRadius: 'var(--radius-sm)',
        }}
      >
        PO
      </div>

      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: `${position}%`,
          width: '1px',
          background: 'var(--color-champagne-400)',
          transform: 'translateX(-50%)',
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: `${position}%`,
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          background: 'var(--color-obsidian-900)',
          border: '1.5px solid var(--color-champagne-400)',
          transform: 'translate(-50%, -50%)',
          cursor: 'grab',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        tabIndex={0}
        role="slider"
        aria-valuenow={position}
        aria-valuemin={0}
        aria-valuemax={100}
        onKeyDown={handleKeyDown}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          style={{ color: 'var(--color-champagne-400)' }}
        >
          <path
            d="M3 6L1 4M3 6L1 8M3 6H11M9 6L11 4M9 6L11 8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}