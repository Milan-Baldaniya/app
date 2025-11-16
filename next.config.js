const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  experimental: {
    // Remove if not using Server Components
    serverComponentsExternalPackages: ['mongodb'],
  },
  webpack(config, { dev, isServer }) {
    if (dev) {
      // Reduce CPU/memory from file watching
      config.watchOptions = {
        poll: 2000, // check every 2 seconds
        aggregateTimeout: 300, // wait before rebuilding
        ignored: ['**/node_modules'],
      };
    } else {
      // Disable eval in production builds for CSP compliance
      config.devtool = false;
      if (!isServer) {
        config.optimization = {
          ...config.optimization,
          minimize: true,
        };
      }
    }
    return config;
  },
  onDemandEntries: {
    maxInactiveAge: 10000,
    pagesBufferLength: 2,
  },
  async headers() {
    const isDev = process.env.NODE_ENV === 'development';
    
    // CSP for production - strict, no eval
    const productionCSP = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'", // unsafe-inline needed for Next.js inline scripts
      "style-src 'self' 'unsafe-inline'", // unsafe-inline needed for Tailwind and component styles
      "img-src 'self' data: https: blob:",
      "font-src 'self' data: https: fonts.gstatic.com", // Google Fonts
      "connect-src 'self' https:",
      "frame-ancestors *",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-src 'self' https:",
      "object-src 'none'",
      "media-src 'self'",
      "worker-src 'self' blob:",
    ].join('; ');

    // CSP for development - allows eval for HMR
    const developmentCSP = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'", // unsafe-eval needed for webpack HMR in dev
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https: blob:",
      "font-src 'self' data: https: fonts.gstatic.com", // Google Fonts
      "connect-src 'self' https: ws: wss:", // WebSocket for HMR
      "frame-ancestors *",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-src 'self' https:",
      "object-src 'none'",
      "media-src 'self'",
      "worker-src 'self' blob:",
    ].join('; ');

    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "ALLOWALL" },
          { 
            key: "Content-Security-Policy", 
            value: isDev ? developmentCSP : productionCSP 
          },
          { key: "Access-Control-Allow-Origin", value: process.env.CORS_ORIGINS || "*" },
          { key: "Access-Control-Allow-Methods", value: "GET, POST, PUT, DELETE, OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "*" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
