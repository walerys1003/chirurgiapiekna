"use client";

import { useState, useEffect } from 'react';
import { AlertTriangle, X } from 'lucide-react';

export function MedicalDisclaimer() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const closed = localStorage.getItem('disclaimer-closed');
    if (closed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('disclaimer-closed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div
      style={{
        backgroundColor: 'var(--color-obsidian-800)',
        padding: '6px 0',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--container-max, 1520px)',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
        }}
      >
        <AlertTriangle
          size={16}
          style={{ color: 'var(--color-champagne-400)', flexShrink: 0 }}
        />
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '12px',
            color: 'var(--color-porcelain-300)',
            margin: 0,
          }}
        >
          Portal ma charakter informacyjny i nie stanowi porady medycznej. Skonsultuj się ze specjalistą.
        </p>
        <button
          onClick={handleClose}
          style={{
            background: 'none',
            border: 'none',
            padding: '4px',
            cursor: 'pointer',
            color: 'var(--color-porcelain-500)',
            display: 'flex',
            alignItems: 'center',
            marginLeft: '8px',
          }}
          aria-label="Zamknij"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}