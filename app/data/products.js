// Static Products Data
// You can manually add, edit, or remove products from this file

// Helper function to generate slug from name
function generateSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function buildImagePath(relativePath) {
  return `/productimage/${relativePath
    .split('/')
    .map(segment => encodeURIComponent(segment))
    .join('/')}`
}

export const products = [
  // ========== FRESH VEGETABLES ==========
  {
    id: 'veg-001',
    name: 'Onion (Red & White)',
    slug: generateSlug('Onion Red White'),
    category: 'Fresh Vegetables',
    shortDesc: 'Premium quality onions with long shelf life and high export demand',
    longDesc: 'Our premium onions are sourced from Nashik and Gujarat regions, known for their superior quality. Available in both red and white varieties, these onions feature dry, firm skin with moisture content below 14%, ensuring excellent shelf life. Perfect for bulk export with sizes ranging from 40-70mm.',
    moq: '5 Metric Ton',
    hsCode: '07031010 / 07031020',
    specifications: [
      { key: 'Size', value: '40–70mm' },
      { key: 'Skin', value: 'Dry, firm' },
      { key: 'Moisture', value: '<14%' },
      { key: 'Variety', value: 'Nashik / Gujarat' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['25kg bags', '50kg bags', 'Jumbo bags'],
    productBenefits: 'Long shelf life, high export demand',
    healthBenefits: 'Boosts immunity, improves digestion'
  },
  {
    id: 'veg-002',
    name: 'Garlic',
    slug: generateSlug('Garlic'),
    category: 'Fresh Vegetables',
    shortDesc: 'Big bulbs with strong aroma, essential seasoning and natural antibiotic',
    longDesc: 'Premium garlic with big bulbs and strong aromatic properties. Clean and sorted to meet export standards. Essential for seasoning and known for its natural antibiotic properties.',
    moq: '5 Metric Ton',
    hsCode: '07032000',
    specifications: [
      { key: 'Bulbs', value: 'Big bulbs' },
      { key: 'Aroma', value: 'Strong' },
      { key: 'Quality', value: 'Clean & sorted' }
    ],
    grade: ['Export Grade'],
    packaging: ['25kg bags', '50kg bags', 'Jumbo bags'],
    productBenefits: 'Essential seasoning, natural antibiotic',
    healthBenefits: 'Controls blood pressure & cholesterol'
  },
  {
    id: 'veg-003',
    name: 'Potato',
    slug: generateSlug('Potato'),
    category: 'Fresh Vegetables',
    shortDesc: 'Firm export grade potatoes, size 40-80mm, bulk export item',
    longDesc: 'Premium export-grade potatoes with firm texture and uniform size ranging from 40-80mm. Perfect for bulk export with excellent quality standards.',
    moq: '5 Metric Ton',
    hsCode: '07019000',
    specifications: [
      { key: 'Size', value: '40–80mm' },
      { key: 'Quality', value: 'Firm & export grade' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['25kg bags', '50kg bags', 'Jumbo bags'],
    productBenefits: 'Bulk export item',
    healthBenefits: 'Instant energy source'
  },
  {
    id: 'veg-004',
    name: 'Tomato',
    slug: generateSlug('Tomato'),
    category: 'Fresh Vegetables',
    shortDesc: 'Fresh red tomatoes, uniform size, juicy - perfect for ketchup, sauces, and hotels',
    longDesc: 'Premium fresh red tomatoes with uniform size and juicy texture. Ideal for processing into ketchup and sauces, as well as for hotel and restaurant use. High in antioxidants.',
    moq: '5 Metric Ton',
    hsCode: '07020000',
    specifications: [
      { key: 'Color', value: 'Fresh red' },
      { key: 'Size', value: 'Uniform' },
      { key: 'Quality', value: 'Juicy' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['25kg boxes', '50kg boxes', 'Jumbo bags'],
    productBenefits: 'Used for ketchup, sauces, hotels',
    healthBenefits: 'High antioxidants'
  },
  {
    id: 'veg-005',
    name: 'Green Chilli',
    slug: generateSlug('Green Chilli'),
    category: 'Fresh Vegetables',
    shortDesc: 'Dark green chillies, 8-12cm, strong pungency for boosting metabolism',
    longDesc: 'Premium dark green chillies with length ranging from 8-12cm. Known for strong pungency and excellent for culinary use. High demand in export markets.',
    moq: '5 Metric Ton',
    hsCode: '07096010',
    specifications: [
      { key: 'Color', value: 'Dark green' },
      { key: 'Length', value: '8–12 cm' },
      { key: 'Pungency', value: 'Strong' }
    ],
    grade: ['Export Grade'],
    packaging: ['25kg bags', '50kg bags', 'Jumbo bags'],
    productBenefits: 'Strong pungency',
    healthBenefits: 'Boosts metabolism'
  },
  {
    id: 'veg-006',
    name: 'Lemon',
    slug: generateSlug('Lemon'),
    category: 'Fresh Vegetables',
    shortDesc: 'Extra juicy lemons, 35-45mm, high export demand with detox and Vitamin C benefits',
    longDesc: 'Premium lemons with size ranging from 35-45mm. Extra juicy with high export demand. Rich in Vitamin C and known for detoxification properties.',
    moq: '5 Metric Ton',
    hsCode: '08055011',
    specifications: [
      { key: 'Size', value: '35–45mm' },
      { key: 'Quality', value: 'Extra juicy' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['25kg boxes', '50kg boxes', 'Jumbo bags'],
    productBenefits: 'High export demand',
    healthBenefits: 'Detox & Vitamin C boost'
  },
  {
    id: 'veg-007',
    name: 'Ginger',
    slug: generateSlug('Ginger'),
    category: 'Fresh Vegetables',
    shortDesc: 'Mature roots with low moisture, high medicinal value for digestion and immunity',
    longDesc: 'Premium mature ginger roots with low moisture content. Known for high medicinal value and excellent for both culinary and therapeutic use. Supports digestion and boosts immunity.',
    moq: '5 Metric Ton',
    hsCode: '09101000',
    specifications: [
      { key: 'Quality', value: 'Mature roots' },
      { key: 'Moisture', value: 'Low moisture' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['25kg bags', '50kg bags', 'Jumbo bags'],
    productBenefits: 'High medicinal value',
    healthBenefits: 'Digestion + immunity'
  },
  {
    id: 'veg-008',
    name: 'Drumstick (Moringa Pods)',
    slug: generateSlug('Drumstick Moringa Pods'),
    category: 'Fresh Vegetables',
    shortDesc: 'Highly nutritious moringa pods, 20-45cm, rich in iron and calcium',
    longDesc: 'Premium drumstick (moringa pods) with length ranging from 20-45cm. Highly nutritious and rich in essential minerals including iron and calcium. Excellent for health-conscious markets.',
    moq: '5 Metric Ton',
    hsCode: '07099910',
    specifications: [
      { key: 'Length', value: '20–45cm' }
    ],
    grade: ['Export Grade'],
    packaging: ['25kg bags', '50kg bags', 'Jumbo bags'],
    productBenefits: 'Highly nutritious',
    healthBenefits: 'Rich in iron & calcium'
  },
  {
    id: 'veg-009',
    name: 'Green Peas',
    slug: generateSlug('Green Peas'),
    category: 'Fresh Vegetables',
    shortDesc: 'Bright green, uniform peas used in frozen foods, rich in fibre and protein',
    longDesc: 'Premium bright green peas with uniform size and quality. Perfect for frozen food processing and direct consumption. Rich in dietary fibre and protein.',
    moq: '5 Metric Ton',
    hsCode: '07081000',
    specifications: [
      { key: 'Color', value: 'Bright green' },
      { key: 'Quality', value: 'Uniform' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['25kg bags', '50kg bags', 'Jumbo bags'],
    productBenefits: 'Used in frozen foods',
    healthBenefits: 'Fibre + protein'
  },
  {
    id: 'veg-010',
    name: 'Brinjal (Eggplant)',
    slug: generateSlug('Brinjal Eggplant'),
    category: 'Fresh Vegetables',
    shortDesc: 'Glossy purple/green brinjal, daily-use vegetable supporting heart and digestion',
    longDesc: 'Premium brinjal (eggplant) available in glossy purple and green varieties. Essential daily-use vegetable with excellent health benefits for heart and digestion support.',
    moq: '5 Metric Ton',
    hsCode: '07093000',
    specifications: [
      { key: 'Appearance', value: 'Glossy purple/green' }
    ],
    grade: ['Export Grade'],
    packaging: ['25kg bags', '50kg boxes', 'Jumbo bags'],
    productBenefits: 'Daily-use vegetable',
    healthBenefits: 'Heart & digestion support'
  },

  // ========== FRESH FRUITS ==========
  {
    id: 'fruit-001',
    name: 'Pineapple',
    slug: generateSlug('Pineapple'),
    category: 'Fresh Fruits',
    shortDesc: 'Sweet, aromatic pineapple with long shelf life and digestive enzymes',
    longDesc: 'Premium sweet and aromatic pineapples with excellent shelf life. Known for containing digestive enzymes that aid in digestion. Perfect for export markets.',
    moq: '5 Metric Ton',
    hsCode: '08043000',
    specifications: [
      { key: 'Taste', value: 'Sweet' },
      { key: 'Aroma', value: 'Aromatic' },
      { key: 'Shelf Life', value: 'Long' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['25kg boxes', '50kg boxes', 'Jumbo bags'],
    productBenefits: 'Long shelf life',
    healthBenefits: 'Digestive enzymes'
  },
  {
    id: 'fruit-002',
    name: 'Watermelon',
    slug: generateSlug('Watermelon'),
    category: 'Fresh Fruits',
    shortDesc: 'Large, juicy watermelons with high demand, providing hydration and essential minerals',
    longDesc: 'Premium large and juicy watermelons with high market demand. Excellent source of hydration and essential minerals. Perfect for bulk export.',
    moq: '5 Metric Ton',
    hsCode: '08071100',
    specifications: [
      { key: 'Size', value: 'Large' },
      { key: 'Quality', value: 'Juicy' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['Individual packing', 'Bulk packing'],
    productBenefits: 'High demand',
    healthBenefits: 'Hydration + minerals'
  },
  {
    id: 'fruit-003',
    name: 'Banana (Cavendish)',
    slug: generateSlug('Banana Cavendish'),
    category: 'Fresh Fruits',
    shortDesc: 'Bright yellow, matured Cavendish bananas - bulk export fruit rich in potassium',
    longDesc: 'Premium Cavendish bananas with bright yellow color and proper maturity. Ideal for bulk export. Rich in potassium which is essential for strength and muscle function.',
    moq: '5 Metric Ton',
    hsCode: '08039010',
    specifications: [
      { key: 'Color', value: 'Bright yellow' },
      { key: 'Maturity', value: 'Matured' },
      { key: 'Variety', value: 'Cavendish' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['13kg boxes', '18kg boxes', 'Bulk packing'],
    productBenefits: 'Bulk export fruit',
    healthBenefits: 'Potassium for strength'
  },
  {
    id: 'fruit-004',
    name: 'Grapes (Green/Black)',
    slug: generateSlug('Grapes Green Black'),
    category: 'Fresh Fruits',
    shortDesc: 'Sweet, seedless grapes with strong global demand, rich in antioxidants',
    longDesc: 'Premium grapes available in green and black varieties. Sweet and seedless options available. Strong global demand with excellent export potential. Rich in antioxidants.',
    moq: '5 Metric Ton',
    hsCode: '08061000',
    specifications: [
      { key: 'Taste', value: 'Sweet' },
      { key: 'Varieties', value: 'Seedless options available' },
      { key: 'Colors', value: 'Green/Black' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['4.5kg boxes', '9kg boxes', 'Bulk packing'],
    productBenefits: 'Strong global demand',
    healthBenefits: 'Rich antioxidants'
  },
  {
    id: 'fruit-005',
    name: 'Pomegranate (Bhagwa/Ganesh)',
    slug: generateSlug('Pomegranate Bhagwa Ganesh'),
    category: 'Fresh Fruits',
    shortDesc: 'Bright red, big size pomegranates with attractive color, improves blood circulation',
    longDesc: 'Premium pomegranates in Bhagwa and Ganesh varieties. Bright red color with big size. Attractive appearance with excellent health benefits including improved blood circulation.',
    moq: '5 Metric Ton',
    hsCode: '08109010',
    specifications: [
      { key: 'Color', value: 'Bright red' },
      { key: 'Size', value: 'Big size' },
      { key: 'Varieties', value: 'Bhagwa/Ganesh' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['4.5kg boxes', '9kg boxes', 'Bulk packing'],
    productBenefits: 'Attractive colour',
    healthBenefits: 'Improves blood circulation'
  },
  {
    id: 'fruit-006',
    name: 'Papaya',
    slug: generateSlug('Papaya'),
    category: 'Fresh Fruits',
    shortDesc: 'Semi-ripe export quality papaya with long shelf life, boosts digestion',
    longDesc: 'Premium semi-ripe papaya with export quality standards. Long shelf life making it ideal for export markets. Known for boosting digestion and digestive health.',
    moq: '5 Metric Ton',
    hsCode: '08072000',
    specifications: [
      { key: 'Ripeness', value: 'Semi-ripe export quality' },
      { key: 'Shelf Life', value: 'Long' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['25kg boxes', '50kg boxes', 'Bulk packing'],
    productBenefits: 'Long shelf fruit',
    healthBenefits: 'Boosts digestion'
  },
  {
    id: 'fruit-007',
    name: 'Mango (Kesar / Alphonso)',
    slug: generateSlug('Mango Kesar Alphonso'),
    category: 'Fresh Fruits',
    shortDesc: 'Premium Kesar and Alphonso mangoes with premium packing, strong immunity benefits',
    longDesc: 'Premium mangoes in Kesar and Alphonso varieties. Premium packing ensures quality preservation. High-value fruit with excellent taste and strong immunity-boosting properties.',
    moq: '5 Metric Ton',
    hsCode: '08045040',
    specifications: [
      { key: 'Varieties', value: 'Kesar / Alphonso' },
      { key: 'Packing', value: 'Premium packing' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['Premium boxes', 'Individual packing', 'Bulk packing'],
    productBenefits: 'High-value fruit',
    healthBenefits: 'Strong immunity'
  },

  // ========== SPICES ==========
  {
    id: 'spice-001',
    name: 'Turmeric (Whole/Powder)',
    slug: generateSlug('Turmeric Whole Powder'),
    category: 'Spices',
    shortDesc: 'Bright yellow turmeric with curcumin 2-5%, natural color and anti-inflammatory properties',
    longDesc: 'Premium turmeric available in whole and powder forms. Bright yellow color with curcumin content ranging from 2-5%. Used as natural colorant and known for anti-inflammatory medicinal properties.',
    moq: '5 Metric Ton',
    hsCode: '09103030 / 09103020',
    specifications: [
      { key: 'Curcumin Content', value: '2–5%' },
      { key: 'Color', value: 'Bright yellow' },
      { key: 'Forms', value: 'Whole/Powder' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['25kg bags', '50kg bags', 'Jumbo bags'],
    productBenefits: 'Natural colour, medicinal',
    healthBenefits: 'Anti-inflammatory'
  },
  {
    id: 'spice-002',
    name: 'Cumin Seeds',
    slug: generateSlug('Cumin Seeds'),
    category: 'Spices',
    shortDesc: 'Premium cumin seeds with purity 98-99%, essential spice for digestion',
    longDesc: 'Premium cumin seeds with purity level of 98-99%. Essential spice used in various cuisines worldwide. Known for digestive health benefits.',
    moq: '5 Metric Ton',
    hsCode: '09093090',
    specifications: [
      { key: 'Purity', value: '98–99%' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['25kg bags', '50kg bags', 'Jumbo bags'],
    productBenefits: 'Essential spice',
    healthBenefits: 'Digestion'
  },
  {
    id: 'spice-003',
    name: 'Red Chilli (Whole/Powder)',
    slug: generateSlug('Red Chilli Whole Powder'),
    category: 'Spices',
    shortDesc: 'Teja/S17 red chillies in whole and powder forms, providing heat, color, and Vitamin A',
    longDesc: 'Premium red chillies in Teja and S17 varieties. Available in whole and powder forms. Provides heat and color to dishes. Rich in Vitamin A.',
    moq: '5 Metric Ton',
    hsCode: '09042010 / 09042020',
    specifications: [
      { key: 'Varieties', value: 'Teja/S17' },
      { key: 'Forms', value: 'Whole/Powder' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['25kg bags', '50kg bags', 'Jumbo bags'],
    productBenefits: 'Heat + colour',
    healthBenefits: 'Vitamin A'
  },
  {
    id: 'spice-004',
    name: 'Coriander Seeds',
    slug: generateSlug('Coriander Seeds'),
    category: 'Spices',
    shortDesc: 'High purity coriander seeds (99%), widely used spice with cooling properties',
    longDesc: 'Premium coriander seeds with 99% purity. Widely used spice in global cuisines. Known for cooling properties and digestive benefits.',
    moq: '5 Metric Ton',
    hsCode: '09092090',
    specifications: [
      { key: 'Purity', value: '99%' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['25kg bags', '50kg bags', 'Jumbo bags'],
    productBenefits: 'Widely used',
    healthBenefits: 'Cooling'
  },
  {
    id: 'spice-005',
    name: 'Fennel Seeds',
    slug: generateSlug('Fennel Seeds'),
    category: 'Spices',
    shortDesc: 'Green fennel seeds with sweet aroma, used as mouth freshener, relieves gas and digestion',
    longDesc: 'Premium green fennel seeds with sweet aromatic properties. Used as mouth freshener and in various culinary applications. Known for relieving gas and supporting digestion.',
    moq: '5 Metric Ton',
    hsCode: '09096120',
    specifications: [
      { key: 'Color', value: 'Green' },
      { key: 'Aroma', value: 'Sweet aroma' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['25kg bags', '50kg bags', 'Jumbo bags'],
    productBenefits: 'Mouth freshener',
    healthBenefits: 'Gas + digestion relief'
  },
  {
    id: 'spice-006',
    name: 'Fenugreek Seeds (Methi)',
    slug: generateSlug('Fenugreek Seeds Methi'),
    category: 'Spices',
    shortDesc: 'Golden fenugreek seeds with moisture <10%, used in pickles and masalas, controls sugar',
    longDesc: 'Premium golden fenugreek seeds (methi) with moisture content below 10%. Used in pickles and various spice blends (masalas). Known for controlling blood sugar levels.',
    moq: '5 Metric Ton',
    hsCode: '09109912',
    specifications: [
      { key: 'Color', value: 'Golden' },
      { key: 'Moisture', value: '<10%' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['25kg bags', '50kg bags', 'Jumbo bags'],
    productBenefits: 'Pickles & masalas',
    healthBenefits: 'Controls sugar'
  },
  {
    id: 'spice-007',
    name: 'Black Pepper',
    slug: generateSlug('Black Pepper'),
    category: 'Spices',
    shortDesc: 'Premium black pepper with high piperine content, respiratory support benefits',
    longDesc: 'Premium black pepper with high piperine content. Premium spice used globally. Known for respiratory support and various health benefits.',
    moq: '5 Metric Ton',
    hsCode: '09041190',
    specifications: [
      { key: 'Piperine', value: 'High piperine' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['25kg bags', '50kg bags', 'Jumbo bags'],
    productBenefits: 'Premium spice',
    healthBenefits: 'Respiratory support'
  },
  {
    id: 'spice-008',
    name: 'Green Cardamom',
    slug: generateSlug('Green Cardamom'),
    category: 'Spices',
    shortDesc: 'Green aromatic cardamom, premium flavor spice supporting digestion',
    longDesc: 'Premium green cardamom with aromatic properties. Premium flavor spice used in various cuisines and beverages. Known for digestive health benefits.',
    moq: '5 Metric Ton',
    hsCode: '09083130',
    specifications: [
      { key: 'Color', value: 'Green' },
      { key: 'Aroma', value: 'Aromatic' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['25kg bags', '50kg bags', 'Jumbo bags'],
    productBenefits: 'Premium flavour',
    healthBenefits: 'Digestion'
  },
  {
    id: 'spice-009',
    name: 'Cloves',
    slug: generateSlug('Cloves'),
    category: 'Spices',
    shortDesc: 'Strong aromatic cloves with medicinal properties and anti-bacterial benefits',
    longDesc: 'Premium cloves with strong aromatic properties. Used for medicinal purposes and in various culinary applications. Known for anti-bacterial properties.',
    moq: '5 Metric Ton',
    hsCode: '09072020',
    specifications: [
      { key: 'Aroma', value: 'Strong aroma' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['25kg bags', '50kg bags', 'Jumbo bags'],
    productBenefits: 'Medicinal',
    healthBenefits: 'Anti-bacterial'
  },
  {
    id: 'spice-010',
    name: 'Mustard Seeds',
    slug: generateSlug('Mustard Seeds'),
    category: 'Spices',
    shortDesc: 'Yellow and black mustard seeds, used for oil and pickles, supports digestion',
    longDesc: 'Premium mustard seeds available in yellow and black varieties. Used for oil extraction and in pickles. Known for digestive health benefits.',
    moq: '5 Metric Ton',
    hsCode: '12075090',
    specifications: [
      { key: 'Varieties', value: 'Yellow/black' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['25kg bags', '50kg bags', 'Jumbo bags'],
    productBenefits: 'Oil + pickles',
    healthBenefits: 'Digestion'
  },

  // ========== GRAINS ==========
  {
    id: 'grain-001',
    name: 'Rice (All Varieties)',
    slug: generateSlug('Rice All Varieties'),
    category: 'Grains',
    shortDesc: 'Long grain rice with low moisture, top export grain for easy digestion',
    longDesc: 'Premium rice available in all varieties. Long grain with low moisture content ensuring excellent quality and shelf life. Top export grain with high global demand.',
    moq: '5 Metric Ton',
    hsCode: '10063020 / 10063090',
    specifications: [
      { key: 'Grain Type', value: 'Long grain' },
      { key: 'Moisture', value: 'Low moisture' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['25kg bags', '50kg bags', 'Jumbo bags'],
    productBenefits: 'Top export grain',
    healthBenefits: 'Easy digestion'
  },
  {
    id: 'grain-002',
    name: 'Wheat',
    slug: generateSlug('Wheat'),
    category: 'Grains',
    shortDesc: 'Premium wheat with protein 11-13%, staple grain high in fibre',
    longDesc: 'Premium wheat with protein content ranging from 11-13%. Essential staple grain used worldwide. High in dietary fibre for digestive health.',
    moq: '5 Metric Ton',
    hsCode: '10019910',
    specifications: [
      { key: 'Protein', value: '11–13%' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['25kg bags', '50kg bags', 'Jumbo bags'],
    productBenefits: 'Staple grain',
    healthBenefits: 'High fibre'
  },
  {
    id: 'grain-003',
    name: 'Maize (Corn)',
    slug: generateSlug('Maize Corn'),
    category: 'Grains',
    shortDesc: 'Yellow maize, machine cleaned, used for food and feed, high energy source',
    longDesc: 'Premium yellow maize (corn) that is machine cleaned to ensure purity. Used for both food and feed purposes. Excellent source of high energy.',
    moq: '5 Metric Ton',
    hsCode: '10059000',
    specifications: [
      { key: 'Color', value: 'Yellow' },
      { key: 'Quality', value: 'Machine cleaned' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['25kg bags', '50kg bags', 'Jumbo bags'],
    productBenefits: 'Food & feed use',
    healthBenefits: 'High energy'
  },
  {
    id: 'grain-004',
    name: 'Millet',
    slug: generateSlug('Millet'),
    category: 'Grains',
    shortDesc: 'Gluten-free millet grain with high export trend, supports weight control',
    longDesc: 'Premium gluten-free millet grain. High export trend due to increasing health consciousness. Known for supporting weight control and overall health.',
    moq: '5 Metric Ton',
    hsCode: '10082100',
    specifications: [
      { key: 'Type', value: 'Gluten-free grain' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['25kg bags', '50kg bags', 'Jumbo bags'],
    productBenefits: 'High export trend',
    healthBenefits: 'Weight control'
  },
  {
    id: 'grain-005',
    name: 'Bajra',
    slug: generateSlug('Bajra'),
    category: 'Grains',
    shortDesc: 'Premium bajra with 99% purity, traditional grain rich in iron',
    longDesc: 'Premium bajra (pearl millet) with 99% purity. Traditional grain with excellent nutritional value. Rich in iron and essential minerals.',
    moq: '5 Metric Ton',
    hsCode: '10082000',
    specifications: [
      { key: 'Purity', value: '99%' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['25kg bags', '50kg bags', 'Jumbo bags'],
    productBenefits: 'Traditional grain',
    healthBenefits: 'Iron-rich'
  },

  // ========== PULSES ==========
  {
    id: 'pulse-001',
    name: 'Chickpeas (Kabuli/Desi)',
    slug: generateSlug('Chickpeas Kabuli Desi'),
    category: 'Pulses',
    shortDesc: 'Premium chickpeas in Kabuli and Desi varieties, size 38/40, 40/42, high protein for muscle strength',
    longDesc: 'Premium chickpeas available in Kabuli and Desi varieties. Sizes include 38/40 and 40/42. High protein content making it ideal for muscle strength and overall health.',
    moq: '5 Metric Ton',
    hsCode: '07132000',
    specifications: [
      { key: 'Varieties', value: 'Kabuli/Desi' },
      { key: 'Size', value: '38/40, 40/42' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['25kg bags', '50kg bags', 'Jumbo bags'],
    productBenefits: 'High protein',
    healthBenefits: 'Muscle strength'
  },
  {
    id: 'pulse-002',
    name: 'Toor Dal',
    slug: generateSlug('Toor Dal'),
    category: 'Pulses',
    shortDesc: 'Clean, machine sorted toor dal with high demand, improves digestion',
    longDesc: 'Premium toor dal (pigeon pea) that is clean and machine sorted for quality. High demand in domestic and international markets. Known for improving digestion.',
    moq: '5 Metric Ton',
    hsCode: '07136000',
    specifications: [
      { key: 'Quality', value: 'Clean, machine sorted' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['25kg bags', '50kg bags', 'Jumbo bags'],
    productBenefits: 'High demand',
    healthBenefits: 'Improves digestion'
  },
  {
    id: 'pulse-003',
    name: 'Moong Dal',
    slug: generateSlug('Moong Dal'),
    category: 'Pulses',
    shortDesc: 'Light and easy to cook moong dal, premium quality for easy digestion',
    longDesc: 'Premium moong dal (mung bean) that is light and easy to cook. Premium quality ensuring quick cooking time. Known for easy digestion and nutritional benefits.',
    moq: '5 Metric Ton',
    hsCode: '07133100',
    specifications: [
      { key: 'Quality', value: 'Light & easy cook' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['25kg bags', '50kg bags', 'Jumbo bags'],
    productBenefits: 'Premium quality',
    healthBenefits: 'Easy digestion'
  },
  {
    id: 'pulse-004',
    name: 'Masoor Dal',
    slug: generateSlug('Masoor Dal'),
    category: 'Pulses',
    shortDesc: 'Red/orange masoor dal, iron-rich pulse for blood building',
    longDesc: 'Premium masoor dal (red lentil) available in red and orange varieties. Iron-rich pulse known for blood building properties and overall health benefits.',
    moq: '5 Metric Ton',
    hsCode: '07134000',
    specifications: [
      { key: 'Color', value: 'Red/orange' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['25kg bags', '50kg bags', 'Jumbo bags'],
    productBenefits: 'Iron-rich',
    healthBenefits: 'Blood builder'
  },
  {
    id: 'pulse-005',
    name: 'Urad Dal',
    slug: generateSlug('Urad Dal'),
    category: 'Pulses',
    shortDesc: 'Whole and split urad dal, used for papad, provides strength',
    longDesc: 'Premium urad dal (black gram) available in whole and split forms. Used extensively for making papad and other traditional foods. Known for providing strength and energy.',
    moq: '5 Metric Ton',
    hsCode: '07133990',
    specifications: [
      { key: 'Forms', value: 'Whole & split' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['25kg bags', '50kg bags', 'Jumbo bags'],
    productBenefits: 'Used for papad',
    healthBenefits: 'Strength'
  },
  {
    id: 'pulse-006',
    name: 'Dried Green Peas',
    slug: generateSlug('Dried Green Peas'),
    category: 'Pulses',
    shortDesc: 'Uniform size dried green peas for ready meals, rich in fibre and protein',
    longDesc: 'Premium dried green peas with uniform size. Perfect for ready meals and various culinary applications. Rich in dietary fibre and protein for optimal nutrition.',
    moq: '5 Metric Ton',
    hsCode: '07131000',
    specifications: [
      { key: 'Size', value: 'Uniform size' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['25kg bags', '50kg bags', 'Jumbo bags'],
    productBenefits: 'Ready meals',
    healthBenefits: 'Fibre & protein'
  },

  // ========== OIL SEEDS ==========
  {
    id: 'oilseed-001',
    name: 'Sesame Seeds (Hulled/Natural)',
    slug: generateSlug('Sesame Seeds Hulled Natural'),
    category: 'Oil Seeds',
    shortDesc: 'Premium sesame seeds with 99.90% purity, already cleaned & sorted, export grade, for bakery use, calcium-rich',
    longDesc: 'Premium sesame seeds available in hulled and natural forms. 99.90% purity with already cleaned and sorted quality. Export grade suitable for bakery use. Rich in calcium for bone health.',
    moq: '5 Metric Ton',
    hsCode: '12074090',
    specifications: [
      { key: 'Purity', value: '99.90%' },
      { key: 'Quality', value: 'Already cleaned & sorted, export grade' },
      { key: 'Forms', value: 'Hulled/Natural' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['25kg bags', '50kg bags', 'Jumbo bags'],
    productBenefits: 'Bakery use',
    healthBenefits: 'Calcium-rich'
  },
  {
    id: 'oilseed-002',
    name: 'Groundnut (Peanuts)',
    slug: generateSlug('Groundnut Peanuts'),
    category: 'Oil Seeds',
    shortDesc: 'Java/Bold groundnuts, already cleaned & sorted, export grade, for oil and snacks, healthy fats',
    longDesc: 'Premium groundnuts (peanuts) in Java and Bold varieties. Already cleaned and sorted to export grade standards. Used for oil extraction and snacks. Rich in healthy fats.',
    moq: '5 Metric Ton',
    hsCode: '12024290',
    specifications: [
      { key: 'Varieties', value: 'Java/Bold' },
      { key: 'Quality', value: 'Already cleaned & sorted, export grade' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['25kg bags', '50kg bags', 'Jumbo bags'],
    productBenefits: 'Oil/snacks',
    healthBenefits: 'Healthy fats'
  },
  {
    id: 'oilseed-003',
    name: 'Castor Seeds',
    slug: generateSlug('Castor Seeds'),
    category: 'Oil Seeds',
    shortDesc: 'Castor seeds with oil content 47-49%, already cleaned & sorted, export grade, for pharma and cosmetic use, benefits skin and hair',
    longDesc: 'Premium castor seeds with oil content ranging from 47-49%. Already cleaned and sorted to export grade. Used in pharmaceutical and cosmetic industries. Known for skin and hair health benefits.',
    moq: '5 Metric Ton',
    hsCode: '12073090',
    specifications: [
      { key: 'Oil Content', value: '47–49%' },
      { key: 'Quality', value: 'Already cleaned & sorted, export grade' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['25kg bags', '50kg bags', 'Jumbo bags'],
    productBenefits: 'Pharma/cosmetic',
    healthBenefits: 'Skin & hair'
  },
  {
    id: 'oilseed-004',
    name: 'Mustard Seeds (Oil Seeds)',
    slug: generateSlug('Mustard Seeds Oil Seeds'),
    category: 'Oil Seeds',
    shortDesc: 'Yellow and black mustard seeds, already cleaned & sorted, export grade, for sauces and oils, supports digestion',
    longDesc: 'Premium mustard seeds in yellow and black varieties. Already cleaned and sorted to export grade standards. Used for sauces and oil extraction. Known for digestive health benefits.',
    moq: '5 Metric Ton',
    hsCode: '12075090',
    specifications: [
      { key: 'Varieties', value: 'Yellow/black' },
      { key: 'Quality', value: 'Already cleaned & sorted, export grade' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['25kg bags', '50kg bags', 'Jumbo bags'],
    productBenefits: 'Sauces + oils',
    healthBenefits: 'Digestion'
  },
  {
    id: 'oilseed-005',
    name: 'Ajwain Seeds',
    slug: generateSlug('Ajwain Seeds'),
    category: 'Oil Seeds',
    shortDesc: 'Strong aroma ajwain seeds, already cleaned & sorted, export grade, for spice blends, acidity relief',
    longDesc: 'Premium ajwain seeds (carom seeds) with strong aromatic properties. Already cleaned and sorted to export grade. Used in spice blends and culinary applications. Known for acidity relief.',
    moq: '5 Metric Ton',
    hsCode: '09069019',
    specifications: [
      { key: 'Aroma', value: 'Strong aroma' },
      { key: 'Quality', value: 'Already cleaned & sorted, export grade' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['25kg bags', '50kg bags', 'Jumbo bags'],
    productBenefits: 'Spice blends',
    healthBenefits: 'Acidity relief'
  },
  {
    id: 'oilseed-006',
    name: 'Cumin Seeds (Oil Seeds)',
    slug: generateSlug('Cumin Seeds Oil Seeds'),
    category: 'Oil Seeds',
    shortDesc: 'Bold cumin seeds, already cleaned & sorted, export grade, export spice for digestion',
    longDesc: 'Premium bold cumin seeds. Already cleaned and sorted to export grade standards. High-quality export spice used globally. Known for digestive health benefits.',
    moq: '5 Metric Ton',
    hsCode: '09093090',
    specifications: [
      { key: 'Quality', value: 'Bold seeds, already cleaned & sorted, export grade' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['25kg bags', '50kg bags', 'Jumbo bags'],
    productBenefits: 'Export spice',
    healthBenefits: 'Digestion'
  },
  {
    id: 'oilseed-007',
    name: 'Fennel Seeds (Oil Seeds)',
    slug: generateSlug('Fennel Seeds Oil Seeds'),
    category: 'Oil Seeds',
    shortDesc: 'Green, aromatic fennel seeds, already cleaned & sorted, export grade, mouth freshener, gas relief',
    longDesc: 'Premium green fennel seeds with aromatic properties. Already cleaned and sorted to export grade. Used as mouth freshener and in various applications. Known for gas relief.',
    moq: '5 Metric Ton',
    hsCode: '09096120',
    specifications: [
      { key: 'Color', value: 'Green, aromatic' },
      { key: 'Quality', value: 'Already cleaned & sorted, export grade' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['25kg bags', '50kg bags', 'Jumbo bags'],
    productBenefits: 'Mouth freshener',
    healthBenefits: 'Gas relief'
  },
  {
    id: 'oilseed-008',
    name: 'Fenugreek Seeds (Oil Seeds)',
    slug: generateSlug('Fenugreek Seeds Oil Seeds'),
    category: 'Oil Seeds',
    shortDesc: 'Golden fenugreek seeds, already cleaned & sorted, export grade, for pickles, controls sugar',
    longDesc: 'Premium golden fenugreek seeds (methi). Already cleaned and sorted to export grade standards. Used in pickles and various culinary applications. Known for controlling blood sugar levels.',
    moq: '5 Metric Ton',
    hsCode: '09109912',
    specifications: [
      { key: 'Color', value: 'Golden' },
      { key: 'Quality', value: 'Already cleaned & sorted, export grade' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['25kg bags', '50kg bags', 'Jumbo bags'],
    productBenefits: 'Pickles',
    healthBenefits: 'Controls sugar'
  },
  {
    id: 'oilseed-009',
    name: 'Flax Seeds',
    slug: generateSlug('Flax Seeds'),
    category: 'Oil Seeds',
    shortDesc: 'Premium flax seeds, already cleaned & sorted, export grade, heart healthy',
    longDesc: 'Premium flax seeds. Already cleaned and sorted to export grade standards. Known for heart health benefits and rich in omega-3 fatty acids.',
    moq: '5 Metric Ton',
    hsCode: '12040090',
    specifications: [
      { key: 'Quality', value: 'Already cleaned & sorted, export grade' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['25kg bags', '50kg bags', 'Jumbo bags'],
    productBenefits: 'Heart healthy',
    healthBenefits: 'Heart healthy'
  },
  {
    id: 'oilseed-010',
    name: 'Niger Seeds',
    slug: generateSlug('Niger Seeds'),
    category: 'Oil Seeds',
    shortDesc: 'Premium niger seeds, already cleaned & sorted, export grade, healthy fats',
    longDesc: 'Premium niger seeds. Already cleaned and sorted to export grade standards. Rich in healthy fats and essential nutrients.',
    moq: '5 Metric Ton',
    hsCode: '12075010',
    specifications: [
      { key: 'Quality', value: 'Already cleaned & sorted, export grade' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['25kg bags', '50kg bags', 'Jumbo bags'],
    productBenefits: 'Healthy fats',
    healthBenefits: 'Healthy fats'
  },
  {
    id: 'oilseed-011',
    name: 'Dill Seeds',
    slug: generateSlug('Dill Seeds'),
    category: 'Oil Seeds',
    shortDesc: 'Premium dill seeds, already cleaned & sorted, export grade, supports digestion',
    longDesc: 'Premium dill seeds. Already cleaned and sorted to export grade standards. Known for supporting digestion and digestive health.',
    moq: '5 Metric Ton',
    hsCode: '09109913',
    specifications: [
      { key: 'Quality', value: 'Already cleaned & sorted, export grade' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['25kg bags', '50kg bags', 'Jumbo bags'],
    productBenefits: 'Digestion',
    healthBenefits: 'Digestion'
  },
  {
    id: 'oilseed-012',
    name: 'Onion Seeds',
    slug: generateSlug('Onion Seeds'),
    category: 'Oil Seeds',
    shortDesc: 'Premium onion seeds, already cleaned & sorted, export grade, boosts immunity',
    longDesc: 'Premium onion seeds. Already cleaned and sorted to export grade standards. Known for boosting immunity and overall health benefits.',
    moq: '5 Metric Ton',
    hsCode: '12099990',
    specifications: [
      { key: 'Quality', value: 'Already cleaned & sorted, export grade' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['25kg bags', '50kg bags', 'Jumbo bags'],
    productBenefits: 'Immunity',
    healthBenefits: 'Immunity'
  },

  // ========== HONEY PRODUCTS ==========
  {
    id: 'honey-001',
    name: 'Natural Honey',
    slug: generateSlug('Natural Honey'),
    category: 'Honey Products',
    shortDesc: 'Pure natural honey, boosts immunity and overall health',
    longDesc: 'Premium natural honey sourced from pristine environments. Pure and unprocessed, maintaining all natural enzymes and nutrients. Known for boosting immunity and providing natural energy.',
    moq: '5 Metric Ton',
    hsCode: '04090000',
    specifications: [
      { key: 'Type', value: 'Natural' },
      { key: 'Quality', value: 'Pure, unprocessed' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['500g jars', '1kg jars', 'Bulk containers'],
    productBenefits: 'Immunity',
    healthBenefits: 'Immunity'
  },
  {
    id: 'honey-002',
    name: 'Multiflora Honey',
    slug: generateSlug('Multiflora Honey'),
    category: 'Honey Products',
    shortDesc: 'Multiflora honey from diverse flowers, perfect for daily use',
    longDesc: 'Premium multiflora honey collected from diverse flowering plants. Rich in nutrients and flavors from multiple sources. Perfect for daily consumption and culinary use.',
    moq: '5 Metric Ton',
    hsCode: '04090000',
    specifications: [
      { key: 'Type', value: 'Multiflora' },
      { key: 'Source', value: 'Diverse flowers' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['500g jars', '1kg jars', 'Bulk containers'],
    productBenefits: 'Daily use',
    healthBenefits: 'Daily use'
  },
  {
    id: 'honey-003',
    name: 'Ajwain Honey',
    slug: generateSlug('Ajwain Honey'),
    category: 'Honey Products',
    shortDesc: 'Ajwain-infused honey, provides acidity relief and digestive support',
    longDesc: 'Premium honey infused with ajwain (carom seeds). Combines the natural benefits of honey with ajwain\'s digestive properties. Known for providing acidity relief and supporting digestive health.',
    moq: '5 Metric Ton',
    hsCode: '04090000',
    specifications: [
      { key: 'Type', value: 'Ajwain infused' },
      { key: 'Ingredients', value: 'Honey + Ajwain' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['500g jars', '1kg jars', 'Bulk containers'],
    productBenefits: 'Acidity relief',
    healthBenefits: 'Acidity relief'
  },
  {
    id: 'honey-004',
    name: 'Acacia Honey',
    slug: generateSlug('Acacia Honey'),
    category: 'Honey Products',
    shortDesc: 'Light and digestive acacia honey, gentle on stomach',
    longDesc: 'Premium acacia honey known for its light color and mild flavor. Easy to digest and gentle on the stomach. Perfect for those who prefer lighter honey varieties.',
    moq: '5 Metric Ton',
    hsCode: '04090000',
    specifications: [
      { key: 'Type', value: 'Acacia' },
      { key: 'Quality', value: 'Light & digestive' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['500g jars', '1kg jars', 'Bulk containers'],
    productBenefits: 'Light & digestive',
    healthBenefits: 'Light & digestive'
  },

  // ========== DAIRY PRODUCTS ==========
  {
    id: 'dairy-001',
    name: 'Skimmed Milk Powder',
    slug: generateSlug('Skimmed Milk Powder'),
    category: 'Dairy Products',
    shortDesc: 'Skimmed milk powder with 34% protein, supports weight loss',
    longDesc: 'Premium skimmed milk powder with high protein content of 34%. Low in fat, making it ideal for health-conscious consumers. Known for supporting weight loss and muscle maintenance.',
    moq: '5 Metric Ton',
    hsCode: '04021010',
    specifications: [
      { key: 'Protein', value: '34%' },
      { key: 'Type', value: 'Skimmed' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['25kg bags', '50kg bags', 'Bulk packing'],
    productBenefits: 'Weight loss',
    healthBenefits: 'Weight loss'
  },
  {
    id: 'dairy-002',
    name: 'Full Cream Milk Powder',
    slug: generateSlug('Full Cream Milk Powder'),
    category: 'Dairy Products',
    shortDesc: 'Full cream milk powder with 28% fat, supports bone strength',
    longDesc: 'Premium full cream milk powder with fat content of 28%. Rich in calcium and essential nutrients. Known for supporting bone strength and overall growth.',
    moq: '5 Metric Ton',
    hsCode: '04022100',
    specifications: [
      { key: 'Fat', value: '28%' },
      { key: 'Type', value: 'Full cream' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['25kg bags', '50kg bags', 'Bulk packing'],
    productBenefits: 'Bone strength',
    healthBenefits: 'Bone strength'
  },
  {
    id: 'dairy-003',
    name: 'Ghee',
    slug: generateSlug('Ghee'),
    category: 'Dairy Products',
    shortDesc: 'Pure cow ghee, supports digestion and overall health',
    longDesc: 'Premium pure cow ghee made from high-quality cow milk. Traditional preparation method ensures purity and rich flavor. Known for supporting digestion and providing essential fats.',
    moq: '5 Metric Ton',
    hsCode: '04059010',
    specifications: [
      { key: 'Type', value: 'Pure cow ghee' },
      { key: 'Quality', value: 'Premium' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['1kg tins', '5kg tins', '15kg tins', 'Bulk containers'],
    productBenefits: 'Digestion',
    healthBenefits: 'Digestion'
  },
  {
    id: 'dairy-004',
    name: 'Butter',
    slug: generateSlug('Butter'),
    category: 'Dairy Products',
    shortDesc: 'Premium butter available in salted and unsalted varieties, provides energy',
    longDesc: 'Premium butter made from fresh cream. Available in both salted and unsalted varieties to suit different culinary needs. Rich source of energy and essential fats.',
    moq: '5 Metric Ton',
    hsCode: '04051010',
    specifications: [
      { key: 'Varieties', value: 'Salted/unsalted' },
      { key: 'Quality', value: 'Premium' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['500g blocks', '1kg blocks', 'Bulk packing'],
    productBenefits: 'Energy',
    healthBenefits: 'Energy'
  },
  {
    id: 'dairy-005',
    name: 'Paneer',
    slug: generateSlug('Paneer'),
    category: 'Dairy Products',
    shortDesc: 'Fresh paneer, high protein for muscle building',
    longDesc: 'Premium fresh paneer (cottage cheese) made from high-quality milk. Rich in protein and calcium. Known for supporting muscle building and providing essential nutrients.',
    moq: '5 Metric Ton',
    hsCode: '04061010',
    specifications: [
      { key: 'Type', value: 'Fresh' },
      { key: 'Quality', value: 'Premium' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['1kg blocks', '5kg blocks', 'Bulk packing'],
    productBenefits: 'Muscle building',
    healthBenefits: 'Muscle building'
  },

  // ========== AYURVEDIC PRODUCTS ==========
  {
    id: 'ayurvedic-001',
    name: 'Ashwagandha Powder',
    slug: generateSlug('Ashwagandha Powder'),
    category: 'Ayurvedic Products',
    shortDesc: 'Premium ashwagandha powder for strength and stress relief',
    longDesc: 'Premium ashwagandha powder made from high-quality roots. Known as an adaptogen, it helps the body manage stress and provides strength. Traditional Ayurvedic herb with modern scientific backing.',
    moq: '5 Metric Ton',
    hsCode: '12119029',
    specifications: [
      { key: 'Form', value: 'Powder' },
      { key: 'Quality', value: 'Premium' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['25kg bags', '50kg bags', 'Jumbo bags'],
    productBenefits: 'Strength & stress relief',
    healthBenefits: 'Strength & stress relief'
  },
  {
    id: 'ayurvedic-002',
    name: 'Giloy Powder',
    slug: generateSlug('Giloy Powder'),
    category: 'Ayurvedic Products',
    shortDesc: 'Premium giloy powder, boosts immunity naturally',
    longDesc: 'Premium giloy powder (Tinospora cordifolia) known as the "root of immortality" in Ayurveda. Powerful immunity booster with anti-inflammatory properties. Traditional remedy for various health conditions.',
    moq: '5 Metric Ton',
    hsCode: '12119032',
    specifications: [
      { key: 'Form', value: 'Powder' },
      { key: 'Quality', value: 'Premium' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['25kg bags', '50kg bags', 'Jumbo bags'],
    productBenefits: 'Immunity',
    healthBenefits: 'Immunity'
  },
  {
    id: 'ayurvedic-003',
    name: 'Amla Powder',
    slug: generateSlug('Amla Powder'),
    category: 'Ayurvedic Products',
    shortDesc: 'Premium amla powder, benefits hair and skin health',
    longDesc: 'Premium amla (Indian gooseberry) powder, one of the richest sources of Vitamin C. Known for promoting hair growth, improving skin health, and boosting overall immunity. Traditional Ayurvedic superfood.',
    moq: '5 Metric Ton',
    hsCode: '12119029',
    specifications: [
      { key: 'Form', value: 'Powder' },
      { key: 'Quality', value: 'Premium' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['25kg bags', '50kg bags', 'Jumbo bags'],
    productBenefits: 'Hair & skin',
    healthBenefits: 'Hair & skin'
  },
  {
    id: 'ayurvedic-004',
    name: 'Neem Powder',
    slug: generateSlug('Neem Powder'),
    category: 'Ayurvedic Products',
    shortDesc: 'Premium neem powder, supports blood purification',
    longDesc: 'Premium neem powder made from neem leaves. Known for its blood purifying properties and antimicrobial benefits. Traditional Ayurvedic remedy for skin health and detoxification.',
    moq: '5 Metric Ton',
    hsCode: '12119032',
    specifications: [
      { key: 'Form', value: 'Powder' },
      { key: 'Quality', value: 'Premium' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['25kg bags', '50kg bags', 'Jumbo bags'],
    productBenefits: 'Blood purification',
    healthBenefits: 'Blood purification'
  },
  {
    id: 'ayurvedic-005',
    name: 'Curcumin 95% Extract',
    slug: generateSlug('Curcumin 95 Extract'),
    category: 'Ayurvedic Products',
    shortDesc: 'High-purity curcumin 95% extract, powerful anti-inflammatory',
    longDesc: 'Premium curcumin extract with 95% purity, the active compound in turmeric. Highly concentrated for maximum efficacy. Known for powerful anti-inflammatory and antioxidant properties.',
    moq: '5 Metric Ton',
    hsCode: '33019049',
    specifications: [
      { key: 'Purity', value: '95%' },
      { key: 'Form', value: 'Extract' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['25kg bags', '50kg bags', 'Jumbo bags'],
    productBenefits: 'Anti-inflammatory',
    healthBenefits: 'Anti-inflammatory'
  },
  {
    id: 'ayurvedic-006',
    name: 'Triphala Powder',
    slug: generateSlug('Triphala Powder'),
    category: 'Ayurvedic Products',
    shortDesc: 'Traditional triphala powder, supports digestion and detoxification',
    longDesc: 'Premium triphala powder, a traditional Ayurvedic blend of three fruits (amla, haritaki, bibhitaki). Known for supporting digestion, detoxification, and overall gut health. Time-tested remedy.',
    moq: '5 Metric Ton',
    hsCode: '12119029',
    specifications: [
      { key: 'Form', value: 'Powder' },
      { key: 'Composition', value: 'Three fruit blend' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['25kg bags', '50kg bags', 'Jumbo bags'],
    productBenefits: 'Digestion',
    healthBenefits: 'Digestion'
  },
  {
    id: 'ayurvedic-007',
    name: 'Shatavari Powder',
    slug: generateSlug('Shatavari Powder'),
    category: 'Ayurvedic Products',
    shortDesc: 'Premium shatavari powder, supports women\'s wellness',
    longDesc: 'Premium shatavari powder (Asparagus racemosus), known as the "queen of herbs" for women. Supports hormonal balance, reproductive health, and overall women\'s wellness. Traditional Ayurvedic remedy.',
    moq: '5 Metric Ton',
    hsCode: '12119044',
    specifications: [
      { key: 'Form', value: 'Powder' },
      { key: 'Quality', value: 'Premium' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['25kg bags', '50kg bags', 'Jumbo bags'],
    productBenefits: 'Women wellness',
    healthBenefits: 'Women wellness'
  },
  {
    id: 'ayurvedic-008',
    name: 'Moringa Powder',
    slug: generateSlug('Moringa Powder'),
    category: 'Ayurvedic Products',
    shortDesc: 'Premium moringa powder, provides energy and bone strength',
    longDesc: 'Premium moringa powder made from moringa leaves, known as the "miracle tree". Rich in vitamins, minerals, and protein. Known for providing energy, supporting bone strength, and overall nutrition.',
    moq: '5 Metric Ton',
    hsCode: '07129090',
    specifications: [
      { key: 'Form', value: 'Powder' },
      { key: 'Quality', value: 'Premium' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['25kg bags', '50kg bags', 'Jumbo bags'],
    productBenefits: 'Energy & bone strength',
    healthBenefits: 'Energy & bone strength'
  },

  // ========== DEHYDRATED PRODUCTS ==========
  {
    id: 'dehydrated-001',
    name: 'Dehydrated Onion (Flakes / Powder / Minced)',
    slug: generateSlug('Dehydrated Onion Flakes Powder Minced'),
    category: 'Dehydrated Products',
    shortDesc: 'Dehydrated onion in flakes, powder, and minced forms, moisture <5-6%, long shelf life',
    longDesc: 'Premium dehydrated onion available in flakes, powder, and minced forms. Moisture content below 5-6% ensuring long shelf life. Maintains the nutritional benefits and flavor of fresh onions. Perfect for food processing and export.',
    moq: '5 Metric Ton',
    hsCode: '07122000 / 07129030',
    specifications: [
      { key: 'Moisture', value: '<5–6%' },
      { key: 'Forms', value: 'Flakes / Powder / Minced' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['25kg bags', '50kg bags', 'Jumbo bags'],
    productBenefits: 'Long shelf life',
    healthBenefits: 'Same as fresh'
  },
  {
    id: 'dehydrated-002',
    name: 'Dehydrated Garlic (Flakes / Granules / Powder)',
    slug: generateSlug('Dehydrated Garlic Flakes Granules Powder'),
    category: 'Dehydrated Products',
    shortDesc: 'Dehydrated garlic in flakes, granules, and powder forms, strong flavor, heart support',
    longDesc: 'Premium dehydrated garlic available in flakes, granules, and powder forms. Maintains strong flavor and aroma. Known for heart support and maintaining the health benefits of fresh garlic. Ideal for food processing and culinary use.',
    moq: '5 Metric Ton',
    hsCode: '07129040',
    specifications: [
      { key: 'Forms', value: 'Flakes / Granules / Powder' },
      { key: 'Quality', value: 'Strong flavour' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['25kg bags', '50kg bags', 'Jumbo bags'],
    productBenefits: 'Strong flavour',
    healthBenefits: 'Heart support'
  },
  {
    id: 'dehydrated-003',
    name: 'Dehydrated Vegetable Powders (Tomato / Beetroot / Carrot / Spinach)',
    slug: generateSlug('Dehydrated Vegetable Powders'),
    category: 'Dehydrated Products',
    shortDesc: 'Dehydrated vegetable powders in tomato, beetroot, carrot, and spinach varieties, natural color, vitamin rich',
    longDesc: 'Premium dehydrated vegetable powders available in tomato, beetroot, carrot, and spinach varieties. Used as natural colorants and flavor enhancers. Rich in vitamins and minerals. Perfect for food processing, beverages, and health products.',
    moq: '5 Metric Ton',
    hsCode: '07129090',
    specifications: [
      { key: 'Varieties', value: 'Tomato / Beetroot / Carrot / Spinach' },
      { key: 'Form', value: 'Powder' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['25kg bags', '50kg bags', 'Jumbo bags'],
    productBenefits: 'Natural colour',
    healthBenefits: 'Vitamin rich'
  },
  {
    id: 'dehydrated-004',
    name: 'Dehydrated Fruit Powders (Mango / Banana / Papaya / Pineapple)',
    slug: generateSlug('Dehydrated Fruit Powders'),
    category: 'Dehydrated Products',
    shortDesc: 'Dehydrated fruit powders in mango, banana, papaya, and pineapple varieties, instant energy, fibre and vitamins',
    longDesc: 'Premium dehydrated fruit powders available in mango, banana, papaya, and pineapple varieties. Provides instant energy and maintains natural fruit flavors. Rich in dietary fibre and vitamins. Perfect for beverages, smoothies, and food processing.',
    moq: '5 Metric Ton',
    hsCode: '08139090',
    specifications: [
      { key: 'Varieties', value: 'Mango / Banana / Papaya / Pineapple' },
      { key: 'Form', value: 'Powder' }
    ],
    grade: ['Export Grade', 'Premium'],
    packaging: ['25kg bags', '50kg bags', 'Jumbo bags'],
    productBenefits: 'Instant energy',
    healthBenefits: 'Fibre + vitamins'
  }
]

const productImages = {
  'veg-001': [buildImagePath('vegetables/onion.jpeg')],
  'veg-002': [buildImagePath('vegetables/garlic.jpeg')],
  'veg-003': [buildImagePath('vegetables/potato.jpeg')],
  'veg-004': [buildImagePath('vegetables/tomato.jpeg')],
  'veg-005': [buildImagePath('vegetables/green chillies.jpeg')],
  'veg-006': [buildImagePath('vegetables/lemon.jpeg')],
  'veg-007': [buildImagePath('vegetables/ginger.jpeg')],
  'veg-008': [buildImagePath('vegetables/drumstick.jpeg')],
  'veg-009': [buildImagePath('vegetables/green peas.jpeg')],
  'veg-010': [buildImagePath('vegetables/brinjal.jpeg')],
  'fruit-001': [buildImagePath('fresh fruits/pineapple.jpeg')],
  'fruit-002': [buildImagePath('fresh fruits/watermelon.jpeg')],
  'fruit-003': [buildImagePath('fresh fruits/banana.jpeg')],
  'fruit-004': [buildImagePath('fresh fruits/grapes.jpeg')],
  'fruit-005': [buildImagePath('fresh fruits/Pomegranate.jpeg')],
  'fruit-006': [buildImagePath('fresh fruits/papaya.jpeg')],
  'fruit-007': [buildImagePath('fresh fruits/mango.jpeg')],
  'spice-001': [buildImagePath('spices/Turmeric.jpeg')],
  'spice-002': [buildImagePath('spices/Cumin Seeds (Jeera).webp')],
  'spice-003': [buildImagePath('spices/red chillies.jpeg')],
  'spice-004': [buildImagePath('spices/corinder seed.jpeg')],
  'spice-005': [buildImagePath('spices/fennel.jpeg')],
  'spice-006': [buildImagePath('spices/fenugreekseed.jpeg')],
  'spice-007': [buildImagePath('spices/black pepper.jpeg')],
  'spice-008': [buildImagePath('spices/Green Cardamom.jpeg')],
  'spice-009': [buildImagePath('spices/Cloves.jpeg')],
  'spice-010': [buildImagePath('spices/Mustard Seeds (Black).jpg')],
  'grain-001': [buildImagePath('Grains/Rice.jpeg')],
  'grain-002': [buildImagePath('Grains/Wheat.jpeg')],
  'grain-003': [buildImagePath('Grains/Maize.jpeg')],
  'grain-004': [buildImagePath('Grains/Millet.jpeg')],
  'grain-005': [buildImagePath('Grains/Bajra.jpeg')],
  'pulse-001': [buildImagePath('Pulses/Chickpeas (Kabuli).jpg')],
  'pulse-002': [buildImagePath('Pulses/Toor Dal.jpg')],
  'pulse-003': [buildImagePath('Pulses/Moong Dal.webp')],
  'pulse-004': [buildImagePath('Pulses/Masoor Dal.webp')],
  'pulse-005': [buildImagePath('Pulses/Urad Dal (Black Gram).jpg')],
  'pulse-006': [buildImagePath('Pulses/Green Peas (Dried).jpg')],
  'oilseed-001': [buildImagePath('Oil seeds/sesame seeds.jpg')],
  'oilseed-002': [buildImagePath('Oil seeds/Groundnut.jpeg.jpg')],
  'oilseed-003': [buildImagePath('Oil seeds/Castor Seeds.jpeg')],
  'oilseed-004': [buildImagePath('Oil seeds/Mustard Seeds.jpg')],
  'oilseed-005': [buildImagePath('Oil seeds/Ajwain Seeds.jpeg')],
  'oilseed-006': [buildImagePath('Oil seeds/Cumin Seeds.jpg')],
  'oilseed-007': [buildImagePath('Oil seeds/Fennel Seeds.jpg')],
  'oilseed-008': [buildImagePath('Oil seeds/Fenugreek seeds.jpg')],
  'oilseed-009': [buildImagePath('Oil seeds/Flax Seeds.jpeg')],
  'oilseed-010': [buildImagePath('Oil seeds/niger seeds.png')],
  'oilseed-011': [buildImagePath('Oil seeds/Dill Seeds.jpeg')],
  'oilseed-012': [buildImagePath('Oil seeds/Onion Seeds.jpeg')],
  'honey-001': [buildImagePath('Honey Products/Natural Honey.jpg')],
  'honey-002': [buildImagePath('Honey Products/Multiflora Honey.webp')],
  'honey-003': [buildImagePath('Honey Products/ajwain honey.png')],
  'honey-004': [buildImagePath('Honey Products/Acacia Honey.webp')],
  'dairy-001': [buildImagePath('Dairy Products/Skimmed Milk Powder.jpg')],
  'dairy-002': [buildImagePath('Dairy Products/Full Cream Milk Powder.jpg')],
  'dairy-003': [buildImagePath('Dairy Products/Ghee.webp')],
  'dairy-004': [buildImagePath('Dairy Products/Butter.jpg')],
  'dairy-005': [buildImagePath('Dairy Products/Paneer.jpg')],
  'ayurvedic-001': [buildImagePath('AYURVEDIC PRODUCTS/ashwagandha powder.png')],
  'ayurvedic-002': [buildImagePath('AYURVEDIC PRODUCTS/giloy powder.png')],
  'ayurvedic-003': [buildImagePath('AYURVEDIC PRODUCTS/Amla Powder.png')],
  'ayurvedic-004': [buildImagePath('AYURVEDIC PRODUCTS/Neem Powder.png')],
  'ayurvedic-005': [buildImagePath('AYURVEDIC PRODUCTS/cuecumin 95% extract.png')],
  'ayurvedic-006': [buildImagePath('AYURVEDIC PRODUCTS/triphala powder.png')],
  'ayurvedic-007': [buildImagePath('AYURVEDIC PRODUCTS/shatavari powder.png')],
  'ayurvedic-008': [buildImagePath('AYURVEDIC PRODUCTS/moringa powder.png')],
  'dehydrated-001': [buildImagePath('DEHYDRATED PRODUCTS/Dehydrated Onion.png')],
  'dehydrated-002': [buildImagePath('DEHYDRATED PRODUCTS/Dehydrated Garlic.png')],
  'dehydrated-003': [buildImagePath('DEHYDRATED PRODUCTS/Dehydrated Vegetable Powders.png')],
  'dehydrated-004': [buildImagePath('DEHYDRATED PRODUCTS/Dehydrated Fruit Powders.png')],
}

products.forEach(product => {
  if (productImages[product.id]) {
    product.images = productImages[product.id]
  }
})

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
