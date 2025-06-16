export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  images: string[];
  rating: number;
  reviews: number;
  discount: number;
  category: string;
  brand: string;
  description: string;
  features: string[];
  specifications: Record<string, string>;
  inStock: boolean;
  stockCount: number;
  tags: string[];
  isNew?: boolean;
  isBestseller?: boolean;
  isFeatured?: boolean;
}

export const products: Product[] = [
  // Electronics
  {
    id: '1',
    name: 'iPhone 15 Pro Max',
    price: 134900,
    originalPrice: 159900,
    image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1542252/pexels-photo-1542252.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    rating: 4.8,
    reviews: 2847,
    discount: 16,
    category: 'electronics',
    brand: 'Apple',
    description: 'The most advanced iPhone ever with titanium design, A17 Pro chip, and revolutionary camera system.',
    features: [
      '6.7" Super Retina XDR Display',
      'A17 Pro Chip with 6-core GPU',
      'Pro Camera System (48MP)',
      '256GB Storage',
      '5G Connectivity',
      'Face ID',
      'MagSafe Wireless Charging',
      'IP68 Water Resistance'
    ],
    specifications: {
      'Display': '6.7" Super Retina XDR',
      'Processor': 'A17 Pro Chip',
      'Storage': '256GB',
      'RAM': '8GB',
      'Camera': '48MP Pro Camera System',
      'Battery': '4441mAh',
      'OS': 'iOS 17',
      'Warranty': '1 Year Apple Care'
    },
    inStock: true,
    stockCount: 25,
    tags: ['smartphone', 'apple', 'premium', '5g'],
    isNew: true,
    isFeatured: true
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24 Ultra',
    price: 124999,
    originalPrice: 149999,
    image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3178744/pexels-photo-3178744.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    rating: 4.7,
    reviews: 1923,
    discount: 17,
    category: 'electronics',
    brand: 'Samsung',
    description: 'Ultimate Android flagship with S Pen, 200MP camera, and AI-powered features.',
    features: [
      '6.8" Dynamic AMOLED 2X',
      'Snapdragon 8 Gen 3',
      '200MP Quad Camera',
      '512GB Storage',
      'S Pen Included',
      'AI Photo Editing',
      '45W Fast Charging',
      'IP68 Rating'
    ],
    specifications: {
      'Display': '6.8" Dynamic AMOLED 2X',
      'Processor': 'Snapdragon 8 Gen 3',
      'Storage': '512GB',
      'RAM': '12GB',
      'Camera': '200MP Quad Camera',
      'Battery': '5000mAh',
      'OS': 'Android 14',
      'Warranty': '1 Year Samsung Care+'
    },
    inStock: true,
    stockCount: 18,
    tags: ['smartphone', 'samsung', 'android', 's-pen'],
    isBestseller: true
  },
  {
    id: '3',
    name: 'MacBook Pro 16" M3 Max',
    price: 399900,
    originalPrice: 449900,
    image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    rating: 4.9,
    reviews: 1456,
    discount: 11,
    category: 'electronics',
    brand: 'Apple',
    description: 'Professional laptop with M3 Max chip for ultimate performance and creativity.',
    features: [
      '16.2" Liquid Retina XDR',
      'M3 Max Chip',
      '1TB SSD Storage',
      '36GB Unified Memory',
      '12-core CPU, 40-core GPU',
      'ProRes Video Engine',
      '22-hour Battery Life',
      'Thunderbolt 4 Ports'
    ],
    specifications: {
      'Display': '16.2" Liquid Retina XDR',
      'Processor': 'Apple M3 Max',
      'Storage': '1TB SSD',
      'RAM': '36GB Unified Memory',
      'Graphics': '40-core GPU',
      'Battery': '100Wh',
      'OS': 'macOS Sonoma',
      'Warranty': '1 Year AppleCare'
    },
    inStock: true,
    stockCount: 8,
    tags: ['laptop', 'apple', 'professional', 'm3'],
    isFeatured: true
  },
  {
    id: '4',
    name: 'Sony WH-1000XM5 Headphones',
    price: 29990,
    originalPrice: 34990,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    rating: 4.6,
    reviews: 3421,
    discount: 14,
    category: 'electronics',
    brand: 'Sony',
    description: 'Industry-leading noise canceling headphones with exceptional sound quality.',
    features: [
      'Industry-leading Noise Canceling',
      '30-hour Battery Life',
      'Quick Charge (3min = 3hrs)',
      'Multipoint Connection',
      'Speak-to-Chat Technology',
      'Premium Comfort',
      'LDAC Audio Codec',
      'Touch Sensor Controls'
    ],
    specifications: {
      'Driver': '30mm Dynamic',
      'Frequency Response': '4Hz-40kHz',
      'Battery Life': '30 hours (NC ON)',
      'Charging': 'USB-C Quick Charge',
      'Weight': '250g',
      'Connectivity': 'Bluetooth 5.2',
      'Codecs': 'LDAC, AAC, SBC',
      'Warranty': '1 Year International'
    },
    inStock: true,
    stockCount: 45,
    tags: ['headphones', 'sony', 'noise-canceling', 'wireless'],
    isBestseller: true
  },
  {
    id: '5',
    name: 'iPad Pro 12.9" M2',
    price: 112900,
    originalPrice: 129900,
    image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1334598/pexels-photo-1334598.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    rating: 4.8,
    reviews: 987,
    discount: 13,
    category: 'electronics',
    brand: 'Apple',
    description: 'Ultimate iPad experience with M2 chip and Liquid Retina XDR display.',
    features: [
      '12.9" Liquid Retina XDR',
      'M2 Chip Performance',
      '256GB Storage',
      'Apple Pencil Support',
      'Face ID',
      'USB-C with Thunderbolt',
      '10-hour Battery Life',
      'ProRes Video Recording'
    ],
    specifications: {
      'Display': '12.9" Liquid Retina XDR',
      'Processor': 'Apple M2',
      'Storage': '256GB',
      'RAM': '8GB',
      'Camera': '12MP Wide + 10MP Ultra Wide',
      'Battery': '10 hours',
      'OS': 'iPadOS 17',
      'Warranty': '1 Year Limited'
    },
    inStock: true,
    stockCount: 22,
    tags: ['tablet', 'apple', 'ipad', 'm2'],
    isNew: true
  },

  // Fashion
  {
    id: '6',
    name: 'Nike Air Jordan 1 Retro High',
    price: 12995,
    originalPrice: 16995,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    rating: 4.7,
    reviews: 2156,
    discount: 24,
    category: 'fashion',
    brand: 'Nike',
    description: 'Iconic basketball sneaker with premium leather and classic colorway.',
    features: [
      'Premium Leather Upper',
      'Air-Sole Unit Cushioning',
      'Rubber Outsole',
      'Classic High-Top Design',
      'Iconic Wings Logo',
      'Multiple Colorways',
      'Durable Construction',
      'Timeless Style'
    ],
    specifications: {
      'Material': 'Premium Leather',
      'Sole': 'Rubber Outsole',
      'Closure': 'Lace-up',
      'Heel Height': 'Flat',
      'Sizes': 'UK 6-12',
      'Colors': 'Multiple Options',
      'Care': 'Spot Clean',
      'Warranty': '6 Months'
    },
    inStock: true,
    stockCount: 67,
    tags: ['sneakers', 'nike', 'jordan', 'basketball'],
    isBestseller: true
  },
  {
    id: '7',
    name: 'Levi\'s 501 Original Jeans',
    price: 3999,
    originalPrice: 5999,
    image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    rating: 4.5,
    reviews: 1834,
    discount: 33,
    category: 'fashion',
    brand: 'Levi\'s',
    description: 'The original blue jean with authentic fit and timeless style.',
    features: [
      '100% Cotton Denim',
      'Button Fly',
      'Straight Leg Fit',
      'Classic 5-Pocket Design',
      'Shrink-to-Fit',
      'Red Tab Detail',
      'Authentic Vintage Look',
      'Multiple Washes Available'
    ],
    specifications: {
      'Material': '100% Cotton',
      'Fit': 'Straight Leg',
      'Rise': 'Mid Rise',
      'Closure': 'Button Fly',
      'Sizes': '28-42 Waist',
      'Length': '30", 32", 34"',
      'Care': 'Machine Wash Cold',
      'Origin': 'Made in USA'
    },
    inStock: true,
    stockCount: 89,
    tags: ['jeans', 'levis', 'denim', 'classic'],
    isFeatured: true
  },
  {
    id: '8',
    name: 'Ray-Ban Aviator Classic',
    price: 8999,
    originalPrice: 12999,
    image: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    rating: 4.6,
    reviews: 1267,
    discount: 31,
    category: 'fashion',
    brand: 'Ray-Ban',
    description: 'Iconic aviator sunglasses with crystal lenses and gold frame.',
    features: [
      'Crystal Lens Technology',
      'Gold Metal Frame',
      'Adjustable Nose Pads',
      '100% UV Protection',
      'Scratch Resistant',
      'Classic Aviator Shape',
      'Lightweight Design',
      'Includes Case & Cloth'
    ],
    specifications: {
      'Lens Material': 'Crystal Glass',
      'Frame Material': 'Metal',
      'UV Protection': '100% UV400',
      'Lens Width': '58mm',
      'Bridge Width': '14mm',
      'Temple Length': '135mm',
      'Weight': '31g',
      'Warranty': '2 Years'
    },
    inStock: true,
    stockCount: 34,
    tags: ['sunglasses', 'rayban', 'aviator', 'classic'],
    isBestseller: true
  },

  // Home & Kitchen
  {
    id: '9',
    name: 'Dyson V15 Detect Absolute',
    price: 65900,
    originalPrice: 75900,
    image: 'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4239092/pexels-photo-4239092.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    rating: 4.8,
    reviews: 756,
    discount: 13,
    category: 'home',
    brand: 'Dyson',
    description: 'Most powerful cordless vacuum with laser dust detection technology.',
    features: [
      'Laser Dust Detection',
      'Hyperdymium Motor',
      '60 Minutes Runtime',
      'Advanced Filtration',
      'LCD Screen Display',
      '5 Cleaning Modes',
      'Converts to Handheld',
      'Wall-Mounted Dock'
    ],
    specifications: {
      'Motor': 'Hyperdymium Motor',
      'Suction Power': '230 AW',
      'Runtime': 'Up to 60 minutes',
      'Charge Time': '4.5 hours',
      'Bin Capacity': '0.77L',
      'Weight': '3.0kg',
      'Filtration': 'Advanced HEPA',
      'Warranty': '2 Years'
    },
    inStock: true,
    stockCount: 15,
    tags: ['vacuum', 'dyson', 'cordless', 'laser'],
    isNew: true
  },
  {
    id: '10',
    name: 'KitchenAid Stand Mixer',
    price: 45999,
    originalPrice: 54999,
    image: 'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4226797/pexels-photo-4226797.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    rating: 4.9,
    reviews: 1123,
    discount: 16,
    category: 'home',
    brand: 'KitchenAid',
    description: 'Professional stand mixer for all your baking and cooking needs.',
    features: [
      '5.7L Stainless Steel Bowl',
      '10-Speed Control',
      'Tilt-Head Design',
      'Planetary Mixing Action',
      'Multiple Attachments',
      'Durable Metal Construction',
      'Hub for Attachments',
      'Multiple Colors Available'
    ],
    specifications: {
      'Capacity': '5.7 Liters',
      'Speeds': '10 Speed Settings',
      'Motor': '325 Watts',
      'Material': 'Die-Cast Metal',
      'Bowl': 'Stainless Steel',
      'Dimensions': '37 x 22 x 35 cm',
      'Weight': '11.1 kg',
      'Warranty': '1 Year'
    },
    inStock: true,
    stockCount: 28,
    tags: ['mixer', 'kitchenaid', 'baking', 'professional'],
    isFeatured: true
  },

  // Sports & Fitness
  {
    id: '11',
    name: 'Peloton Bike+',
    price: 199900,
    originalPrice: 249900,
    image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4162450/pexels-photo-4162450.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    rating: 4.7,
    reviews: 892,
    discount: 20,
    category: 'sports',
    brand: 'Peloton',
    description: 'Premium indoor cycling bike with live and on-demand classes.',
    features: [
      '23.8" HD Touchscreen',
      'Auto-Follow Resistance',
      'Live & On-Demand Classes',
      'Magnetic Resistance',
      'Built-in Speakers',
      'Heart Rate Monitor',
      'Adjustable Seat & Handlebars',
      'Compact Design'
    ],
    specifications: {
      'Screen': '23.8" HD Touchscreen',
      'Resistance': 'Magnetic',
      'Dimensions': '135 x 59 x 125 cm',
      'Weight': '63.5 kg',
      'Max User Weight': '135 kg',
      'Connectivity': 'Wi-Fi, Bluetooth',
      'Subscription': 'Required',
      'Warranty': '1 Year'
    },
    inStock: true,
    stockCount: 12,
    tags: ['exercise-bike', 'peloton', 'fitness', 'indoor-cycling'],
    isNew: true
  },
  {
    id: '12',
    name: 'Adidas Ultraboost 22',
    price: 16999,
    originalPrice: 19999,
    image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1464626/pexels-photo-1464626.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    rating: 4.6,
    reviews: 1567,
    discount: 15,
    category: 'sports',
    brand: 'Adidas',
    description: 'Premium running shoes with responsive BOOST midsole technology.',
    features: [
      'BOOST Midsole',
      'Primeknit Upper',
      'Continental Rubber Outsole',
      'Torsion System',
      'Sock-like Fit',
      'Energy Return',
      'Durable Construction',
      'Multiple Colorways'
    ],
    specifications: {
      'Upper': 'Primeknit',
      'Midsole': 'BOOST',
      'Outsole': 'Continental Rubber',
      'Drop': '10mm',
      'Weight': '310g (Size 9)',
      'Sizes': 'UK 6-13',
      'Width': 'Regular',
      'Warranty': '6 Months'
    },
    inStock: true,
    stockCount: 78,
    tags: ['running-shoes', 'adidas', 'boost', 'primeknit'],
    isBestseller: true
  },

  // Books
  {
    id: '13',
    name: 'The Psychology of Money',
    price: 399,
    originalPrice: 599,
    image: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1029142/pexels-photo-1029142.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    rating: 4.8,
    reviews: 3456,
    discount: 33,
    category: 'books',
    brand: 'Jaico Publishing',
    description: 'Timeless lessons on wealth, greed, and happiness by Morgan Housel.',
    features: [
      '252 Pages',
      'Paperback Edition',
      'English Language',
      'Personal Finance',
      'Behavioral Economics',
      'Real-world Examples',
      'Easy to Understand',
      'Bestselling Author'
    ],
    specifications: {
      'Author': 'Morgan Housel',
      'Publisher': 'Jaico Publishing',
      'Language': 'English',
      'Pages': '252',
      'Format': 'Paperback',
      'ISBN': '9788194790624',
      'Dimensions': '19.8 x 12.9 cm',
      'Weight': '280g'
    },
    inStock: true,
    stockCount: 156,
    tags: ['book', 'finance', 'psychology', 'bestseller'],
    isBestseller: true
  },
  {
    id: '14',
    name: 'Atomic Habits',
    price: 449,
    originalPrice: 699,
    image: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    rating: 4.9,
    reviews: 4123,
    discount: 36,
    category: 'books',
    brand: 'Random House',
    description: 'An easy & proven way to build good habits & break bad ones by James Clear.',
    features: [
      '320 Pages',
      'Hardcover Edition',
      'Self-Help Category',
      'Practical Strategies',
      'Scientific Research',
      'Real-life Examples',
      'Step-by-step Guide',
      'International Bestseller'
    ],
    specifications: {
      'Author': 'James Clear',
      'Publisher': 'Random House',
      'Language': 'English',
      'Pages': '320',
      'Format': 'Hardcover',
      'ISBN': '9780735211292',
      'Dimensions': '21.6 x 14.6 cm',
      'Weight': '450g'
    },
    inStock: true,
    stockCount: 234,
    tags: ['book', 'self-help', 'habits', 'productivity'],
    isFeatured: true
  },

  // Beauty & Personal Care
  {
    id: '15',
    name: 'The Ordinary Niacinamide 10% + Zinc 1%',
    price: 899,
    originalPrice: 1299,
    image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3685531/pexels-photo-3685531.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    rating: 4.5,
    reviews: 2789,
    discount: 31,
    category: 'beauty',
    brand: 'The Ordinary',
    description: 'High-strength vitamin and mineral blemish formula for clearer skin.',
    features: [
      '10% Niacinamide',
      '1% Zinc PCA',
      'Reduces Blemishes',
      'Controls Oil Production',
      'Minimizes Pores',
      'Suitable for All Skin Types',
      'Cruelty-Free',
      'Vegan Formula'
    ],
    specifications: {
      'Volume': '30ml',
      'Key Ingredients': 'Niacinamide, Zinc PCA',
      'Skin Type': 'All Skin Types',
      'Application': 'AM/PM',
      'pH Level': '5.5-6.5',
      'Shelf Life': '12 months',
      'Origin': 'Canada',
      'Certification': 'Cruelty-Free'
    },
    inStock: true,
    stockCount: 89,
    tags: ['skincare', 'serum', 'niacinamide', 'the-ordinary'],
    isBestseller: true
  },
  {
    id: '16',
    name: 'Dyson Airwrap Complete',
    price: 45900,
    originalPrice: 52900,
    image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3993450/pexels-photo-3993450.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    rating: 4.7,
    reviews: 1234,
    discount: 13,
    category: 'beauty',
    brand: 'Dyson',
    description: 'Multi-styler that curls, waves, smooths, and dries with no extreme heat.',
    features: [
      'Coanda Air Styling',
      'No Extreme Heat Damage',
      'Multiple Attachments',
      'Intelligent Heat Control',
      'Fast Drying',
      'Smooth & Shiny Finish',
      'Easy to Use',
      'Professional Results'
    ],
    specifications: {
      'Motor': 'Digital Motor V9',
      'Heat Settings': '3 Heat + Cold',
      'Speed Settings': '3 Speed',
      'Attachments': '8 Styling Attachments',
      'Cord Length': '2.62m',
      'Weight': '694g',
      'Power': '1300W',
      'Warranty': '2 Years'
    },
    inStock: true,
    stockCount: 23,
    tags: ['hair-styler', 'dyson', 'airwrap', 'beauty-tool'],
    isNew: true,
    isFeatured: true
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.isFeatured);
};

export const getBestsellerProducts = (): Product[] => {
  return products.filter(product => product.isBestseller);
};

export const getNewProducts = (): Product[] => {
  return products.filter(product => product.isNew);
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product =>
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.brand.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};