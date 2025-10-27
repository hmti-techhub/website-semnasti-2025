# 🎓 SEMNASTI 2025

> **Seminar Nasional Teknik Informatika 2025**  
> Smart Living With AI • Real Tech For Real Life

Website resmi untuk acara SEMNASTI 2025 yang diselenggarakan oleh HMTI Universitas Dian Nuswantoro.

![SEMNASTI 2025](https://img.shields.io/badge/SEMNASTI-2025-blue?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-15.5.3-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🚀 Quick Start

### Prerequisites
- Node.js 20+
- npm atau yarn

### Installation

```bash
# Clone repository
git clone https://github.com/hmti-techhub/website-semnasti-2025.git

# Masuk ke folder project
cd website-semnasti-2025

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## 🎨 Design System

### Color Palette

#### Primary Gradient
- **Cyan**: `#17D3FD`
- **Purple**: `#CD3DFF`

#### Gray Gradient (Stormfaze Font)
- **Light Gray**: `#E6E6E6`
- **Dark Gray**: `#959595`

#### Background
- Dark blue/purple gradient dengan circuit pattern

### Typography

- **Display Font**: **Stormfaze** (custom font)
  - Digunakan untuk: Judul utama, section headers
  - Files: `public/font/Stormfaze.otf`
  
- **Body Font**: **Inter** (Google Fonts)
  - Digunakan untuk: Body text, paragraphs, UI elements

## 📁 Project Structure

```
src/
├── app/
│   ├── fonts.css         # Font configuration
│   ├── globals.css       # Global styles & utilities
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main page
│
├── components/
│   ├── sections/         # Page sections (modular)
│   │   ├── hero-section.tsx
│   │   ├── gallery-section.tsx
│   │   ├── about-section.tsx
│   │   ├── speaker-section.tsx
│   │   ├── ticket-section.tsx
│   │   ├── information-section.tsx
│   │   └── footer-section.tsx
│   │
│   ├── ui/              # Reusable UI components
│   │   └── background-decorative.tsx
│   │
│   ├── navigation-bar.tsx
│   └── countdown-timer.tsx
│
└── assets/              # Images & static files
```

Lihat [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) untuk detail lengkap.

## ✨ Features

### 🎯 Sections

1. **Hero Section**
   - Partner logos (Asia Ranked, Akreditasi Unggul, UDINUS, HMTI)
   - Animated brain logo dengan gradient glow
   - Event title dengan font Stormfaze
   - Countdown timer real-time
   - CTA buttons

2. **Gallery Section**
   - 4 gallery placeholders untuk teaser images
   - Responsive grid layout

3. **About Section**
   - Decorative vector elements
   - Event description
   - Video/embed placeholder

4. **Speaker Section**
   - Speaker cards dengan gradient avatars
   - Coming soon placeholders
   - Smooth hover animations

5. **Ticket Section**
   - 3 ticket types: Early Bird, Presale, Normal Price
   - Active ticket highlighting
   - Registration CTA

6. **Information Section**
   - Event details (date, time, location)
   - Interactive map placeholder
   - FAQ accordion dengan smooth transitions

7. **Footer**
   - Quick links
   - Contact information
   - Social media links

### 🎭 Animations & Interactions

- ✅ Smooth scroll navigation
- ✅ Hover effects on all interactive elements
- ✅ Scale transitions on buttons
- ✅ Animated background decorative elements
- ✅ Pulsing glow effects
- ✅ Interactive FAQ accordion
- ✅ Responsive countdown timer

### 📱 Responsive Design

- Mobile-first approach
- Breakpoints: `sm`, `md`, `lg`, `xl`
- Adaptive typography
- Flexible grid systems

## 🛠️ Tech Stack

- **Framework**: [Next.js 15.5.3](https://nextjs.org/) with Turbopack
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Font**: Stormfaze (custom) + Inter (Google Fonts)

## 🎨 Customization

### Update Event Details

Edit `src/components/sections/information-section.tsx`:
```tsx
const eventDate = 'Sabtu, 8 November 2025';
const eventTime = 'Pukul 09:00 WIB';
const eventLocation = 'E.3 TVKU UDINUS';
```

### Update Ticket Prices

Edit `src/components/sections/ticket-section.tsx`:
```tsx
const tickets = [
  { title: 'Early Bird', price: 'Rp 50.000', active: true },
  { title: 'Presale', price: 'Rp 75.000', active: false },
  { title: 'Normal Price', price: 'Rp 100.000', active: false }
];
```

### Update Countdown Target

Edit `src/components/countdown-timer.tsx`:
```tsx
const targetDate = new Date('2025-11-08T00:00:00Z').getTime();
```

### Add New Section

1. Create file in `src/components/sections/new-section.tsx`
2. Export in `src/components/sections/index.ts`
3. Import and use in `src/app/page.tsx`

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start dev server dengan Turbopack

# Production
npm run build        # Build untuk production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

© 2025 SEMNASTI - HMTI UDINUS. All rights reserved.

## 🤝 Contributing

Developed by HMTI TechHub Team

## 📞 Contact

- **Email**: info@semnasti.com
- **Instagram**: [@semnasti2025](https://instagram.com/semnasti2025)
- **Website**: [semnasti.udinus.ac.id](https://semnasti.udinus.ac.id)

---

Made with ❤️ by HMTI UDINUS TechHub
