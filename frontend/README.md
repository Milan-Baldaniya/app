# Frontend Directory

This directory contains all frontend-related code and assets.

## Structure

- **`../app/`** - Next.js App Router pages and layouts (frontend pages)
  - Note: `app/api/` is backend code but must remain in `app/` due to Next.js requirements
- **`components/`** - React UI components
- **`hooks/`** - Custom React hooks
- **`lib/`** - Frontend utility functions

## Import Paths

All imports use the `@/` alias configured in `jsconfig.json`:
- `@/components/*` → `./frontend/components/*`
- `@/lib/*` → `./frontend/lib/*`
- `@/hooks/*` → `./frontend/hooks/*`
- `@/app/*` → `./app/*`

