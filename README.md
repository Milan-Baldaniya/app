# Krushi World Export - Agro Products Export Platform

A modern Next.js application for managing and exporting premium Indian agro products. Built with Next.js 14, MongoDB, and Tailwind CSS.

## 🚀 Features

- **Product Management**: Browse and manage a catalog of premium agro products
- **RFQ System**: Request for Quote (RFQ) management for customers
- **Admin Dashboard**: Comprehensive admin panel for managing products and RFQs
- **Responsive Design**: Modern, mobile-first UI built with Tailwind CSS
- **API Integration**: RESTful API endpoints for all operations

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── api/               # Backend API routes (Next.js requirement)
│   │   └── [[...path]]/
│   │       └── route.js   # All API endpoints
│   ├── about/             # About page
│   ├── admin/             # Admin dashboard pages
│   ├── contact/           # Contact page
│   ├── products/          # Product listing and detail pages
│   └── ...                # Other pages
│
├── frontend/              # Frontend code and assets
│   ├── components/        # React UI components
│   │   └── ui/           # shadcn/ui components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Frontend utility functions
│   └── README.md
│
├── backend/               # Backend code
│   ├── scripts/           # Backend utility scripts
│   │   └── seed-data.js  # Database seeding script
│   └── README.md
│
└── [config files]        # Root-level configuration files
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14.2.3 (App Router)
- **Database**: MongoDB
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI)
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd app
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and configure:
   - `MONGO_URL`: Your MongoDB connection string
   - `DB_NAME`: Your database name
   - `CORS_ORIGINS`: Allowed CORS origins

4. **Seed the database (optional)**
   ```bash
   node backend/scripts/seed-data.js
   ```

5. **Run the development server**
   ```bash
   yarn dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Available Scripts

- `yarn dev` - Start development server (with memory optimization)
- `yarn dev:no-reload` - Start development server without hot reload
- `yarn build` - Build for production
- `yarn start` - Start production server

## 📚 API Endpoints

### Products
- `GET /api/products` - Get all products (optional `?category=` filter)
- `GET /api/products/featured` - Get featured products
- `GET /api/products/:slug` - Get single product by slug
- `POST /api/products` - Create new product (admin)
- `PUT /api/products/:id` - Update product (admin)
- `DELETE /api/products/:id` - Delete product (admin)

### RFQ (Request for Quote)
- `POST /api/rfq` - Submit new RFQ
- `GET /api/rfq` - Get all RFQs (admin)
- `PUT /api/rfq/:id` - Update RFQ status (admin)

### Admin
- `GET /api/admin/stats` - Get dashboard statistics

### Status
- `GET /api/status` - Get status checks
- `POST /api/status` - Create status check

## 🗂️ Import Paths

All imports use the `@/` alias configured in `jsconfig.json`:

- `@/components/*` → `./frontend/components/*`
- `@/lib/*` → `./frontend/lib/*`
- `@/hooks/*` → `./frontend/hooks/*`
- `@/app/*` → `./app/*`

## 📝 Important Notes

### Next.js Constraints
- The `app/` directory must remain at the root level (Next.js App Router requirement)
- API routes must be in `app/api/` due to Next.js requirements, but they are backend code
- Frontend pages are in `app/` (excluding `app/api/`)

### Code Organization
- **Frontend code**: `frontend/` directory (components, hooks, lib)
- **Backend code**: `backend/scripts/` and `app/api/`
- **Pages**: `app/` directory (Next.js requirement)

## 🔧 Configuration

### Environment Variables
See `.env.example` for required environment variables.

### Tailwind CSS
Configuration is in `tailwind.config.js`. Content paths include:
- `./frontend/components/**/*.{js,jsx}`
- `./app/**/*.{js,jsx}`

### Next.js
Configuration is in `next.config.js` with:
- Standalone output mode
- MongoDB external packages configuration
- CORS headers configuration

## 🚢 Deployment

1. Build the application:
   ```bash
   yarn build
   ```

2. Start the production server:
   ```bash
   yarn start
   ```

For deployment platforms like Vercel, the build process is automatic.

## 📖 Documentation

- [Frontend Documentation](./frontend/README.md)
- [Backend Documentation](./backend/README.md)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 👥 Support

For support, email info@krushiworldexport.com or open an issue in the repository.

---

Built with ❤️ using Next.js and MongoDB

