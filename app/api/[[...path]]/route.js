import { MongoClient } from 'mongodb'
import { v4 as uuidv4 } from 'uuid'
import { NextResponse } from 'next/server'

// MongoDB connection
let client
let db

async function connectToMongo() {
  try {
    if (!process.env.MONGO_URL) {
      throw new Error('MONGO_URL environment variable is not set')
    }
    if (!process.env.DB_NAME) {
      throw new Error('DB_NAME environment variable is not set')
    }
    
    if (!client) {
      client = new MongoClient(process.env.MONGO_URL)
      await client.connect()
      db = client.db(process.env.DB_NAME)
    }
    return db
  } catch (error) {
    console.error('MongoDB connection error:', error)
    throw error
  }
}

// Helper function to handle CORS
function handleCORS(response) {
  response.headers.set('Access-Control-Allow-Origin', process.env.CORS_ORIGINS || '*')
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  response.headers.set('Access-Control-Allow-Credentials', 'true')
  return response
}

// OPTIONS handler for CORS
export async function OPTIONS() {
  return handleCORS(new NextResponse(null, { status: 200 }))
}

// Route handler function
async function handleRoute(request, { params }) {
  const { path = [] } = params
  const route = `/${path.join('/')}`
  const method = request.method

  try {
    const db = await connectToMongo()

    // Root endpoint - GET /api/root (since /api/ is not accessible with catch-all)
    if (route === '/root' && method === 'GET') {
      return handleCORS(NextResponse.json({ message: "Hello World" }))
    }
    // Root endpoint - GET /api/root (since /api/ is not accessible with catch-all)
    if (route === '/' && method === 'GET') {
      return handleCORS(NextResponse.json({ message: "Hello World" }))
    }

    // Status endpoints - POST /api/status
    if (route === '/status' && method === 'POST') {
      const body = await request.json()
      
      if (!body.client_name) {
        return handleCORS(NextResponse.json(
          { error: "client_name is required" }, 
          { status: 400 }
        ))
      }

      const statusObj = {
        id: uuidv4(),
        client_name: body.client_name,
        timestamp: new Date()
      }

      await db.collection('status_checks').insertOne(statusObj)
      return handleCORS(NextResponse.json(statusObj))
    }

    // Status endpoints - GET /api/status
    if (route === '/status' && method === 'GET') {
      const statusChecks = await db.collection('status_checks')
        .find({})
        .limit(1000)
        .toArray()

      // Remove MongoDB's _id field from response
      const cleanedStatusChecks = statusChecks.map(({ _id, ...rest }) => rest)
      
      return handleCORS(NextResponse.json(cleanedStatusChecks))
    }

    // ===== PRODUCTS ENDPOINTS =====
    
    // GET /api/products - Get all products (with optional category filter)
    if (route === '/products' && method === 'GET') {
      const url = new URL(request.url)
      const category = url.searchParams.get('category')
      
      const query = category ? { category } : {}
      const products = await db.collection('products').find(query).toArray()
      
      return handleCORS(NextResponse.json({ success: true, products }))
    }

    // GET /api/products/featured - Get featured products
    if (route === '/products/featured' && method === 'GET') {
      const products = await db.collection('products')
        .find({ featured: true })
        .limit(8)
        .toArray()
      
      return handleCORS(NextResponse.json({ success: true, products }))
    }

    // GET /api/products/:slug - Get single product by slug
    // Must check this AFTER /products/featured to avoid conflicts
    if (route.startsWith('/products/') && route !== '/products/featured' && method === 'GET') {
      const slug = path[1]
      if (!slug) {
        return handleCORS(NextResponse.json(
          { success: false, error: 'Product slug is required' }, 
          { status: 400 }
        ))
      }
      
      const product = await db.collection('products').findOne({ slug })
      
      if (!product) {
        return handleCORS(NextResponse.json(
          { success: false, error: 'Product not found' }, 
          { status: 404 }
        ))
      }
      
      return handleCORS(NextResponse.json({ success: true, product }))
    }

    // POST /api/products - Create new product (admin only)
    if (route === '/products' && method === 'POST') {
      const body = await request.json()
      
      const product = {
        _id: uuidv4(),
        slug: body.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        name: body.name,
        category: body.category,
        shortDesc: body.shortDesc,
        longDesc: body.longDesc || '',
        images: body.images || [],
        hsCode: body.hsCode || '',
        moq: body.moq || '1 MT',
        origin: body.origin || 'India',
        grade: body.grade || [],
        specifications: body.specifications || [],
        packaging: body.packaging || [],
        featured: body.featured || false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      
      await db.collection('products').insertOne(product)
      
      return handleCORS(NextResponse.json({ success: true, product }))
    }

    // PUT /api/products/:id - Update product
    if (route.startsWith('/products/') && route !== '/products/featured' && method === 'PUT') {
      const id = path[1]
      if (!id) {
        return handleCORS(NextResponse.json(
          { success: false, error: 'Product ID is required' }, 
          { status: 400 }
        ))
      }
      
      const body = await request.json()
      
      const updates = {
        ...body,
        updatedAt: new Date()
      }
      
      const result = await db.collection('products').updateOne(
        { _id: id },
        { $set: updates }
      )
      
      if (result.matchedCount === 0) {
        return handleCORS(NextResponse.json(
          { success: false, error: 'Product not found' }, 
          { status: 404 }
        ))
      }
      
      return handleCORS(NextResponse.json({ success: true }))
    }

    // DELETE /api/products/:id - Delete product
    if (route.startsWith('/products/') && route !== '/products/featured' && method === 'DELETE') {
      const id = path[1]
      if (!id) {
        return handleCORS(NextResponse.json(
          { success: false, error: 'Product ID is required' }, 
          { status: 400 }
        ))
      }
      
      const result = await db.collection('products').deleteOne({ _id: id })
      
      if (result.deletedCount === 0) {
        return handleCORS(NextResponse.json(
          { success: false, error: 'Product not found' }, 
          { status: 404 }
        ))
      }
      
      return handleCORS(NextResponse.json({ success: true }))
    }

    // ===== RFQ ENDPOINTS =====
    
    // POST /api/rfq - Submit RFQ
    if (route === '/rfq' && method === 'POST') {
      const body = await request.json()
      
      const rfq = {
        _id: uuidv4(),
        productId: body.productId,
        productName: body.productName,
        name: body.name,
        company: body.company,
        email: body.email,
        phone: body.phone,
        quantity: body.quantity,
        packaging: body.packaging || '',
        destination: body.destination,
        message: body.message || '',
        status: 'New',
        createdAt: new Date(),
        updatedAt: new Date()
      }
      
      await db.collection('rfqs').insertOne(rfq)
      
      return handleCORS(NextResponse.json({ success: true, rfqId: rfq._id }))
    }

    // GET /api/rfq - Get all RFQs (admin only)
    if (route === '/rfq' && method === 'GET') {
      const rfqs = await db.collection('rfqs')
        .find({})
        .sort({ createdAt: -1 })
        .toArray()
      
      return handleCORS(NextResponse.json({ success: true, rfqs }))
    }

    // PUT /api/rfq/:id - Update RFQ status
    if (route.startsWith('/rfq/') && method === 'PUT') {
      const id = path[1]
      const body = await request.json()
      
      await db.collection('rfqs').updateOne(
        { _id: id },
        { $set: { status: body.status, updatedAt: new Date() } }
      )
      
      return handleCORS(NextResponse.json({ success: true }))
    }

    // ===== ADMIN STATS =====
    
    // GET /api/admin/stats - Get dashboard stats
    if (route === '/admin/stats' && method === 'GET') {
      const productsCount = await db.collection('products').countDocuments()
      const rfqsCount = await db.collection('rfqs').countDocuments()
      const newRfqsCount = await db.collection('rfqs').countDocuments({ status: 'New' })
      
      const recentRfqs = await db.collection('rfqs')
        .find({})
        .sort({ createdAt: -1 })
        .limit(5)
        .toArray()
      
      return handleCORS(NextResponse.json({
        success: true,
        stats: {
          productsCount,
          rfqsCount,
          newRfqsCount,
          recentRfqs
        }
      }))
    }

    // Route not found
    return handleCORS(NextResponse.json(
      { error: `Route ${route} not found` }, 
      { status: 404 }
    ))

  } catch (error) {
    console.error('API Error:', error)
    const errorMessage = error.message || "Internal server error"
    return handleCORS(NextResponse.json(
      { error: errorMessage, success: false }, 
      { status: 500 }
    ))
  }
}

// Export all HTTP methods
export const GET = handleRoute
export const POST = handleRoute
export const PUT = handleRoute
export const DELETE = handleRoute
export const PATCH = handleRoute