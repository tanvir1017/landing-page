# 🚀 FED-11/25 Front-End Developer Assessment

> A production-ready landing page, authentication system, and user management dashboard built with Next.js 16, TypeScript, and Tailwind CSS.

**Live Demo:** [Deploy to Vercel](https://tanvir1017-pimjo.vercel.app/)  
**Repository:** https://github.com/tanvir1017/pimjo-task  
**Assessment Submission:** Tanvir Hossain  
**Date:** 13 November 2025

---

## 🎯 Assignment Deliverables

This submission includes:

1.  **GitHub Repository** — Complete project code at [tanvir1017/pimjo-task](https://github.com/tanvir1017/pimjo-task)
2.  **Setup Instructions** — `npm install` & `npm run dev` (see [Quick Start](#-quick-start-tldr))

## � Setup & Installation

### Prerequisites

- **Node.js** v18+ (or bun)
- **npm/yarn/pnpm/bun**
- **Git**

### Step 1: Clone Repository

```bash
git clone https://github.com/tanvir1017/pimjo-task.git
cd landing-page
```

### Step 2: Install Dependencies

```bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install

# Using bun
bun install
```

### Step 3: Configure Environment Variables

Create a `.env.local` file in the root directory:

````env
# Next.js
NEXT_PUBLIC_APP_URL=

# Database (Neon PostgreSQL)
NEXT_PUBLIC_NEON_CONNECTION_STRING=

# Better Auth Configuration
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=
BETTER_AUTH_URL_PROD=

# Google OAuth (Optional)
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# GitHub OAuth (Optional)
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

### Step 4: Run Development Server

```bash
npm run dev
````

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Step 5: Build for Production

```bash
npm run build
npm start
```

## � Quick Start (TL;DR)

```bash
# Clone and setup
git clone https://github.com/tanvir1017/pimjo-task.git
cd landing-page

# Install dependencies
npm install

# Create .env.local with required variables (see Setup & Installation)
# Then run:
npm run dev

# Visit http://localhost:3000
```

## 📁 Project Structure

```
landing-page/
├── app/
│   ├── (auth)/                    # Auth route group
│   │   ├── sign-in/
│   │   │   └── page.tsx          # Sign-in form
│   │   └── sign-up/
│   │       └── page.tsx          # Sign-up form
│   ├── (dashboard)/               # Protected dashboard routes
│   │   └── dashboard/
│   │       ├── statics/
│   │       │   └── page.tsx      # Dashboard stats page
│   │       └── page.tsx          # Dashboard main page
│   ├── api/
│   │   └── auth/[...all]/
│   │       └── route.ts          # Better Auth handler
│   ├── actions/
│   │   ├── auth.ts               # Auth server actions
│   │   └── fetch-data.tsx        # API data fetching
│   ├── globals.css               # Global Tailwind styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Landing page
│
├── components/
│   ├── assets/svgs/              # SVG icons
│   ├── dashboard/                # Dashboard-specific components
│   │   ├── profile-dropdown.tsx
│   │   ├── statics-card/
│   │   └── users/
│   │       ├── user-table.tsx    # Main user table
│   │       └── user-delete-dialog.tsx
│   ├── pages/                    # Page-level components
│   │   ├── auth/
│   │   │   ├── sign-in.tsx
│   │   │   └── sign-up.tsx
│   │   └── home/
│   │       ├── hero/
│   │       ├── analytics-overview/
│   │       ├── news-letter/
│   │       └── why-choose-us/
│   ├── shared/                   # Reusable layout components
│   │   ├── navbar.tsx
│   │   ├── footer/
│   │   └── navigation.tsx
│   ├── ui/                       # Radix UI primitives
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── table.tsx
│   │   ├── dialog.tsx
│   │   ├── pagination.tsx
│   │   └── ...
│   └── style-components/         # Styled component exports
│
├── hooks/                        # Custom React hooks
│   ├── useFetchData.tsx         # Data fetching with caching
│   ├── use-mobile.tsx           # Mobile detection
│   ├── use-mounted.tsx          # SSR safety
│   └── use-media-query.tsx      # Responsive queries
│
├── lib/
│   ├── auth.ts                  # Better Auth configuration
│   ├── auth-client.ts           # Client-side auth utilities
│   ├── fonts.ts                 # Font optimization
│   ├── utils.ts                 # Utility functions
│   └── isSesssionAvailable.ts  # Session checks
│
├── types/
│   └── index.ts                 # TypeScript type definitions
│
├── public/                      # Static assets
│   └── assets/
│
├── better-auth_migrations/      # Database migrations
├── next.config.ts               # Next.js configuration
├── tailwind.config.js           # Tailwind CSS config
├── tsconfig.json                # TypeScript config
├── postcss.config.mjs           # PostCSS config
├── eslint.config.mjs            # ESLint config
└── package.json
```
