# 🎨 SEMNASTI 2025 - Style Guide

## Color System

### Primary Colors

#### Gradient Cyan-Purple (Main Brand)
```css
/* Untuk background, borders, dan accents */
background: linear-gradient(135deg, #17D3FD 0%, #CD3DFF 100%);

/* Colors */
--cyan: #17D3FD;
--purple: #CD3DFF;
--blue: #5B8CFF;
```

#### Gray Gradient (Stormfaze Font Only)
```css
/* Untuk text dengan font Stormfaze */
background: linear-gradient(180deg, #E6E6E6 0%, #959595 100%);

/* Colors */
--light-gray: #E6E6E6;
--dark-gray: #959595;
```

#### Background Colors
```css
--bg-dark-1: #0a0e27;
--bg-dark-2: #1a0b2e;
--bg-dark-3: #2d1b4e;
```

### Usage Examples

#### Text Gradient (Cyan-Purple)
```tsx
<h2 className="text-gradient">Your Text</h2>
```

#### Text Gradient (Gray - Stormfaze)
```tsx
<h1 className="text-gradient-gray font-stormfaze">SEMNASTI 2025</h1>
```

#### Button Primary
```tsx
<button className="bg-gradient-to-r from-[#17D3FD] to-[#CD3DFF]">
  Click Me
</button>
```

#### Card with Gradient Border
```tsx
<div className="border-2 border-[#17D3FD] bg-gradient-to-br from-[#17D3FD]/10 to-[#CD3DFF]/10">
  Content
</div>
```

## Typography

### Font Families

#### Stormfaze (Display Font)
**Usage**: Judul besar, section headers, brand text

```tsx
<h1 className="font-stormfaze text-gradient-gray">
  SEMNASTI 2025
</h1>
```

**Where to use:**
- ✅ Main title "SEMNASTI 2025"
- ✅ Section headers (TENTANG SEMNASTI?, SPEAKER, dll)
- ✅ Navigation logo text
- ✅ Footer logo text
- ❌ Body text (jangan!)
- ❌ Buttons (jangan!)
- ❌ Small UI elements (jangan!)

#### Inter (Body Font)
**Usage**: Semua text selain judul besar

```tsx
<p className="text-base">Your content here</p>
```

**Where to use:**
- ✅ Body text / paragraphs
- ✅ Buttons
- ✅ Navigation links
- ✅ Cards content
- ✅ All UI elements

### Font Sizes

```css
/* Tailwind Classes */
text-xs     /* 12px - Badge, small labels */
text-sm     /* 14px - Navigation, footer links */
text-base   /* 16px - Body text */
text-lg     /* 18px - Subtitle */
text-xl     /* 20px - Large text */
text-2xl    /* 24px - Card headers */
text-3xl    /* 30px - Small titles */
text-4xl    /* 36px - Section subtitles */
text-5xl    /* 48px - Section titles */
text-6xl    /* 60px - Hero title mobile */
text-7xl    /* 72px - Hero title tablet */
text-8xl    /* 96px - Hero title desktop (rare) */
text-9xl    /* 128px - Hero main title */
```

### Font Weights

```css
font-light      /* 300 - Subtle text */
font-normal     /* 400 - Body text */
font-medium     /* 500 - Navigation, buttons */
font-bold       /* 700 - Emphasis, card titles */
font-extrabold  /* 800 - Section headers */
```

## Spacing

### Padding & Margin Scale

```css
p-2   /* 8px */
p-4   /* 16px */
p-6   /* 24px */
p-8   /* 32px */
p-12  /* 48px */
p-16  /* 64px */
p-20  /* 80px */

/* Same for margin (m-*) */
```

### Section Spacing

```tsx
/* Standard section */
<section className="px-6 py-20">

/* Hero section */
<section className="px-6 pt-32 pb-20">

/* Container */
<div className="max-w-6xl mx-auto">
```

## Components

### Buttons

#### Primary Button
```tsx
<button className="px-8 py-3 bg-gradient-to-r from-[#17D3FD] to-[#CD3DFF] hover:opacity-90 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-[#17D3FD]/30">
  DAFTAR SEKARANG
</button>
```

