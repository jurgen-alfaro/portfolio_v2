# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## 🎯 Project Overview

- **Name:** Portfolio V2
- **Type:** Personal portfolio website with single-page scroll experience
- **Stack:** Next.js 15.3.4 (App Router) · React 19 · Tailwind CSS v4 · motion/react · Lenis
- **Purpose:** Showcase projects, skills, and services with smooth animations and dark mode support

---

## 📦 Development Commands

```bash
npm run dev      # Development server (uses Turbopack for fast builds)
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # Run ESLint
```

**Note:** No test framework is currently configured.

---

## 🏗️ Architecture & Key Patterns

### Route Structure

This project uses **Next.js App Router** with a route group pattern:

```
app/
├── layout.js               # Root layout (provides ThemeProvider)
├── (site)/                 # Route group for main site
│   ├── layout.js          # Site layout (Navbar + Footer wrapper)
│   ├── page.js            # Home page (single-page scroll with sections)
│   └── [id]/page.js       # Dynamic project detail pages
```

**Navigation Pattern:**
- Main page is a single-page scroll experience
- Sections accessed via anchor links: `#about`, `#services`, `#projects`, `#contact`
- All sections use `scroll-mt-20` for sticky navbar clearance
- Navbar detects scroll at 50px threshold for styling changes

---

### Theme System (Critical Pattern)

**IMPORTANT:** The theme system synchronizes across THREE layers:

```javascript
// app/contexts/ThemeContext.jsx
1. React Context state (isDarkMode)
2. localStorage.setItem('theme', 'dark'/'light')
3. document.documentElement.classList.add/remove('dark')
```

**How it works:**
- System preference detection on first load (`window.matchMedia('(prefers-color-scheme: dark)')`)
- Theme preference persisted in localStorage under key `'theme'`
- Dark mode class on `<html>` element triggers Tailwind's dark mode variants
- Components receive `isDarkMode` prop passed down from context

**Usage in components:**
```javascript
import { useTheme } from '@/app/contexts/ThemeContext';

const { isDarkMode, toggleTheme } = useTheme();
```

---

### Assets Centralization Pattern

**IMPORTANT:** All images, icons, and static data are centralized in one file:

```
assets/assets.js (302 lines)
```

This file exports:
- All icon imports (React Icons, custom logos)
- `workData` array - portfolio project items with images, descriptions, tech stacks
- `serviceData` array - services offered with icons and descriptions

**Pattern to follow:**
- ✅ Add new assets to `assets/assets.js` and export them
- ✅ Import from assets: `import { logo, workData } from '@/assets/assets'`
- ❌ Never scatter asset imports across components

---

### Animation Architecture

Two animation systems work together:

#### 1. motion/react (Framer Motion)

Modern replacement for Framer Motion used for component animations:

```javascript
import { motion } from 'motion/react';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ type: "spring", stiffness: 100 }}
>
```

**Common patterns:**
- `whileInView` - Trigger animation when element enters viewport
- `viewport={{ once: true }}` - Prevent re-animation on scroll back
- Spring physics: `{ type: "spring", stiffness: 100 }`
- Stagger animations for lists

#### 2. Lenis Smooth Scroll

Initialized in main page with requestAnimationFrame loop:

```javascript
// app/(site)/page.js
useEffect(() => {
  const lenis = new Lenis();
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}, []);
```

**CSS setup in globals.css:**
```css
html {
  scroll-behavior: smooth;
}
```

**Section anchor positioning:**
All main sections use `scroll-mt-20` to account for sticky navbar height.

---

### Component Organization

Components use a **flat structure** in `app/components/` (no subdirectories):

```
app/components/
├── Header.jsx           # Hero section
├── Navbar.jsx           # Navigation with mobile menu
├── Footer.jsx           # Footer with social links
├── About.jsx            # About section
├── Services.jsx         # Services showcase
├── Projects.jsx         # Portfolio projects grid
├── Contact.jsx          # Contact form
├── LanguageSelector.jsx # Language switcher (UI only)
├── SkillsList.jsx       # Skills display
└── ToolsList.jsx        # Tools/technologies display
```

**Important:** All components are marked with `'use client'` directive - this is a fully client-side application with no server components.

---

## 🎨 Styling (Tailwind CSS v4)

### New @theme Syntax

`app/globals.css` uses Tailwind v4's new `@theme` directive:

```css
@import 'tailwindcss';

@theme {
  --color-primary: oklch(0.47 0.15 145);      /* Green */
  --color-accent: oklch(0.75 0.18 85);        /* Amber */
  --color-light: oklch(0.98 0 0);             /* Near white */
  --color-dark: oklch(0.27 0.02 265);         /* Dark blue-gray */
  /* ... more colors */
}
```

**Key features:**
- Colors defined in **oklch color space** (modern, perceptually uniform)
- Dark mode using custom selector: `:where(.dark, .dark *)`
- Custom fonts: **Poppins** (headings) and **Montserrat** (body)
- CSS variables for consistency across theme modes

### Tailwind Configuration

```javascript
// tailwind.config.js
theme: {
  extend: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
    }
  }
}
```

**Conventions:**
- Use Tailwind utility classes inline (no custom CSS unless necessary)
- Responsive breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- Dark mode variants applied automatically via `.dark` class

---

## 📂 Folder Structure

