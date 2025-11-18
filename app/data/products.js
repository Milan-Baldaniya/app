// Static Products Data
// You can manually add, edit, or remove products from this file

export const products = []

// Helper functions
export function getProductBySlug(slug) {
  return products.find(product => product.slug === slug)
}

export function getFeaturedProducts() {
  return products.filter(product => product.featured)
}

export function getProductsByCategory(category) {
  if (category === 'All') {
    return products
  }
  return products.filter(product => product.category === category)
}

export function getAllCategories() {
  return [...new Set(products.map(product => product.category))]
}