#### Secondary Button
```tsx
<button className="px-8 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/30 hover:bg-white/20 transition-all transform hover:scale-105 font-medium">
  LIHAT JADWAL
</button>
```

### Cards

#### Basic Card
```tsx
<div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
  Content
</div>
```

#### Card with Gradient Border
```tsx
<div className="rounded-3xl p-8 border-2 border-[#17D3FD] bg-gradient-to-br from-[#17D3FD]/10 to-[#CD3DFF]/10">
  Content
</div>
```

#### Hover Card
```tsx
<div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-[#17D3FD]/50 transition-all hover:scale-105">
  Content
</div>
```

### Badges

```tsx
<span className="py-2 px-6 text-xs bg-gradient-to-r from-[#17D3FD]/20 to-[#CD3DFF]/20 border border-[#17D3FD]/50 rounded-full backdrop-blur-sm">
  BADGE TEXT
</span>
```

### Icons

```tsx
import { FaIcon } from 'react-icons/fa';

<FaIcon className="text-4xl text-[#17D3FD]" />
```

## Effects

### Glassmorphism
```tsx
<div className="bg-white/5 backdrop-blur-md border border-white/10">
```

### Glow Effect
```tsx
<div className="drop-shadow-[0_0_50px_rgba(23,211,253,0.5)]">
```

### Box Shadow
```tsx
<div className="shadow-xl shadow-[#17D3FD]/20">
```

### Gradient Background with Blur
```tsx
<div className="bg-gradient-to-br from-[#17D3FD]/30 to-[#CD3DFF]/30 blur-3xl">
```

## Animations

### Hover Scale
```tsx
className="transition-all duration-300 hover:scale-105"
```

### Hover Opacity
```tsx
className="hover:opacity-90 transition-all"
```

### Pulse Animation
```tsx
className="animate-pulse"
```

### Custom Animation Delay
```tsx
<div style={{ animationDelay: '1s' }} className="animate-pulse">
```

## Responsive Design

### Breakpoints
```css
sm:   /* 640px */
md:   /* 768px */
lg:   /* 1024px */
xl:   /* 1280px */
2xl:  /* 1536px */
```

### Examples
```tsx
/* Mobile first */
<h1 className="text-4xl md:text-6xl lg:text-8xl">

/* Hide on mobile */
<div className="hidden md:block">

/* Show only on mobile */
<div className="block md:hidden">

/* Grid responsive */
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

## Best Practices

### ✅ DO

- Gunakan font Stormfaze dengan `text-gradient-gray` untuk judul section
- Gunakan Inter untuk semua body text
- Gunakan gradient cyan-purple untuk accents dan CTA
- Konsisten dengan rounded corners (`rounded-2xl`, `rounded-3xl`, `rounded-full`)
- Tambahkan hover effects pada interactive elements
- Gunakan backdrop-blur untuk glassmorphism effect

### ❌ DON'T

- Jangan gunakan Stormfaze untuk body text
- Jangan mix terlalu banyak font weights
- Jangan gunakan colors di luar palette yang sudah ditentukan
- Jangan lupa responsive design
- Jangan skip hover states
- Jangan hardcode sizes, gunakan Tailwind classes

## Accessibility

```tsx
/* Alt text untuk images */
<Image src={logo} alt="SEMNASTI 2025 Logo" />

/* Semantic HTML */
<section id="tentang" aria-label="About Section">

/* Keyboard navigation */
<button className="focus:ring-2 focus:ring-[#17D3FD]">

/* Screen reader text */
<span className="sr-only">Hidden but accessible</span>
```

## Performance Tips

1. **Images**: Gunakan Next.js Image component
2. **Fonts**: Sudah di-optimize dengan font-display: swap
3. **Animations**: Gunakan CSS transforms (lebih performant)
4. **Lazy Loading**: Components sudah di-split per section

---

**Last Updated**: October 2025  
**Maintained by**: HMTI TechHub Team
