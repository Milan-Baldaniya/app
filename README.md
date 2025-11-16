# Krushi World Export - Agro Products Export Platform

A modern Next.js static website for showcasing premium Indian agro products. Built with Next.js 14 and Tailwind CSS.

## 🚀 Features

- **Product Catalog**: Browse a catalog of premium agro products
- **Static Site**: No database required - all products are managed in code
- **Responsive Design**: Modern, mobile-first UI built with Tailwind CSS
- **Easy Product Management**: Add or edit products directly in the code

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── data/              # Static data files
│   │   └── products.js    # Product data (edit here to add/update products)
│   ├── about/             # About page
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
└── [config files]        # Root-level configuration files
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14.2.3 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI)
- **Icons**: Lucide React

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server

## 📝 Managing Products

To add, edit, or remove products, simply edit the `app/data/products.js` file:

1. Open `app/data/products.js`
2. Add, modify, or remove product objects in the `products` array
3. Each product should have:
   - `id`: Unique identifier
   - `name`: Product name
   - `slug`: URL-friendly name (e.g., 'turmeric-finger')
   - `category`: Product category
   - `shortDesc`: Short description
   - `longDesc`: Detailed description
   - `images`: Array of image URLs (optional)
   - `hsCode`: HS Code for export
   - `moq`: Minimum Order Quantity
   - `origin`: Country of origin
   - `grade`: Array of available grades
   - `specifications`: Array of {key, value} objects
   - `packaging`: Array of packaging options
   - `featured`: Boolean (true for featured products)

## 🗂️ Import Paths

All imports use the `@/` alias configured in `jsconfig.json`:
- `@/components/*` → `./frontend/components/*`
- `@/lib/*` → `./frontend/lib/*`
- `@/hooks/*` → `./frontend/hooks/*`
- `@/app/*` → `./app/*`

## 🔧 Configuration

### Tailwind CSS
Configuration is in `tailwind.config.js`. Content paths include:
- `./frontend/components/**/*.{js,jsx}`
- `./app/**/*.{js,jsx}`

### Next.js
Configuration is in `next.config.js` with standalone output mode.

## 🚢 Deployment

1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm run start
   ```

For deployment platforms like Vercel, the build process is automatic.

## 📖 Documentation

- [Frontend Documentation](./frontend/README.md)

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

Built with ❤️ using Next.js
