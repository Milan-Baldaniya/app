const { MongoClient } = require('mongodb');
const { v4: uuidv4 } = require('uuid');

// Get env vars or use defaults
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017';
const DB_NAME = process.env.DB_NAME || 'krushi_world_db';

const sampleProducts = [
  {
    _id: uuidv4(),
    name: 'Turmeric Finger',
    slug: 'turmeric-finger',
    category: 'Spices',
    shortDesc: 'Premium quality turmeric fingers with high curcumin content',
    longDesc: 'Our premium turmeric fingers are sourced from the finest farms in South India, known for their superior quality and high curcumin content. Carefully processed to retain natural color, aroma, and medicinal properties. Ideal for both culinary and medicinal purposes.',
    images: [],
    hsCode: '09103',
    moq: '1 MT',
    origin: 'India',
    grade: ['A Grade', 'B Grade', 'Premium'],
    specifications: [
      { key: 'Moisture', value: 'Max 10%' },
      { key: 'Curcumin Content', value: '3-5%' },
      { key: 'Color', value: 'Golden Yellow' },
      { key: 'Foreign Matter', value: 'Max 0.5%' }
    ],
    packaging: ['25kg PP bags', '50kg jute bags', 'Bulk'],
    featured: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: uuidv4(),
    name: 'Red Chilli',
    slug: 'red-chilli',
    category: 'Spices',
    shortDesc: 'Premium dried red chillies with intense color and heat',
    longDesc: 'Export quality red chillies grown in the rich soils of Andhra Pradesh and Karnataka. Available in multiple varieties including Teja, Sannam, and Byadgi. Known for their vibrant color, consistent heat levels, and aromatic properties.',
    images: [],
    hsCode: '09042',
    moq: '5 MT',
    origin: 'India',
    grade: ['Teja S17', 'Sannam S4', 'Byadgi'],
    specifications: [
      { key: 'Moisture', value: 'Max 12%' },
      { key: 'Scoville Heat Units', value: '30,000-50,000' },
      { key: 'Color Value', value: 'ASTA 100+' },
      { key: 'Length', value: '9-15 cm' }
    ],
    packaging: ['25kg PP bags', '50kg PP bags'],
    featured: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: uuidv4(),
    name: 'Basmati Rice',
    slug: 'basmati-rice',
    category: 'Grains',
    shortDesc: 'Premium aged Basmati rice with extra-long grains',
    longDesc: 'World-renowned Indian Basmati rice, aged to perfection for superior aroma and taste. Our Basmati rice features extra-long grains that elongate up to twice their size when cooked. Perfect for biryanis, pulao, and international cuisines.',
    images: [],
    hsCode: '10063',
    moq: '10 MT',
    origin: 'India',
    grade: ['1121 Golden Sella', '1121 Steam', 'Traditional Basmati'],
    specifications: [
      { key: 'Grain Length', value: '8.3 mm+' },
      { key: 'Broken', value: 'Max 5%' },
      { key: 'Moisture', value: 'Max 13%' },
      { key: 'Aging', value: '1-2 years' }
    ],
    packaging: ['25kg PP bags', '50kg jute bags', '1kg retail packs'],
    featured: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: uuidv4(),
    name: 'Cumin Seeds',
    slug: 'cumin-seeds',
    category: 'Spices',
    shortDesc: 'High-quality cumin seeds with strong aroma',
    longDesc: 'Premium cumin seeds sourced from Gujarat and Rajasthan, known for their superior quality and aromatic properties. Machine cleaned and sorted to ensure purity and consistency. Essential spice for various cuisines worldwide.',
    images: [],
    hsCode: '09093',
    moq: '2 MT',
    origin: 'India',
    grade: ['Singapore Quality', 'Eagle Quality'],
    specifications: [
      { key: 'Purity', value: '99%+' },
      { key: 'Moisture', value: 'Max 10%' },
      { key: 'Admixture', value: 'Max 1%' },
      { key: 'Oil Content', value: '2-5%' }
    ],
    packaging: ['25kg PP bags', '50kg jute bags'],
    featured: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: uuidv4(),
    name: 'Yellow Corn',
    slug: 'yellow-corn',
    category: 'Grains',
    shortDesc: 'Feed grade and human consumption yellow corn',
    longDesc: 'High-quality yellow corn suitable for both animal feed and human consumption. Sourced from the best farms in India, our corn is properly dried, cleaned, and graded to meet international quality standards.',
    images: [],
    hsCode: '10059',
    moq: '100 MT',
    origin: 'India',
    grade: ['Human Consumption', 'Animal Feed'],
    specifications: [
      { key: 'Moisture', value: 'Max 14%' },
      { key: 'Foreign Matter', value: 'Max 2%' },
      { key: 'Broken', value: 'Max 3%' },
      { key: 'Damaged', value: 'Max 2%' }
    ],
    packaging: ['50kg PP bags', 'Bulk'],
    featured: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: uuidv4(),
    name: 'Chickpeas (Kabuli Chana)',
    slug: 'chickpeas-kabuli',
    category: 'Pulses',
    shortDesc: 'Premium quality Kabuli chickpeas',
    longDesc: 'Large-sized Kabuli chickpeas known for their creamy texture and nutty flavor. Rich in protein and fiber, these chickpeas are perfect for hummus, salads, curries, and various international dishes.',
    images: [],
    hsCode: '07132',
    moq: '5 MT',
    origin: 'India',
    grade: ['10mm', '11mm', '12mm+'],
    specifications: [
      { key: 'Moisture', value: 'Max 12%' },
      { key: 'Foreign Matter', value: 'Max 1%' },
      { key: 'Splits', value: 'Max 3%' },
      { key: 'Protein', value: '18-20%' }
    ],
    packaging: ['25kg PP bags', '50kg PP bags'],
    featured: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: uuidv4(),
    name: 'Peanuts (Groundnuts)',
    slug: 'peanuts-groundnuts',
    category: 'Oil Seeds',
    shortDesc: 'High oil content peanuts/groundnuts',
    longDesc: 'Premium quality peanuts grown in Gujarat and Andhra Pradesh. Available in both raw and blanched forms. High oil content makes them ideal for oil extraction and various food applications.',
    images: [],
    hsCode: '12024',
    moq: '10 MT',
    origin: 'India',
    grade: ['Bold', 'Java', 'TJ'],
    specifications: [
      { key: 'Moisture', value: 'Max 8%' },
      { key: 'Oil Content', value: '45-50%' },
      { key: 'Admixture', value: 'Max 1%' },
      { key: 'Count', value: '40/50, 50/60, 60/70' }
    ],
    packaging: ['25kg jute bags', '50kg PP bags', 'Bulk'],
    featured: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: uuidv4(),
    name: 'Cashew Nuts',
    slug: 'cashew-nuts',
    category: 'Dry Fruits',
    shortDesc: 'Premium quality cashew kernels',
    longDesc: 'Finest quality cashew nuts from Kerala and Karnataka. Available in various grades from whole kernels to splits and pieces. Carefully processed to maintain natural taste, texture, and nutritional value.',
    images: [],
    hsCode: '08013',
    moq: '1 MT',
    origin: 'India',
    grade: ['W180', 'W240', 'W320', 'W450'],
    specifications: [
      { key: 'Moisture', value: 'Max 5%' },
      { key: 'Broken', value: 'As per grade' },
      { key: 'Foreign Matter', value: 'Nil' },
      { key: 'Color', value: 'White/Ivory' }
    ],
    packaging: ['10kg tin', '25kg carton'],
    featured: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: uuidv4(),
    name: 'Onion (Dehydrated)',
    slug: 'dehydrated-onion',
    category: 'Fresh Vegetables',
    shortDesc: 'Premium dehydrated onion flakes and powder',
    longDesc: 'High-quality dehydrated onions processed from fresh red and white onions. Available in various forms including flakes, chopped, minced, and powder. Retains natural flavor and aroma with extended shelf life.',
    images: [],
    hsCode: '07122',
    moq: '5 MT',
    origin: 'India',
    grade: ['Flakes', 'Chopped', 'Minced', 'Powder'],
    specifications: [
      { key: 'Moisture', value: 'Max 6%' },
      { key: 'Purity', value: '99%+' },
      { key: 'Mesh Size', value: 'As per grade' },
      { key: 'Color', value: 'Natural white/pink' }
    ],
    packaging: ['20kg carton with inner bag', '25kg PP bags'],
    featured: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: uuidv4(),
    name: 'Almonds',
    slug: 'almonds',
    category: 'Dry Fruits',
    shortDesc: 'Premium quality almonds',
    longDesc: 'High-quality almonds sourced from the best orchards. Available in both raw and roasted forms. Rich in vitamins, minerals, and healthy fats. Perfect for snacking and various culinary applications.',
    images: [],
    hsCode: '08021',
    moq: '500 KG',
    origin: 'India',
    grade: ['Gurbandi', 'California', 'Mamra'],
    specifications: [
      { key: 'Moisture', value: 'Max 6%' },
      { key: 'Foreign Matter', value: 'Nil' },
      { key: 'Size', value: '18-20mm+' },
      { key: 'Broken', value: 'Max 5%' }
    ],
    packaging: ['10kg carton', '25kg carton'],
    featured: true,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

async function seedDatabase() {
  const client = new MongoClient(process.env.MONGO_URL);
  
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    
    const db = client.db(process.env.DB_NAME);
    
    // Clear existing products
    await db.collection('products').deleteMany({});
    console.log('Cleared existing products');
    
    // Insert sample products
    await db.collection('products').insertMany(sampleProducts);
    console.log(`Inserted ${sampleProducts.length} sample products`);
    
    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await client.close();
  }
}

seedDatabase();
