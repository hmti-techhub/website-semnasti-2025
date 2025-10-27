export const metadata = {
  title: 'Pendaftaran | SEMNASTI 2025',
  description: 'Form pendaftaran SEMNASTI 2025',
};

export default function DaftarPage() {
  // Use Tally's own theme/background (no transparent background)
  const url = 'https://tally.so/r/wkVgre';
  const title = 'SEMNASTI 2025 #EARLYBIRD';
  return (
    <main className="fixed inset-0 z-0">
      <iframe
        src={url}
        title={title}
        className="w-full h-full border-0"
        loading="lazy"
        allow="clipboard-write; fullscreen"
      />
    </main>
  );
}