```
portfolio_v2/
├── app/
│   ├── (site)/                  # Route group
│   │   ├── [id]/page.js        # Dynamic project detail pages
│   │   ├── layout.js           # Site layout (Navbar + Footer)
│   │   └── page.js             # Home (single-page scroll)
│   ├── components/             # All components (flat structure)
│   │   ├── Header.jsx
│   │   ├── Navbar.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── LanguageSelector.jsx
│   │   ├── SkillsList.jsx
│   │   └── ToolsList.jsx
│   ├── contexts/
│   │   └── ThemeContext.jsx    # Theme management
│   ├── layout.js               # Root layout (ThemeProvider)
│   ├── globals.css             # Global styles + Tailwind
│   └── favicon.ico
├── assets/
│   └── assets.js               # Centralized assets (302 lines)
├── public/                     # Static files
├── jsconfig.json               # Path aliases
├── tailwind.config.js
├── postcss.config.js
├── next.config.mjs
└── package.json
```

---

## ⚠️ Important Notes

### Security Issue - Exposed API Key

The contact form has an exposed API key that should be moved to environment variables:

```javascript
// ❌ Current (in app/components/Contact.jsx)
const apiKey = "hardcoded-web3forms-key";

// ✅ Recommended fix
// 1. Create .env.local:
NEXT_PUBLIC_WEB3FORMS_KEY=your_key_here

// 2. Update Contact.jsx:
const apiKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
```

### Language Selector (Not Functional)

- UI exists in `LanguageSelector.jsx` with flag icons for EN/ES/PT
- **Not implemented** - currently a placeholder
- Clicking flags does not change content language
- Future implementation would require i18n setup

### All Client-Side Rendering

**Important architectural decision:**
- No Server Components used (all marked with `'use client'`)
- No server-side data fetching
- No API routes (contact form uses external Web3Forms API)
- Fully client-side single-page application

### Navigation & Scroll Behavior

- **Anchor-based navigation:** Links use `href="#section"` format
- **Smooth scroll:** Powered by Lenis library (not just CSS smooth-scroll)
- **Sticky navbar:** Fixed positioning with backdrop blur on scroll
- **Mobile menu:** Transform-based slide-out with overlay

---

## 📦 Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| next | 15.3.4 | Framework (App Router + Turbopack) |
| react | 19.0.0 | UI library |
| react-dom | 19.0.0 | React DOM renderer |
| motion | 12.23.12 | Modern Framer Motion replacement |
| lenis | 1.3.11 | Smooth scrolling library |
| tailwindcss | 4.1.10 | Utility-first CSS framework |
| @tailwindcss/postcss | 4.1.10 | Tailwind PostCSS plugin |
| autoprefixer | 11.0.0 | CSS vendor prefixing |
| eslint | 9.24.0 | Linting |
| eslint-config-next | 15.3.4 | Next.js ESLint config |

---

## 🔧 Configuration

### Path Aliases

```json
// jsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

**Usage:** Import with `@/` prefix: `import { logo } from '@/assets/assets'`

### Turbopack

Development server uses Turbopack for faster builds:

```json
// package.json
{
  "scripts": {
    "dev": "next dev --turbopack"
  }
}
```

### PostCSS Configuration

```javascript
// postcss.config.js
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {}
  }
}
```

### Next.js Config

```javascript
// next.config.mjs
const nextConfig = {};  // Uses all Next.js defaults
```

---

## 📝 Code Conventions

### File Naming
- **Components:** PascalCase with `.jsx` extension (`Navbar.jsx`, `Header.jsx`)
- **Pages:** lowercase with `.js` extension (`page.js`, `layout.js`)
- **Contexts:** PascalCase with `Context` suffix (`ThemeContext.jsx`)
- **Config files:** kebab-case (`.prettierrc`, `postcss.config.js`)

### Language & Type System
- **JavaScript** (not TypeScript) - uses `jsconfig.json` for configuration
- **Mixed extensions:** Components use `.jsx`, pages use `.js`
- No type checking in build process

### Component Patterns
- All components are functional (no classes)
- React Hooks for state management
- `'use client'` directive at the top of every component file
- Props destructured in function parameters
- Export default at bottom of file

### Styling Patterns
- **Pure Tailwind utilities** - no CSS Modules or styled-components
- **Responsive-first:** Mobile-first approach with responsive breakpoints
- **No inline styles** - use Tailwind classes instead
- **Consistent spacing:** Use Tailwind spacing scale (`gap-8`, `p-4`, etc.)

### State Management
- **Context API** for global state (theme only)
- **Component-level state** with `useState` for local UI state
- **No Redux or external state libraries**

---

## 🔄 Recent Commits

Understanding recent changes helps contextualize the current state:

```
04bf0e9 - fix: add 'use client' directive to fix hydration mismatch error
9cd0023 - feat: add footer and animations with Framer Motion
1995509 - feat: scroll to top on page load
aa292ef - style: update heading size and remove text-nowrap
18415db - Fix: Installed autoprefixer as dev dependency
```

**Key insight:** Recent focus has been on fixing hydration issues and adding animations.

---

## 🚀 Getting Started as a New Claude Instance

When working on this codebase:

1. **Understand the theme system** - It's a three-way sync (Context + localStorage + HTML class)
2. **Assets go in assets.js** - Don't scatter imports across files
3. **All components are client-side** - This is intentional for the portfolio use case
4. **Smooth scroll is multi-layered** - Lenis + CSS + scroll-mt-20 on sections
5. **Security concern exists** - API key in Contact.jsx needs environment variable
6. **Language selector is a placeholder** - Don't assume it works
7. **Use Turbopack** - Already configured in dev script for fast iterations
8. **Check globals.css for theme variables** - All colors defined there in oklch format

---

_Last updated: 2026-03-06_
_Stack: Next.js 15 · React 19 · Tailwind CSS v4 · motion/react · Lenis_
