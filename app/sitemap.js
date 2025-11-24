import { products } from './data/products'

export default function sitemap() {
    const baseUrl = 'https://www.krushiworld.com'

    // Static routes
    const routes = [
        '',
        '/about',
        '/products',
        '/contact',
        '/infrastructure',
        '/export-documentation',
        '/certifications',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: route === '' ? 1 : 0.8,
    }))

    // Dynamic product routes
    const productRoutes = products.map((product) => ({
        url: `${baseUrl}/products/${product.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
    }))

    return [...routes, ...productRoutes]
}
