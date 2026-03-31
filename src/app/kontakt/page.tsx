"use client";

import { useState } from 'react';
import { Metadata } from 'next';

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div style={{ paddingTop: '72px' }}>
      <div
        style={{
          maxWidth: '600px',
          margin: '0 auto',
          padding: '60px 24px',
        }}
      >
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '44px',
            color: 'var(--color-obsidian-900)',
            marginBottom: '32px',
          }}
        >
          Kontakt
        </h1>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '24px' }}>
            <label
              htmlFor="name"
              style={{
                display: 'block',
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                color: 'var(--color-porcelain-600)',
                marginBottom: '8px',
              }}
            >
              Imię i nazwisko
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px 0',
                background: 'transparent',
                border: 'none',
                borderBottom: '1px solid var(--color-porcelain-300)',
                fontFamily: 'var(--font-body)',
                fontSize: '16px',
                color: 'var(--color-obsidian-900)',
                outline: 'none',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderBottomColor = 'var(--color-champagne-500)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderBottomColor = 'var(--color-porcelain-300)';
              }}
            />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label
              htmlFor="email"
              style={{
                display: 'block',
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                color: 'var(--color-porcelain-600)',
                marginBottom: '8px',
              }}
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px 0',
                background: 'transparent',
                border: 'none',
                borderBottom: '1px solid var(--color-porcelain-300)',
                fontFamily: 'var(--font-body)',
                fontSize: '16px',
                color: 'var(--color-obsidian-900)',
                outline: 'none',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderBottomColor = 'var(--color-champagne-500)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderBottomColor = 'var(--color-porcelain-300)';
              }}
            />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label
              htmlFor="topic"
              style={{
                display: 'block',
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                color: 'var(--color-porcelain-600)',
                marginBottom: '8px',
              }}
            >
              Temat
            </label>
            <select
              id="topic"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px 0',
                background: 'transparent',
                border: 'none',
                borderBottom: '1px solid var(--color-porcelain-300)',
                fontFamily: 'var(--font-body)',
                fontSize: '16px',
                color: 'var(--color-obsidian-900)',
                outline: 'none',
                cursor: 'pointer',
              }}
            >
              <option value="">Wybierz temat</option>
              <option value="konsultacja">Konsultacja</option>
              <option value="wspolpraca">Współpraca</option>
              <option value="opinie">Opinie</option>
              <option value="inne">Inne</option>
            </select>
          </div>

          <div style={{ marginBottom: '32px' }}>
            <label
              htmlFor="message"
              style={{
                display: 'block',
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                color: 'var(--color-porcelain-600)',
                marginBottom: '8px',
              }}
            >
              Wiadomość
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              style={{
                width: '100%',
                padding: '12px 0',
                background: 'transparent',
                border: 'none',
                borderBottom: '1px solid var(--color-porcelain-300)',
                fontFamily: 'var(--font-body)',
                fontSize: '16px',
                color: 'var(--color-obsidian-900)',
                outline: 'none',
                resize: 'vertical',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderBottomColor = 'var(--color-champagne-500)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderBottomColor = 'var(--color-porcelain-300)';
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '16px',
              backgroundColor: 'var(--color-champagne-500)',
              color: 'var(--color-obsidian-900)',
              border: 'none',
              borderRadius: 'var(--radius-pill)',
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              cursor: 'pointer',
            }}
          >
            Wyślij
          </button>
        </form>
      </div>
    </div>
  );
}