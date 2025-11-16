# Backend Directory

This directory contains all backend-related code.

## Structure

- **`../app/api/`** - Next.js API routes (backend endpoints)
  - Note: API routes must be in `app/api/` due to Next.js requirements, but they are backend code
- **`scripts/`** - Backend utility scripts (e.g., database seeding)

## API Routes

All API routes are located in `app/api/[[...path]]/route.js` and handle:
- Products CRUD operations
- RFQ (Request for Quote) management
- Admin statistics
- Status checks

## Scripts

- **`seed-data.js`** - Seeds the MongoDB database with sample product data

