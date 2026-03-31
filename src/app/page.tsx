export default function Home() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '16px',
      }}
    >
      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '36px',
          color: 'var(--color-obsidian-900)',
        }}
      >
        ChirurgiaPiekna.com
      </h1>
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '16px',
          color: 'var(--color-porcelain-500)',
        }}
      >
        Strona w budowie
      </p>
    </div>
  );
}