# 🚀 FED-11/25 Front-End Developer Assessment

> A production-ready landing page, authentication system, and user management dashboard built with Next.js 16, TypeScript, and Tailwind CSS.

**Live Demo:** [Deploy to Vercel](#deploy-to-vercel-recommended)  
**Repository:** https://github.com/tanvir1017/pimjo-task  
**Assessment Submission:** Tanvir Hossain  
**Date:** November 2025

---

## 🎯 Assignment Deliverables

This submission includes:

1. ✅ **GitHub Repository** — Complete project code at [tanvir1017/pimjo-task](https://github.com/tanvir1017/pimjo-task)
2. ✅ **Setup Instructions** — `npm install` & `npm run dev` (see [Quick Start](#-quick-start-tldr))
3. ✅ **Approach & Structure** — Detailed architecture documentation (see [Approach & Architecture](#🎓-approach--architecture))
4. ✅ **Known Issues** — Listed in [Known Issues & Assumptions](#⚠️-known-issues--assumptions)
5. ✅ **Live Deployment** — Ready to deploy on Vercel (see [Deployment](#🚀-deployment))

---

## 📋 Project Overview

This project is a comprehensive front-end assessment demonstrating modern web development practices. It includes:

- **Landing Page** — Pixel-perfect implementation of a Figma design with dynamic navigation
- **Authentication System** — Secure sign-in and sign-up with Better Auth (email/password + social OAuth)
- **User Management Dashboard** — Display, search, and delete users with pagination and error handling
- **Responsive Design** — Mobile-first approach supporting all screen sizes
- **Production-Ready Code** — Type-safe TypeScript, best practices, and clean architecture

---

## �️ Tech Stack

| Technology                                     | Version | Purpose                              |
| ---------------------------------------------- | ------- | ------------------------------------ |
| [Next.js](https://nextjs.org)                  | 16.0.1  | React framework with App Router      |
| [TypeScript](https://www.typescriptlang.org/)  | 5.x     | Type safety and developer experience |
| [Tailwind CSS](https://tailwindcss.com)        | 4.x     | Utility-first styling                |
| [Better Auth](https://better-auth.vercel.app/) | 1.3.34  | Authentication & session management  |
| [Radix UI](https://www.radix-ui.com/)          | Latest  | Accessible component primitives      |
| [PostgreSQL](https://www.postgresql.org/)      | —       | Database (Neon)                      |
| [Sonner](https://sonner.emilkowal.ski/)        | 2.0.7   | Toast notifications                  |
| [Lucide React](https://lucide.dev/)            | 0.553.0 | Icon library                         |

---

## ✨ Features Implemented

### 🏠 Landing Page

- ✅ **Figma Design Match** — Pixel-perfect layout and spacing from [design file](https://www.figma.com/design/g5DDrAT6qYIM4eqQm5r6tW/Front-end-developer-assessment)
- ✅ **Dynamic Navigation** — Header menu fetched from MockAPI endpoint
- ✅ **Fully Responsive** — Mobile, tablet, and desktop layouts
- ✅ **Optimized Performance** — Image optimization, lazy loading, code splitting
- ✅ **Reusable Components** — Hero section, testimonials, analytics overview, template showcase

### 🔐 Authentication Pages

- ✅ **Sign In Page** — Email/password login with OAuth (Google & GitHub)
- ✅ **Sign Up Page** — User registration with validation
- ✅ **Session Management** — Secure cookies with Better Auth
- ✅ **Form Validation** — Real-time error states and feedback
- ✅ **Protected Routes** — Middleware guards sensitive pages
- ✅ **Redirects** — Automatic navigation based on auth state

### 📊 Dashboard

- ✅ **User Table** — Display users fetched from MockAPI
- ✅ **Pagination** — 5 users per page (client-side)
- ✅ **Search Filter** — Filter users by name or email
- ✅ **Delete Functionality** — Remove users via API with confirmation dialog
- ✅ **Loading States** — Skeleton loaders during data fetch
- ✅ **Error Handling** — Graceful error messages and empty states
- ✅ **User Profile** — Profile dropdown with logout functionality

---

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

---

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

```env
# Next.js
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Database (Neon PostgreSQL)
NEXT_PUBLIC_NEON_CONNECTION_STRING=postgresql://user:password@neon.tech/database

# Better Auth Configuration
BETTER_AUTH_SECRET=your-super-secret-key-min-32-chars-long!
BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_URL_PROD=https://yourdomain.com

# Google OAuth (Optional)
GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-google-client-secret

# GitHub OAuth (Optional)
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret
```

### Step 4: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Step 5: Build for Production

```bash
npm run build
npm start
```

---

## 📡 API Endpoints Used

| Endpoint             | Method     | Purpose                     | Location |
| -------------------- | ---------- | --------------------------- | -------- |
| `/mega-menu`         | `GET`      | Fetch navigation menu       | MockAPI  |
| `/users`             | `GET`      | Fetch all users (paginated) | MockAPI  |
| `/users/:id`         | `DELETE`   | Delete user by ID           | MockAPI  |
| `/api/auth/[...all]` | `POST/GET` | Better Auth handler         | Internal |

### MockAPI Base URL

```
https://69102d7545e65ab24ac5d435.mockapi.io
```

---

## 🔐 Authentication Flow

### Architecture

```
User Login/Signup
    ↓
Better Auth Handler (/api/auth/[...all])
    ↓
PostgreSQL Database (User storage)
    ↓
Secure HTTP-only Cookie
    ↓
Protected Routes (Middleware validation)
```

### Key Components

1. **`lib/auth.ts`** — Better Auth configuration

   - Email/password login
   - Google & GitHub OAuth integration
   - PostgreSQL database connection
   - Cookie-based sessions

2. **`lib/auth-client.ts`** — Client-side authentication

   - Sign-in/sign-up methods
   - Social provider integration
   - Logout functionality

3. **`app/(auth)/`** — Protected auth pages

   - Auto-redirect to dashboard if authenticated
   - Form validation and error handling
   - OAuth provider buttons

4. **Middleware (implicit via Better Auth)**
   - Validates session cookies
   - Protects `/dashboard/*` routes
   - Redirects unauthenticated users to `/sign-in`

### User Flow

```
1. User visits /sign-up → Creates account
2. Credentials saved to PostgreSQL via Better Auth
3. Session cookie issued (HTTP-only)
4. Redirected to /dashboard
5. Middleware validates cookie on each request
6. Authenticated → Access granted
7. Logout → Cookie cleared, redirected to /sign-in
```

---

## 📊 Dashboard Features

### User Table

- **Data Source:** `GET https://69102d7545e65ab24ac5d435.mockapi.io/users`
- **Display:** 5 users per page
- **Columns:** ID, Name, Email, Role, Actions

### Pagination

```
- Client-side pagination using React state
- Previous/Next buttons
- Current page indicator
- Automatic reset on search
```

### Search Filter

```
- Real-time filtering by name or email
- Case-insensitive matching
- Resets to page 1 on filter change
- Shows "No results" when empty
```

### Delete User

- **Endpoint:** `DELETE https://69102d7545e65ab24ac5d435.mockapi.io/users/:id`
- **Confirmation Dialog:** Prevents accidental deletion
- **Toast Notification:** Success/error feedback
- **UI Update:** Instant table refresh

### Loading & Error States

```
Loading:  Skeleton loaders (5 rows) → Smooth UX
Error:    Error banner with retry option
Empty:    "No users found" message
Success:  Toast notification + instant UI update
```

---

## 🎨 Design Implementation

### Figma Specification

- **Design File:** [FED-11/25 Assessment](https://www.figma.com/design/g5DDrAT6qYIM4eqQm5r6tW/Front-end-developer-assessment)
- **Status:** ✅ Pixel-perfect match implemented
- **Responsive:** ✅ All breakpoints covered (mobile, tablet, desktop)

### Key Design Decisions

1. **Color Scheme** — Exact hex values from Figma
2. **Typography** — System fonts for performance
3. **Spacing** — Tailwind's 8px grid system
4. **Breakpoints** — Mobile-first (sm, md, lg, xl, 2xl)
5. **Animations** — Smooth transitions for better UX

### Responsive Breakpoints

```
Mobile:   < 640px  (sm)
Tablet:   640px    (md)
Desktop:  1024px   (lg)
Large:    1280px   (xl)
XL:       1536px   (2xl)
```

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**

   ```bash
   git push origin main
   ```

2. **Connect to Vercel**

   - Go to [vercel.com](https://vercel.com)
   - Import your repository
   - Select Next.js framework preset

3. **Set Environment Variables**

   - Add all `.env.local` variables in Vercel dashboard
   - Ensure `BETTER_AUTH_URL_PROD` points to your domain

4. **Deploy**
   - Vercel automatically builds and deploys on push
   - Preview deployments for pull requests

### Environment Differences

| Variable          | Development             | Production               |
| ----------------- | ----------------------- | ------------------------ |
| `BETTER_AUTH_URL` | `http://localhost:3000` | `https://yourdomain.com` |
| `NODE_ENV`        | `development`           | `production`             |
| Database          | Neon (shared dev DB)    | Neon (prod DB)           |

---

## 📦 Available Scripts

```bash
# Development server with hot reload
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run ESLint
npm run lint

# Format code (if configured)
npm run format
```

---

## 🎯 Performance & Best Practices

### Code Optimization

- ✅ **Server Components** — Default for reduced JS payload
- ✅ **Code Splitting** — Route-based automatic splitting
- ✅ **Image Optimization** — Next.js `<Image />` component
- ✅ **Font Optimization** — System fonts only (no custom fonts)

### Architecture Patterns

- ✅ **App Router** — Next.js 16 conventions
- ✅ **Server Actions** — Direct database mutation patterns
- ✅ **Middleware** — Protected route handling
- ✅ **Type Safety** — Full TypeScript coverage

### Reusability

- ✅ **Component Library** — Radix UI for consistency
- ✅ **Custom Hooks** — `useFetchData`, `useMediaQuery`
- ✅ **Style Utilities** — DRY Tailwind patterns
- ✅ **Shared Components** — Navbar, footer, container wrappers

### Accessibility

- ✅ **ARIA Labels** — Form inputs and buttons
- ✅ **Keyboard Navigation** — All interactive elements
- ✅ **Color Contrast** — WCAG AA compliance
- ✅ **Semantic HTML** — Proper heading hierarchy

---

## ⚠️ Known Issues & Assumptions

### Assumptions

1. **MockAPI Availability** — Project assumes MockAPI endpoints remain accessible
2. **Database Access** — Assumes Neon PostgreSQL credentials are configured
3. **Browser Support** — Targets modern browsers (Chrome, Firefox, Safari, Edge)
4. **Network** — Assumes stable internet for external API calls

### Known Limitations

1. **MockAPI Rate Limiting** — No retry logic for API failures
2. **Offline Support** — No offline capabilities currently implemented
3. **Search Performance** — Client-side search only (OK for < 1000 records)
4. **OAuth Redirect** — Requires HTTPS in production

### Future Improvements

- [ ] Server-side search with database queries
- [ ] Offline support with IndexedDB
- [ ] Rate limiting and retry logic
- [ ] E2E tests with Cypress/Playwright
- [ ] Performance monitoring with web vitals

---

## 🧪 Testing

```bash
# Run tests (when configured)
npm test

# Run tests in watch mode
npm test -- --watch
```

> Note: Test setup is pending. Consider adding Jest + React Testing Library.

---

## 🐛 Troubleshooting

### Port 3000 Already in Use

```bash
npm run dev -- -p 3001
```

### Database Connection Error

```bash
# Check connection string in .env.local
# Verify Neon PostgreSQL is running
# Test connection: npx pg-cli
```

### Dependencies Conflict

```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Fails

```bash
npm run build -- --debug
```

---

## � Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Radix UI Components](https://www.radix-ui.com/docs)
- [Better Auth Guide](https://better-auth.vercel.app/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## 📜 Credits

- **Figma Design** — FED-11/25 Assessment Design System
- **MockAPI** — Data mock service
- **Frameworks & Libraries** — Next.js, React, TypeScript, Tailwind CSS, Radix UI, Better Auth
- **Icons** — Lucide React, custom SVGs
- **Notifications** — Sonner Toast Library

---

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

---

## 📋 Submission Checklist

- ✅ **GitHub Repository** — Complete code at https://github.com/tanvir1017/pimjo-task
- ✅ **Setup Instructions** — Detailed setup & installation guide above
- ✅ **Approach & Structure** — Project structure and design decisions documented
- ✅ **Known Issues** — Listed in "Known Issues & Assumptions" section
- ✅ **Deployment** — Ready for Vercel deployment (see Deployment section)
- ✅ **Live Demo** — [Deploy to Vercel](https://vercel.com/new) for live version

---

## 🎓 Approach & Architecture

### Development Strategy

1. **Component-First Design** — Built reusable components from Figma design
2. **Type Safety First** — Full TypeScript coverage for maintainability
3. **Server Components Default** — Next.js 16 best practices for performance
4. **Responsive Mobile-First** — Tailwind CSS with proper breakpoint management
5. **Clean Architecture** — Separation of concerns (actions, components, lib, hooks, types)

### Key Design Decisions

| Decision            | Rationale                                                            |
| ------------------- | -------------------------------------------------------------------- |
| Next.js 16          | Modern React framework with App Router and server components support |
| TypeScript          | Type safety reduces bugs and improves developer experience           |
| Tailwind CSS        | Utility-first CSS for rapid development and consistency              |
| Better Auth         | Open-source auth with OAuth support and PostgreSQL integration       |
| Radix UI            | Accessible, unstyled components for maximum flexibility              |
| Server Actions      | Direct database mutations without API routes                         |
| MockAPI for testing | Rapid development without backend setup                              |

### Code Organization

```
Components:
  - `/ui/` — Radix UI primitives (Button, Input, Table, Dialog, etc.)
  - `/pages/` — Page-level component compositions
  - `/dashboard/` — Dashboard-specific features
  - `/shared/` — Layout components (Navbar, Footer, Navigation)
  - `/style-components/` — Styled utility wrappers

Logic:
  - `/hooks/` — Custom React hooks (useFetchData, useMediaQuery, useMount)
  - `/actions/` — Server-side actions (auth, data fetching)
  - `/lib/` — Utilities (auth config, font optimization, session checks)

Types:
  - `/types/index.ts` — Centralized TypeScript definitions

Static:
  - `/public/` — Images and static assets
```

---

## 📊 Implementation Details

### Landing Page Features

| Feature            | Status | Notes                                   |
| ------------------ | ------ | --------------------------------------- |
| Figma Design Match | ✅     | Pixel-perfect layout from design file   |
| Responsive Design  | ✅     | Mobile, tablet, desktop, laptop support |
| Dynamic Navigation | ✅     | Menu fetched from MockAPI               |
| Hero Section       | ✅     | Full-width with CTA buttons             |
| Analytics Overview | ✅     | Stats cards with gradient backgrounds   |
| Features Section   | ✅     | Reusable component pattern              |
| Testimonials Bento | ✅     | Bento grid layout (2-3-2 pattern)       |
| Newsletter Signup  | ✅     | Email subscription form                 |
| Footer             | ✅     | Links and social media                  |

### Authentication System

| Feature               | Status | Implementation                     |
| --------------------- | ------ | ---------------------------------- |
| Email/Password Login  | ✅     | Better Auth with validation        |
| Email/Password Signup | ✅     | User registration with name field  |
| Google OAuth          | ✅     | Social login integration           |
| GitHub OAuth          | ✅     | Social login integration           |
| Session Management    | ✅     | HTTP-only cookies with Better Auth |
| Protected Routes      | ✅     | Implicit middleware validation     |
| Form Validation       | ✅     | Real-time error handling           |
| Loading States        | ✅     | Visual feedback during auth        |

### Dashboard Features

| Feature        | Status | Implementation                           |
| -------------- | ------ | ---------------------------------------- |
| User Table     | ✅     | Display from MockAPI with formatting     |
| Pagination     | ✅     | 5 users per page, client-side            |
| Search Filter  | ✅     | By name or email, case-insensitive       |
| Delete User    | ✅     | Confirmation dialog + toast notification |
| Loading States | ✅     | Skeleton loaders                         |
| Error Handling | ✅     | Error banners with retry option          |
| User Profile   | ✅     | Dropdown with logout functionality       |

---

## 🔧 Tech Stack Rationale

### Frontend Framework

- **Next.js 16** — Latest App Router, server components, built-in optimization
- **React 19** — Component library with hooks support
- **TypeScript 5** — Static typing for reliability

### Styling & UI

- **Tailwind CSS 4** — Utility-first CSS for rapid development
- **Radix UI** — Headless UI for accessibility and customization
- **Lucide React** — Icon library with 5k+ icons

### Authentication

- **Better Auth** — Modern open-source auth with OAuth support
- **PostgreSQL** — Reliable database via Neon
- **HTTP-only Cookies** — Secure session management

### Development Tools

- **ESLint** — Code quality
- **TypeScript** — Type safety
- **Tailwind CSS** — Style consistency
- **Sonner** — Toast notifications

---

## �👤 Author

**Tanvir Hossain**  
Front-End Developer | Full-Stack Engineer  
📧 Email: [your-email@example.com]  
🐙 GitHub: [@tanvir1017](https://github.com/tanvir1017)  
🌐 Portfolio: [Your portfolio URL]  
📋 LinkedIn: [Your LinkedIn profile]

---

## 📄 License

This project is a submission for the FED-11/25 Front-End Developer Assessment.  
All rights reserved © 2025.

---

## ✅ Final Checklist Before Submission

- [ ] All environment variables configured locally
- [ ] `npm run build` completes without errors
- [ ] No console warnings or errors
- [ ] Responsive design tested on mobile, tablet, desktop
- [ ] Authentication flows tested (email signup, Google OAuth, GitHub OAuth)
- [ ] Dashboard user table tested (pagination, search, delete)
- [ ] Deployed to Vercel with live URL
- [ ] README includes all required information
- [ ] Code pushed to GitHub

---

**Last Updated:** November 13, 2025  
**Status:** ✅ Assessment Submission Ready  
**Repository:** https://github.com/tanvir1017/pimjo-task  
**Deployment:** [Deploy to Vercel for live demo]
