"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Menu } from 'lucide-react';

const navLinks = [
  { href: '/zabiegi', label: 'Zabiegi' },
  { href: '/galeria-przed-po', label: 'Galeria' },
  { href: '/kliniki', label: 'Kliniki' },
  { href: '/chirurdzy', label: 'Chirurdzy' },
  { href: '/cennik', label: 'Cennik' },
  { href: '/poradnik', label: 'Poradnik' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 80);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: '72px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        maxWidth: 'var(--container-max, 1520px)',
        margin: '0 auto',
        transition: 'background-color 0.4s, backdrop-filter 0.4s, border-color 0.4s',
        backgroundColor: scrolled
          ? 'rgba(8, 17, 30, 0.88)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(1.4)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(184, 161, 112, 0.08)'
          : '1px solid transparent',
      }}
    >
      <Link
        href="/"
        style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: '4px',
          textDecoration: 'none',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 400,
            color: 'var(--color-porcelain-50)',
            fontSize: '22px',
          }}
        >
          Chirurgia
        </span>
        <span
          style={{
            fontFamily: 'var(--font-accent)',
            fontStyle: 'italic',
            color: 'var(--color-champagne-400)',
            fontSize: '22px',
          }}
        >
          Piękna
        </span>
      </Link>

      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '32px',
        }}
        className="hidden md:flex"
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '14px',
              letterSpacing: '0.05em',
              color: 'var(--color-porcelain-300)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--color-porcelain-50)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--color-porcelain-300)';
            }}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        <button
          style={{
            background: 'none',
            border: 'none',
            padding: '8px',
            cursor: 'pointer',
            color: 'var(--color-porcelain-300)',
            display: 'flex',
            alignItems: 'center',
          }}
          aria-label="Szukaj"
        >
          <Search size={18} strokeWidth={1.5} />
        </button>

        <Link
          href="/kontakt"
          style={{
            border: '1px solid var(--color-champagne-400)',
            color: 'var(--color-porcelain-50)',
            borderRadius: '9999px',
            padding: '8px 20px',
            fontSize: '13px',
            textDecoration: 'none',
            transition: 'background-color 0.2s, color 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--color-champagne-500)';
            e.currentTarget.style.color = 'var(--color-obsidian-900)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = 'var(--color-porcelain-50)';
          }}
        >
          Konsultacja
        </Link>

        <button
          style={{
            background: 'none',
            border: 'none',
            padding: '8px',
            cursor: 'pointer',
            color: 'var(--color-porcelain-300)',
            display: 'flex',
            alignItems: 'center',
          }}
          className="md:hidden"
          aria-label="Menu"
        >
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
}