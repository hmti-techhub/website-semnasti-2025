# SEMNASTI 2025 - Project Structure

## 📁 Folder Structure

```
website-semnasti-2025/
├── src/
│   ├── app/
│   │   ├── fonts.css          # Font Stormfaze configuration
│   │   ├── globals.css        # Global styles & utilities
│   │   ├── layout.tsx         # Root layout with metadata
│   │   └── page.tsx           # Main page (menggunakan semua sections)
│   │
│   ├── assets/                # All images & static assets
│   │   ├── brain.png
│   │   ├── ASIA RANKED 1.png
│   │   ├── AkreditasiUnggul 2.png
│   │   ├── LOGO-UDINUS 1.png
│   │   ├── Rectangle.png
│   │   ├── Group.png
│   │   ├── Group (1).png
│   │   ├── Vector 3506.png
│   │   ├── Vector 3507.png
│   │   └── vektor atas ttg semnasti.png
│   │
│   └── components/
│       ├── navigation-bar.tsx         # Top navigation
│       ├── countdown-timer.tsx        # Countdown component
│       │
│       ├── sections/                  # Page sections
│       │   ├── index.ts              # Export all sections
│       │   ├── hero-section.tsx      # Hero with logo & countdown
│       │   ├── gallery-section.tsx   # Gallery/teaser images
│       │   ├── about-section.tsx     # Tentang Semnasti
│       │   ├── speaker-section.tsx   # Speaker cards
│       │   ├── ticket-section.tsx    # Ticket pricing
│       │   ├── information-section.tsx # Info & FAQ
│       │   └── footer-section.tsx    # Footer
│       │
│       └── ui/                        # Reusable UI components
│           ├── index.ts
│           └── background-decorative.tsx # Animated background
│
├── public/
│   └── font/
│       └── Stormfaze.otf
│
└── package.json
```

## 🎨 Design System

### Colors
- **Primary Gradient**: `#17D3FD` → `#CD3DFF`
- **Gray Gradient** (for Stormfaze font): `#E6E6E6` → `#959595`
- **Background**: Dark blue/purple gradient

### Typography
- **Display Font**: Stormfaze (untuk judul utama)
  - SEMNASTI 2025
  - TENTANG SEMNASTI?
  - SPEAKER
  - DAFTAR TIKET
  - INFORMASI

- **Body Font**: Inter (untuk teks biasa)

## 🧩 Components Breakdown

### 1. **NavigationBar** (`components/navigation-bar.tsx`)
- Fixed position di atas
- Logo + Menu links + Button Daftar

### 2. **HeroSection** (`sections/hero-section.tsx`)
- Partner logos (Asia Ranked, Akreditasi, UDINUS, HMTI)
- Brain logo dengan glow effect
- Main title dengan font Stormfaze
- CTA buttons
- Countdown timer

### 3. **GallerySection** (`sections/gallery-section.tsx`)
- 4 gallery placeholders
- Grid responsive

### 4. **AboutSection** (`sections/about-section.tsx`)
- Decorative vector at top
- Title dengan font Stormfaze
- Content box
- Video placeholder

### 5. **SpeakerSection** (`sections/speaker-section.tsx`)
- 2 speaker cards
- Coming soon placeholders
- Gradient avatar frames

### 6. **TicketSection** (`sections/ticket-section.tsx`)
- 3 ticket types (Early Bird, Presale, Normal)
- Active ticket highlighted
- Big CTA button

### 7. **InformationSection** (`sections/information-section.tsx`)
- Event details (date, time, location)
- Map placeholder
- Interactive FAQ accordion

### 8. **FooterSection** (`sections/footer-section.tsx`)
- Logo & tagline
- Quick links
- Contact info
- Copyright

### 9. **BackgroundDecorative** (`ui/background-decorative.tsx`)
- Animated decorative elements
- Gradient orbs
- Circuit patterns

## 🚀 Features

### Animations & Interactions
- ✅ Hover effects on cards & buttons
- ✅ Scale transitions
- ✅ Animated background elements
- ✅ Smooth scrolling
- ✅ Interactive FAQ accordion
- ✅ Glowing effects on logo & elements

### Responsive Design
- ✅ Mobile-first approach
- ✅ Grid system yang adaptif
- ✅ Font sizes yang responsive
- ✅ Spacing yang konsisten

### Performance
- ✅ Component separation untuk better code splitting
- ✅ Image optimization dengan Next.js Image
- ✅ CSS utilities untuk reusable styles
- ✅ Font loading optimization

## 📝 How to Use

### Import Sections
```tsx
import {
  HeroSection,
  GallerySection,
  AboutSection,
  SpeakerSection,
  TicketSection,
  InformationSection,
  FooterSection
} from '@/components/sections';
```

### Import UI Components
```tsx
import { BackgroundDecorative } from '@/components/ui';
```

## 🎯 Customization

### Mengubah Gradient Colors
Edit di `src/app/globals.css`:
```css
.text-gradient {
  background: linear-gradient(135deg, #17D3FD 0%, #CD3DFF 100%);
}

.text-gradient-gray {
  background: linear-gradient(180deg, #E6E6E6 0%, #959595 100%);
}
```

### Menambah Section Baru
1. Buat file di `src/components/sections/`
2. Export di `src/components/sections/index.ts`
3. Import & gunakan di `src/app/page.tsx`

## 🔧 Maintenance

### File yang Sering Diupdate
- `sections/hero-section.tsx` - Partner logos
- `sections/speaker-section.tsx` - Speaker info
- `sections/ticket-section.tsx` - Pricing
- `sections/information-section.tsx` - Event details & FAQ
