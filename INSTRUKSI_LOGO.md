# Instruksi Penggantian Logo

## Logo Brain dengan Gradient Circle

Untuk menggunakan logo brain yang baru (dari lampiran), silakan ikuti langkah berikut:

1. **Simpan logo dari lampiran** dengan nama: `logo-brain-gradient.png`
   
2. **Letakkan di folder**: `src/assets/`

3. **Update import di file** `src/app/page.tsx`:
   ```typescript
   // Ganti baris ini:
   import brainLogo from '@/assets/brain.png';
   
   // Dengan:
   import brainLogo from '@/assets/logo-brain-gradient.png';
   ```

4. **Update import di file** `src/components/navigation-bar.tsx`:
   ```typescript
   // Ganti baris ini:
   import brainLogo from '@/assets/brain.png'
   
   // Dengan:
   import brainLogo from '@/assets/logo-brain-gradient.png'
   ```

## Alternatif: Menggunakan Komponen SVG

Jika ingin menggunakan komponen React untuk logo (sudah dibuat di `src/components/brain-logo.tsx`), Anda bisa:

1. Import komponen di `src/app/page.tsx`:
   ```typescript
   import BrainLogo from '@/components/brain-logo';
   ```

2. Ganti penggunaan Image dengan komponen:
   ```typescript
   // Dari:
   <Image src={brainLogo} alt="Semnasti Logo" className="object-contain" fill />
   
   // Ke:
   <BrainLogo className="w-64 h-64 md:w-80 md:h-80" />
   ```

## Yang Sudah Diterapkan

✅ Font Stormfaze untuk semua judul besar (SEMNASTI 2025, TENTANG SEMNASTI, SPEAKER, dll)
✅ Gradient abu-abu (#E6E6E6 → #959595) untuk teks dengan font Stormfaze
✅ Logo partners di header (tanpa Asset 12 1.png yang lama)
✅ Struktur layout sesuai desain
✅ Semua section dengan styling yang konsisten
