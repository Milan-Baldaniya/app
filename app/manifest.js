export default function manifest() {
    return {
        name: 'Krushi World',
        short_name: 'Krushi World',
        description: 'Premium Organic, Ayurvedic & Herbal Product Exporter',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}
